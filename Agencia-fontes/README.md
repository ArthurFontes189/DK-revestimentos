# 🎨 Agência Fontes - Plataforma de Templates

Plataforma de templates profissionais para websites, portfólios e SaaS. Desenvolvida com **Astro**, **React**, **TypeScript** e **Tailwind CSS**.

## 📚 O Que Incluída

### 🏗️ Design System
- **12 componentes React** reutilizáveis
- **Tokens CSS** (cores, tipografia, spacing, shadows)
- Suporte a **Dark Mode** automático
- Totalmente parametrizado para customização

### 📦 3 Templates Prontos para Usar

#### 1️⃣ **Template Base**
- Homepage com hero section
- About page
- Services page
- Contact page
- Dados parametrizáveis

**Deploy:** `yarn workspace template-base dev`

#### 2️⃣ **Template Portfolio**
- Showcase de projetos em bento grid
- Project detail pages (dinâmicas)
- Filtro por categoria
- About e Contact pages
- 6 projetos de exemplo

**Deploy:** `yarn workspace template-portfolio dev`

#### 3️⃣ **Template SaaS**
- Dashboard com métricas
- Pricing com 3 tiers
- Integrations showcase
- Real-time metrics example
- Contact page

**Deploy:** `yarn workspace template-saas dev`

---

## 🚀 Quick Start

### Instalação

```bash
# Clonar repositório
git clone https://github.com/ArthurFontes189/Agencia-Fontes.git
cd Agencia-Fontes

# Instalar dependências (shared)
yarn install
```

### Rodar Localmente

```bash
# Template Base
yarn workspace template-base dev
# http://localhost:3000

# Template Portfolio
yarn workspace template-portfolio dev
# http://localhost:3000

# Template SaaS
yarn workspace template-saas dev
# http://localhost:3000
```

### Build para Produção

```bash
# Build um template
yarn workspace template-base build

# Output: ./dist/
```

---

## 📁 Estrutura do Projeto

```
agencia-fontes/
├── packages/
│   └── design-system/           # Componentes reutilizáveis
│       ├── src/tokens/          # CSS variables (cores, tipografia, spacing)
│       ├── src/components/      # 12 componentes React
│       └── README.md
│
├── templates/
│   ├── template-base/           # Base simples
│   ├── template-portfolio/      # Portfolio showcase
│   └── template-saas/           # Dashboard + Pricing
│
├── .claude/rules/               # Documentação técnica
│   ├── design-tokens.md
│   ├── guia-visual-marca.md
│   ├── stack-documentation.md
│   └── plano-execucao.md
│
└── docs/                        # Documentação geral
```

---

## 🎨 Design System

### Cores Principais
- **Primary Blue:** `#0066FF`
- **Primary Dark:** `#001F3F`
- **Accent Cyan:** `#06B6D4`
- **Success:** `#10B981`
- **Error:** `#EF4444`

### Componentes Disponíveis
- Button
- Input
- Card
- Grid
- Modal
- Navbar
- Footer
- Hero
- CTA
- Testimonial
- Pricing
- FeatureGrid

Veja `packages/design-system/README.md` para mais detalhes.

---

## 🔧 Customização

### Cores e Estilos
Edite `src/styles/global.css` em cada template para customizar cores usando as CSS variables do design system.

### Dados e Conteúdo
- **site.ts** - Nome, email, social, menu
- **sections.ts** (template-base) - Seções dinâmicas
- **projects.ts** (template-portfolio) - Projetos
- **dashboard.ts** (template-saas) - Métricas e pricing

### Adicionar Componentes
Importe do design system:
```tsx
import { Button, Card, Hero } from '@agencia/design-system';
```

---

## 📖 Documentação

Veja `.claude/rules/` para documentação técnica completa:

- **design-tokens.md** - Paleta, tipografia, spacing
- **guia-visual-marca.md** - Brand identity, padrões
- **stack-documentation.md** - Tech stack, comandos
- **plano-execucao.md** - 7 fases da arquitetura

---

## 🌐 Deploy no GitHub Pages

Cada template pode ser deployado no GitHub Pages:

### Para Template Base:
```bash
yarn workspace template-base build
# Copiar conteúdo de dist/ para gh-pages branch
```

### Configurar GitHub Pages:
1. Ir em **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / folder: `/docs` (ou `gh-pages`)
4. Save

---

## 🛠️ Tech Stack

- **Astro 4** - Framework estático
- **React 18** - Componentes interativos
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Utilitários de styling
- **Design System** - Componentes reutilizáveis

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
yarn workspace <template-name> dev

# Build
yarn workspace <template-name> build

# Preview do build
yarn workspace <template-name> preview

# Lint (todos os workspaces)
yarn lint

# Format (todos os workspaces)
yarn format
```

---

## 🤝 Contribuindo

Este é um projeto da Agência Fontes. Para contribuir:

1. Faça fork do repositório
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'feat: sua feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Propriedade da Agência Fontes © 2026

---

## 📧 Contato

- **Email:** contact@agenciafontes.com
- **Instagram:** @agenciafontes
- **LinkedIn:** Agência Fontes

---

**Desenvolvido com ❤️ pela Agência Fontes usando Claude Code**
