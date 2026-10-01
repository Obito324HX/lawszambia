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
- Download the dog photos hosted on the old Wix site into `assets/animals/` and point `photos` at the local files.
- Replace everything marked "Sample content" (success stories, before/after, team) with real material from LAWS, and delete `demo: true`.
- Add real impact figures to `stats` in `data.js` (the sections hide while it is empty).
- The contact form opens the visitor's email app. For a real form, connect Formspree or similar.
- Confirm the GoFundMe link, bank details and mobile money numbers with LAWS.
- Confirm the Facebook page address and that LAWS is happy for its feed to show on the site.
