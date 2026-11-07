---
name: wiki-descriptions
description: Generate and update bilingual component descriptions, MDX documentation, Storybook stories, and automated test stories in packages/wiki (wikiDescriptions[Component].ts, wikiMdx[Component].ts, events, slots, and Storybook integration).
---

# Component Wiki Descriptions, MDX Documentation & Test Stories (`packages/wiki`)

## Role & Context
You are an expert Frontend Developer, Technical Writer, and QA Engineer for the `dxt-ui` design system and `@dxtmisha/constructor`.
Your goal is to create or update complete, industrial-grade bilingual documentation (English and Russian) and Storybook stories in `packages/wiki` so that `wikiDescriptions[Component].ts` serves simultaneously as:
1. **Clean, high-signal interactive documentation** for MDX (`D1[Component].mdx`, `M2[Component].mdx`, etc.).
2. **An exhaustive automated Storybook test suite** (`D1[Component].stories.ts`) covering 100% of component props, events, slots, exposed methods/properties, input data types, and interacting prop combinations.

**Reference Standard (Gold Standard):**
Always treat `packages/wiki/src/media/descriptions/wikiDescriptionsImage.ts` as the canonical reference implementation.

---

## Architecture & Directory Structure

All documentation and story definitions reside in `packages/wiki/src/media/`:

```text
packages/wiki/src/media/
├── mdx/
│   ├── [Component]/
│   │   ├── [component].en.mdx               # Main English description
│   │   ├── [component].ru.mdx               # Main Russian description
│   │   ├── event.<eventName>.en.mdx         # (Optional) Local event in English
│   │   ├── event.<eventName>.ru.mdx         # (Optional) Local event in Russian
│   │   └── wikiMdx[Component].ts            # MDX mapping export
│   └── wikiMdx.ts                           # Global MDX aggregator (strictly alphabetical)
└── descriptions/
    ├── wikiDescriptions[Component].ts       # Metadata, stories, play tests, documentation links
    └── wikiDescriptions.ts                  # Global descriptions aggregator (strictly alphabetical)
```

---

## Step 1: Deep Component & Architecture Analysis

Before writing or modifying files in `packages/wiki`, you **MUST** inspect the component's source files in `packages/constructor/src/constructors/[Component]/`:

1. **`props.ts`**:
   - List every single prop, its TypeScript type, default value, tokens, and included features (`EnabledProps`, `FieldLabelPropsInclude`, `FieldMessagePropsInclude`, `SkeletonPropsInclude`, etc.).
   - Identify **coupled / interacting props** (e.g., `disabled + selected`, `turn + disabled`, `turn + hide`, `disabled + hide`, `static + tagImg`, `adaptive + objectWidth + objectHeight`, `coordinator` vs `x`/`y`, `loading + disabled`, `readonly + disabled`).
2. **`types.ts` & `basicTypes.ts`**:
   - Extract all `Emits` (`[Component]Emits`: `onClick`, `load`, `add`, `update:modelValue`, etc.) and their payload types (e.g., `ImageEventData`). Identify which events are standard global events vs. component-specific events.
   - Extract all `Slots` (`[Component]Slots`: `default`, `label`, `description`, `prefix`, `suffix`, etc.) and slot scope props.
   - Extract all `Expose` properties and methods (`[Component]Expose`: `value`, `getType()`, `getData()`, `open()`, `clear()`, `focus()`, `setValue()`).
3. **`[Component]Design.tsx` & `[Component].ts` (plus helper/sub-classes)**:
   - Understand how the component renders DOM elements, tags, CSS modifier classes (`--turn`, `--disabled`, `--hide`, `--type--*`, `--adaptive`, etc.), inline styles (`--d1-image-sys-*`, `background-image`), and accessibility attributes (`role`, `aria-label`, `aria-hidden`, `aria-disabled`, `tabindex`).
   - Identify priority/override rules (for example, `coordinator` overriding `x` and `y`, or `picture` requiring `tagImg` to render `<picture>`).
4. **Prop Presets (`packages/wiki/src/media/props/wiki[Prop].ts`)**:
   - Check how props are categorized (`status`, `content`, `display`, `style`, `performance`, `accessibility`, `actions`, etc.) or whether `isTest: true` / `hide: true` is configured.

---

## Step 2: Main Component MDX Documentation (`mdx/[Component]/`)

