# Design Tokens & Component Styling Guide (`@dxtmisha/d1`)

Comprehensive architectural reference for design tokens, `properties.json` configuration, token resolution, and SCSS integration in `@dxtmisha/d1`.

---

## 1. Design Token Architecture

The token system in `@dxtmisha/d1` follows a structured **3-tier hierarchy**:

```
1. Reference Tokens (ref.*)  ──>  2. System Tokens (sys.*)  ──>  3. Composite Presets (*.json)
(Raw scales: colors, sizes)       (Semantic purpose & states)      (Typography, Layout, Borders)
                                                                            │
                                                                            ▼
                                                               4. Component properties.json
```

- **Reference Tokens (`ref.*`)** — Located in `src/media/tokens/ref/`:
  - Foundational design scales: raw palette swatches (`blue`, `slate`, `red`), spacing scale (`1 = 4px`, `2 = 8px`, `px = 1px`), typography, shadows, blur, and screen breakpoints.
  - Examples: `{ref.palette.blue.600}`, `{ref.spacing.2}`, `{ref.screen.xl}`.

- **System Tokens (`sys.*`)** — Located in `src/media/tokens/sys/`:
  - Semantic system tokens mapping intent to reference tokens: semantic colors, state opacities, corner radii, spacing, elevations, and typography tokens.
  - Examples: `{sys.palette.primary}`, `{sys.spacing.xs}`, `{sys.rounded.md}`.

- **Composite Presets** — Located in `src/media/tokens/*.json`:
  - Pre-bundled multi-property groups: typography (`font.*`), responsive layout spacing (`layout.*`), borders (`border.*`), outlines (`outline.*`), elevation (`elevation.*`).
  - Examples: `{font.titleMedium}`, `{layout.paddingX}`, `{border.primary}`.

---

## 2. Token Catalog Reference

### 2.1 Spacing & Dimensions (`sys.spacing.*`)

Base unit scale is 4px (`1 = 0.25rem = 4px`):

- `{sys.spacing.outline}`: `{ref.spacing.px}` (`1px`) — Subtle borders, dividers, outlines
- `{sys.spacing.x}`: `{ref.spacing.1}` (`4px` / `0.25rem`) — Micro gaps, tight icon offsets
- `{sys.spacing.xs}`: `{ref.spacing.2}` (`8px` / `0.5rem`) — Compact padding, button gaps, badges
- `{sys.spacing.sm}`: `{ref.spacing.3}` (`12px` / `0.75rem`) — Standard padding Y, group gaps
- `{sys.spacing.md}`: `{ref.spacing.4}` (`16px` / `1rem`) — Standard padding X, container gaps
- `{sys.spacing.lg}`: `{ref.spacing.5}` (`20px` / `1.25rem`) — Large container padding
- `{sys.spacing.xl}`: `{ref.spacing.6}` (`24px` / `1.5rem`) — Modal & card padding
- `{sys.spacing.adaptive.sm}`: `0.2` — Height-relative proportional padding multiplier
- `{sys.spacing.adaptive.md}`: `0.4` — Height-relative proportional padding multiplier
- `{sys.spacing.adaptive.lg}`: `0.6` — Height-relative proportional padding multiplier

---

### 2.2 Semantic Palette & Color (`sys.palette.*`, `sys.color.*`)

Colors are defined as RGB channel triples in `sys.palette.*` and wrapped with alpha opacity channels in `sys.color.*`:

- `{sys.palette.primary}` — Primary brand / accent color (light default: `blue.600`)
- `{sys.palette.primaryVariant}` — Darker / hovered / selected accent variant (light default: `blue.800`)
- `{sys.palette.surface}` — Main background surface (light default: `white.50`)
- `{sys.palette.onPrimary}` — Text / icons displayed on primary background (light default: `slate.50`)
- `{sys.palette.onSurface}` — Text / icons displayed on surface background (light default: `slate.950`)
- `{sys.palette.outline}` — Standard border and outline color (light default: `slate.800`)
- `{sys.palette.outlineVariant}` — Subtle secondary border color (light default: `slate.950`)
- `{sys.palette.scrim}` — Backdrop scrim overlay (light default: `slate.950`)
- `{sys.palette.warning}` — Warning alert / notice color (light default: `yellow.600`)
- `{sys.palette.success}` — Success confirmation color (light default: `green.600`)
- `{sys.palette.error}` — Error & destructive color (light default: `red.600`)

