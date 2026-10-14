# Stack Documentation - Agência Fontes

**Monorepo Tech Stack** | **Atualizado:** 2026-10-13 | **Status:** Production-Ready

---

## 🏗️ Arquitetura Geral

```
agencia-fontes/ (Monorepo com npm/yarn workspaces)
├── packages/
│   ├── design-system/       (Shared UI library)
│   └── utils/               (Shared utilities)
├── templates/
│   ├── template-base/       (Foundation)
│   ├── template-portfolio/  (Specialization)
│   └── template-saas/       (Specialization)
├── apps/
│   └── showcase/            (Company website - future)
└── docs/ & .claude/rules/   (Documentation)
```

---

## 📦 Dependências Principais

### Core Stack

**Framework:**
- **Astro** v4.x - Static site generation, zero JS by default, perfect SEO

**UI Framework:**
- **React** 18.x - For interactive components only, hydrate on demand

**Language:**
- **TypeScript** 5.x - Type safety, better IDE support

**Styling:**
- **Tailwind CSS** 3.x - Utility-first CSS, zero-runtime

**Design System:**
- **@agencia/design-system** (internal package) - React components, CSS tokens

### Development Tools

```
Build & Dev:
  - Vite (bundler via Astro)
  - pnpm / yarn workspaces (monorepo)

Code Quality:
  - ESLint v8.x (linting)
  - Prettier v3.x (formatting)
  - TypeScript (type checking)

Testing (Optional):
  - Vitest v1.x (unit tests)
  - @testing-library/react (component tests)
```

---

## 🗂️ Workspace Commands

```bash
# Run dev server para template específico
yarn workspace template-base dev

# Build específico
yarn workspace template-base build

# Add dependency a um workspace
yarn workspace template-base add react-icons

# Lint tudo
yarn lint

# Format tudo
yarn format
```

---

## 📁 Design System Package

**Location:** `packages/design-system`

### Structure
```
design-system/
├── src/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── shadows.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── CTA.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Pricing.tsx
│   │   └── FeatureGrid.tsx
│   └── index.ts (exports all)
├── package.json (com React, Astro deps)
└── README.md
```

---

## 🎨 Styling Strategy

### CSS Layers

```css
/* 1. Tokens (design-system) */
@import '@agencia/design-system/tokens.css';

/* 2. Tailwind (utilities) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 3. Custom overrides (template-specific) */
@layer components {
  .custom-component { /* ... */ }
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0A0E27;
    --color-text: #FFFFFF;
  }
}
```

---

## 🚀 Deployment & Hosting

### GitHub Pages

**Build Process:**
```bash
yarn workspace <template> build
# Outputs to dist/
```

**Domain Setup:**
```
showcase: agencia-fontes.github.io
templates: agencia-fontes.github.io/templates/<name>
```

---

## 🔄 Workflow para Novo Template

### 1. Clone Structure
```bash
cp -r templates/template-base templates/template-novo
```

### 2. Update Metadata
```
- Change name in package.json
- Update astro.config.mjs site URL
```

### 3. Customize
```
- Modify src/styles/custom.css
- Create template-specific components
```

### 4. Test Locally
```bash
yarn workspace template-novo dev
```

### 5. Build & Deploy
```bash
yarn workspace template-novo build
```

---

## 🐛 Troubleshooting

**"Module not found" importing from design-system**
- Ensure design-system is built
- Check index.ts exports
- Restart dev server

**Dark mode not working**
- Verify CSS variables are defined
- Check `prefers-color-scheme` media query
- Check `data-theme` attribute

**Styles not applying**
- Clear .astro cache: `rm -rf .astro`
- Restart dev server
- Check Tailwind config includes paths

---

## 🚀 Quick Commands Reference

```bash
# Development
yarn install                     # Install dependencies
yarn workspace <name> dev        # Dev server
yarn lint                        # Lint all
yarn format                      # Format all

# Building
yarn workspace <name> build      # Build one template

# New Template
cp -r templates/template-base templates/template-xyz
cd templates/template-xyz
yarn                             # Install local deps

# Cleanup
rm -rf node_modules dist .astro  # Clean everything
yarn install                     # Reinstall
```

---

**Last Updated:** 2026-10-13
