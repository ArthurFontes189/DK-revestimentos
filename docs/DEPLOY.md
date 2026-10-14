# Deploy no GitHub Pages (site público)

Este repositório publica **somente** o app `apps/public` (`@dk-revestimentos/public`) no GitHub Pages.

## URL publicada

- Produção: `https://arthurfontes189.github.io/DK-revestimentos/`

## Workflow de deploy

O deploy é feito automaticamente pelo workflow:

- `.github/workflows/deploy-pages.yml`

Ele executa:

1. checkout do repositório;
2. Node.js 20 + Corepack/Yarn;
3. instalação de dependências (`yarn install --immutable` quando `yarn.lock` existir);
4. build de `@dk-revestimentos/public`;
5. upload de `apps/public/dist`;
6. deploy via `actions/deploy-pages`.

## Configuração obrigatória no GitHub

No repositório, configure:

1. **Settings → Pages**
2. **Build and deployment → Source: GitHub Actions**

> Essa etapa é feita no painel do GitHub e não pode ser definida somente por arquivos do repositório.

## Deploy manual (opcional, para teste local)

```bash
yarn install
yarn workspace @dk-revestimentos/public build
```

Saída esperada:

- `apps/public/dist/index.html`

## Notas

- O app `apps/admin` **não** é publicado no GitHub Pages por este workflow.
- Não commitar segredos no repositório (`.env`, tokens, chaves privadas).
