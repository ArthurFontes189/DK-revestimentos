# DK Revestimentos - Admin Panel

Painel administrativo para gerenciar leads, clientes, projetos e serviços.

## Estrutura

```
src/
├── pages/           # Páginas Astro (rotas)
├── components/      # Componentes React
├── types/           # TypeScript interfaces
├── services/        # Serviços (Supabase, API)
├── layouts/         # Layouts Astro
└── styles/          # Estilos CSS
```

## Páginas

- `/login` - Página de login
- `/` (dashboard) - Dashboard com métricas
- `/leads` - Gerenciar leads
- `/clientes` - Gerenciar clientes
- `/projetos` - Gerenciar projetos (TODO)

## Desenvolvimento

```bash
yarn workspace @dk-revestimentos/admin dev
# Abre em http://localhost:3000
```

### Login Demo
- Email: qualquer email
- Senha: qualquer senha

## Integração Supabase

O serviço `src/services/supabase.ts` está mockado para desenvolvimento.

Para integração real:
1. Instalar `@supabase/supabase-js`
2. Criar cliente Supabase
3. Atualizar funções em `supabase.ts`
4. Adicionar `.env` com `SUPABASE_URL` e `SUPABASE_ANON_KEY`

## Tipos

Definidos em `src/types/auth.ts`:
- `User` - Usuário autenticado
- `Lead` - Lead/contato
- `Client` - Cliente
- `Project` - Projeto

## Componentes

- `LoginForm` - Formulário de login (React)
- `DashboardMetrics` - Cards de métricas (React)

## Features Phase 3 (Atual)

- ✅ Login page
- ✅ Dashboard com métricas
- ✅ Lead manager (lista + mock CRUD)
- ✅ Client manager (grid + mock CRUD)
- ⏳ Project manager (próximo)

## Features Phase 4 (Futuro)

- Service sheets (fichas de serviço)
- Employee manager
- Finance board
- Offline support (PWA)

## Build

```bash
yarn workspace @dk-revestimentos/admin build
# Output em dist/
```

## Deploy

Compatível com qualquer host (Vercel, Netlify, etc).

Configure `astro.config.mjs` com seu domínio.
