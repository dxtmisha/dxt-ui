# Component Documentation AI Prompt

You are a professional technical writer and frontend developer. Your task is to create comprehensive documentation and Storybook stories for a Vue 3 component in MDX and TypeScript formats.

This prompt is specifically designed for generating and structuring:
1. `[ComponentName].mdx` (based on the `ComponentDoc.mdx` template)
2. `[ComponentName].stories.ts` (based on the `ComponentDoc.stories.ts` template)

---

## Target Template Structure

### 1. MDX Template (`[ComponentName].mdx`)
The component MDX file MUST strictly follow this exact header structure:

```mdx
import {Meta} from '@storybook/addon-docs/blocks'
import {StorybookMain} from '@dxtmisha/wiki/storybook'

import * as Component from './[ComponentName].stories'

<Meta of={Component}/>
<StorybookMain
    name={'[ComponentName]'}
    description={'[short description in 3-5 words]'}
    story={Component.Component}
/>

[Documentation Body]
```

### 2. Stories Template (`[ComponentName].stories.ts`)
The component stories file MUST strictly follow this exact base structure:

```ts
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import [ComponentName] from './../[ComponentName].vue'

const meta = {
  title: '[project]/[ComponentName] - [short description in 2-4 words in target language]',
  component: [ComponentName]
} satisfies Meta<typeof [ComponentName]>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { [ComponentName] },
    setup() {
      return { args }
    },
    template: `<div>
      <[ComponentName] v-bind="args" />
    </div>`
  })
}
```

---

## Documentation Body Structure (`[Documentation Body]`)

Follow this exact logical sequence in the body of `[ComponentName].mdx`:

### 1. Description
- Start directly with explanatory text (NO markdown heading `## Description` or `## Описание`).
- Provide a clear, cohesive paragraph explaining the purpose of the component, its core functionality, and key advantages.

### 2. Key Features
- Title: `**Key Features:**` on a separate line as bold text (NOT a markdown heading `##`).
- Format: Bulleted list with concise, capitalized sentences describing key capabilities.
```md
**Key Features:**

- Integration with Window, Bars, and List primitives
- Keyboard navigation through menu items
- Dynamic data loading and state synchronization
```

### 3. Typical Use Cases
- Title: `**Typical Use Cases:**` on a separate line as bold text (NOT a markdown heading `##`).
- Format: Bulleted list of practical scenarios and use cases.
```md
**Typical Use Cases:**

- Dropdown navigation menus
- Context menus triggered on right-click
- Action menus for data tables
```

### 4. Basic Usage
- Provide a clear, minimal Vue 3 Composition API `<script setup>` code example.
- All code examples in MDX MUST be wrapped in the `<Source />` component from `@storybook/addon-docs/blocks`:
```md
<Source
  code={`
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Component v-model="value" />
</template>
`}
  language="html"
/>
```

### 5. Logical Property Groups (Props)
- Do NOT create one giant flat list of all properties. Group related props by feature/topic (e.g., "Navigation", "Asynchronous Loading", "State Management", "Visual Styling").
- For each group:
  - Heading: `## [Feature / Topic Name]`
  - Text description explaining the interaction of these properties and the problem they solve.
  - Property list: `- propName — description`
  - Code example wrapped in `<Source code={\`...\`} language="html" />` demonstrating these properties working together.

### 6. Data Types (Optional)
- Heading: `## Data Types`
- Detail custom interfaces or data contracts if they are essential to understanding the component's data model.

### 7. Events
- Heading: `## Events`
- For each event:
  - Subheading: `### \`eventName\`` (name wrapped in backticks).
  - Paragraph describing when the event triggers.
  - **Parameters:**
    - Title: `**Parameters:**`
    - List: `- \`paramName: ParamType\` — parameter description.`
  - **Structure of Custom Types (if applicable):**
    - Title: `**[TypeName] Structure:**`
    - List: `- \`fieldName: FieldType\` — field description.`
  - Code example wrapped in `<Source />` if the event handling logic is non-trivial.

### 8. Expose (Methods & Reactive Properties)
- Heading: `## Expose`
- Present public methods and reactive references exposed by `defineExpose`:
  - Methods: `- \`methodName(param: Type): ReturnType\` — description.`
  - Reactive variables (Refs/Computed): `- \`propertyName: PropertyType\` — description.`

