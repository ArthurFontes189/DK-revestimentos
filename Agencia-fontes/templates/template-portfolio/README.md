# Template Portfolio - Agência Fontes

Professional portfolio template for creatives, designers, and agencies.

## Features

- **Portfolio Grid** - Beautiful bento-style portfolio showcase
- **Project Details** - Individual project pages with full details
- **Category Filter** - Filter projects by category
- **Responsive Design** - Works on all devices
- **Contact Form** - Easy contact section
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
- Portfolio name and description
- Contact information
- Social media links
- Navigation menu

### Projects Data
Edit `src/data/projects.ts`:
- Add your portfolio projects
- Include images, descriptions, categories
- Mark featured projects
- Add project links

### Pages

- `/` - Home with featured projects
- `/portfolio` - All projects with category filter
- `/portfolio/[id]` - Individual project detail pages
- `/about` - About page
- `/contact` - Contact page

## Project Structure

```
src/
├── pages/           # Routes
│   ├── portfolio/   # Portfolio routes
│   └── ...
├── layouts/         # Page layouts
├── components/      # Reusable components
├── data/            # Configuration & projects
└── styles/          # Global styles
```

## Adding Projects

In `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Project description',
  category: 'Web Design',
  image: 'image-url',
  client: 'Client Name',
  year: 2024,
  tags: ['tag1', 'tag2'],
  featured: true,
  link: 'https://project-url.com'
}
```

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
