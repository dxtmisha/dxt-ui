# SCSS Typography & Text Formatting Guide (`@dxtmisha/d1`)

Guidelines for applying font styles, text sizing, line heights, letter spacing, text truncation, and multi-line clamping in SCSS.

---

## 1. Core Principles

- **Use Typography Presets (`font.*`)**: Prefer complete font presets that synchronize font size, weight, line-height, and letter-spacing.
- **Direction-Aware Text Alignment**: Use `ui.textAlign('left')` or `ui.textAlign('right')` for bidirectional (RTL / LTR) text alignment.
- **Standardized Truncation**: Use `ui.truncate` for single-line ellipsis and `ui.clamp($lines)` for multi-line clamping.

---

## 2. Imports

```scss
@use "@dxtmisha/styles" as ui;
```

---

## 3. Available SCSS Mixins

- `ui.fontSize($value)` — Sets `--sys-font-size: $value; font-size: var(--sys-font-size);`.
- `ui.lineHeight($value)` — Sets `--sys-line-height: $value; line-height: var(--sys-line-height);`.
- `ui.textAlign($value)` — Direction-aware text alignment (`left` -> `inline-start`, `right` -> `inline-end`, or standard values).
- `ui.truncate` — Single-line truncation with ellipsis (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`).
- `ui.clamp($lines)` — Multi-line truncation up to `$lines` lines with `-webkit-line-clamp`.
- `ui.textSelectNone` — Disables text highlighting (`user-select: none; touch-callout: none;`).

---

## 4. Typography Presets Catalog (`font.*`)

- `{font.bodySmall}` — Size `12px` (`xs`), line-height `16px` (`xs`), weight `400` (`regular`). Captions, footnotes, microcopy.
- `{font.bodyMedium}` — Size `14px` (`sm`), line-height `20px` (`sm`), weight `400` (`regular`). Default body copy, descriptions.
- `{font.bodyLarge}` — Size `16px` (`md`), line-height `24px` (`md`), weight `400` (`regular`). Large body text, lead paragraphs.
- `{font.labelSmall}` — Size `11px` (`x`), line-height `16px` (`xs`), weight `500` (`medium`). Badges, tiny tags.
- `{font.labelMedium}` — Size `12px` (`xs`), line-height `16px` (`xs`), weight `500` (`medium`). Input labels, button labels.
- `{font.labelLarge}` — Size `14px` (`sm`), line-height `20px` (`sm`), weight `500` (`medium`). Standard button text.
- `{font.titleSmall}` — Size `14px` (`sm`), line-height `20px` (`sm`), weight `500` (`medium`). Card headers, list section headers.
- `{font.titleMedium}` — Size `16px` (`md`), line-height `24px` (`md`), weight `500` (`medium`). Alert titles, dialog titles.
- `{font.titleLarge}` — Size `22px` (`lg`), line-height `28px` (`lg`), weight `500` (`medium`). Section titles.
- `{font.headlineMedium}` — Size `28px`, line-height `36px`, weight `400`. Page section titles.
- `{font.headlineLarge}` — Size `32px`, line-height `40px`, weight `400`. Main page hero titles.

---

## 5. Usage Examples

### 5.1 Single-Line Text Truncation
```scss
@use "@dxtmisha/styles" as ui;

.my-title {
  @include ui.truncate;
  font-family: var(--d1-sys-font-family-basic);
  font-weight: var(--d1-sys-font-weight-medium);
  @include ui.fontSize(var(--d1-sys-font-size-md));
  @include ui.lineHeight(var(--d1-sys-lineHeight-md));
}
```

### 5.2 Multi-Line Description Clamping (e.g. 2 lines)
```scss
@use "@dxtmisha/styles" as ui;

.my-description {
  @include ui.clamp(2);
  font-family: var(--d1-sys-font-family-basic);
  @include ui.fontSize(var(--d1-sys-font-size-sm));
  @include ui.lineHeight(var(--d1-sys-lineHeight-sm));
  letter-spacing: var(--d1-sys-letterSpacing-md);
}
```

### 5.3 Non-Selectable Interactive Labels
```scss
@use "@dxtmisha/styles" as ui;

.my-button-label {
  @include ui.textSelectNone;
  font-family: var(--d1-sys-font-family-basic);
  font-weight: var(--d1-sys-font-weight-medium);
  @include ui.fontSize(var(--d1-sys-font-size-sm));
}
```
