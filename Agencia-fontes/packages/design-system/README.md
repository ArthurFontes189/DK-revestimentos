# @agencia/design-system

Design system compartilhado para templates da Agência Fontes.

## Instalação

```bash
yarn workspace @agencia/design-system install
```

## Uso

### Importar Componentes

```tsx
import { Button, Card, Grid, Hero } from '@agencia/design-system';

export function App() {
  return (
    <div>
      <Hero title="Welcome" subtitle="Bem-vindo" />
      <Grid>
        <Card>Conteúdo</Card>
      </Grid>
      <Button>Clique aqui</Button>
    </div>
  );
}
```

### Importar Tokens CSS

```css
@import '@agencia/design-system/src/tokens/index.css';
```

Ou em Tailwind:
```jsx
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
      },
    },
  },
};
```

## Componentes Disponíveis

- **Button** - Botão (primary, secondary, outline)
- **Input** - Campo de entrada
- **Card** - Container com sombra
- **Grid** - Grid responsivo
- **Modal** - Modal com overlay
- **Navbar** - Barra de navegação
- **Footer** - Rodapé com colunas
- **Hero** - Seção hero com title + CTA
- **CTA** - Call to Action
- **Testimonial** - Depoimento com avatar
- **Pricing** - Tabela de preços
- **FeatureGrid** - Grid de features com ícones

## CSS Variables

### Cores
```css
--color-primary: #0066FF
--color-primary-dark: #001F3F
--color-primary-light: #E0F0FF
--color-accent-cyan: #06B6D4
--color-success: #10B981
--color-error: #EF4444
--color-warning: #F59E0B
```

### Espaçamento
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 96px
```

### Tipografia
```css
--font-sans: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', monospace
--text-sm: 14px
--text-base: 16px
--text-lg: 18px
--text-2xl: 24px
--text-4xl: 42px
--text-5xl: 56px
```

## Dark Mode

Dark mode é automático via `prefers-color-scheme` ou `data-theme` attribute:

```html
<html data-theme="dark">
  <!-- ... -->
</html>
```

## Build

```bash
yarn workspace @agencia/design-system build
```

## Estrutura

```
src/
├── tokens/      # CSS variables
├── components/  # React components
└── index.ts     # Entry point
```
