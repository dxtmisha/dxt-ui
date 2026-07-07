# @dxtmisha/styles Reference

System-wide SCSS styling guidelines and mixin structure.

---

## Architectural Rules & Conventions

1. **Hierarchy**: Use ready-made system mixins instead of custom styling properties whenever a system token/mixin is available.
2. **Standard CSS**: Use raw standard CSS (e.g. `display: block`, `position: absolute`) for single-value properties that do not provide a systemic advantage.
3. **BEM Naming**: Root class name must match component name. Internal elements and modifiers use BEM style (e.g., `.component__element--modifier`).
4. **No Raw Media Queries**: Hardcoded widths in `@media` queries are strictly forbidden. Always use system media mixins.

---

## Core Usage Examples

### 1. Imports
```scss
// Import all variables, mixins, utilities, and helpers
@import '@dxtmisha/styles';

// Import ONLY design system properties and variables
@import '@dxtmisha/styles/properties';
```

### 2. Colors & Palettes (color.scss)
- **Opacity**: Use `backgroundOpacity` / `colorOpacity` to modify alpha channels of system tokens separately.
- **Palette vs static**: Static mixins (`backgroundColor`, `color`) use fixed values. Palette mixins (`paletteBackgroundColor`, `paletteColor`) dynamically bind to semantic variables (e.g., `'--d1-sys-palette-primary'`), reacting to parent palette changes (e.g., `.d1-palette--yellow`).

```scss
.element {
  @include backgroundColor(primary);
  @include color(white);
  @include backgroundOpacity(0.5); // changes only background opacity
  
  &--dynamic {
    @include paletteBackgroundColor('--d1-sys-palette-primary');
  }
}
```

### 3. Layouts & Spacing (flex.scss, padding.scss, margin.scss)
```scss
.container {
  @include flex;
  @include flexDirection(column);
  @include justifyContent(center);
  @include alignItems(center);
  
  @include padding(md);
  @include margin(lg);
  @include radius; // border-radius token
}
```

### 4. Typography (font.scss)
```scss
.title { @include font(titleLarge); }
.text { @include font(bodyMedium); }
```

### 5. Media & Container Queries (media.scss)
Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`.
- Media: `mediaMinWidth($width)`, `mediaMaxWidth($width)`, `mediaMinMaxWidth($min, $max)`.
- Container: `containerMinWidth($width)`, `containerMaxWidth($width)`, `containerMinMaxWidth($min, $max)`.

```scss
.responsive-box {
  width: 100%;
  @include mediaMinWidth('md') { width: 50%; }
}

.container-box {
  display: grid;
  @include containerMinWidth('sm') { grid-template-columns: 1fr 1fr; }
}
```
