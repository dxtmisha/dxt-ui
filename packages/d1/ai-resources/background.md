# SCSS Background & Gradient Guide (`@dxtmisha/d1`)

Guidelines for configuring background colors, surface opacities, gradients, and backdrop filters in SCSS.

---

## 1. Core Principles

- **No CSS shorthand `background:` for colors**: Always use `background-color:` or the `ui.backgroundColor` mixin.
- **Separate background color and opacity**: Background color is defined as an RGB triple token while opacity is managed via `ui.backgroundOpacity`.
- **Dynamic Palette Backgrounds**: Use `ui.paletteBackgroundColor` or `ui.paletteGradient` to allow components to react dynamically to theme palettes (e.g. `.d1-palette--emerald`, `.d1-palette--amber`).

---

## 2. Imports

```scss
// Import all styling mixins and helpers
@use "@dxtmisha/styles" as ui;

// Or when working inside d1 component styles
@use "@dxtmisha/d1/ui-properties" as ui;
```

---

## 3. Available SCSS Mixins

- `ui.backgroundColor($color, $opacity: null)` — Sets CSS `background-color` property using a color token or variable.
- `ui.backgroundOpacity($opacity)` — Modifies the alpha opacity channel for background color.
- `ui.paletteBackgroundColor($varName)` — Dynamically binds background color to a palette variable (e.g. `'--sys-palette-primary'`).
- `ui.gradient($color, $opacity: null)` — Sets linear gradient overlay.
- `ui.gradientOpacity($opacity)` — Modifies the opacity channel for gradient overlays.
- `ui.paletteGradient($varName)` — Dynamically binds gradient overlay to a palette variable.

---

## 4. Usage Examples

### 4.1 Static Surface Background with Opacity
```scss
@use "@dxtmisha/styles" as ui;

.my-card {
  @include ui.backgroundColor(#{var(--d1-sys-palette-surface)});
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-surface-high)});
  backdrop-filter: var(--d1-sys-blur-md);
}

.my-overlay {
  @include ui.backgroundColor(#{var(--d1-sys-palette-scrim)});
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-scrim)});
  backdrop-filter: var(--d1-sys-blur-sm);
}
```

### 4.2 Dynamic Palette Background
```scss
@use "@dxtmisha/d1/ui-properties" as ui;

.my-badge {
  // Filled badge with primary palette color
  @include ui.paletteBackgroundColor('--sys-palette-primary');
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-primary-high)});

  // Muted/soft badge with overlay opacity
  &--subtle {
    @include ui.paletteBackgroundColor('--sys-palette-primary');
    @include ui.backgroundOpacity(#{var(--d1-sys-opacity-overlay)});
  }
}
```

### 4.3 Hover & Focus Interactive Backgrounds
```scss
@use "@dxtmisha/styles" as ui;

.my-list-item {
  position: relative;
  @include ui.gradient(#{var(--d1-sys-palette-primary)});
  @include ui.gradientOpacity(0);
  transition: background-color var(--d-sys-transitionDuration-standard);

  @include ui.hover {
    @include ui.gradientOpacity(#{var(--d1-sys-opacity-hover)});
  }

  @include ui.focus {
    @include ui.gradientOpacity(#{var(--d1-sys-opacity-focus)});
  }
}
```

---

## 5. Best Practices & Anti-Patterns

- ❌ `background: var(--d1-sys-palette-primary);` — Shorthand breaks background-image and gradient resets.
- ❌ `background-color: #ffffff;` — Hardcoded colors break dark mode.
- ✅ `@include ui.backgroundColor(#{var(--d1-sys-palette-surface)}); @include ui.backgroundOpacity(#{var(--d1-sys-opacity-primary-high)});` — Theme-adaptive and token-aligned.