### 9. Slots
- Heading: `## Slots`
- Present slots in clean signature format:
  - Scoped slots: `- \`slotName(props: PropType): VNode\` — description.`
  - Regular slots: `- \`slotName: VNode\` — description.`

---

## Storybook Layout Helpers (`.wiki-storybook-*`)

When writing Storybook stories (`*.stories.ts`) and MDX code examples, you MUST use the predefined layout helper classes from `@dxtmisha/wiki/styles/storybookStyle.scss`. Do not invent custom CSS classes or raw inline styles:

### 1. Containers & Layouts
- `.wiki-storybook-container` — enables container queries (`container-type: inline-size`).
- `.wiki-storybook-group` — 12-column CSS Grid layout (`grid-template-columns: repeat(12, 1fr)`) with standard `8px` gap.
  - Modifiers: `&--gapX2` (`16px`), `&--gapX3` (`24px`), `&--gapX4` (`32px`).
- `.wiki-storybook-flex` — flexbox wrapper (`display: flex; flex-wrap: wrap; gap: 8px;`).
- `.wiki-storybook-flex-align-center` — horizontal flex wrapper with centered vertical alignment (`align-items: center; gap: 8px;`).
- `.wiki-storybook-flex-center` — perfectly centered flex layout (`align-items: center; justify-content: center; gap: 8px;`).
- `.wiki-storybook-flex-column` — vertical column layout (`display: flex; flex-direction: column; gap: 16px;`).
- `.wiki-storybook-decreased` — constrains showcase block width to `72%`.
- `.wiki-storybook-decreasedX2` — responsive width reduction (`64%` at `md`, `48%` at `lg`).

### 2. Showcase Items (`.wiki-storybook-item`)
Used to display components inside a unified visual frame (aspect-ratio `1/1` by default, border, rounded corners, hidden overflow):
- `.wiki-storybook-item__label` — small floaty label at top-left corner (`font-size: 12px`, translucent background) for labeling variations.
  - `&--static` — static flow inside the block without absolute positioning.
- `&--padding` — adds standard `16px` padding.
- `&--paddingX2` — adds double standard `32px` padding.
- `&--rectangle` — `16:9` aspect ratio, spans 12 grid columns.
- `&--widescreen` — `32:9` aspect ratio, spans 12 grid columns.
- `&--compact` — `64:9` aspect ratio, spans 12 grid columns.
- `&--auto` — `auto` aspect ratio, spans 12 grid columns.
- `&--squared--xs`, `&--squared--sm`, `&--squared--md`, `&--squared--lg`, `&--squared--max` — responsive grid item spans across mobile, tablet, and desktop.
- `&--center` — centers internal elements with flexbox.
- `&--widthAuto` — sets width to `auto`.
- `&--overflowVisible` — sets `overflow: visible` (essential for dropdowns, popups, and menus).
- `&--overflowAuto` — sets `overflow: auto`.
- `&--borderNone` — removes default border.
- `&--rtl` — applies Right-to-Left (RTL) direction.

### 3. Mock Components & Placeholders
- `.wiki-storybook-card` — mock card (`320px` width, border, rounded `12px`):
  - `.wiki-storybook-card__image` — cover image placeholder (`128px` height).
  - `.wiki-storybook-card__content` — vertical column with `16px` padding and `16px` gap.
  - `.wiki-storybook-card__label` — title (`20px` font size).
  - `.wiki-storybook-card__information` — muted text (`14px` font size).
  - `.wiki-storybook-card__actions` — actions row (`8px` gap).
- `.wiki-storybook-button` — standard story trigger button.
  - Modifiers: `&--success` (green), `&--error` (red), `&--warning` (yellow), `&--info` (blue).
- `.wiki-storybook-input` — standard story text input field (`width: 100%; max-width: 320px`, padding `8px`, rounded `8px`, focus outline).
- `.wiki-storybook-dummy` — placeholder box (`32px` height, translucent grey).
  - Colors: `&--color--blue`, `&--color--red`, `&--color--green`.
  - Sizes: `&--size--sm` (`64px`), `&--size--md` (`128px`), `&--size--lg` (`256px`).

---

## General Generation Rules

1. **Exact File Structure**:
   - `[ComponentName].mdx` must begin with the `<Meta of={Component}/>` and `<StorybookMain ... />` blocks matching `ComponentDoc.mdx`.
   - `[ComponentName].stories.ts` must export `meta` and story objects matching `ComponentDoc.stories.ts`.
