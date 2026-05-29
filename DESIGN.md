# Design System: Venvem

## 1. Visual Theme & Atmosphere
The application features a "Dark Premium Glassmorphic" aesthetic. It emphasizes depth, luxury, and a high-tech modern feel. The atmosphere is created through deep blacks, subtle noise grain (`.bg-grain`), atmospheric lighting (`.bg-spotlight`, `.bg-vignette`), and layered glass effects with varying levels of blur.

## 2. Color Palette & Roles
- **Absolute Black** (`#000000`): Used for the main background.
- **Deep Obsidian** (`#050505`): Used for primary surfaces and containers.
- **Surface Dim** (`#0a0a0a`): Used for secondary surfaces and cards.
- **Ghostly White** (`#ffffff`): Used for primary typography.
- **Muted Gray** (`#a0a0a0`): Used for secondary text (`--color-on-surface-variant`).
- **Electric Purple/Teal** (Gradients): Accents applied through shape and text gradients (`.shape-gradient-1`, `.text-gradient-custom`).
- **Glass Borders** (`rgba(255, 255, 255, 0.1)`): Used to define structural hierarchy without solid lines.

## 3. Typography Rules
- **Font Family (Sans)**: `Inter` is the primary workhorse font for all body text, headings, and display text.
- **Font Family (Mono)**: `Geist` is used for tabular data, code, or technical labels.
- **Font Family (Brand)**: `MatrixType` or similar custom font for brand logos and specific stylized headings.
- **Typography Styles**: Headings use tight letter spacing (`-0.02em`). Premium text is highlighted using text gradients (`.text-gradient`, `.text-gradient-premium`).

## 4. Component Stylings
- **Buttons**: Often feature gradients, inner glows (`.inner-glow`), and premium drop shadows (`.premium-shadow`). Hover states use `hover-float` for a magnetic, levitating effect.
- **Cards/Containers**: Built using glassmorphism (`.bg-glass`, `.bg-glass-heavy`). They often sit on top of spotlights or bento masks (`.bento-mask`), featuring rounded corners (`rounded-xl` or similar) and subtle translucent borders (`.border-glass`).
- **Inputs/Forms**: Minimalist dark inputs (`#121212`) with animated glows or highlights on focus, removing standard visible outlines.
- **Shadows**: Usage of "Cinematic Glows" (`.glow-primary`) rather than harsh solid dropshadows to elevate elements.

## 5. Layout Principles
- **Grid Alignment**: Uses fluid grid layouts with a maximum container width of `1200px`.
- **Spacing**: Generous section gaps (`160px`) and element gaps (`32px`) to ensure the design breathes.
- **Motion**: Relies heavily on smooth scrolling (`lenis`), ambient floating elements (`.ambient-motion`), and subtle fade-in-up animations to make the layout feel alive but not distracting.
