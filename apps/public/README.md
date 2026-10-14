# DK Revestimentos - Site Público

Site público para apresentar serviços de revestimentos e portfólio de projetos.

## Estrutura

```
src/
├── pages/          # Páginas Astro (auto-roteadas)
├── components/     # Componentes Astro reutilizáveis
├── layouts/        # Layouts (HTML wrapper)
├── data/           # Dados estáticos (services, portfolio, site config)
├── styles/         # Estilos CSS customizados
└── assets/         # Imagens e ícones
```

## Customização

### Dados do Site
Editar `src/data/site.ts`:
```typescript
export const siteConfig = {
  name: 'Nome da Empresa',
  email: 'email@empresa.com',
  phone: '+55 (11) 9999-9999',
  whatsapp: 'https://wa.me/...',
  // ...
};
```

### Serviços
Editar `src/data/services.ts` - adicionar/remover serviços

### Portfólio
Editar `src/data/portfolio.ts` - adicionar projetos com imagens

### Páginas
Criar novo arquivo em `src/pages/` para adicionar página (ex: `sobre.astro`)

## Desenvolvimento

```bash
yarn workspace @dk-revestimentos/public dev
# Abre em http://localhost:3000
```

## Build

```bash
yarn workspace @dk-revestimentos/public build
# Output em dist/
```

## Componentes Disponíveis

- `HeroSection` - Hero com headline, subtitle, CTA
- `ServicesSection` - Grid de serviços com cards
- `PortfolioSection` - Galeria de projetos
- `ContactSection` - Formulário de contato + info
- `Footer` - Rodapé com links

### Design System
Importar do `@dk-revestimientos/design-system`:
```astro
import { Button, Card, Grid, Navbar, Footer } from '@dk-revestimentos/design-system';
```

## Performance

- Lighthouse Desktop: > 90
- Lighthouse Mobile: > 80
- LCP: < 2.5s
- No runtime JavaScript por padrão (Astro vence!)

## SEO

- Meta tags automáticas
- Open Graph configurado
- Sitemap.xml (Astro gera automaticamente)
- robots.txt

## Responsividade

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

Todos os componentes são responsivos por padrão (Tailwind CSS).

## Deploy

Compatível com:
- Vercel
- GitHub Pages
- Netlify
- Qualquer host estático

Configure `astro.config.mjs` com seu domínio/base URL.