#### State Opacities (`sys.opacity.*`)
- `{sys.opacity.hover}` — Hover background overlay (`0.04`)
- `{sys.opacity.focus}` — Focus ring/fill overlay (`0.12`)
- `{sys.opacity.pressed}` — Active pressed state (`0.10`)
- `{sys.opacity.selected}` — Active selected state (`0.08`)
- `{sys.opacity.disabled}` — Disabled state opacity (`0.12`)
- `{sys.opacity.primary.high}` — High-emphasis content (`0.92`)
- `{sys.opacity.surface.medium}` — Secondary/medium emphasis text (`0.64`)

---

### 2.3 Corner Radii (`sys.rounded.*`)

- `{sys.rounded.none}`: `{ref.spacing.0}` (`0px`) — Squared corners
- `{sys.rounded.xs}`: `{ref.spacing.2px}` (`2px`) — Subtle rounding
- `{sys.rounded.sm}`: `{ref.spacing.4px}` (`4px`) — Small tags, badges
- `{sys.rounded.md}`: `{ref.spacing.6px}` (`6px`) — Inputs, cards, buttons
- `{sys.rounded.lg}`: `{ref.spacing.8px}` (`8px`) — Modals, dialogs, alerts
- `{sys.rounded.xl}`: `{ref.spacing.4}` (`16px`) — Large cards, floating sheets
- `{sys.rounded.full}`: `{ref.spacing.32}` (`128px`) — Fully rounded pill buttons / chips
- `{sys.rounded.adaptive.md}`: `0.24` — Height-relative proportional radius multiplier

---

### 2.4 Typography Presets (`font.*`)

Bundles `font-family`, `font-weight`, `font-size`, `line-height`, and `letter-spacing`:

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

> [!TIP]
> All presets have corresponding `*Emphasized` variants (e.g. `{font.bodyMediumEmphasized}`) that apply `font-weight: 500` or `600`.

---

### 2.5 Responsive Layout Presets (`layout.*`)

Automatically adapts spacing across responsive media queries (`media-max|md`, `media|md`, `media|lg`, `media|xl`):

- `{layout.paddingX}` — Responsive horizontal padding (`12px` on mobile, `16px` on tablet/desktop).
- `{layout.paddingY}` — Responsive vertical padding (`8px` default).
- `{layout.gapX}` — Responsive horizontal gap (`16px` on mobile, `24px` on desktop).
- `{layout.gapY}` — Responsive vertical gap (`24px` on mobile, `32px` on desktop).
- `{layout.marginX}` — Responsive horizontal margin (`12px` on mobile, `48px` on large desktop, `auto` on extra large).

---

## 3. Component `properties.json` Syntax

Each component in `@dxtmisha/d1/src/components/Ui/<Component>/properties.json` defines its token mappings and modifiers.

### 3.1 Syntax Rules & Special Prefixes

- `"main": "{d.<name>}"` — Connects component root to core constructor tokens (e.g. `"main": "{d.alert}"`).
- `"{token.path}"` — Direct token substitution (e.g. `"padding": "{sys.spacing.xs}"`).
- `"var(--sys-height) * {token}"` — Calculated dimension based on component CSS variables (e.g. `"border-radius": "var(--sys-height) * {sys.rounded.adaptive.md}"`).
- `"link|font": "{font.preset}"` — Deep expansion of all font properties (e.g. `"link|font": "{font.titleMedium}"`).
- `"#subElement"` — Styles scoped to child BEM element (`.d1-<comp>__<subElement>`) (e.g. `"#label": { "color": "{sys.palette.onSurface}" }`).
- `"~variant"` — Styles for boolean or enum modifier (`.d1-<comp>--<variant>`) (e.g. `"~primary": { ... }`, `"~secondary": { ... }`).
- `"focus"`, `"hover"`, `"active"` — Pseudo-state styling blocks (e.g. `"hover": { "gradient-opacity": "{sys.opacity.hover}" }`).
- `"disabled"`, `"readonly"` — Component state styling blocks (e.g. `"disabled": { "color-opacity": "{sys.opacity.surface.disabled}" }`).
- `"@@palette": "{palette}"` — Generates color scheme variants (`primary`, `secondary`, `success`, `error`, etc.).
- `"_category": "style"` — Storybook metadata categorization.
- `"_default": true` — Designates the default modifier variant.

---

## 4. Dynamic Palette System (`@@palette`)

