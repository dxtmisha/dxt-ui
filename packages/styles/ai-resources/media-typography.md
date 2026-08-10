# Media Queries, Typography & Rules

## Architectural Rules & Conventions
1. **Hierarchy**: Use ready-made system mixins instead of custom styling properties whenever a system token/mixin is available.
2. **Standard CSS**: Use raw standard CSS (e.g. `display: block`, `position: absolute`) for single-value properties that do not provide a systemic advantage.
3. **BEM Naming**: Root class name must match component name. Internal elements and modifiers use BEM style (`.component__element--modifier`).
4. **No Raw Media Queries**: Hardcoded widths in `@media` queries are strictly forbidden. Always use system media mixins.

## Typography (font.scss)
```scss
.title { @include font(titleLarge); }
.text { @include font(bodyMedium); }
```

## Media & Container Queries (media.scss)
Breakpoints: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`.
- Media mixins: `mediaMinWidth($width)`, `mediaMaxWidth($width)`, `mediaMinMaxWidth($min, $max)`.
- Container mixins: `containerMinWidth($width)`, `containerMaxWidth($width)`, `containerMinMaxWidth($min, $max)`.

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
