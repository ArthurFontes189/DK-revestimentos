# Guia de Implementação - DK Revestimentos v2

## Estrutura do Monorepo

```
Workspaces:
- @dk-revestimentos/design-system (packages/design-system)
- @dk-revestimentos/public (apps/public)
- @dk-revestimentos/admin (apps/admin)
```

## Convenções

### TypeScript
- `strict: true` obrigatório
- Path aliases: `@/*` para raiz
- Sempre tipificar React components

### Styling
- Tailwind CSS primary
- CSS variables para tokens (cores, espaçamento, tipografia)
- Dark mode via `@media prefers-color-scheme`

### Componentes React
- Usar `React.forwardRef` para componentes base
- Props interface sempre definida
- `displayName` sempre setado
- Priorizar Tailwind sobre CSS custom

## Fluxo Phase 2: Site Público

### Tarefas
1. **Componentes de Seção**
   - HeroSection (headline, subtitle, CTA)
   - ServiceGrid (cards de serviços)
   - PortfolioGallery (galeria de projetos)
   - ContactForm (formulário)

2. **Páginas**
   - `pages/index.astro` - Hero + Services + Portfolio + CTA
   - `pages/servicos.astro` - Detalhamento de serviços
   - `pages/portfolio.astro` - Galeria completa
   - `pages/contato.astro` - Formulário e info

3. **Data**
   - `data/site.ts` - Config geral (nome, emails, sociais)
   - `data/services.ts` - Lista de serviços
   - `data/portfolio.ts` - Projetos com imagens

4. **Styling**
   - `styles/components.css` - Estilos customizados
   - `styles/animations.css` - Animações (scroll reveal, hover)

### Critérios de Sucesso
- [ ] Home page completa e responsiva
- [ ] Dark mode funcionando
- [ ] Lighthouse score > 90 (desktop)
- [ ] SEO meta tags corretos
- [ ] Formulário de contato funcional (mock)

## Fluxo Phase 3: Admin Core

### Tarefas
1. **Autenticação**
   - Login page com Supabase
   - Protected routes
   - Session management

2. **Dashboard**
   - Métricas em tempo real
   - Últimos leads/projetos
   - Quick actions

3. **Lead Manager**
   - CRUD de leads
   - Filtros e busca
   - Status pipeline

4. **Client Manager**
   - CRUD de clientes
   - Histórico de projetos
   - Contato e documentos

### Criterios de Sucesso
- [ ] Login funcional
- [ ] Dashboard com dados reais
- [ ] CRUD leads 100% funcional
- [ ] Integração Supabase ok

## Fluxo Phase 4: Admin Advanced

### Tarefas
1. **Service Sheets** - Fichas de serviço detalhadas
2. **Employee Manager** - Gestão de funcionários
3. **Finance Board** - Receitas, despesas, lucro
4. **Offline Support** - PWA + IndexedDB

## Deployment

- **Public:** Vercel / GitHub Pages
- **Admin:** Vercel
- **Database:** Supabase Cloud

## Environment Variables

```
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
DATABASE_URL=...
```

Gerar `.env.example` para documentação.

## Comandos Úteis

```bash
# Novo componente
yarn workspace @dk-revestimentos/design-system add ComponentName

# Dev específico
yarn workspace @dk-revestimentos/public dev --port 3000

# Build full
yarn workspaces foreach run build

# Lint tudo
yarn lint

# Type check
yarn tsc --noEmit
```

## Checklist Antes de Merge

- [ ] TypeScript sem erros (`yarn tsc --noEmit`)
- [ ] ESLint passa (`yarn lint`)
- [ ] Prettier formatado (`yarn format`)
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Dark mode testado
- [ ] Sem console.logs
- [ ] Commit message descritivo
- [ ] Tests se aplicável
