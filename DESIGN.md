# Design System: Venvem

## 1. Visual Theme & Atmosphere
The application features a "Dark Premium Glassmorphic" aesthetic. It emphasizes depth, luxury, and a high-tech modern feel. The atmosphere is created through deep blacks, subtle noise grain (`.bg-grain`), atmospheric lighting (`.bg-spotlight`, `.bg-vignette`), and layered glass effects with varying levels of blur.

## 2. Color Palette & Roles
All primary colors and roles are managed via Tailwind CSS custom properties under `@theme`:
- **Absolute Black** (`#000000` / `var(--background)`): Used for the main background.
- **Deep Obsidian** (`#050505` / `var(--color-background)`): Used for secondary layouts and section backgrounds.
- **Surface Dim** (`#0a0a0a` / `var(--color-surface-dim)` / `var(--color-surface)`): Used for primary surfaces, containers, and card foundations.
- **Surface Containers**:
  - `var(--color-surface-container-lowest)`: `#000000`
  - `var(--color-surface-container-low)`: `#111111`
  - `var(--color-surface-container)`: `#161616`
  - `var(--color-surface-container-high)`: `#1a1a1a`
  - `var(--color-surface-container-highest)`: `#222222`
- **Ghostly White** (`#ffffff` / `var(--color-primary)`): Used for primary typography, accents, and high-contrast glyphs.
- **Muted Gray** (`#a0a0a0` / `var(--color-on-surface-variant)`): Used for secondary text.
- **Cobalt Blue** (`#2a52be` / `var(--color-secondary-container)`): Used for primary action containers and accents.
- **Indigo / Purple / Amber** (Gradients): Applied through shape and text gradients:
  - `.text-gradient-custom`: linear-gradient Indigo (`#6366f1`) via Purple/Magenta (`#e879f9`) to Amber (`#f59e0b`).
  - `.shape-gradient-1`: linear-gradient Indigo (`rgba(99, 102, 241, 0.4)`) to Purple/Magenta (`rgba(232, 121, 249, 0.4)`).
  - `.shape-gradient-2`: linear-gradient Purple/Magenta (`rgba(232, 121, 249, 0.4)`) to Amber (`rgba(245, 158, 11, 0.4)`).
- **Glass Borders** (`rgba(255, 255, 255, 0.1)`): Used to define structural hierarchy without solid lines.

## 3. Typography Rules
- **Font Family (Sans)**: `Inter` is the primary workhorse font for all body text, headings, and display text.
- **Font Family (Mono)**: `Geist` is used for tabular data, code, or technical labels.
- **Font Family (Brand)**: `MatrixType` is used for brand logos and specific stylized headings.
- **Typography Styles**: Headings use tight letter spacing (`-0.02em`). Premium text is highlighted using text gradients (`.text-gradient`, `.text-gradient-premium`).

## 4. Component Stylings
- **Buttons**: Often feature gradients, inner glows (`.inner-glow`), and premium drop shadows (`.premium-shadow`). Hover states use `hover-float` for a magnetic, levitating effect.
- **Cards/Containers**: Built using glassmorphism (`.bg-glass`, `.bg-glass-heavy`). They often sit on top of spotlights or bento masks (`.bento-mask`), featuring rounded corners (`rounded-xl` or similar) and subtle translucent borders (`.border-glass`).
- **Inputs/Forms**: Minimalist dark inputs (`#121212`) with animated glows or highlights on focus, removing standard visible outlines.
- **Shadows**: Usage of "Cinematic Glows" (`.glow-primary`) rather than harsh solid dropshadows to elevate elements.

## 5. Layout & Spacing
- **Grid Alignment**: Uses fluid grid layouts with a maximum container width of `1200px`.
- **Spacing Units**:
  - `var(--spacing-unit)`: `6px`
  - `var(--spacing-container-max)`: `1200px`
  - `var(--spacing-section-gap)`: `160px`
  - `var(--spacing-element-gap)`: `32px`
  - `var(--spacing-gutter)`: `32px`

## 6. Motion & Animations
- **Smooth Scroll**: Supported natively via Lenis smooth scrolling integration.
- **Custom Keyframes**:
  - `fadeIn`: Smooth opacity transition.
  - `fadeInUp`: Translates vertically up while fading in.
  - `float` / `float-delayed`: Levitation effect for floating glass layers.
  - `pulseSlow`: Soft pulsing glow.
  - `diamond-rotate`: Ambient rotation for decorative background objects.
