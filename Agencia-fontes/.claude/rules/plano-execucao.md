# Plano de Execução Detalhado - Templates Agência Fontes

**Status:** Pronto para Implementação | **Data:** 2026-10-13

---

## 📋 Resumo Executivo

**Objetivo:** Criar 3 templates tech-forward para venda de serviços (websites + SaaS)  
**Timeline:** 2-4 semanas  
**Equipe:** Claude + Arthur (Code + Decisões)  
**Resultado Final:** Templates prontos para comercializar  

---

## 🎯 Fases de Implementação

### FASE 1: Estrutura Base (Task #1)

**Objetivo:** Setup completo do monorepo

**Arquivos a criar:**
```
agencia-fontes/
├── package.json (root com workspaces)
├── tsconfig.json
├── .prettierrc
├── .eslintrc.json
├── .gitignore
├── packages/ (diretório)
├── templates/ (diretório)
├── apps/ (diretório)
├── docs/ (diretório)
└── .claude/rules/ (já existe, adicionar docs)
```

**Checklist:**
- [ ] Root package.json com workspaces configurados
- [ ] TypeScript config base
- [ ] ESLint + Prettier configurados
- [ ] Git configurado
- [ ] Estrutura de diretórios criada
- [ ] Primeiro commit

**Tempo estimado:** 1-2 horas

---

### FASE 2: Design System (Task #2)

**Objetivo:** Criar biblioteca de componentes reutilizável

**Arquivos a criar:**
```
packages/design-system/
├── package.json
├── src/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   └── index.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Grid.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── CTA.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Pricing.tsx
│   │   ├── FeatureGrid.tsx
│   │   └── index.ts
│   └── index.ts (export all)
├── README.md
└── tsconfig.json
```

**Componentes Base a Criar:**

1. **Button.tsx**
   - Variants: primary, secondary, outline
   - Sizes: sm, md, lg
   - States: hover, disabled, loading
   - Props: onClick, disabled, children, className

2. **Input.tsx**
   - Types: text, email, password, textarea
   - States: focus, error, disabled
   - Props: placeholder, value, onChange, label

3. **Card.tsx**
   - Padding: var(--spacing-lg)
   - Shadow: var(--shadow-md)
   - Radius: var(--radius-md)
   - Props: children, className

4. **Modal.tsx**
   - Backdrop: semi-transparent
   - Centered
   - Close button
   - Props: isOpen, onClose, title, children

5. **Navbar.tsx**
   - Logo slot
   - Menu items (Links)
   - Dark mode toggle
   - Mobile menu (hamburger)
   - Props: logo, items, onMenuClick

6. **Footer.tsx**
   - Multiple columns
   - Social links
   - Copyright
   - Props: columns, social, copyright

7. **Hero.tsx**
   - Headline + subtitle
   - Background image/gradient
   - CTA button
   - Props: title, subtitle, cta, backgroundImage

8. **CTA.tsx**
   - Headline + description
   - Button
   - Props: title, description, buttonText, onButtonClick

9. **Testimonial.tsx**
   - Quote
   - Author name + role
   - Avatar
   - Props: quote, author, role, avatar

10. **Pricing.tsx**
    - Price + description
    - Features list
    - Button
    - Props: price, description, features, onAction

11. **FeatureGrid.tsx**
    - Bento grid layout
    - Icon + Title + Description
    - Props: items (array of {icon, title, description})

12. **Grid.tsx**
    - Responsive grid
    - Customizable columns
    - Props: columns, gap, children

**Cores Usadas:** Design Tokens de `design-tokens.md`

**Checklist:**
- [ ] Todos os componentes criados em TSX
- [ ] Cada componente com props TypeScript
- [ ] Dark mode support em cada componente
- [ ] CSS variables usadas em vez de valores hard-coded
- [ ] index.ts exporta todos os componentes
- [ ] README com exemplos de uso
- [ ] Componentes testáveis (estrutura simples)

**Tempo estimado:** 4-6 horas

---

### FASE 3: Template-Base (Task #3)

**Objetivo:** Criar template mais simples e reutilizável

**Arquivos a criar:**
```
templates/template-base/
├── package.json (dependencies: Astro, React, Tailwind, @agencia/design-system)
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.js
├── src/
│   ├── layouts/
│   │   ├── Layout.astro (HTML wrapper)
│   │   └── Page.astro (Base page layout)
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro (Home)
│   │   ├── about.astro (About page)
│   │   ├── services.astro (Services page)
│   │   └── contact.astro (Contact form)
│   ├── data/
│   │   ├── site.ts (Metadados: nome, email, social, etc)
│   │   └── sections.ts (Seções dinâmicas: hero, features, etc)
│   ├── styles/
│   │   ├── global.css (Imports tokens + Tailwind)
│   │   └── custom.css (Template-specific styles)
│   └── assets/ (placeholder para imagens)
├── public/
│   ├── favicon.svg
│   └── social-image.jpg
├── CUSTOMIZE.md (Instruções de customização)
└── README.md
```