Create `packages/wiki/src/media/mdx/[Component]/[component].en.mdx` and `[component].ru.mdx`:

### Critical Rules for Main MDX Files:
- **NO Headers at the top**: The file must start directly with the descriptive paragraph. **STRICTLY FORBIDDEN** to include `## Description`, `## Описание`, or `# [Component]`.
- Always import Storybook Source block: `import { Source } from '@storybook/addon-docs/blocks';`.
- Follow the standard sections:
  1. Concise introductory paragraph followed by a detailed architecture overview.
  2. `**Key features:**` (EN) / `**Основные возможности:**` (RU) bullet points with bold key concepts.
  3. `**Common use cases:**` (EN) / `**Типовые сценарии использования:**` (RU) bullet points.
  4. `<Source code={`...`} language="html"/>` block with clean, realistic usage markup.
  5. Concluding blockquote summary: `> [Component] ...`.

**Example (`[component].en.mdx`):**
```mdx
import { Source } from '@storybook/addon-docs/blocks';

The `InputFileDropzone` component is a form control that pairs a drag-and-drop file upload zone with integrated field label and message containers.

It encapsulates the complete file dropping and selection pipeline into a ready-to-use input field...

**Key features:**

- **Interactive File Upload:** Drag-and-drop file upload zone with click-to-browse file dialog
- **Single & Multiple Selection:** Configurable single or multi-file selection via `multiple` prop
- **Field Anatomy Integration:** Cohesive integration with field label, counter, and validation messages

**Common use cases:**

- Document and attachment upload inputs in forms
- Image collection and resume upload fields

<Source
    code={`
<template>
  <InputFileDropzone
    label="Upload documents"
    accept=".pdf,.docx"
    @add="onAdd"
  />
</template>
  `}
    language="html"
/>

> InputFileDropzone combines intuitive drag-and-drop file selection with form field ergonomics and accessibility standards.
```

---

## Step 3: Event MDX Documentation & MDX Mapping (`wikiMdx[Component].ts`)

### 1. Event MDX Files
- **Standard Global Events**: Events such as `click`, `input`, `change`, `focus` are already defined globally in `packages/wiki/src/media/mdx/event/` under `'Event'`. Do **NOT** create local MDX files for them.
- **Component-Specific Events**: For events unique to the component (e.g., `load`, `add`, `close`, `sticky`):
  - File naming: **strictly singular** `event.<eventName>.en.mdx` and `event.<eventName>.ru.mdx` (e.g., `event.add.en.mdx` / `event.add.ru.mdx`).
  - Structure:
    1. Import `Source` from `'@storybook/addon-docs/blocks'`.
    2. Header with the event name: `### \`<eventName>\``.
    3. Brief explanation of when the event triggers.
    4. `**Parameters:**` / `**Параметры:**` list with type signatures.
    5. `<Source>` code example.

### 2. MDX Mapping (`wikiMdx[Component].ts`) & Aggregator Registration
Create `packages/wiki/src/media/mdx/[Component]/wikiMdx[Component].ts`:
```typescript
import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputFileDropzoneEn from './inputFileDropzone.en.mdx'
import inputFileDropzoneRu from './inputFileDropzone.ru.mdx'
import inputFileDropzoneAddEn from './event.add.en.mdx'
import inputFileDropzoneAddRu from './event.add.ru.mdx'

/**
 * MDX files for InputFileDropzone component
 *
 * MDX файлы для компонента InputFileDropzone
 */
export const wikiMdxInputFileDropzone: StorybookComponentsMdxItem = {
  name: 'InputFileDropzone',
  descriptions: {
    'inputFileDropzone': {
      en: inputFileDropzoneEn,
      ru: inputFileDropzoneRu
    },
    'event.add': {
      en: inputFileDropzoneAddEn,
      ru: inputFileDropzoneAddRu
    }
  }
}
```
- **Register in `packages/wiki/src/media/mdx/wikiMdx.ts`**: Import `wikiMdx[Component]` and insert it into the `wikiMdx` array in **strict alphabetical order**.

---

## Step 4: Code Generation Pipeline Constraints (`DesignComponent.ts`)

`dxt-ui` (`DesignComponent.ts`) compiles `wikiDescriptions[Component].ts` into design-system-specific `*.stories.ts` and `*.mdx` files (`D1[Component]`, `M2[Component]`, etc.). You **MUST** follow these technical rules so code generation never breaks:

