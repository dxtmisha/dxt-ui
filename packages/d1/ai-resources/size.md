# SCSS Sizing & Dimensions Guide (`@dxtmisha/d1`)

Guidelines for managing component widths, heights, sizing scales, aspect ratios, and viewport units in SCSS.

---

## 1. Core Principles

- **Use CSS Variables for Component Dimensions**: Use `--sys-width` and `--sys-height` to allow component-level scaling and sub-element sizing calculations.
- **Reference Standard Sizing Tokens**: Use `{sys.spacing.size.*}` for standardized dimension steps (e.g. `size-xs = 16px`, `size-sm = 24px`, `size-md = 40px`, `size-lg = 48px`, `size-xl = 56px`).
- **Use Dynamic Viewport Units**: Use `dvw` / `dvh` (dynamic viewport units) through system device mixins to handle mobile browser address bars and keyboards correctly.

---

## 2. Imports

```scss
@use "@dxtmisha/styles" as ui;
```

---

## 3. Available SCSS Mixins

- `ui.width($value)` — Sets `--sys-width: $value; width: var(--sys-width);`.
- `ui.height($value)` — Sets `--sys-height: $value; height: var(--sys-height);`.
- `ui.widthDevice($value)` — Sets width using dynamic viewport width (`${value}dvw`).
- `ui.heightDevice($value)` — Sets height using dynamic viewport height (`${value}dvh`).
- `ui.maxWidthDevice($value)` — Sets `max-width: ${value}dvw;`.
- `ui.maxHeightDevice($value)` — Sets `max-height: ${value}dvh;`.
- `ui.widthBasis($value)` — Sets width with `flex-basis: var(--sys-width); max-width: 100%;`.
- `ui.heightBasis($value)` — Sets height with `flex-basis: var(--sys-height); max-height: 100%;`.
- `ui.aspectRatio($value)` — Sets `aspect-ratio: $value;`.

---

## 4. Usage Examples

### 4.1 Component Dimensions via System Variables
```scss
@use "@dxtmisha/styles" as ui;

.my-button {
  @include ui.height(var(--d1-sys-spacing-size-md)); // 40px
  box-sizing: border-box;

  &--large {
    @include ui.height(var(--d1-sys-spacing-size-xl)); // 56px
  }

  &--iconOnly {
    @include ui.width(var(--sys-height));
    @include ui.aspectRatio('1 / 1');
  }
}
```

### 4.2 Modal & Dialog Viewport Constraints
```scss
@use "@dxtmisha/styles" as ui;

.my-modal {
  @include ui.maxWidthDevice(90); // 90dvw
  @include ui.maxHeightDevice(85); // 85dvh
  box-sizing: border-box;
}

.my-fullscreen-sheet {
  @include ui.widthDevice(100); // 100dvw
  @include ui.heightDevice(100); // 100dvh
}
```

### 4.3 Flex Sizing Basis
```scss
@use "@dxtmisha/styles" as ui;

.my-sidebar {
  @include ui.widthBasis(calc(var(--d1-ref-spacing-px) * 280));
}

.my-content {
  flex: 1 1 auto;
  min-width: 0;
}
```

---

## 5. Standard Sizing Token Reference (`sys.spacing.size.*`)

- `{sys.spacing.size.xs}`: `16px` (`4` / `1rem`) — Tiny indicators, mini icons
- `{sys.spacing.size.sm}`: `24px` (`6` / `1.5rem`) — Standard icons, small chips
- `{sys.spacing.size.md}`: `40px` (`10` / `2.5rem`) — Default input/button height
- `{sys.spacing.size.lg}`: `48px` (`12` / `3rem`) — Large buttons, list item heights
- `{sys.spacing.size.xl}`: `56px` (`14` / `3.5rem`) — Form field heights, header bars
- `{sys.spacing.size.2xl}`: `64px` (`16` / `4rem`) — Avatar size, navigation rail
- `{sys.spacing.size.3xl}`: `72px` (`18` / `4.5rem`) — Large cards, media thumbs
- `{sys.spacing.size.4xl}`: `80px` (`20` / `5rem`) — Large banners, dialog icons
