# Guia Visual da Marca - Agência Fontes

**Status:** Completo | **Baseado em:** `/criativos` | **Alinhado com:** Design Trends 2025/2026

---

## 🎯 Identidade Visual da Marca

### Logo
- **Formato:** "F" geométrico, moderno, minimalista
- **Cores:** Azul (#0066FF) + Branco
- **Estilo:** Formas paralelas/skewed, clean, tech
- **Versões:** Dark theme, light theme, high contrast
- **Arquivo:** `/criativos/LOGOS/AGENCIA FONTES - LOGO.png`

### Estilo Geral

**Geométrico & Moderno**
- Formas paralelas, ângulos precisos
- Sem ornamentações desnecessárias
- Minimalismo com propósito
- Tech aesthetic forte

**Paleta Limitada**
- Azul vibrante (#0066FF) como cor principal
- Branco para contraste e espaço
- Navy (#001F3F) para elementos escuros
- Variações light blue para backgrounds suaves

**Efeito Digital**
- Logo inspirado em píxeis/dots (efeito visto na versão digital)
- Ideal para aplicar em backgrounds de hero sections
- Padrão de pontos para textura tecnológica

---

## 🎨 Aplicações de Design nos Templates

### Template-Base
```
Hero Section:
├── Background: Gradient #0066FF → #06B6D4 com padrão de dots
├── Headlines: Bold, oversized (56px+)
├── Logo: Centralized ou top-left
└── CTA: Buttons com color-primary

Layout:
├── Bento grid para features
├── Cards com radius-md
├── Spacing generoso (lg / xl)
└── Dark mode: Navy background com cyan accents
```

### Template-Portfolio
```
Hero:
├── Background: Dark navy com efeito de dots
├── Logo + Text: Side by side
└── CTA: Primary color

Portfolio Grid:
├── Bento layout (4-3-2 columns responsive)
├── Cards com shadow-lg
├── Imagens centrais, texto embaixo
├── Hover: Slight zoom + glow effect
└── Tag colors: Primary blue + accents
```

### Template-SaaS
```
Hero:
├── Background: Dark mode com gradient
├── Product Preview: Central, large
├── Bold headline: Value proposition
└── Secondary CTA

Dashboard Example:
├── Bento layout para cards/metrics
├── Icons em primary-blue
├── Data visualization colors: blue, cyan, green
├── Dark backgrounds com light text
```

---

## 📐 Padrões Geométricos

### Padrão 1: Linhas Paralelas
- Uso: Decorativo em backgrounds, borders
- Implementação: CSS linear-gradient com ângulo 45deg
- Cor: rgba(0, 102, 255, 0.1)

### Padrão 2: Pixel Dots
- Uso: Hero sections, section dividers
- Implementação: radial-gradient com background-size
- Tamanho: 20px grid

### Padrão 3: Skewed Shapes
- Uso: Section backgrounds, dividers
- Ângulo: 10-15 graus
- Cores: Primary + gradient

---

## ✨ Microinteractions & Motion

### Hover States
```
Buttons: 
  - Brightness: +10%
  - Shadow: Increase to shadow-md
  - Duration: 300ms

Cards:
  - Scale: 1.02 (subtle)
  - Shadow: shadow-sm → shadow-lg
  - Duration: 300ms
```

### Scroll Reveals
- Elements fade-in + slide-up conforme user scrolls
- Duration: 600ms
- Implementation: Intersection Observer API

### Loading States
- Skeleton: Primary-light color
- Pulse: Smooth opacity animation
- Duration: 2s infinite

---

## 🌍 Variações por Modo

### Light Mode (Padrão)
```
Background: #FFFFFF
Text: #0A0E27
Accent: #0066FF
Secondary: #06B6D4
```

### Dark Mode
```
Background: #0A0E27
Text: #FFFFFF
Accent: #0066FF (mais brilhante com glow)
Secondary: #06B6D4
```

---

## 📱 Responsividade de Design

### Typography Scaling
```
H1: Desktop 56px → Mobile 36px
H2: Desktop 42px → Mobile 28px
Body: Desktop 16px → Mobile 15px
```

### Spacing Scaling
```
Section: Desktop 64px → Mobile 48px
Padding: Desktop 32px → Mobile 16px
```

### Grid Scaling
```
Desktop: 4 columns (Bento)
Tablet: 2-3 columns
Mobile: 1 column (stack)
```

---

## 📋 Checklist Visual

- [ ] Logo aplicado corretamente
- [ ] Cores seguem paleta de `design-tokens.md`
- [ ] Typography segue escala tipográfica
- [ ] Spacing usa múltiplos de 4px
- [ ] Dark mode implementado
- [ ] Microinteractions com propósito
- [ ] Responsividade testada
- [ ] Accessibility (color contrast, labels)
- [ ] Padrões geométricos aplicados (dots, linhas)

---

**Last Updated:** 2026-10-13 | **Inspiração:** `/criativos`
