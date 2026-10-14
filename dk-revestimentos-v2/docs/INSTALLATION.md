# Guia de Instalação e Setup - DK Revestimentos v2

## Pré-requisitos

- Node.js 18+ 
- Yarn 4.0+ (ou npm 9+)
- Git

## Instalação Local

### 1. Clonar repositório

```bash
git clone https://github.com/seu-usuario/dk-revestimentos-v2.git
cd dk-revestimentos-v2
```

### 2. Instalar dependências

```bash
yarn install
```

Isso instalará todas as dependências dos workspaces (design-system, apps/public, apps/admin).

### 3. Verificar estrutura

```bash
yarn workspaces list
```

Deve listar:
- @dk-revestimentos/design-system
- @dk-revestimentos/public
- @dk-revestimentos/admin

## Desenvolvimento

### Rodar site público localmente

```bash
yarn workspace @dk-revestimentos/public dev
```

Abre em `http://localhost:3000`

### Rodar painel admin localmente

```bash
yarn workspace @dk-revestimentos/admin dev
```

Abre em `http://localhost:3000`

## Build para Produção

### Build site público

```bash
yarn workspace @dk-revestimentos/public build
```

Output em `apps/public/dist/`

### Build admin

```bash
yarn workspace @dk-revestimentos/admin build
```

Output em `apps/admin/dist/`

### Build tudo

```bash
yarn workspaces foreach run build
```

## Variáveis de Ambiente

Criar arquivo `.env.local` na raiz:

```env
# Supabase (quando implementar integração real)
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anonima

# Database
DATABASE_URL=postgresql://...

# API (futuro)
API_URL=https://api.dkrevestimentos.com.br
```

Veja `.env.example` para template completo.

## Customização

### Mudar cores (site público)

Editar `apps/public/src/data/site.ts`:

```typescript
export const siteConfig = {
  name: 'DK Revestimentos', // Mudar nome
  email: 'seu@email.com',   // Mudar email
  phone: '+55 (11) 9999-9999',
  whatsapp: 'https://wa.me/...',
  // ...
};
```

### Mudar serviços

Editar `apps/public/src/data/services.ts`:

```typescript
export const services = [
  {
    id: '1',
    title: 'Seu Serviço',
    description: 'Descrição',
    icon: '🎨',
    features: ['Feature 1', 'Feature 2'],
  },
  // Adicionar mais...
];
```

### Adicionar projetos ao portfólio

Editar `apps/public/src/data/portfolio.ts`:

```typescript
export const portfolio = [
  {
    id: '1',
    title: 'Seu Projeto',
    category: 'residencial',
    image: 'url-da-imagem',
    client: 'Nome do Cliente',
    description: 'Descrição do projeto',
  },
  // Adicionar mais...
];
```

## Linting e Formatação

```bash
# Lint all
yarn lint

# Format all
yarn format

# Type check
yarn tsc --noEmit
```

## Troubleshooting

### "Module not found" - design-system

```bash
# Limpar cache e reinstalar
rm -rf node_modules
rm -rf apps/*/node_modules
yarn install
```

### Dev server não abre

```bash
# Porta pode estar em uso, especificar outra
yarn workspace @dk-revestimentos/public dev -- --port 3001
```

### Build falha

```bash
# Limpar build cache
rm -rf apps/*/dist
rm -rf apps/*/.astro
yarn workspace @dk-revestimentos/public build
```

## Próximos Passos

1. Configurar Supabase (quando pronto para integração real)
2. Deploy em produção
3. Configurar domínio customizado
4. Setup de email para formulários
5. Configurar CI/CD
