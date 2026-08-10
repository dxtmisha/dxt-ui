# SCSS Imports, Colors & Layouts

## Imports
```scss
// Import all variables, mixins, utilities, and helpers
@import '@dxtmisha/styles';

// Import ONLY design system properties and variables
@import '@dxtmisha/styles/properties';
```

## Colors & Palettes (color.scss)
- **Opacity**: Use `backgroundOpacity` / `colorOpacity` to modify alpha channels of system tokens separately.
- **Palette vs Static**: Static mixins (`backgroundColor`, `color`) use fixed values. Palette mixins (`paletteBackgroundColor`, `paletteColor`) dynamically bind to semantic variables (e.g., `'--d1-sys-palette-primary'`), reacting to parent palette changes (e.g., `.d1-palette--yellow`).

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

## Layouts & Spacing (flex.scss, padding.scss, margin.scss)
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
