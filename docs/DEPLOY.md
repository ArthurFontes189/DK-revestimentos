# Guia de Deployment - DK Revestimentos v2

## Opções de Hosting

### 1. Vercel (Recomendado)

Vercel é ideal para Astro - zero config, deploy automático via Git.

#### Setup Vercel

1. Ir em https://vercel.com
2. Conectar GitHub account
3. Importar repositório `dk-revestimentos-v2`

#### Deploy Site Público

```bash
# Vercel detecta automaticamente apps/public
# Não precisa de config adicional
```

**Configuração no vercel.json** (se necessário):

```json
{
  "buildCommand": "cd apps/public && yarn build",
  "outputDirectory": "apps/public/dist"
}
```

#### Deploy Admin

```json
{
  "buildCommand": "cd apps/admin && yarn build",
  "outputDirectory": "apps/admin/dist"
}
```

Deploy em `admin.dkrevestimentos.com.br`

### 2. GitHub Pages

Free hosting diretamente do GitHub.

#### Setup GitHub Pages

1. Repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → `/docs`

#### Build e Deploy Manual

```bash
# Build site
yarn workspace @dk-revestimentos/public build

# Copiar output para docs/
cp -r apps/public/dist/* docs/

# Commit e push
git add docs/
git commit -m "chore: deploy site públic para GitHub Pages"
git push origin main
```

Site fica em: `https://seu-usuario.github.io/dk-revestimentos-v2`

### 3. Netlify

Hosting similar ao Vercel.

1. Ir em https://netlify.com
2. Conectar GitHub
3. Importar repositório

**Build command:** `yarn workspace @dk-revestimentos/public build`
**Publish directory:** `apps/public/dist`

## Integração Supabase

### Criar projeto Supabase

1. https://app.supabase.com
2. Criar novo projeto
3. Guardar:
   - Project URL
   - Anon Key
   - Service Role Key (seguro!)

### Adicionar variáveis ao hosting

**Vercel Environment Variables:**
```
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-publica
DATABASE_URL=postgresql://...
```

**GitHub Actions Secrets:**
```
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

## CI/CD com GitHub Actions

Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Yarn
        run: npm install -g yarn@4
      
      - name: Install dependencies
        run: yarn install
      
      - name: Lint
        run: yarn lint
        continue-on-error: true
      
      - name: Build public
        run: yarn workspace @dk-revestimentos/public build
      
      - name: Build admin
        run: yarn workspace @dk-revestimentos/admin build
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: |
          npm install -g vercel
          vercel deploy --prod --token $VERCEL_TOKEN
```

## Domain Setup

### Domínio customizado no Vercel

1. Vercel Dashboard → Domains
2. Adicionar `dkrevestimentos.com.br`
3. Apontaramework Vercel (CNAME)
4. Aguardar propagação DNS (até 48h)

### Subdomínios

- **Site público:** `dkrevestimentos.com.br`
- **Admin:** `admin.dkrevestimentos.com.br`
- **API (futuro):** `api.dkrevestimentos.com.br`

## Performance Checklist

- [ ] Lighthouse Desktop score > 90
- [ ] Lighthouse Mobile score > 80
- [ ] LCP < 2.5s
- [ ] Images otimizadas (WebP)
- [ ] Minified CSS/JS
- [ ] Gzip compression habilitado

## Segurança

### HTTPS

Todos os hosts modernos fornecem HTTPS gratuitamente. Vercel e Netlify aplicam automaticamente.

### Headers de Segurança

Adicionar em `astro.config.mjs`:

```javascript
export default defineConfig({
  // ...
  vite: {
    ssr: {
      external: ['react', 'react-dom'],
    },
  },
  // Headers customizados se em ambiente próprio
});
```

### Variáveis Sensíveis

Nunca commitar secrets em Git:

```bash
# .gitignore
.env
.env.local
.env.*.local
```

## Rollback

Se deploy quebrar:

```bash
# Vercel
vercel rollback

# GitHub Pages
git revert seu-commit
git push origin main
```

## Monitoring

### Vercel Analytics

Ativar em Vercel Dashboard → Analytics para track:
- Web Vitals
- Performance
- User experience

### Sentry (Error Tracking)

Para monitorar erros em produção:

1. https://sentry.io
2. Criar projeto Astro
3. Adicionar SDK

## Backup

```bash
# Fazer backup regular do código
git push origin main

# Exportar dados Supabase (quando usar)
# Dashboard → Database → Export
```

## Troubleshooting Deploy

### Build falha no Vercel

```bash
# Aumentar memory
# Vercel Dashboard → Function Memory: 3008 MB
```

### Site quebrado após deploy

```bash
# Rollback para versão anterior
vercel rollback
```

### Variáveis de ambiente não carregando

```bash
# Verificar se estão configuradas no painel
# Redeploy após adicionar variáveis
vercel redeploy
```

## Checklist Pré-Deploy

- [ ] Build local funciona: `yarn workspaces foreach run build`
- [ ] Sem erros TypeScript: `yarn tsc --noEmit`
- [ ] Lint passa: `yarn lint`
- [ ] Testado localmente em produção mode
- [ ] Versão no package.json atualizada
- [ ] Commit push para main
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio customizado apontando certo
- [ ] HTTPS habilitado

Pronto para deploy produção! 🚀
