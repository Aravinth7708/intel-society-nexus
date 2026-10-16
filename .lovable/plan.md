# SCIS Website — Society for Cyber Intelligent Systems

Note: this project runs on TanStack Start (React + Tailwind), not Next.js. Next.js isn't supported here, but the result is the same kind of modern React site with separate pages, fast loading and good SEO.

## Look and feel
- Professional white theme: white/off-white backgrounds, slate text, soft borders and shadows.
- Buttons and accents in red-500 (#EF4444), darker red on hover.
- Subtle cyber touches: light circuit/grid patterns, shield and lock icons, thin red lines.
- Fonts: Space Grotesk for headings, Inter-alternative (DM Sans) for body.
- Layout inspired by the "Association" reference: clean top bar, big photo hero with headline and two buttons, newsletter strip.

## Images (generated)
- SCIS logo (shield + circuit emblem, red/slate).
- Hero: 3D cartoon student (like your reference boy) with laptop, holographic shield and lock icons.
- More cyber-themed characters: girl with headset at SOC dashboard, student taking online exam, boy holding certificate, group of students in a lab.
- Background banners for each page.

## Navigation
Sticky white navbar: logo + name, links (Home, About, Programs, AI Course, Membership, Events, Contact), "Sign In" text link and red "Sign Up / Register" button. Mobile hamburger menu.

## Pages
1. **Home** — hero, 4 pillar cards, stats row, featured AI course, membership combo offer teaser, testimonials, newsletter strip.
2. **About** — mission, vision, team, registration details (Reg S.No 78/2025, DARPAN PY/2025/0684517).
3. **Programs** — grid of cyber/AI programs.
4. **AI Course** — full content from your brief: highlights, specifications, curriculum, countdown timer, FAQs.
5. **Membership** — ₹1,000 lifetime membership + FREE AI course combo, benefits, QR preview.
6. **Events** — upcoming workshops cards.
7. **Contact** — form, email info@societycis.org, socials.
8. **Sign Up** and **Sign In** pages — clean forms (front-end only for now).
9. **Register** popup — Name, Email, Phone, College/Org, payment placeholder.

Footer: trust badges, quick links, legal registration info, socials.

## Technical details
- Separate route files per page under src/routes, each with its own SEO title/description.
- Design tokens in src/styles.css (red-500 primary, white surfaces); fonts loaded in root head.
- Forms are UI-only; real accounts/payments can be added later with Lovable Cloud.
