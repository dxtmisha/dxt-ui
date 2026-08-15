# SCSS Border Radius & Corner Rounding Guide (`@dxtmisha/d1`)

Guidelines for applying corner radii, pill shapes, and adaptive height-relative border-radius scaling in SCSS.

---

## 1. Core Principles

- **Use Standard Corner Radii Tokens**: Reference `var(--d1-sys-rounded-*)` for consistent corner rounding across components.
- **Adaptive Height-Relative Radius**: For buttons, chips, and form controls that scale proportionally with their height, calculate radius via `calc(var(--sys-height) * {sys.rounded.adaptive.md})`.
- **Pill Shapes**: Use `var(--d1-sys-rounded-full)` for fully rounded buttons, tags, and status badges.

---

## 2. Imports

```scss
@use "@dxtmisha/styles" as ui;
```

---

## 3. Corner Radii Tokens Catalog (`sys.rounded.*`)

- `{sys.rounded.none}` — `0px`: Sharp squared corners (tables, dividers, flat containers)
- `{sys.rounded.xs}` — `2px`: Subtle rounding for micro badges and tags
- `{sys.rounded.sm}` — `4px`: Compact buttons, checkboxes, tooltips
- `{sys.rounded.md}` — `6px`: Standard inputs, cards, dialogs
- `{sys.rounded.lg}` — `8px`: Large cards, alerts, modals
- `{sys.rounded.xl}` — `16px`: Sheets, drawers, floating action surfaces
- `{sys.rounded.2xl}` — `24px`: Extra-large container cards
- `{sys.rounded.full}` — `128px`: Fully rounded pill buttons and chips

### Adaptive Multipliers (`sys.rounded.adaptive.*`)
- `{sys.rounded.adaptive.sm}` — `0.12`
- `{sys.rounded.adaptive.md}` — `0.24` (Standard button/input radius)
- `{sys.rounded.adaptive.lg}` — `0.32`
- `{sys.rounded.adaptive.xl}` — `0.48` (Near-pill radius)

---

## 4. Usage Examples

### 4.1 Fixed Token Border Radius
```scss
@use "@dxtmisha/styles" as ui;

.my-card {
  border-radius: var(--d1-sys-rounded-lg); // 8px
}

.my-pill-badge {
  border-radius: var(--d1-sys-rounded-full); // Fully rounded
}
```

### 4.2 Proportional Adaptive Radius (Button & Form Fields)
```scss
@use "@dxtmisha/styles" as ui;

.my-button {
  --sys-height: 40px;
  height: var(--sys-height);
  // Calculates border-radius based on active component height: 40px * 0.24 = 9.6px
  border-radius: calc(var(--sys-height) * 0.24);

  &--pill {
    border-radius: calc(var(--sys-height) / 2);
  }
}
```

### 4.3 Directional / Asymmetrical Corner Rounding
```scss
@use "@dxtmisha/styles" as ui;

.my-top-sheet {
  border-top-left-radius: var(--d1-sys-rounded-xl);
  border-top-right-radius: var(--d1-sys-rounded-xl);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
```
