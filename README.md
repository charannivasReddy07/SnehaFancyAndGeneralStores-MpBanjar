# Sneha Fancy & General Stores

A responsive React + TypeScript informational storefront for Sneha Fancy & General Stores in Morampalli Banjar, Bhadrachalam. This static site has no backend, checkout, or payment processing.

## Run locally

- Install: `npm install`
- Develop: `npm run dev`
- Type-check: `npm run typecheck`
- Production build: `npm run build`

## Publish with GitHub Pages

1. Push this repository to GitHub with the default branch named `main`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` or run **Deploy static site to GitHub Pages** from the Actions tab. The workflow builds the site and publishes `dist`.

Vite uses a relative asset base so the site works both at a user/organization root and at a repository project path. The workflow needs the repository's Pages deployment permissions enabled.

## Content and assets

Store details and contact actions are static. Images in `public/assets/` are local copies of the reference site's publicly served logo, store photos, LIC mark, and review QR. Contact links use the published phone number and Google Maps location.
