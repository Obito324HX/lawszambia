# LAWS website (demo build)

Plain HTML, CSS and JavaScript. No build step. Deploys as-is.

## Run locally
    python3 -m http.server 8000
then open http://localhost:8000 (the animal pages need a server, not a double-click).

## Deploy
1. Push this folder to a GitHub repository.
2. In Vercel: Add New Project, import the repo, Framework Preset "Other", no build command, output directory left empty.
3. Add the lawszambia.com domain in Vercel and update DNS (needs access to wherever the domain is managed).

## Add or edit an animal
Everything lives in `js/data.js`. To add an animal, copy one object in `animals`, give it a new unique `id`, and fill in the fields. The adoption grid, profile page, rescue stories and homepage update automatically. Put several images in `photos` to get the gallery. Set `status: "adopted"` to remove an animal from the adoption list.

## Before launch
- Replace everything marked "Sample content" (success stories, before/after, team) with real material from LAWS, and delete `demo: true`.
- Add real impact figures to `stats` in `data.js` (the sections hide while it is empty).
- The contact form opens the visitor's email app. For a real form, connect Formspree or similar.
- Confirm the GoFundMe link, bank details and mobile money numbers with LAWS.
- Confirm the Facebook page address and that LAWS is happy for its feed to show on the site.

## Facebook feed (live posts on the home page)

The "Latest from the shelter" section shows the latest Facebook posts in the site's own style. It
calls `/api/facebook` (a Vercel function in `api/facebook.js`). Until it is connected, or if it ever
fails, the section shows the photo grid from `js/data.js` (`shelter`), so the page never looks broken.

To connect it:
1. Create an app at developers.facebook.com (keep it in Development mode) and add the LAWS Page admin
   to the app under Roles.
2. As that admin, in the Graph API Explorer, request a user token with `pages_show_list`,
   `pages_read_engagement` and `pages_read_user_content`.
3. Exchange it for a long-lived user token (server side, needs the app secret), then call
   `/me/accounts` with it. The `access_token` returned for the LAWS Page is a long-lived Page token
   with no expiry date, and the same call returns the Page `id`.
4. In Vercel > Project > Settings > Environment Variables add `FB_PAGE_ID` and `FB_PAGE_TOKEN`, then redeploy.
5. Open `https://<site>/api/facebook`. `"ok": true` means it works. Otherwise `"error"` says why:
   `not_configured`, `token_invalid` (token revoked or admin changed password), `permission_missing`.

Meta changes its API rules from time to time, so check the current Graph API documentation when setting up.
