# SCSS Mixins Reference (@dxtmisha/styles)

Complete reference of available SCSS mixins and utilities in `@dxtmisha/styles`.

---

## 1. Colors & Palettes (`color.scss`)
- **`@include color($color, $opacity, $important, $propertyName)`** — Sets text color with optional decoupled opacity.
- **`@include colorOpacity($opacity, $important, $init, $propertyName)`** — Changes only the text color opacity.
- **`@include backgroundColor($color, $opacity, $important, $propertyName)`** — Sets background color with optional decoupled opacity.
- **`@include backgroundOpacity($opacity, $important, $init, $propertyName)`** — Changes only background opacity.
- **`@include borderColor($color, $opacity, $important)`** / **`@include borderOpacity($opacity)`** — Border color and opacity.
- **`@include outlineColor($color, $opacity, $important)`** / **`@include outlineOpacity($opacity)`** — Outline color and opacity.
- **`@include fill($color, $opacity)`** / **`@include fillOpacity($opacity)`** — SVG fill color and opacity.
- **`@include stroke($color, $opacity)`** / **`@include strokeOpacity($opacity)`** — SVG stroke color and opacity.
- **`@include gradient($color, $opacity)`** / **`@include gradientOpacity($opacity)`** — Gradient color and opacity.
- **`@include palette($color)`** / **`@include paletteVar($color)`** — Sets palette context.
- **`@include paletteColor($color)`** — Sets text color from palette (`--d1-sys-palette-*`).
- **`@include paletteBackground($color)`** — Sets background color from palette.
- **`@include paletteBorder($color)`** — Sets border color from palette.
- **`@include paletteStroke($color)`** / **`@include paletteFill($color)`** — SVG stroke/fill from palette.
- **`@include paletteGradient($color)`** — Gradient from palette.
- **`@include colorAsPalette()`** — Binds text color to current palette.
- **`@include backgroundAsColor()`** / **`@include borderAsColor()`** / **`@include outlineAsColor()`** — Uses current color token for background, border, or outline.
- **`@include borderByFilter($color, $width)`** — Simulates border via drop-shadow filter.
- **`@include backgroundSize($value)`** — Sets background size.
- **`@include initPalette`** — Initializes CSS variables for palette.

---

## 2. Flexbox (`flex.scss`)
- **`@include flex`** — `display: flex`.
- **`@include flexInline`** — `display: inline-flex`.
- **`@include flexX`** — Horizontal flex (`align-items: center`).
- **`@include flexY`** — Vertical flex column (`align-items: center; flex-flow: column`).
- **`@include flexStretchX`** / **`@include flexStretchY`** — Horizontal/vertical flex with `align-items: stretch`.
- **`@include flexCenter`** — Centered flex (`justify-content: center; align-items: center`).
- **`@include flexBetween`** — Space-between flex (`justify-content: space-between; align-items: center`).
- **`@include flexInlineX`** / **`@include flexInlineY`** — Inline horizontal/vertical flex (`align-items: center`).
- **`@include flexInlineCenter`** / **`@include flexInlineBetween`** — Inline flex centered or space-between.
- **`@include flexPosition($value)`** — Dynamic flex position preset (`'x'`, `'y'`, `'center'`, `'between'`, `'inline-*'`).
- **`@include flexDynamic`** — Flexible child item (`flex: 1 1 1px`).
- **`@include justifyContent($value)`** — Direction-aware `justify-content`.

---

## 3. Spacing: Margin & Padding (`margin.scss`, `padding.scss`)
- **`@include padding($value)`** / **`@include margin($value)`** — Sets full padding/margin.
- **`@include paddingX($value)`** / **`@include marginX($value)`** — Horizontal spacing (bidirectional `inline-start` & `inline-end`).
- **`@include paddingY($value)`** / **`@include marginY($value)`** — Vertical spacing (`top` & `bottom`).
- **`@include paddingLeft($value)`** / **`@include marginLeft($value)`** — Logical start spacing (`padding-inline-start` / `margin-inline-start`).
- **`@include paddingRight($value)`** / **`@include marginRight($value)`** — Logical end spacing (`padding-inline-end` / `margin-inline-end`).
- **`@include paddingTop($value)`** / **`@include marginTop($value)`** — Top spacing.
- **`@include paddingBottom($value)`** / **`@include marginBottom($value)`** — Bottom spacing.

---

## 4. Sizing & Dimensions (`dimension.scss`)
- **`@include width($value)`** / **`@include height($value)`** — Sets width/height via `--sys-width` / `--sys-height`.
- **`@include widthDevice($value)`** / **`@include heightDevice($value)`** — Dynamic viewport units (`dvw` / `dvh`).
- **`@include maxWidthDevice($value)`** / **`@include maxHeightDevice($value)`** — Max dynamic viewport units (`dvw` / `dvh`).
- **`@include widthBasis($value)`** / **`@include heightBasis($value)`** — Sets width/height and `flex-basis` with 100% max boundary.
- **`@include aspectRatio($value)`** / **`@include aspectRatioWidth($value)`** / **`@include aspectRatioHeight($value)`** — Sets `aspect-ratio`.
- **`@include squared($value)`** — Sets width and 1:1 aspect ratio.
- **`@include circle($value)`** — Square with `border-radius: 100%`.

