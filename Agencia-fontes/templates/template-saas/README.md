# Template SaaS - Agência Fontes

Modern SaaS platform template with dashboard, metrics, and pricing.

## Features

- **Dashboard** - Example metrics and KPI display
- **Pricing Table** - Multi-tier pricing with highlighted plan
- **Integrations** - Showcase of integrations
- **Real Data Examples** - Mock metrics and analytics data
- **Responsive Design** - Works on all devices
- **Dark Mode** - Automatic dark mode support

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
Edit `src/data/site.ts`:
- SaaS platform name and description
- Contact information
- Navigation menu
- Social links

### Dashboard Data
Edit `src/data/dashboard.ts`:
- Update metrics
- Modify pricing tiers
- Change integrations
- Adjust dashboard cards

### Pages

- `/` - Home with features, integrations, and pricing
- `/dashboard` - Example dashboard with metrics
- `/pricing` - Standalone pricing page
- `/contact` - Contact form

## Dashboard Components

- **Metric Cards** - Display KPIs with trends
- **Dashboard Grid** - Responsive grid layout
- **Pricing Tiers** - Highlighted popular plan
- **Feature Lists** - Checkmarks for features
- **Integration Cards** - Icon showcase grid

## Pricing Structure

Customize pricing tiers in `src/data/dashboard.ts`:
- Set price and billing period
- List included features
- Mark featured/popular plan
- Custom CTA button text

## Deploying

Ready for GitHub Pages:

```bash
yarn build
# Upload dist/ folder to gh-pages branch
```

## Built With

- Astro
- React
- TypeScript
- Tailwind CSS
- @agencia/design-system
