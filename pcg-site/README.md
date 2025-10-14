# Precision Contracting Group

Modern marketing site built with Vite + React + TypeScript + Tailwind CSS for Precision Contracting Group.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173/ to view the site locally.

### Production Build

```bash
npm run build
npm run preview
```

## Configuration

- **Formspree**: Update `FORMSPREE_ID` in `src/config.ts`. Leave blank to fall back to an email draft via `mailto:`.
- **Brand Colors & Copy**: Tweak primary variables in `src/config.ts`, Tailwind tokens in `tailwind.config.js`, and component copy across `src/pages/`.
- **Services List**: Edit `src/data/services.ts`. Services are reused on the Home, Services, and Contact pages. IDs drive the “Add to quote” context.
- **FAQs**: Update `src/data/faqs.ts`.
- **Analytics**: Replace the GA4 placeholder in `index.html` with your measurement ID or swap for the analytics provider you prefer.
- **Favicon & Manifest**: Update files inside `public/` as needed.

## Deployment

The project is Vercel/Netlify ready:

- Build command: `npm run build`
- Output directory: `dist/`
- Deploy previews work out of the box with Vite.

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS for styling; utilities live in `src/index.css`
- React Router for page navigation
- React context for mobile navigation state and selected services
- Formspree integration with graceful fallback and toast notifications
- SEO helpers via `react-helmet-async` plus JSON-LD in `SchemaOrg`

## Accessibility & Performance

- Focus states, semantic landmarks, and prefers-reduced-motion considerations baked in.
- Lazy-loaded imagery and modern meta tags.
- Test with Lighthouse; the layout is tuned to reach ≥90 across core categories on the Home page.

Happy building!
