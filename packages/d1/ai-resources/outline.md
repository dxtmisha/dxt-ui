# SCSS Outline & Focus Ring Guide (`@dxtmisha/d1`)

Guidelines for applying outlines, accessibility focus rings, outline opacity, and dynamic palette outlines in SCSS.

---

## 1. Core Principles

- **No CSS shorthand `outline:` with color variables**: Always declare `outline-style`, `outline-width`, and `outline-color` / `ui.outlineColor` separately.
- **Accessibility & Focus-Visible**: Use `:focus-visible` for keyboard navigation outlines to avoid showing focus rings during mouse/touch interactions.
- **Dynamic Palette Outlines**: Use `ui.paletteOutlineColor` to bind focus outline rings directly to the active component theme palette.

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

- `ui.outlineColor($color, $opacity: null)` — Sets CSS `outline-color` property using a color token or variable.
- `ui.outlineOpacity($opacity)` — Modifies the alpha opacity channel for outlines.
- `ui.paletteOutlineColor($varName)` — Dynamically binds outline color to a palette variable (e.g. `'--sys-palette-primary'`).

---

## 4. Usage Examples

### 4.1 Accessible Focus-Visible Ring
```scss
@use "@dxtmisha/styles" as ui;

.my-interactive-element {
  outline: none;

  &:focus-visible {
    outline-style: solid;
    outline-width: var(--d1-ref-spacing-1); // 4px
    outline-offset: 2px;
    @include ui.outlineColor(#{var(--d1-sys-palette-primary)});
    @include ui.outlineOpacity(#{var(--d1-sys-opacity-focus)});
  }
}
```

### 4.2 Dynamic Palette Focus Ring
```scss
@use "@dxtmisha/d1/ui-properties" as ui;

.my-button {
  outline: none;

  &:focus-visible {
    outline-style: solid;
    outline-width: var(--d1-ref-spacing-1);
    @include ui.paletteOutlineColor('--sys-palette-primary');
    @include ui.outlineOpacity(#{var(--d1-sys-opacity-focus)});
  }
}
```

---

## 5. Outline Presets Reference (`outline.*`)

- `{outline.sm}` — Width `2px`, color `{sys.palette.primary}`, opacity `{sys.opacity.outline}`
- `{outline.md}` — Width `4px` (`1`), color `{sys.palette.primary}`, opacity `{sys.opacity.outline}`
- `{outline.lg}` — Width `8px` (`2`), color `{sys.palette.primary}`, opacity `{sys.opacity.outline}`