2. **Storybook Meta Title**:
   - `[ComponentName].stories.ts` must define `meta.title` with an appended short description of 2-4 words in the target language: `title: '[project]/[ComponentName] - [short description in 2-4 words]'`.
3. **Clean Typography**:
   - Do NOT use markdown tables or horizontal rules (`---` or `***`).
   - Structure all information using headings (`##`, `###`), bold section titles (`**Title:**`), bulleted lists, and `<Source />` code blocks.
4. **Purity and Precision**:
   - Zero hallucinations: describe ONLY properties, methods, slots, and events that actually exist in the component code and types.
   - All text and headings must be in the requested target language.
5. **Copy-Paste Ready**:
   - Output complete, production-ready code with valid imports.

---

## Full Example

### `Menu.stories.ts` Example
```ts
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Menu from './../Menu.vue'

const meta = {
  title: 'Ui/Menu - Dropdown navigation and context menus',
  component: Menu
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  render: args => ({
    components: { Menu },
    setup() {
      return { args }
    },
    template: `<div>
      <Menu v-bind="args">
        <template #control="{ onclick }">
          <button class="wiki-storybook-button" @click="onclick">Open Menu</button>
        </template>
      </Menu>
    </div>`
  })
}
```

### `Menu.mdx` Example
```mdx
import {Meta} from '@storybook/addon-docs/blocks'
import {StorybookMain} from '@dxtmisha/wiki/storybook'

import * as Component from './Menu.stories'

<Meta of={Component}/>
<StorybookMain
    name={'Menu'}
    description={'Dropdown navigation and context menus'}
    story={Component.Component}
/>

Component for creating popup menus, dropdown lists, and context menus with support for keyboard navigation, nested structures, and actions.

Menu combines the functionality of Window (positioning and visibility management), Bars (action panel), and List (displaying items and submenus). The component provides full control over the open/close state, search filtering, and item selection.

**Key Features:**

- Integration of Window, Bars, and List primitives
- Full keyboard navigation through menu items
- Nested submenus with unlimited depth
- Lite mode for optimizing rendering of large lists
- Dynamic search and item filtering
- Flexible positioning relative to anchor triggers

**Typical Use Cases:**

- Dropdown navigation menus
- Right-click context menus
- Table row action menus
- Selectors with integrated search

<Source
  code={`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
  { label: 'Create', value: 'create' },
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete' }
])

const handleClick = (value) => {
  console.log('Selected:', value)
  isOpen.value = false
}
</script>

<template>
  <Menu
    v-model:open="isOpen"
    :list="menuItems"
    @click="handleClick"
  >
    <template #control="{ onclick }">
      <button class="wiki-storybook-button" @click="onclick">Actions</button>
    </template>
  </Menu>
</template>
`}
  language="html"
/>

## Navigation through Menu Items

The `previous()` and `next()` methods allow programmatic navigation through menu items relative to the currently selected item and the `step` property.

- `previous()` — moves selection to the previous item
- `next()` — moves selection to the next item
- `step` — number of items to step across (default: 1)

<Source
  code={`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item1')
</script>

<template>
  <button class="wiki-storybook-button" @click="menuRef?.previous()">Previous</button>
  <button class="wiki-storybook-button" @click="menuRef?.next()">Next</button>

  <Menu
    ref="menuRef"
    v-model:selected="selected"
    :list="[
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' }
    ]"
  />
</template>
`}
  language="html"
/>

## Events

### `click`

Event fires when clicking on a menu item, returning the event payload and selected item data.

**Parameters:**
- `event: MouseEvent` — original DOM mouse event
- `value: EventClickValue` — object with item value and metadata

**EventClickValue Structure:**
- `type: string` — click target type identifier
- `value: any` — selected item value
- `detail: Record<string, any> | undefined` — additional event details

## Expose

- `previous(): void` — Moves the selection to the previous menu item.
- `next(): void` — Moves the selection to the next menu item.

## Slots

- `control(props: MenuControlItem): VNode` — Slot for placing the menu trigger element.
- `title(props: MenuControlItem): VNode` — Slot for custom window title content.
- `footer(props: MenuControlItem): VNode` — Slot for bottom action buttons or extra information.
- `default: VNode` — Main slot for custom body items.
```
