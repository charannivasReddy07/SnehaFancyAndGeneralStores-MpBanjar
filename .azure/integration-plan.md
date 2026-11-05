# Integration hand-off — Sneha Fancy & General Stores

- **Architecture:** Static React + TypeScript / Vite site. No backend, database, migrations, or API routes by approved scope.
- **Frontend folder:** repository root.
- **Commands:** `npm install`; `npm run dev`; `npm run typecheck`; `npm run build`.
- **Live-data seam:** Not applicable; all business content is static and contact actions link to phone, WhatsApp, and Google Maps.
- **Mocks to remove:** None.
- **Database:** None; no seed data.
- **Services:** GitHub Pages static hosting (Essential); GitHub Actions build/deployment workflow (Essential). No enhancement services.
- **Deployment:** `.github/workflows/deploy-pages.yml`; configure repository Pages source as GitHub Actions and push to `main`.
