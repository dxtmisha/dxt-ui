# AI UI/SCSS STYLING DIRECTIVE

**CORE RULE:** NEVER use hardcoded HEX, RGB, or `rgba()` in UI components. ALL colors must use system mixins or JSON tokens.

## 1. What is a "Palette" and When to Use it?

- **What it does:** A palette mixin/token (e.g., `paletteBackgroundColor`) generates a dynamic CSS variable route (binding to a base density weight like `basic600`) instead of a static color. 
- **Why it matters:** If the parent container's theme changes (e.g., `<div class="palette--yellow">`), the component automatically recolors itself while maintaining perfect contrast. You do NOT need to write CSS overrides for different themes.
- **When to use:** Use palettes for the primary visual elements of a component (backgrounds, primary text, borders) that are expected to adapt when the user switches the app's color scheme.
- **When NOT to use:** Do not use palettes for elements that must always remain a fixed color regardless of the theme (e.g., text on top of a primary button must usually remain white to ensure contrast, so it should use a static color token, not a palette token).

## 2. SCSS Mixins (Usage in `.scss` and `.vue` files)

These rules apply strictly to all `.scss` files AND all `<style lang="scss">` blocks within Vue components.

### Dynamic Palette Mixins (Theme-Adaptive)
Use these when the element must change color if the parent container's theme changes:
- `@include paletteBackgroundColor('--sys-palette-primary');`
- `@include paletteColor('--sys-palette-on-primary');`
- `@include paletteBorderColor('--sys-palette-outline');`
- `@include paletteFill('--sys-palette-primary');`
- `@include paletteStroke('--sys-palette-primary');`

### Static Color Mixins (Fixed System Colors)
Use these when the element must ALWAYS stay this exact color, regardless of the parent theme:
- `@include backgroundColor('--sys-background');`
- `@include color('--sys-on-surface');`
- `@include borderColor('--sys-outline');`

## 3. properties.json (Component Configuration)

When configuring UI properties in JSON, use the exact tokens:

### Palette Keys (Theme-Adaptive)
- `"palette-background": "{sys.palette.primary}"`
- `"palette-color": "{sys.palette.primary}"`
- `"palette-border": "{sys.palette.primary}"`
- `"palette-fill": "{sys.palette.primary}"`
- `"palette-stroke": "{sys.palette.primary}"`

### Static Keys
- `"background-color": "{sys.palette.surface}"`
- `"color": "{sys.palette.onSurface}"`
- `"border-color": "{sys.palette.outline}"`

### Opacity (States & Effects)
Always use opacity to define states (hover, focus, disabled). NEVER change the base color variable for a state.
```json
{
  "focus": { "gradient-opacity": "{sys.opacity.focus}" },
  "hover": { "gradient-opacity": "{sys.opacity.hover}" },
  "disabled": {
    "background-color": "{sys.palette.onSurface}",
    "background-opacity": "{sys.opacity.disabled}"
  }
}
```

## 4. STRICT "DO NOT" RULES

1. **DO NOT** use `color:`, `background-color:`, `border-color:` directly in SCSS or Vue styles (except for `transparent` or `inherit`).
2. **DO NOT** mix up `paletteColor` (dynamic) and `color` (static). If it needs to adapt to themes, use the `palette` prefix.
3. **DO NOT** write CSS overrides for themes (e.g., `.palette--red .btn { color: red; }`). Mixins handle this automatically.
4. **DO NOT** merge RGB and opacity. Change opacity ONLY via `--sys-[name]-opacity` or `{sys.opacity.*}`.
5. **DO NOT** use hardcoded density weights (e.g., `600`). Use semantic names (`primary`, `surface`, `error`).
