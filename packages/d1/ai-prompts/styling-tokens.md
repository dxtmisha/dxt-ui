# Styling & CSS Variable Tokens

## SCSS Tokens & Variable Usage
Full list of variables: `./src/styles/Ui/vars.scss`.

1. **Naming**: Remove `d1` prefix (except `d-` prefix, keep as is).
2. **System Tokens**: Always use `sys-` (semantic system tokens). Use `ref-` (base reference tokens) only if no suitable `sys-` token exists.
3. **No CSS Hardcoding**: Never hardcode static colors or dimensions. Find the closest matching variable.
4. **Separate Properties**: Do not group colors in shorthand CSS properties.
   - ❌ `background: var(...)` → ✅ `background-color: var(...)`
   - ❌ `border: 1px solid var(...)` → ✅ `border: 1px solid; border-color: var(...)`

## Dynamic Palette Colors
When color is dynamic or changes per theme:
```scss
@use '@dxtmisha/d1/ui-properties' as ui;

.my-component {
  @include ui.paletteBackgroundColor('--sys-palette-primary');
  @include ui.paletteColor('--sys-palette-on-primary');
  @include ui.paletteBorderColor('--sys-palette-outline');
}
```
Available mixins: `paletteColor`, `paletteBackgroundColor`, `paletteBorderColor`, `paletteOutlineColor`, `paletteFill`, `paletteStroke`.

Use global palette classes (`d1-palette--*` from `./src/styles/Ui/classes/d1-palette.scss`) in HTML for dynamic scheme switching.
