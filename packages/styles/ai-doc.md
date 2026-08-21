Foundational SCSS framework, mixins, and design tokens engine for DXT UI.

Key capabilities:
- **Colors & Palettes**: Decoupled opacity (`backgroundOpacity`, `colorOpacity`), dynamic palette variables (`paletteBackgroundColor`, `paletteColor`).
- **Responsive & Layout**: Breakpoints & media query mixins (`mediaMinWidth`, `containerMinWidth`), flexbox, and spacing tokens (`padding`, `margin`, `radius`).
- **Typography**: Preset mixins (`@include font(...)`).
- **Imports**: `@import '@dxtmisha/styles'` (all mixins and utilities) or `@import '@dxtmisha/styles/properties'` (tokens and CSS variables only).

## Mandatory Rules & References
- **Full Mixins Reference**: See `ai-resources/mixins.md` for the complete list of all available mixins and utilities.
- **Zero Inventions**: **STRICTLY FORBIDDEN to invent custom mixins, custom utility classes, or raw media queries**. ALWAYS reuse existing mixins from `@dxtmisha/styles`.
