# SCSS Color & Palette Guide (`@dxtmisha/d1`)

Guidelines for applying text colors, icon strokes, SVG fills, color opacities, and dynamic palette theming in SCSS.

---

## 1. Core Principles

- **Never hardcode hex or rgb values**: Always use system tokens or SCSS mixins.
- **Separate color and opacity**: Colors are defined as RGB triples (`var(--d1-sys-palette-*)`) while opacity is managed separately via alpha channel mixins (`ui.colorOpacity`, `ui.strokeOpacity`).
- **Dynamic Palette Support**: Use `paletteColor` / `paletteStroke` / `paletteFill` to allow components to inherit parent theme schemes (e.g. `.d1-palette--red`, `.d1-palette--green`).

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

- `ui.color($color, $opacity: null)` — Sets CSS `color` property using a color token or variable.
- `ui.colorOpacity($opacity)` — Modifies the alpha opacity channel for text/foreground color.
- `ui.paletteColor($varName)` — Dynamically binds text color to a palette variable (e.g. `'--sys-palette-primary'`).
- `ui.stroke($color, $opacity: null)` — Sets SVG `stroke` color property.
- `ui.strokeOpacity($opacity)` — Modifies SVG `stroke` opacity channel.
- `ui.paletteStroke($varName)` — Dynamically binds SVG stroke to a palette variable.
- `ui.fill($color, $opacity: null)` — Sets SVG `fill` color property.
- `ui.fillOpacity($opacity)` — Modifies SVG `fill` opacity channel.
- `ui.paletteFill($varName)` — Dynamically binds SVG fill to a palette variable.

---

## 4. Usage Examples

### 4.1 Static Text Color with Opacity
```scss
@use "@dxtmisha/styles" as ui;

.my-title {
  @include ui.color(#{var(--d1-sys-palette-onSurface)});
  @include ui.colorOpacity(#{var(--d1-sys-opacity-primary-high)});
}

.my-caption {
  @include ui.color(#{var(--d1-sys-palette-onSurface)});
  @include ui.colorOpacity(#{var(--d1-sys-opacity-surface-medium)});
}

.my-disabled-text {
  @include ui.color(#{var(--d1-sys-palette-onSurface)});
  @include ui.colorOpacity(#{var(--d1-sys-opacity-surface-disabled)});
}
```

### 4.2 Dynamic Palette Colors
```scss
@use "@dxtmisha/d1/ui-properties" as ui;

.my-button {
  // Binds text color dynamically to the active palette's onPrimary color
  @include ui.paletteColor('--sys-palette-on-primary');

  &--secondary {
    // Binds text color dynamically to the active palette's primary color
    @include ui.paletteColor('--sys-palette-primary');
  }
}
```

### 4.3 SVG Icons & Graphics
```scss
@use "@dxtmisha/styles" as ui;

.my-icon {
  @include ui.stroke(#{var(--d1-sys-palette-primary)});
  @include ui.strokeOpacity(#{var(--d1-sys-opacity-primary-high)});
  @include ui.fill(none);

  &--dynamic {
    @include ui.paletteStroke('--sys-palette-primary');
    @include ui.paletteFill('--sys-palette-surface');
  }
}
```

---

## 5. Best Practices & Anti-Patterns

- ❌ `color: #1e293b;` — Hardcoded hex colors break light/dark mode and dynamic themes.
- ❌ `color: rgba(var(--d1-sys-palette-primary), 0.5);` — Raw manual rgba bypasses opacity token management.
- ✅ `@include ui.color(#{var(--d1-sys-palette-primary)}); @include ui.colorOpacity(#{var(--d1-sys-opacity-surface-medium)});` — Fully tokenized and theme-reactive.
