/*
  /api/facebook: returns the latest public posts from the LAWS Facebook Page.

  Needs two environment variables in Vercel (Project > Settings > Environment Variables):
    FB_PAGE_ID     the numeric ID of the LAWS Facebook Page
    FB_PAGE_TOKEN  a long-lived Page access token (see README, "Facebook feed")
  Optional:
    FB_API_VERSION Graph API version, default v21.0

  The site never breaks if this fails: the browser falls back to the photo grid.
  Open /api/facebook in a browser to see the current status ("error" explains why it failed).
  The access token is never sent to the browser.
*/
let lastGood = null; // last successful result, kept while this server instance stays warm

function clean(post) {
  const img = post.full_picture;
  if (!img) return null;
  let text = (post.message || "").replace(/\s+/g, " ").trim();
  if (text.length > 220) { var cut = text.slice(0, 217), sp = cut.replace(/\s+\S*$/, ""); text = (sp.length > 100 ? sp : cut) + "..."; }
  return { id: post.id, text: text, date: post.created_time, url: post.permalink_url, img: img };
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const id = process.env.FB_PAGE_ID, token = process.env.FB_PAGE_TOKEN;
  const ver = process.env.FB_API_VERSION || "v21.0";

  if (!id || !token) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ ok: false, error: "not_configured", posts: [] });
  }

  try {
    const url = "https://graph.facebook.com/" + ver + "/" + encodeURIComponent(id) +
      "/published_posts?fields=id,message,created_time,permalink_url,full_picture&limit=20&access_token=" + encodeURIComponent(token);
    const ctl = new AbortController();
    const timer = setTimeout(function () { ctl.abort(); }, 6000);
    const r = await fetch(url, { signal: ctl.signal });
    clearTimeout(timer);
    const data = await r.json();

    if (!r.ok || data.error) {
      const code = data.error && data.error.code;
      const reason = code === 190 ? "token_invalid" : code === 10 || code === 200 ? "permission_missing" : "facebook_error_" + (code || r.status);
      throw new Error(reason);
    }

    const posts = (data.data || []).map(clean).filter(Boolean).slice(0, 9);
    lastGood = { ok: true, posts: posts, fetchedAt: new Date().toISOString() };
    // CDN keeps it fresh for 10 minutes and may serve it up to a day while refreshing
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=86400");
    return res.status(200).json(lastGood);
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    const reason = /^[a-z_0-9]+$/.test(e.message) ? e.message : "fetch_failed";
    if (lastGood) return res.status(200).json(Object.assign({}, lastGood, { stale: true, error: reason }));
    return res.status(200).json({ ok: false, error: reason, posts: [] });
  }
};