1. **Generic Placeholders & No D1 References**:
   - Component tag in templates: `<DesignComponent ... />` (automatically replaced with `<D1Image ... />`, `<D1Button ... />`, etc.).
   - Child components in `components: ['Skeleton']`: `<DesignSkeleton ... />` (automatically replaced with `<D1Skeleton ... />`).
   - Base CSS class in `play` functions and styles: `.design-component` (automatically replaced with `.d1-image`, `.d1-button`, etc.).
   - CSS custom properties in `play` functions: `--design-component-...` (automatically replaced with `--d1-image-...`, etc.).
   - **NEVER** hardcode `D1`, `M2`, `d1-`, `m2-`, or design-system-specific size modifiers (`sm`, `md`, `lg`) inside `wikiDescriptions[Component].ts`. Document strictly constructor-level baseline capabilities.
2. **STRICT PROHIBITION: No Backticks Inside `render` or `story.template`**:
   - `DesignComponent.ts` injects `story.template` directly inside a template literal:
     ```ts
     template: `
       ${template}
     `
     ```
   - Using backticks (even escaped `` \`...\` ``) inside `render` or `story.template` produces unescaped nested backticks in the generated `*.stories.ts` file and crashes Storybook/Vite with `Unexpected token, expected ","`.
   - **Rule**: Always use single-quoted string concatenation inside Vue template bindings:
     - **WRONG**: `:value="\`image:\${image1}\`"`
     - **CORRECT**: `:value="'image:' + image1"`
3. **Auto-Imported `storybook/test` Utilities in `play`**:
   - `DesignComponent.ts` scans `story.play` and automatically adds `import { ... } from 'storybook/test'` for:
     `expect`, `within`, `userEvent`, `waitFor`, `fireEvent`, `fn`, `spyOn`.
   - It also detects `canvasElement` and `step` and automatically wraps the code in:
     `play: async ({ canvasElement, step }) => { ... }`.
   - Do **not** write `import` statements inside `story.play`; write only the function body statements.
4. **Explicit TypeScript Types in `setup`**:
   - Any callback or event handler declared inside `setup` **MUST** have explicit parameter type annotations (imported in the top-level `import: [...]` array) so the generated `*.stories.ts` file never fails with `TS7006: Parameter '...' implicitly has an 'any' type`.
   - Example:
     ```ts
     import: [
       'import type { ImageEventData } from \'@dxtmisha/constructor/Image\''
     ]
     // inside story.setup:
     const onLoad = (event: ImageEventData) => {
       loadedData.value = event
     }
     ```
5. **No Variable Name Abbreviations**:
   - Never use abbreviated identifiers (`btn`, `el`, `val`, `img2Btn`, `cb`, `res`, `idx`).
   - Always use full descriptive words (`iconButton`, `flagButton`, `clearButton`, `image2Button`, `element`, `value`, `index`).

---

## Step 5: Two-Tier Story Architecture (Documentation vs. Test Stories)

Every `wikiDescriptions[Component].ts` file divides its `stories` array into two distinct tiers:

### Tier 1: Documentation Stories (User-Facing)
- **Purpose**: Visually clear, focused demonstrations of primary features, common use cases, events, slots, and exposed APIs that will be embedded in the MDX documentation page.
- **ID Format**: `'[Component][FeatureName]'` (e.g., `'ImageAdaptive'`, `'ImageTurn'`, `'ImageEventLoad'`, `'ImageExpose'`).
- **Name Format**:
  ```ts
  name: {
    en: 'Adaptive scaling (Phones)',
    ru: 'Адаптивное масштабирование (Телефоны)'
  }
  ```
- **MDX Inclusion**: Every Documentation Story is referenced in `documentation.body`, `documentation.events`, `documentation.slots`, or `documentation.expose` via `<Canvas of={Component.[StoryId]}/>`.
- **Play Function**: Every Documentation Story **MUST** also include a `play` function verifying that its rendered DOM and interactive controls work properly.

### Tier 2: Test Stories (`[Component]Test...`) (Automated QA Only)
- **Purpose**: Exhaustive verification of all remaining props, data formats, edge cases, fallback behaviors, and coupled prop combinations that would clutter the user-facing documentation.
- **Mandatory Prefix in `id`**: Must start with `'[Component]Test'` (e.g., `'ImageTestIcons'`, `'ImageTestFlags'`, `'ImageTestDisplayModes'`, `'ImageTestPositions'`, `'ImageTestSources'`, `'ImageTestBinaryAndFile'`, `'ImageTestPerformance'`, `'ImageTestStates'`).
- **Mandatory Prefix in `name`**: Must start with `'Test: '` (EN) and `'Тест: '` (RU):
  ```ts
  id: 'ImageTestStates',
  name: {
    en: 'Test: Disabled, hide and combined states',
    ru: 'Тест: Отключенное, скрытое и комбинированные состояния'
  }
  ```
- **STRICT PROHIBITION in `documentation`**:
  - **NEVER** include any `[Component]Test...` story (`<Canvas of={Component.[Component]Test...}/>`) inside `documentation.body`, `documentation.events`, `documentation.slots`, or `documentation.expose`!
  - `documentation` is strictly reserved for Tier 1 User-Facing Documentation Stories.

---

## Step 6: Mandatory 100% Prop & Combinatorial Coverage

Your stories (Tier 1 + Tier 2 combined) must test **every single prop** defined in `props.ts`, as well as **coupled prop combinations**:

### 1. Individual Prop & Value Type Coverage
- Test every value variant of polymorphic props. For example, in `Image`:
  - `value`: icon name string, `icon:...` prefix, Material icon string, custom SVG icon string, custom registered icon with sub-elements (`icon-3`), `la-...` flag, `flag-...` flag, image path/import, `image:...` prefix, `url(...)`, `color(...)`, `#hex` color, `rgb(...)` color, `linear-gradient(...)`, `.pdf` URL, `File` (PNG/SVG/PDF), `Uint8Array`, `ArrayBuffer`.
  - Responsive/source props: `srcset` (string & object map), `picture` (array of breakpoints & media query object map), `url` base prefix.
  - Sizing & positioning props: `size` (`contain`, `cover`, percentage, px), `x`, `y`, `coordinator` (`[top, right, bottom, left]`), `adaptive`, `AdaptiveGroup`, `objectWidth`, `objectHeight`.
  - Performance & accessibility props: `tagImg`, `lazy`, `preloadOffset`, `decoding` (`sync`, `async`, `auto`), `fetchPriority` (`high`, `low`, `auto`), `alt`.
  - State & behavior props: `turn`, `disabled`, `hide`, `static`, `selected`, `loading`, `readonly`, `isSkeleton`, etc.

### 2. Mandatory Combinatorial Testing (Coupled Props)
Whenever props interact in CSS, DOM structure, or component logic, you **MUST** test their combinations in a single template and verify the combined classes/attributes in `play`:
- **State Combinations**:
  - `disabled + selected` (e.g., `Button`, `Chip`, `ListItem`)
  - `turn + disabled`
  - `turn + hide`
  - `disabled + hide`
  - `turn + disabled + hide`
- **Mode + State Combinations**:
  - `static + turn`
  - `static + disabled`
  - `static + hide`
  - `static + turn + disabled + hide`
  - `tagImg + static`
  - `tagImg + turn + disabled`
  - `tagImg + static + turn + disabled`
  - `adaptive + objectWidth + objectHeight + tagImg + turn + disabled`
- **Precedence & Fallback Combinations**:
  - Prop override priority: e.g., `coordinator` + `x` + `y` on the same element -> assert that `coordinator` wins and `x`/`y` are ignored.
  - Conditional mode requirements: e.g., `picture` WITH `tagImg` renders `<picture><source/><img/></picture>`, whereas `picture` WITHOUT `tagImg` falls back to background `<div>` without `<picture>`.
  - Accessibility attribute switching: e.g., `alt` provided (`aria-label="..."`, no `aria-hidden`) vs `alt` omitted (`aria-hidden="true"`).

---

## Step 7: Real Working Assets, URLs & Valid Binary Data

Stories run in a real browser in Storybook. Broken images, 404 network requests, or corrupted PDF/binary payloads are strictly forbidden.

1. **Standard Media Exports (`@dxtmisha/wiki/media`)**:
   - Prefer shared media assets from `@dxtmisha/wiki/media`: `image1`, `image2`, `phone1`, `phone2`, `phone3`, `demoPdf`.
2. **External URLs (`url` prop, `srcset`, `picture`)**:
   - Never use fake placeholder domains or non-existent local paths like `/custom-icons/`.
   - Use real, reliable CDN URLs that return valid assets (for example, `https://cdn.jsdelivr.net/npm/@mdi/svg/svg/` with `value="home.svg"` and `value="account.svg"`).
3. **Icons & Flags Registration (`packages/storybook/.storybook/preview.ts`)**:
   - Check which icons and flags are registered in `packages/storybook/.storybook/preview.ts`.
   - If a story tests specific flags (e.g., `flag-us`, `flag-vn`), ensure those exact flags are imported and registered via `Icons.add('flag-us', UsSvg)` in `packages/storybook/.storybook/preview.ts` (register only the flags actually used in the stories).
4. **In-Memory Binary & `File` Objects (`Uint8Array`, `ArrayBuffer`, `File`)**:
   - Never pass truncated or dummy headers (such as `new File(['%PDF-1.4'], 'doc.pdf', ...)` or random bytes `[137, 80, 78, 71]`) that render as broken images or trigger Chrome PDF viewer errors (`Не удалось загрузить PDF-документ`).
   - For **Images / Binary (`Uint8Array`, `ArrayBuffer`, image `File`)**: encode a complete, valid SVG graphic with `new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg" ...>...</svg>')`.
   - For **PDF `File`**: construct a complete, valid 1-page PDF 1.4 document string with valid `xref` offsets and `trailer` (see `ImageTestBinaryAndFile` in `wikiDescriptionsImage.ts`), or load `demoPdf`.

---

## Step 8: Layout, MDX Links & Visual Presentation Standards

### 1. Layout Classes (`packages/wiki/src/styles/storybookStyle.scss`)
Keep story templates clean and structured using `.wiki-storybook-*` classes:
- `.wiki-storybook-group` — wraps multiple demo items in a responsive flex/grid container.
- `.wiki-storybook-item` — individual showcase card:
  - Size modifiers: `wiki-storybook-item--squared--sm`, `wiki-storybook-item--squared--md`, `wiki-storybook-item--squared--lg`, `wiki-storybook-item--rectangle`, `wiki-storybook-item--widescreen`, `wiki-storybook-item--auto`, `wiki-storybook-item--compact`.
  - `.wiki-storybook-item__label` (and `.wiki-storybook-item__label--static`) — top-left or inline badge describing the specific case inside the card (e.g., `<div class="wiki-storybook-item__label">turn + disabled</div>`).
- `.wiki-storybook-flex-column`, `.wiki-storybook-flex-align-center`, `.wiki-storybook-flex` — flex containers for interactive controls + component preview.
- `.wiki-storybook-button` — styled action button for interactive stories (e.g., switching states, triggering events, testing exposed methods).
- `.wiki-storybook-card` — informational output card (e.g., displaying emitted event payloads or exposed `ref` values).

### 2. Documentation Section (`documentation`) & `<StorybookDescriptions>` Links
- **Main Overview**: Can use either inline bilingual markdown (`body: { en: '...', ru: '...' }`) or `<StorybookDescriptions componentName={'[Component]'} type={'[component]'}/>`.
- **Standard Slots**: Never create local MDX files for standard slots (`default`, `label`, `body`, `caption`, `description`, etc.). Link them using the global `'Slot'` component:
  `<StorybookDescriptions componentName={'Slot'} type={'default'}/>`
  `<StorybookDescriptions componentName={'Slot'} type={'label'}/>`
- **Exposed Methods**: Link standard exposed methods using the global `'Expose'` component:
  `<StorybookDescriptions componentName={'Expose'} type={'open'}/>`
- **Events Linking**:
  - Local component-specific events: `<StorybookDescriptions componentName={'[Component]'} type={'event.<eventName>'}/>`
  - Global events: `<StorybookDescriptions componentName={'Event'} type={'input'}/>`
- **Conditional Prop Blocks**: Wrap sections that depend on a specific prop in `<template prop="propName">...</template>` so `DesignComponent.ts` automatically strips them if a design system omits that prop.
- **AI Section (`ai`)**: Provide a concise summary `description` and `render` template; set `hide: true` for auxiliary/composite controls when an isolated AI preview demo is not required.

---

## Step 9: Writing Comprehensive `play` Functions

Every story (`render` and every item in `stories[]`) **MUST** have a `play` function:

1. **Wait for Async Rendering**:
   - When testing components that resolve icons, FileReader blobs, or async images (`Image`, `Icon`, etc.), wrap assertions in `await waitFor(() => { ... })`.
2. **Test Both Interactive Flows (`step` + `userEvent`) and DOM State**:
   - If a story has interactive buttons or inputs, use `const canvas = within(canvasElement)` and `await step('Description', async () => { await userEvent.click(...) })` to test every interactive button and state transition.
3. **Assert Exact Classes, Styles, Tags, and Attributes**:
   - Verify modifier classes (`.design-component--turn`, `.design-component--disabled`, `.design-component--hide`, `.design-component--type--*`, `.design-component--adaptive`).
   - Verify rendered tag names (`IMG`, `PICTURE`, `SOURCE`, `OBJECT`, `SVG`, `SPAN`, `DIV`).
   - Verify HTML & ARIA attributes (`src`, `srcset`, `alt`, `loading`, `decoding`, `fetchpriority`, `aria-label`, `aria-hidden`, `role`).
   - Verify CSS variables and inline styles (`style.getPropertyValue('--design-component-sys-x')`, `style.backgroundImage`, `style.backgroundColor`).

---

## Step 10: Complete Reference Template (`wikiDescriptions[Component].ts`)

```ts
import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Component properties
 *
 * Описания свойств компонента Component
 */
export const wikiDescriptionsComponent: StorybookComponentsDescriptionItem = {
  name: 'Component',
  description: {
    en: 'Clear, concise description of the component in English',
    ru: 'Четкое и лаконичное описание компонента на русском языке'
  },
  possibilities: {
    en: [
      'key capability 1',
      'key capability 2',
      'key capability 3'
    ],
    ru: [
      'ключевая возможность 1',
      'ключевая возможность 2',
      'ключевая возможность 3'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import { image1, image2 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose/slots)
    // =========================================================================
    {
      id: 'ComponentBasicFeature',
      name: {
        en: 'Feature demonstration',
        ru: 'Демонстрация функции'
      },
      propsName: ['propA', 'propB'],
      setup: `
      return { image1 }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent :value="image1"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with ComponentTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'ComponentTestStates',
      name: {
        en: 'Test: Disabled, hide and combined states',
        ru: 'Тест: Отключенное, скрытое и комбинированные состояния'
      },
      propsName: ['disabled', 'selected', 'turn', 'hide'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <DesignComponent disabled selected/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + disabled + hide</div>
            <DesignComponent turn disabled hide/>
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const items = canvasElement.querySelectorAll('.design-component')
  expect(items.length).toBe(2)

  expect(items[0]).toHaveClass('design-component--disabled')
  expect(items[0]).toHaveClass('design-component--selected')

  expect(items[1]).toHaveClass('design-component--turn')
  expect(items[1]).toHaveClass('design-component--disabled')
  expect(items[1]).toHaveClass('design-component--hide')
})
      `
    }
  ],
  documentation: {
    body: {
      en: `
