# CrafterExplorer Technology — Website

Next.js 14 (App Router) marketing site for CrafterExplorer Technology Ltd.
Designed for deployment to **Vercel**.

## Stack

- **Next.js 14** (App Router, RSC, `next/image`, `next/font`)
- **TypeScript** (strict)
- **Tailwind CSS** for styling
- **Resend** for transactional email (contact form)
- **Zod** for runtime form validation

## Local development

```bash
# 1. Install
npm install

# 2. Copy env template
cp .env.example .env.local
# Edit .env.local and add your Resend API key

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build
npm run start
```

> No `RESEND_API_KEY` in dev? The contact route will log the payload to the
> server console and return success — useful for local UI testing.

## Project structure

```
app/
  layout.tsx                # Root layout, fonts, JSON-LD
  page.tsx                  # Home
  about/page.tsx
  products/page.tsx         # BlueHelm / C2 platform
  consulting/page.tsx
  contact/page.tsx
  privacy/page.tsx
  legal/page.tsx
  not-found.tsx             # 404
  sitemap.ts                # /sitemap.xml
  robots.ts                 # /robots.txt
  api/contact/route.ts      # Resend email handler

components/                 # UI primitives + composite blocks
content/site.ts             # Single source of truth for site copy
public/
  logos/  brand/  team/
  software/  hardware/  vessels/  videos/  docs/
```

## Editing content

All site copy, team bios, vessel specs, capability text, etc. live in
[`content/site.ts`](./content/site.ts). Edit there and commit — no CMS.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository → select this repo**.
   Vercel auto-detects Next.js. No build config needed.
3. Add environment variables in **Project → Settings → Environment Variables**:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
   - `CONTACT_TO_EMAIL=info@crafterexplorer.co.uk`
   - `CONTACT_FROM_EMAIL=website@crafterexplorer.co.uk`
     (or any verified address on your Resend domain)
4. Verify your domain in Resend: add the DNS records they generate to your
   Namecheap DNS panel.
5. Point `crafterexplorer.co.uk` to Vercel:
   - Vercel → **Domains → Add** → enter `crafterexplorer.co.uk`.
   - Update DNS at Namecheap: set the A record for `@` to `76.76.21.21`,
     and the CNAME for `www` to `cname.vercel-dns.com`.
   - Wait for SSL provisioning (typically <2 min).

## Migrating from Namecheap SiteJet / cPanel

1. Deploy this site to Vercel as a **staging** domain first (e.g.
   `crafterexplorer.vercel.app`) — verify everything works.
2. Once happy, switch DNS at Namecheap (above) and your traffic flips to
   Vercel. SiteJet keeps running until you take it down in cPanel.
3. Keep your existing email setup (Namecheap mailbox / Microsoft 365 / etc.)
   on its own MX records — they're independent from the website hosting.

## Performance notes

- All images use `next/image` (AVIF/WebP, responsive `sizes`, lazy by default).
- Hero/above-the-fold images use `priority`.
- The hero video is `<video autoplay muted loop playsinline>` with a poster
  image so it never blocks paint.
- Below-the-fold reveal animations only run when the element enters the
  viewport (IntersectionObserver, no scroll listeners).
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) configured in `next.config.mjs`.

## SEO

- Per-page `metadata` exports (title, description, canonical, OG tags).
- Organization JSON-LD injected globally.
- `/sitemap.xml` and `/robots.txt` auto-generated.
- Semantic HTML5 (`<main>`, `<section>`, `<article>`, `<address>`, proper heading order).

## Future work

- Replace placeholder `/privacy` and `/legal` copy with finalised text.
- Add Plausible/Fathom analytics (privacy-friendly, GDPR-light).
- Add a Press / News index if PR cadence picks up.
- Once you have customer case studies, add a Customers / Mission section.
- Consider Sanity/Contentful only if non-dev editors need to manage copy.

---

© CrafterExplorer Technology Ltd. Built in the UK.