**Páginas Base:**

1. **index.astro (Home)**
   - Hero com headline grande + CTA
   - Features grid (Bento)
   - Testimonial section
   - Footer

2. **about.astro**
   - About hero
   - Team section
   - Values section
   - Footer

3. **services.astro**
   - Services showcase em Bento grid
   - Pricing cards
   - Footer

4. **contact.astro**
   - Contact form
   - Contact info
   - Footer

**Data Structure (src/data/site.ts):**
```typescript
export const siteConfig = {
  name: "Your Company Name",
  description: "Your company description",
  logo: "/logo.svg",
  email: "contact@example.com",
  phone: "+55 (11) 9999-9999",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
};
```

**Data Structure (src/data/sections.ts):**
```typescript
export const heroSection = {
  title: "Your Headline Here",
  subtitle: "Your subtitle here",
  ctaText: "Get Started",
  ctaLink: "/contact",
};

export const featuresSection = {
  title: "Features",
  items: [
    { icon: "icon-name", title: "Feature 1", description: "..." },
    // ... more items
  ],
};
```

**Checklist:**
- [ ] Estrutura Astro + React setup
- [ ] 4 páginas base criadas (home, about, services, contact)
- [ ] Layout base (header + footer)
- [ ] Componentes do design-system importados
- [ ] Data parametrizada (site.ts, sections.ts)
- [ ] Dark mode toggle funcionando
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] SEO meta tags
- [ ] Dev server testado: `yarn workspace template-base dev`
- [ ] Build testado: `yarn workspace template-base build`

**Tempo estimado:** 4-6 horas

---

### FASE 4: Template-Portfolio (Task #4)

**Objetivo:** Template especializado para agências, criativos, fotógrafos

**Baseado em:** Template-Base (clone + customize)

**Adições:**
```
- Portfolio Grid (Bento com projetos/trabalhos)
- Project detail pages
- Filter by category
- Image gallery
- Client logos
- Portfolio showcase hero
- Case studies
```

**Arquivos Adicionais:**
```
templates/template-portfolio/
├── src/
│   ├── pages/
│   │   ├── portfolio/
│   │   │   ├── index.astro (Portfolio grid)
│   │   │   └── [id].astro (Project detail)
│   │   └── ... (outras pages herdadas)
│   ├── data/
│   │   └── projects.ts (Array de projetos com dados)
│   └── ... (resto igual ao template-base)
```

**Data Structure (src/data/projects.ts):**
```typescript
export const projects = [
  {
    id: "1",
    title: "Project Name",
    category: "category",
    image: "/projects/project-1.jpg",
    description: "Project description",
    client: "Client Name",
    link: "https://example.com",
  },
  // ... more projects
];
```

**Checklist:**
- [ ] Clone de template-base completo
- [ ] Portfolio grid page criada (Bento layout)
- [ ] Project detail pages dinâmicas
- [ ] Projects data structure
- [ ] Image gallery/carousel
- [ ] Filter by category
- [ ] Client logos section
- [ ] Case studies section
- [ ] Responsivo
- [ ] Dev server testado
- [ ] Build testado

**Tempo estimado:** 3-4 horas

---

### FASE 5: Template-SaaS (Task #5)

**Objetivo:** Template especializado para dashboards, sistemas, ferramentas

**Baseado em:** Template-Base (clone + customize)

**Adições:**
```
- Dashboard example com metrics cards
- Bento layout para componentes
- Data visualization (charts example)
- Pricing table
- Integration icons
- Features comparison table
- Product showcase
```

**Arquivos Adicionais:**
```
templates/template-saas/
├── src/
│   ├── pages/
│   │   ├── dashboard.astro (Dashboard example)
│   │   ├── pricing.astro (Pricing page)
│   │   ├── integrations.astro (Integrations)
│   │   └── ... (outras pages)
│   └── data/
│       ├── dashboard.ts (Mock data)
│       └── pricing.ts (Pricing tiers)
```

**Data Structure (src/data/dashboard.ts):**
```typescript
export const dashboardMetrics = [
  { title: "Total Users", value: "10,234", icon: "users" },
  { title: "Revenue", value: "$45,231", icon: "dollar" },
  // ... more metrics
];
```

**Checklist:**
- [ ] Clone de template-base completo
- [ ] Dashboard example page criada
- [ ] Metrics cards em Bento layout
- [ ] Pricing page com tiers
- [ ] Integrations showcase
- [ ] Command palette (Cmd+K) demo
- [ ] Data visualization examples
- [ ] Dark mode optimizado para SaaS
- [ ] Responsivo
- [ ] Dev server testado
- [ ] Build testado

