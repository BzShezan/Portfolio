# Bahadur Zamn Shezan — Portfolio

A responsive Next.js and TypeScript portfolio for AI/ML research and software engineering.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Run `npm run build` before deployment.

## Content and pending assets

- Edit the content arrays and links in `app/page.tsx`. Publication links are DOI links, and project repository links point to public repositories where confirmed.
- The hero and experience photos are identity-preserving editorial imagery derived from the owner's supplied headshot. The About cutout uses the same reference. High-quality WebP assets are served at native resolution for the portrait panels. Add actual project screenshots when available; the project card visuals are purpose-built CSS diagrams and do not impersonate real screenshots.
- Text and cards rise into view once as they enter the viewport. The effect is disabled when the visitor prefers reduced motion.
- Add certificates and a CV only after the actual files are supplied. The site currently has no broken download links or sample certificates.
- AI Talent Match's specific repository link is pending confirmation, so its card links to the verified ULAB award announcement and the GitHub profile.
- The DUET placement and Film Club volunteering come from the owner's account and are presented without certificate links pending materials.

## Deploy to Vercel

Import this repository in Vercel. Framework preset: Next.js. No environment variables are needed. The contact action opens the user's email app through `mailto:`; there is no server or data collection.