<Story of={Component.Component}/>
<Controls />

## Feature Section
Explanation of the feature for developers.
<Canvas of={Component.ComponentBasicFeature}/>
      `,
      ru: `
<Story of={Component.Component}/>
<Controls />

## Раздел функции
Пояснение функции для разработчиков.
<Canvas of={Component.ComponentBasicFeature}/>
      `
    },
    events: {
      en: `...`,
      ru: `...`
    },
    expose: {
      en: `...`,
      ru: `...`
    },
    slots: {
      en: `...`,
      ru: `...`
    }
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent value="home"/>
</div>
    `,
    description: 'Concise AI prompt description of the component, its main props, and behavior.'
  }
}
```

**Register in `packages/wiki/src/media/descriptions/wikiDescriptions.ts`:**
- Import `wikiDescriptions[Component]` and insert it into the `wikiDescriptions` array in **strict alphabetical order**.

---

## Step 11: Post-Change Verification & D1 Synchronization

1. **Regenerate Design System Component & Stories**:
   ```bash
   npx dxt-ui d1.[component]
   ```
2. **Verify Generated Files**:
   - Inspect `packages/d1/src/components/Ui/[Component]/D1[Component].stories.ts` and `D1[Component].mdx`.
   - Ensure there are no syntax errors (e.g., unescaped backticks), no implicit `any` TypeScript warnings (`TS7006`), and no `[Component]Test...` stories inside `D1[Component].mdx`.
3. **Run Storybook Test Runner**:
   ```bash
   npm run test:storybook -- --url http://localhost:6006 packages/d1/src/components/Ui/[Component]/D1[Component].stories.ts
   ```
