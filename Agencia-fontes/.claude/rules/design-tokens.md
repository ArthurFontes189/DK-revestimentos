# Design Tokens - Agência Fontes

**Inspirado em:** Criativos da marca (pasta `/criativos`) - Logo, paletas, estilo geométrico

---

## 🎨 Paleta de Cores

### Cores Primárias (Baseadas no Logo)

```
Primary Blue (Principal)
  - HEX: #0066FF (Azul vibrante do logo)
  - RGB: (0, 102, 255)
  - Uso: Elementos principais, botões, links ativos
  - CSS: --color-primary

Primary Dark (Dark Navy)
  - HEX: #001F3F (Navy escuro do logo)
  - Uso: Backgrounds, hover states
  - CSS: --color-primary-dark

Primary Light (Light Blue)
  - HEX: #E0F0FF (Light blue do logo)
  - Uso: Backgrounds, cards, light overlays
  - CSS: --color-primary-light
```

### Cores Neutras

```
White: #FFFFFF
Dark: #0A0E27 (quase preto)
Light Gray: #F5F7FB
Medium Gray: #6B7280
```

### Cores Secundárias

```
Cyan/Teal (Accent): #06B6D4
Green (Success): #10B981
Red (Error): #EF4444
Yellow (Warning): #F59E0B
```

### Gradientes

```
Blue-Cyan: linear-gradient(135deg, #0066FF, #06B6D4)
Dark: linear-gradient(135deg, #001F3F, #0A0E27)
Accent: linear-gradient(90deg, #0066FF, #00D9FF)
```

---

## 🔤 Tipografia

### Fontes

```
Sans Serif (Headlines, UI):
  - Font Stack: 'Inter', 'system-ui', sans-serif
  - Weights: 400, 500, 600, 700, 800

Monospace (Code):
  - Font Stack: 'JetBrains Mono', 'Monaco', monospace
```

### Escala

```
H1: 56px (desktop) / 36px (mobile), Weight 800
H2: 42px (desktop) / 28px (mobile), Weight 700
H3: 32px (desktop) / 22px (mobile), Weight 600
H4: 24px, Weight 600
Body: 16px, Weight 400, Line Height 1.6
Small: 14px, Weight 400
Label: 14px, Weight 600
```

---

## 📏 Espaçamento

```
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 96px

Padrão: Múltiplos de 4px
```

---

## 🎭 Sombras

```
Shadow SM: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Shadow MD: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Shadow LG: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Shadow XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

---

## 🔲 Border Radius

```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

---

## ✨ Efeitos Visuais

### Pixel Dots (Inspirado no Logo)

Usar em backgrounds de hero sections:
```css
background-image: radial-gradient(
  circle,
  rgba(0, 102, 255, 0.15) 1px,
  transparent 1px
);
background-size: 20px 20px;
```

### Glows (Tech aesthetic)

Para buttons principais:
```css
box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
```

---

## 🌓 Dark Mode

- **Default:** Light mode (background #FFFFFF)
- **Dark Mode:** Usa CSS variables + prefers-color-scheme

---

## 📋 Resumo CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #0066FF;
  --color-primary-dark: #001F3F;
  --color-primary-light: #E0F0FF;
  --color-white: #FFFFFF;
  --color-dark: #0A0E27;
  --color-light-gray: #F5F7FB;
  --color-medium-gray: #6B7280;
  --color-accent-cyan: #06B6D4;
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0A0E27;
    --color-text: #FFFFFF;
    --color-border: #1F2937;
    --color-card-bg: #1F2937;
  }
}
```

---

**Last Updated:** 2026-10-13 | **References:** `/criativos`, Design Trends 2025/2026
