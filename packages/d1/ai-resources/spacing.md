# SCSS Spacing Guide: Padding, Margin & Gap (`@dxtmisha/d1`)

Guidelines for applying padding, margin, and flex/grid gaps with full bidirectional (RTL / LTR) support in SCSS.

---

## 1. Core Principles

- **Use Direction-Aware Spacing Mixins**: Always use `ui.paddingX`, `ui.paddingLeft`, `ui.marginX`, `ui.marginLeft`, etc. instead of raw `padding-left` or `margin-right`. These compile to CSS logical properties (`padding-inline-start`, `margin-inline-start`) for seamless Right-to-Left (RTL) language compatibility.
- **Reference Standard Spacing Scale**: All spacing values are multiples of 4px (`sys.spacing.*`).
- **Proportional Adaptive Spacing**: For components whose padding scales with height, use `calc(var(--sys-height) * {sys.spacing.adaptive.md})`.

---

## 2. Imports

```scss
@use "@dxtmisha/styles" as ui;
```

---

## 3. Available SCSS Mixins

### 3.1 Padding Mixins
- `ui.padding($value)` — Sets uniform `padding: $value;`.
- `ui.paddingX($value)` — Sets horizontal padding (`padding-inline-start` and `padding-inline-end`).
- `ui.paddingY($value)` — Sets vertical padding (`padding-top` and `padding-bottom`).
- `ui.paddingLeft($value)` — Sets leading horizontal padding (`padding-inline-start: $value;`).
- `ui.paddingRight($value)` — Sets trailing horizontal padding (`padding-inline-end: $value;`).
- `ui.paddingTop($value)` — Sets `padding-top: $value;`.
- `ui.paddingBottom($value)` — Sets `padding-bottom: $value;`.

### 3.2 Margin Mixins
- `ui.margin($value)` — Sets uniform `margin: $value;`.
- `ui.marginX($value)` — Sets horizontal margin (`margin-inline-start` and `margin-inline-end`).
- `ui.marginY($value)` — Sets vertical margin (`margin-top` and `margin-bottom`).
- `ui.marginLeft($value)` — Sets leading horizontal margin (`margin-inline-start: $value;`).
- `ui.marginRight($value)` — Sets trailing horizontal margin (`margin-inline-end: $value;`).
- `ui.marginTop($value)` — Sets `margin-top: $value;`.
- `ui.marginBottom($value)` — Sets `margin-bottom: $value;`.

---

## 4. Usage Examples

### 4.1 Component Container Padding
```scss
@use "@dxtmisha/styles" as ui;

.my-card {
  @include ui.paddingX(var(--d1-sys-spacing-md)); // 16px
  @include ui.paddingY(var(--d1-sys-spacing-sm)); // 12px
  box-sizing: border-box;

  &--compact {
    @include ui.paddingX(var(--d1-sys-spacing-sm)); // 12px
    @include ui.paddingY(var(--d1-sys-spacing-xs)); // 8px
  }
}
```

### 4.2 Element Offsets with Direction Support (RTL/LTR)
```scss
@use "@dxtmisha/styles" as ui;

.my-button {
  &__icon {
    // Correctly shifts margin on the left in LTR, on the right in RTL
    @include ui.marginRight(var(--d1-sys-spacing-xs));
  }

  &__trailingIcon {
    @include ui.marginLeft(var(--d1-sys-spacing-xs));
  }
}
```

### 4.3 Flex & Grid Gaps
```scss
@use "@dxtmisha/styles" as ui;

.my-button-group {
  display: flex;
  align-items: center;
  gap: var(--d1-sys-spacing-xs); // 8px
}

.my-form-grid {
  display: grid;
  gap: var(--d1-sys-spacing-md); // 16px
}
```

---

## 5. Spacing Token Quick Reference (`sys.spacing.*`)

- `{sys.spacing.x}`: `4px` (`0.25rem`) — Micro gaps, tight icon offsets
- `{sys.spacing.xs}`: `8px` (`0.5rem`) — Compact padding, button gaps, badges
- `{sys.spacing.sm}`: `12px` (`0.75rem`) — Standard padding Y, group gaps
- `{sys.spacing.md}`: `16px` (`1rem`) — Standard padding X, container gaps
- `{sys.spacing.lg}`: `20px` (`1.25rem`) — Large container padding
- `{sys.spacing.xl}`: `24px` (`1.5rem`) — Modal & card padding