**Tempo estimado:** 3-4 horas

---

### FASE 6: Documentação Regras (Task #6)

**Objetivo:** Documentar tudo para não perder contexto

**Arquivos já criados em `.claude/rules/`:**
- ✅ design-tokens.md (cores, tipografia, espaçamento)
- ✅ guia-visual-marca.md (brand guidelines)
- ✅ stack-documentation.md (stack + commands)
- ✅ plano-execucao.md (este arquivo)

**Arquivos adicionais a criar em `docs/`:**

1. **SETUP.md** - Getting started guide
   - Como instalar dependências
   - Como rodar dev server
   - Como criar novo template
   - Troubleshooting comum

2. **COMPONENTS.md** - Component library reference
   - Lista de todos os componentes
   - Props de cada componente
   - Exemplos de uso
   - Live examples

3. **DEPLOYMENT.md** - Deploy instructions
   - GitHub Pages setup
   - Domain configuration
   - CI/CD workflow
   - Deployment checklist

**Checklist:**
- [ ] Todos os 4 arquivos em `.claude/rules/` completos
- [ ] SETUP.md criado em `docs/`
- [ ] COMPONENTS.md criado em `docs/`
- [ ] DEPLOYMENT.md criado em `docs/`
- [ ] README.md root project
- [ ] CLAUDE.md com rules do projeto

**Tempo estimado:** 2-3 horas

---

### FASE 7: Testes & Validação (Task #7)

**Objetivo:** Validar que tudo funciona e está alinhado

**Checklist Funcional:**
- [ ] `yarn install` funciona (instala todos os workspaces)
- [ ] `yarn workspace template-base dev` abre servidor local
- [ ] `yarn workspace template-portfolio dev` abre servidor local
- [ ] `yarn workspace template-saas dev` abre servidor local
- [ ] Cada template pode fazer build: `yarn workspace <name> build`
- [ ] Design system está importado corretamente em cada template
- [ ] Dark mode toggle funciona em todos os templates
- [ ] Cores seguem a paleta definida
- [ ] Tipografia segue a escala definida
- [ ] Espaçamento usa múltiplos de 4px
- [ ] Components responsivos em mobile/tablet/desktop

**Checklist Acessibilidade:**
- [ ] Todas as imagens têm alt text
- [ ] Buttons têm accessible labels
- [ ] Cores têm contraste suficiente (4.5:1)
- [ ] Teclado navigation funciona
- [ ] Screen reader friendly

**Checklist SEO:**
- [ ] Meta tags (title, description, og:image)
- [ ] Canonical URLs
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Structured data (Schema.org)

**Checklist Performance:**
- [ ] Lighthouse score > 90 (Desktop)
- [ ] Lighthouse score > 80 (Mobile)
- [ ] LCP < 2.5s
- [ ] Build size < 200KB total

**Tempo estimado:** 2-3 horas

---

## 📊 Timeline Total

```
Fase 1 (Estrutura):     1-2 horas
Fase 2 (Design System): 4-6 horas
Fase 3 (Template-Base): 4-6 horas
Fase 4 (Portfolio):     3-4 horas
Fase 5 (SaaS):          3-4 horas
Fase 6 (Documentação):  2-3 horas
Fase 7 (Testes):        2-3 horas

TOTAL: 19-28 horas (2-4 semanas part-time)
```

---

## 🎯 Resultado Final Esperado

✅ **Estrutura:**
```
agencia-fontes/
├── packages/design-system/ (reutilizável)
├── templates/
│   ├── template-base/ (funcional, deployável)
│   ├── template-portfolio/ (funcional, deployável)
│   └── template-saas/ (funcional, deployável)
├── docs/ (completo)
└── .claude/rules/ (documentação)
```

✅ **Templates Prontos:**
- Dados parametrizáveis (site.ts, sections.ts)
- Design-system integrado
- Dark mode implementado
- Responsividade completa
- Documentação clara
- Pronto para GitHub Pages

✅ **Pronto para Showcase:**
- Templates podem ser usados como exemplos
- Cada um mostra diferentes capacidades
- Dados fake para demonstração

---

## 🚀 Próximo Passo

Quando terminar os templates → **Começar Showcase em fases separadas**

O showcase será:
- Fase 1: MVP (home + portfolio simples)
- Fase 2: Seções de serviços (links/exemplos dos templates)
- Fase 3: Case studies/Blog
- Fase 4: Sistema avançado de contato/proposta

**Não bloqueia** a venda dos templates!

---

**Last Updated:** 2026-10-13  
**Próxima Ação:** Task #1 - Estrutura Base