When `"@@palette": "{palette}"` is declared in `properties.json`, the build system automatically generates color-themed modifier classes:

- In `properties.json`:
  ```json
  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "color-opacity": "{sys.opacity.primary.high}",
    "palette-background": "{sys.palette.primary}",
    "background-opacity": "{sys.opacity.primary.high}",
    "box-shadow": "{sys.shadow.sm}",
    "backdrop-filter": "{sys.blur.sm}",
    "_category": "style"
  },
  "~secondary": {
    "palette-color": "{sys.palette.primary}",
    "color-opacity": "{sys.opacity.surface.high}",
    "palette-background": "{sys.palette.primary}",
    "background-opacity": "{sys.opacity.overlay}",
    "backdrop-filter": "{sys.blur.sm}",
    "_category": "style",
    "_default": true
  },
  "@@palette": "{palette}"
  ```

- In SCSS (via `@dxtmisha/d1/ui-properties`):
  ```scss
  @use '@dxtmisha/d1/ui-properties' as ui;

  .d1-my-component {
    @include ui.paletteBackgroundColor('--sys-palette-primary');
    @include ui.paletteColor('--sys-palette-on-primary');
    @include ui.paletteBorderColor('--sys-palette-outline');
  }
  ```

Available palette mixins:
- `ui.paletteColor($varName)`
- `ui.paletteBackgroundColor($varName)`
- `ui.paletteBorderColor($varName)`
- `ui.paletteOutlineColor($varName)`
- `ui.paletteFill($varName)`
- `ui.paletteStroke($varName)`

---

## 5. Real-World Component Examples

### 5.1 `Alert/properties.json`
```json
{
  "main": "{d.alert}",
  "linkGap": "{sys.spacing.xs}",
  "gap": "{sys.spacing.lg}",
  "paddingX": "{layout.paddingX}",
  "paddingY": "{layout.paddingY}",
  "border-radius": "{sys.rounded.md}",

  "#icon": {},
  "#trailing": {},
  "#context": {
    "gap": "{sys.spacing.x}"
  },
  "#label": {
    "link|font": "{font.titleMedium}"
  },
  "#actions": {},

  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "color-opacity": "{sys.opacity.primary.high}",
    "palette-background": "{sys.palette.primary}",
    "background-opacity": "{sys.opacity.primary.high}",
    "box-shadow": "{sys.shadow.sm}",
    "backdrop-filter": "{sys.blur.sm}",
    "_category": "style"
  },
  "~secondary": {
    "palette-color": "{sys.palette.primary}",
    "color-opacity": "{sys.opacity.surface.high}",
    "palette-background": "{sys.palette.primary}",
    "background-opacity": "{sys.opacity.overlay}",
    "backdrop-filter": "{sys.blur.sm}",
    "_category": "style",
    "_default": true
  },

  "~itemCenter": {
    "#icon": {
      "margin-top": "0"
    },
    "_default": false
  },

  "@@palette": "{palette}"
}
```

### 5.2 `ClockDial/properties.json`
```json
{
  "main": "{d.clockDial}",
  "padding": "{sys.spacing.xs}"
}
```

---

## 6. Best Practices & Anti-Patterns

### ❌ Anti-Pattern 1: Hardcoding Static Values in `properties.json`
```json
// ❌ WRONG: Hardcoded pixel / hex values
{
  "padding": "8px",
  "background-color": "#ffffff"
}

// ✅ CORRECT: Always reference system tokens
{
  "padding": "{sys.spacing.xs}",
  "background-color": "{sys.palette.surface}"
}
```

### ❌ Anti-Pattern 2: Grouping Colors in CSS Shorthands
```scss
// ❌ WRONG: Shorthand combines style and color variables
border: 1px solid var(--d1-sys-palette-outline);
background: var(--d1-sys-palette-surface);

// ✅ CORRECT: Separate structural and color properties
border-style: solid;
border-width: var(--d1-sys-spacing-outline);
border-color: var(--d1-sys-palette-outline);
background-color: var(--d1-sys-palette-surface);
```

### ❌ Anti-Pattern 3: Skipping `link|font` for Typography
```json
// ❌ WRONG: Fragmented individual font properties miss line-height and letter-spacing
"#label": {
  "font-size": "{sys.font.size.md}",
  "font-weight": "{sys.font.weight.medium}"
}

// ✅ CORRECT: Use link|font for complete typographic coherence
"#label": {
  "link|font": "{font.titleMedium}"
}
```
