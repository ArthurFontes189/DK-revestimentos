# DK Revestimentos v2

Plataforma modernizada para DK Revestimentos com site público, painel administrativo e sistema de gestão de clientes.

## Tecnologia

- **Monorepo:** Yarn workspaces
- **Framework:** Astro + React
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS + Design Tokens
- **Backend:** Supabase (PostgreSQL + Realtime)

## Estrutura

```
dk-revestimentos-v2/
├── packages/
│   └── design-system/       # Componentes e tokens reutilizáveis
├── apps/
│   ├── public/             # Site público do cliente
│   └── admin/              # Painel administrativo
├── docs/                   # Documentação técnica
└── .claude/rules/          # Regras do projeto
```

## Começar

```bash
# Instalar dependências
yarn install

# Dev - Site público
yarn workspace @dk-revestimentos/public dev

# Dev - Painel admin
yarn workspace @dk-revestimentos/admin dev

# Build
yarn workspace @dk-revestimentos/public build
yarn workspace @dk-revestimentos/admin build

# Lint e format
yarn lint
yarn format
```

## Fases de Implementação

- ✅ **Phase 1:** Setup estrutura + Design System base
- ⏳ **Phase 2:** Site Público (seções, portfolio, contato)
- ⏳ **Phase 3:** Admin Core (auth, leads CRM, clientes)
- ⏳ **Phase 4:** Admin Advanced (fichas de serviço, funcionários, financeiro)
- ⏳ **Phase 5:** Deploy e documentação final

## Documentação

Veja [.claude/rules/](./docs) para:
- Guia de componentes
- Padrões de código
- Workflow de desenvolvimento
