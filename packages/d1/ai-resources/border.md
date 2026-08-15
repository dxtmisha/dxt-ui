# SCSS Border & Divider Guide (`@dxtmisha/d1`)

Guidelines for applying borders, outlines, dividers, border opacity, and dynamic palette borders in SCSS.

---

## 1. Core Principles

- **No CSS shorthand `border:` with color variables**: Always declare `border-style`, `border-width`, and `border-color` / `ui.borderColor` separately.
- **Separate border color and opacity**: Border color is defined as an RGB triple token while opacity is managed via `ui.borderOpacity`.
- **Dynamic Palette Borders**: Use `ui.paletteBorder` or `ui.paletteBorderColor` to allow components to inherit active theme palette colors dynamically.

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

- `ui.borderColor($color, $opacity: null)` — Sets CSS `border-color` property using a color token or variable.
- `ui.borderOpacity($opacity)` — Modifies the alpha opacity channel for borders.
- `ui.paletteBorder($varName)` — Dynamically binds border color to a palette variable (e.g. `'--sys-palette-outline'`).
- `ui.paletteBorderColor($varName)` — Dynamically binds border color to a palette variable.
- `ui.borderByFilter($color, $width: 1px)` — Border rendering using drop-shadow filter for transparent backgrounds.

---

## 4. Usage Examples

### 4.1 Standard Container Border
```scss
@use "@dxtmisha/styles" as ui;

.my-panel {
  border-style: solid;
  border-width: var(--d1-sys-spacing-outline); // 1px
  @include ui.borderColor(#{var(--d1-sys-palette-outline)});
  @include ui.borderOpacity(#{var(--d1-sys-opacity-outline)});
  border-radius: var(--d1-sys-rounded-md);
}
```

### 4.2 Dynamic Palette Border (e.g. Outline Button)
```scss
@use "@dxtmisha/d1/ui-properties" as ui;

.my-outline-button {
  position: relative;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-style: solid;
    border-width: var(--d1-sys-spacing-outline);
    @include ui.paletteBorderColor('--sys-palette-primary');
    @include ui.borderOpacity(#{var(--d1-sys-opacity-outline)});
    border-radius: inherit;
    transition: border-width var(--d-sys-transitionDuration-standard);
  }

  &:hover::after {
    @include ui.borderOpacity(#{var(--d1-sys-opacity-primary-high)});
  }

  &:active::after {
    border-width: var(--d1-ref-spacing-2px); // 2px
  }
}
```

### 4.3 Divider Lines & Separators
```scss
@use "@dxtmisha/styles" as ui;

.my-divider {
  border: none;
  border-top-style: solid;
  border-top-width: var(--d1-sys-spacing-outline);
  @include ui.borderColor(#{var(--d1-sys-palette-outline)});
  @include ui.borderOpacity(#{var(--d1-sys-opacity-outline)});
  @include ui.marginY(var(--d1-sys-spacing-sm));
}
```

---

## 5. Border Presets Quick Reference (`border.*`)

- `{border.primary}` — Width `1px`, color `{sys.palette.primary}`, opacity `{sys.opacity.surface.medium}`
- `{border.primaryBold}` — Width `2px`, color `{sys.palette.primary}`, opacity `{sys.opacity.surface.medium}`
- `{border.primaryMuted}` — Width `1px`, color `{sys.palette.primary}`, opacity `{sys.opacity.surface.disabled}`
- `{border.error}` — Width `1px`, color `{sys.palette.error}`, opacity `{sys.opacity.surface.medium}`
- `{border.errorBold}` — Width `2px`, color `{sys.palette.error}`, opacity `{sys.opacity.surface.medium}`
