# Features - DK Revestimentos v2

## Site Público (`apps/public`)

### Páginas

- **Home** - Landing page completa com hero, serviços, portfólio, contato
- **Serviços** - Grid de 6 serviços principais com descrições
- **Portfólio** - Galeria de 6 projetos com categorias (residencial/comercial)
- **Contato** - Formulário de contato com WhatsApp, email, telefone

### Componentes

- **HeroSection** - Hero com headline, subtitle, CTA e padrão de dots
- **ServicesSection** - Grid responsivo de cards de serviços
- **PortfolioSection** - Galeria com hover effects
- **ContactSection** - Formulário + informações de contato
- **Footer** - Rodapé com links estruturados

### Design

- Responsivo (mobile, tablet, desktop)
- Dark mode support
- Animações suaves (fadeInUp, slideInLeft)
- Design tokens (cores, tipografia, espaçamento)
- Integração design-system

### Features Futuras

- Blog/artigos
- Galeria de imagens detalhada
- Sistema de agendamento
- Chat ao vivo
- Newsletter signup
- Integração com Instagram feed

## Painel Admin (`apps/admin`)

### Dashboard

- **Página Home** - Métricas principais em tempo real
  - Leads novos
  - Total de leads
  - Total de clientes
  - Projetos ativos
- **Grid de navegação** - Acesso rápido a todas as seções

### Lead Manager (`/leads`)

- **Listar leads** - Tabela com filtros
- **Buscar leads** - Por nome ou email
- **Status** - novo, contato, orçamento, fechado, recusado
- **CRUD completo** - Create, Read, Update, Delete (mockado)
- **Data de criação** - Timestamping automático

### Client Manager (`/clientes`)

- **Listar clientes** - Grid de cards
- **Detalhes** - Nome, email, telefone, endereço
- **Histórico** - Número de projetos
- **Status** - Ativo/Inativo
- **CRUD completo** - Mockado com dados de exemplo

### Service Sheets (`/fichas`)

- **Gerenciar fichas** - Cards com informações
- **Detalhes** - Título, projeto, status
- **Cálculos** - Quantidade de materiais, horas, custo
- **Status workflow** - Rascunho → Aprovada → Em Progresso → Concluída

### Employee Manager (`/funcionarios`)

- **Listar equipe** - Cards de funcionários
- **Informações** - Nome, cargo, email, salário
- **Status** - Ativo/Inativo
- **Resumo de folha**
  - Total de funcionários
  - Folha mensal total
  - Média salarial
  - Funcionários ativos

### Finance Board (`/financeiro`)

- **Resumo financeiro**
  - Receita total (mês)
  - Despesa total (mês)
  - Lucro (cálculo automático)
  - Margem (percentual)

- **Receitas** - Lista com valores e datas
- **Despesas** - Lista com valores e datas
- **Ações** - Export, Impressão, Gráficos (futuros)

### Authentication

- **Login page** - Formulário simples
- **Session management** - Mockado
- **Protected routes** - Dashboard requer autenticação (futura implementação com guards)
- **Logout** - Retorna para login

### Design

- Responsivo
- Dark mode ready
- Animações suaves
- Cards e grids
- Integração design-system
- Cores semanticamente apropriadas (verde receita, vermelho despesa)

### Features Futuras

- Real-time updates (Supabase)
- Exportar relatórios (PDF, Excel)
- Gráficos de receita/despesa
- Gerenciador de projetos avançado
- Agendamento de serviços
- Notificações em tempo real
- Mobile app (React Native)
- Offline mode (PWA + IndexedDB)
- Integração com WhatsApp API
- Sistema de mensagens internas

## Design System (`packages/design-system`)

### Componentes

1. **Button** - Variantes: primary, secondary, outline | Tamanhos: sm, md, lg
2. **Input** - Com label, error state, required
3. **Card** - Variantes: default, elevated
4. **Grid** - Layout grid responsivo com gap customizável
5. **Modal** - Dialog modal com backdrop
6. **Navbar** - Header com logo, menu, actions
7. **Footer** - Rodapé com colunas, links, copyright

### Tokens

- **Cores** - Primary (#0066FF), Dark (#001F3F), Success, Warning, Error, etc.
- **Tipografia** - Inter (sans-serif), JetBrains Mono (monospace)
- **Espaçamento** - xs (4px) até 4xl (96px)
- **Border Radius** - sm até full
- **Shadows** - sm até xl
- **Dark mode** - Via CSS variables

### Exportável

```typescript
// Importar componentes
import { Button, Input, Card, Grid, Modal, Navbar, Footer } from '@dk-revestimentos/design-system';

// Importar tokens
import '@dk-revestimentos/design-system/tokens.css';
```

## Integração Supabase

### Tabelas Planejadas

```sql
-- Users
- id (uuid)
- email
- name
- role (admin, manager, user)

-- Leads
- id
- name, email, phone, message
- status
- created_at

-- Clients
- id
- name, email, phone, address
- status

-- Projects
- id
- client_id
- title, description
- status, budget, spent
- dates

-- ServiceSheets
- id
- project_id
- materials, labor
- costs

-- Employees
- id
- name, email, phone, role
- salary, status

-- FinanceEntries
- id
- type (receita/despesa)
- amount, category
- date, status
```

### Realtime Features

- Atualizar métricas em tempo real
- Notificar novos leads
- Sync entre dispositivos
- Presença de usuários

## Segurança

- [ ] Rate limiting em APIs
- [ ] SQL injection prevention (Supabase)
- [ ] XSS protection (React escapes)
- [ ] CSRF tokens
- [ ] Environment variables para secrets
- [ ] HTTPS obrigatório
- [ ] Row-level security (RLS) no Supabase

## Performance

- [ ] Lazy loading de imagens
- [ ] Code splitting Astro
- [ ] Caching estratégico
- [ ] Minification de assets
- [ ] WebP images
- [ ] Gzip compression

## Roadmap

### V1.0 (Atual)
- ✅ Site público funcional
- ✅ Admin core + advanced mockado
- ⏳ Deploy inicial

### V1.1
- Integração real com Supabase
- Login seguro
- Real-time updates
- PWA setup

### V1.2
- Chat/Messaging interno
- WhatsApp API integration
- SMS notifications
- Email automático

### V2.0
- Mobile app (React Native)
- Advanced analytics
- Machine learning (previsões)
- Marketplace de templates