---

## 5. Positioning (`position.scss`)
- **`@include inset($value: 0)`** — Sets CSS `inset`.
- **`@include horizon($value: 0)`** — Sets `left` and `right`.
- **`@include vertically($value: 0)`** — Sets `top` and `bottom`.
- **`@include top($value: 0)`** / **`@include bottom($value: 0)`** — Anchors top/bottom with horizontal stretch (`left: 0; right: 0`).
- **`@include left($value: 0px)`** / **`@include right($value: 0px)`** — Logical directional insets (`inset-inline-start` / `inset-inline-end`).
- **`@include absolute($value: 0)`** — `position: absolute; inset: $value`.
- **`@include absoluteTop($value: 0)`** / **`@include absoluteBottom($value: 0)`** — `position: absolute` with top/bottom anchor.
- **`@include absoluteAfter($value: 0)`** — `position: relative` with `&::after` absolute overlay.

---

## 6. Media & Container Queries (`media.scss`)
- **`@include mediaMinWidth($width)`** — `@media screen and (min-width: ...)` using breakpoints (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`).
- **`@include mediaMaxWidth($width)`** — `@media screen and (max-width: ...)`.
- **`@include mediaMinMaxWidth($min, $max)`** — `@media screen and (min-width: ...) and (max-width: ...)`.
- **`@include mediaPrefersReducedMotion`** — `@media (prefers-reduced-motion: reduce)`.
- **`@include containerMinWidth($width)`** — `@container (min-width: ...)`.
- **`@include containerMaxWidth($width)`** — `@container (max-width: ...)`.
- **`@include containerMinMaxWidth($min, $max)`** — `@container (min-width: ...) and (max-width: ...)`.

---

## 7. Typography (`font.scss`)
- **`@include fontSize($value)`** — Sets `font-size` via `--sys-font-size`.
- **`@include lineHeight($value)`** — Sets `line-height` via `--sys-line-height`.
- **`@include textAlign($value)`** — Direction-aware `text-align` (`left`, `right`, etc.).
- **`@include textOverflow($value)`** — Sets `text-overflow` (supports `'truncate'`).
- **`@include textCase($value)`** — Sets `text-transform`.
- **`@include textSelectNone`** — Disables text selection (`user-select: none`).
- **`@include clamp($clamp)`** — Multi-line text clamping with ellipsis.
- **`@include truncate`** — Single-line text truncation with ellipsis.
- **`@include paragraphSpacing($value)`** — Sets paragraph spacing CSS variable (`--sys-paragraph-spacing`).
- **`@include initParagraphSpacing`** — Initializes paragraph sibling spacing (`p + p`).

---

## 8. Interactive Selectors & States (`selector.scss`)
- **`@include selector($name, $parent)`** — Applies pseudo-class with parent state support.
- **`@include enabled($parent)`** — Targets enabled state (filters out `:disabled`, `--disabled`, `--readonly`, `--loading`).
- **`@include enabledSelector($name, $parent)`** — Applies pseudo-selector on enabled elements.
- **`@include hover($parent)`** — Enabled `:hover` state.
- **`@include active($parent)`** — Enabled `:active` state.
- **`@include focus($parent)`** — Enabled `:focus` / `:focus-within` state.
- **`@include disabled($parent)`** — Disabled states (`:disabled`, `--disabled`).
- **`@include readonly($parent)`** — Readonly states (`--readonly`).

---

## 9. Transforms (`transform.scss`)
- **`@include translateX($value)`** — Direction-aware X translation.
- **`@include translateY($value)`** — Y translation.
- **`@include scale($value)`** — CSS `scale`.
- **`@include rotate($value)`** — CSS `rotate`.
- **`@include transformInit`** — Applies full CSS `transform` from variables.
- **`@include translateInit`** — Applies CSS `translate`.
- **`@include initTransform`** — Resets transform CSS variables.

---

## 10. Direction (RTL/LTR) (`dir.scss`)
- **`@include initDir`** — Initializes root directional CSS variables (`--d-dir`, etc.).
- **`@include dirToRtl`** — Switches container to RTL mode and swaps directional CSS variables.

---

## 11. Content & Performance (`content.scss`)
- **`@include contentVisibility($value, $display)`** — Sets `content-visibility` with fallback support.

---

## 12. Scrollbar (`scrollbar.scss`)
- **`@include scrollbarHide`** — Hides scrollbar across browsers while preserving scroll functionality.

---

## 13. Global Init (`init.scss`)
- **`@include initGlobal`** — Global CSS reset, border defaults, direction init, palette init, and typography init.

---

## 14. Configuration Setters (`variables.scss`)
- **`@include setDesignsDesign($design)`** / **`@include setDesignsComponent($component)`** / **`@include setDesignsMedia($media)`** / **`@include setDesignsPalette($palette)`** — Global SCSS configuration setters.
