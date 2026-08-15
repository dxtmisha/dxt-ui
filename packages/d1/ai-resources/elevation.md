# SCSS Elevation, Shadow & Blur Guide (`@dxtmisha/d1`)

Guidelines for applying depth, elevation levels, box shadows, and backdrop-filter blur in SCSS.

---

## 1. Core Principles

- **Use System Shadow Tokens**: Never hardcode manual `box-shadow` values; use standard tokens (`var(--d1-sys-shadow-*)`) to ensure proper light/dark mode elevation rendering.
- **Glassmorphism & Depth**: Combine background surface opacity with `backdrop-filter: var(--d1-sys-blur-*)` and subtle shadows for modern layered UI surfaces.
- **Interactive Depth Shifts**: Increase shadow elevation level on `:hover` or `:active` states for tactile responsiveness.

---

## 2. Imports

```scss
@use "@dxtmisha/styles" as ui;
```

---

## 3. Shadow & Blur Tokens Catalog

### 3.1 Elevation Shadows (`sys.shadow.*`)
- `{sys.shadow.none}` — No shadow (`0`)
- `{sys.shadow.xs}` — Subtle surface lift (`0px 1px 2px`) for chips, badges
- `{sys.shadow.sm}` — Low elevation (`0px 1px 3px`) for cards, buttons
- `{sys.shadow.md}` — Medium elevation (`0px 4px 6px`) for dropdowns, popovers, tooltips
- `{sys.shadow.lg}` — High elevation (`0px 10px 15px`) for dialogs, modals, floating action bars
- `{sys.shadow.xl}` — Deep elevation (`0px 20px 25px`) for drawers, navigation sheets
- `{sys.shadow.2xl}` — Extreme floating elevation (`0px 25px 50px`) for notifications, snackbars

### 3.2 Backdrop Blur Filters (`sys.blur.*`)
- `{sys.blur.none}` — No blur (`blur(0)`)
- `{sys.blur.xs}` — Minimal blur (`blur(0.8px)`)
- `{sys.blur.sm}` — Soft glass blur (`blur(2.4px)`)
- `{sys.blur.md}` — Medium frosted glass blur (`blur(4.8px)`)
- `{sys.blur.lg}` — Heavy frosted glass blur (`blur(6.4px)`)
- `{sys.blur.xl}` — Deep background blur (`blur(8px)`)

---

## 4. Usage Examples

### 4.1 Card Elevation with Interactive Lift
```scss
@use "@dxtmisha/styles" as ui;

.my-card {
  @include ui.backgroundColor(#{var(--d1-sys-palette-surface)});
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-surface-high)});
  border-radius: var(--d1-sys-rounded-lg);
  box-shadow: var(--d1-sys-shadow-sm);
  transition: box-shadow var(--d-sys-transitionDuration-standard);

  @include ui.hover {
    box-shadow: var(--d1-sys-shadow-md);
  }
}
```

### 4.2 Frosted Glass Modal Surface
```scss
@use "@dxtmisha/styles" as ui;

.my-modal {
  @include ui.backgroundColor(#{var(--d1-sys-palette-surface)});
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-surface-high)});
  backdrop-filter: var(--d1-sys-blur-md);
  box-shadow: var(--d1-sys-shadow-lg);
  border-radius: var(--d1-sys-rounded-xl);
}
```

### 4.3 Floating Tooltip & Popover
```scss
@use "@dxtmisha/styles" as ui;

.my-tooltip {
  @include ui.backgroundColor(#{var(--d1-sys-palette-scrim)});
  @include ui.backgroundOpacity(#{var(--d1-sys-opacity-primary-medium)});
  @include ui.color(#{var(--d1-sys-palette-surface)});
  backdrop-filter: var(--d1-sys-blur-md);
  box-shadow: var(--d1-sys-shadow-md);
  border-radius: var(--d1-sys-rounded-md);
}
```
