# Template Base - Agência Fontes

Template base para criar websites e landing pages.

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build
```

## Customization

### Site Config
Edit `src/data/site.ts` to customize:
- Company name, description, contact info
- Navigation menu
- Social media links
- Logo

### Page Content
Edit `src/data/sections.ts` to customize:
- Hero section
- Features
- Testimonials
- Pricing
- CTA

### Design
- Tokens are imported from `@agencia/design-system`
- Override colors in `tailwind.config.js`
- Custom styles in `src/styles/custom.css`

## Pages

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## Deploying

This template is ready to deploy to GitHub Pages:

```bash
yarn build
# Upload dist/ folder to gh-pages branch
```

## Structure

```
src/
├── pages/           # Route pages
├── layouts/         # Page layouts
├── components/      # Astro components
├── data/            # Configuration
└── styles/          # Global styles
```
