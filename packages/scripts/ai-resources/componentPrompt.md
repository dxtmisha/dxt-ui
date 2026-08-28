# Component Documentation AI Prompt

You are a professional technical writer and developer. Your task is to create comprehensive documentation for a Vue 3 component in MDX format for Storybook.

Use the following template and style.

### Input Data:
- Component code, types, and current stories (will be provided at the end of the request).
- Fully analyze the component code, including props, emits, slots, and expose.
- Section title: [title] (insert it into `<Meta title='...'/>`).
- [title] insert as is, this is a label for the script.
- Documentation must be in the target language requested by the user.
- All headings and descriptions must be in the target language.

### Documentation Structure:

1.  **Description**:
    - Start directly with text (NO markdown heading `## Description` or similar).
    - Paragraph with description: purpose of the component, main use cases, benefits.

2.  **Key Features**:
    - Bold text title: `**Key features:**` on a separate line (NOT a markdown heading `##`).
    - Bulleted list.
    - Format: `- Description of the feature.` (simple sentences starting with capital letters).

3.  **Typical Use Cases**:
    - Bold text title: `**Typical use cases:**` on a separate line (NOT a markdown heading `##`).
    - Bulleted list.
    - Format: `- Use case description.`

4.  **Basic Usage**:
    - Code example showing basic usage of the component.
    - Code examples MUST be wrapped using the Storybook `<Source />` component instead of standard markdown backticks. Add `import { Source } from '@storybook/addon-docs/blocks';` at the top of the MDX file if not already present.
      Format:
      ```md
      <Source
          code={`
      <script setup>
      // Script code
      </script>

      <template>
        <Component />
      </template>
        `}
          language="html"
      />
      ```

5.  **Logical Property Groups (Props)**:
    - Do not create a single general list of all properties. Analyze props and divide them into logical groups (topics), as in the examples "Navigation", "Asynchronous Loading", "State Management".
    - For each group create a separate section:
        - Heading `## Functionality Name`.
        - Text description: Explain how the properties of this group work together and what problem they solve.
        - List of group properties: `- propName — description`.
        - Code example: Show the use of specifically these properties together. Wrap the code example using the Storybook `<Source />` component.
    - Skip obvious properties (standard attributes) if they do not affect specific logic.

6.  **Data Types** (Optional, if there are additional important types not described in the Function section):
    - Heading `## Data Types`

7.  **Events**:
    - Heading `## Events`
    - For each event:
        - Header `### \`eventName\`` (the name must be wrapped in backticks).
        - A brief paragraph describing when the event triggers.
        - **Parameters:**
            - Header: `**Parameters:**`
            - List: `- \`paramName: paramType\` — parameter description.`
        - **Structure of Custom Types (if applicable):**
            - Header: `**TypeName structure:**`
            - List: `- \`fieldName: fieldType\` — field description.`
        - **Code Example (if the event is complex):**
            - Code examples MUST be wrapped using the Storybook `<Source />` component.

    *Standard Event Documentation Example (e.g. click event):*
    ```md
    ### \`click\`

    Event fires when clicking on the component, passing the original DOM event and component data.

    **Parameters:**
    - \`event: MouseEvent\` — original DOM mouse event
    - \`value: EventClickValue\` — object with component data

    **EventClickValue structure:**
    - \`type: string\` — click location identifier, set through \`data-event-type\` attribute on the element
    - \`value: any\` — component value
    - \`detail: Record<string, any> | undefined\` — additional event data
    ```

8.  **Expose (Component Methods & Properties)**:
    - Heading `## Expose`
    - Under the heading, present the list of public methods, reactive references (Refs), and computed variables exposed by the component, in the clean, signature-based bullet format:
        - For methods: `- \`methodName(paramName: paramType): returnType\` — Description.`
        - For reactive states (Refs/Computed): `- \`propertyName: PropertyType\` — Description.`
        - Standard types include `boolean`, `void`, `Ref<any>`, `ComputedRef<any>`, etc.

    *Standard Expose Documentation Example:*
    ```md
    - \`value: any\` — Current component value.
    - \`open: boolean\` — Current visibility state.
    - \`previous(): void\` — Moves the selection to the previous menu item.
    ```

9.  **Slots**:
    - Heading `## Slots`
    - Under the heading, present the list of slots in the clean, signature-based bullet format:
        - For slots without parameters: `- \`slotName: Type\` — Description.`
        - For slots with parameters: `- \`slotName(paramName: paramType): Type\` — Description.`
        - Standard return type is usually `VNode` or `any`.

    *Standard Slot Documentation Example:*
    ```md
    - \`default: VNode\` — Main slot for placing the primary component content.
    - \`control: VNode\` — Slot for placing the menu control element (trigger).
    ```

### Storybook Layout Helpers:
When writing Storybook stories (`*.stories.ts`) and examples in the MDX documentation, you MUST use the predefined showcase helper classes. These styles are imported globally and start with the `.wiki-storybook-` prefix. Do not write custom inline styles or new CSS classes for showcase layout, positioning, placeholders, or containers; use the following helper classes:

- **Containers & Layouts**:
  - `.wiki-storybook-container` — enables container queries (`container-type: inline-size`).
  - `.wiki-storybook-group` — a 12-column CSS Grid layout (`grid-template-columns: repeat(12, 1fr)`) with an `8px` gap, perfect for presenting multiple items or variations.
    - Modifiers: `&--gapX2` (gap `16px`), `&--gapX3` (gap `24px`), `&--gapX4` (gap `32px`).
  - `.wiki-storybook-flex` — basic flexbox wrapper (`display: flex; flex-wrap: wrap`) with an `8px` gap.
  - `.wiki-storybook-flex-align-center` — same as flex wrapper, but aligns items vertically (`align-items: center`).
  - `.wiki-storybook-flex-center` — centers items horizontally and vertically with an `8px` gap.
  - `.wiki-storybook-flex-column` — vertical flexbox layout (`display: flex; flex-direction: column`) with a `16px` gap.
  - `.wiki-storybook-decreased` — constrains maximum width of the showcase block to `72%`.
  - `.wiki-storybook-decreasedX2` — constrains showcase block width responsively (`64%` at `md` screens, `48%` at `lg` screens).

- **Showcase Items (`.wiki-storybook-item`)**:
  Used to display components inside a unified visual frame (aspect-ratio `1/1` by default, border, rounded corners, hidden overflow):
  - `.wiki-storybook-item__label` — a small floaty label at the top-left corner (`font-size: 12px`, semi-transparent blurred background) for labeling specific variations. Use `.wiki-storybook-item__label--static` to make it flow statically inside the block without absolute positioning.
  - `&--padding` — adds standard `16px` padding inside the item box.
  - `&--paddingX2` — adds double standard `32px` padding.
  - `&--rectangle` — sets a `16:9` aspect ratio and spans all 12 columns in a grid.
  - `&--widescreen` — sets a `32:9` aspect ratio and spans all 12 columns in a grid.
  - `&--compact` — sets a `64:9` aspect ratio and spans all 12 columns in a grid.
  - `&--auto` — sets aspect ratio to `auto` and spans all 12 columns in a grid.
  - `&--squared--xs`, `&--squared--sm`, `&--squared--md`, `&--squared--lg`, `&--squared--max` — responsive grid item spans. For instance, `--squared--sm` spans 6 columns on mobile, 4 columns on tablet (640px+), and 2 columns on desktop (1024px+).
  - `&--center` — flex-centers internal elements.
  - `&--widthAuto` — sets width to `auto`.
  - `&--overflowVisible` — overrides `overflow: hidden` to `overflow: visible` (useful for dropdowns or modals).
  - `&--overflowAuto` — sets overflow to `auto`.
  - `&--borderNone` — hides default border.
  - `&--rtl` — sets Right-to-Left (RTL) text and flex layout direction.

- **Mock Components & Placeholders**:
  - `.wiki-storybook-card` — a mock card (`320px` width, rounded borders) to simulate real-world layout placement:
    - `.wiki-storybook-card__image` — 128px high cover image.
    - `.wiki-storybook-card__content` — vertical flex layout with `16px` padding and `16px` gap.
    - `.wiki-storybook-card__label` — title with `20px` font size.
    - `.wiki-storybook-card__information` — muted descriptions (`14px` size, gray).
    - `.wiki-storybook-card__actions` — horizontal actions flex wrapper (`8px` gap).
  - `.wiki-storybook-button` — standard story action trigger button. Modifiers for status colors: `&--success` (green), `&--error` (red), `&--warning` (yellow), `&--info` (blue).
  - `.wiki-storybook-dummy` — visual placeholder box (`32px` high, dark translucent grey).
    - Colors: `&--color--blue`, `&--color--red`, `&--color--green`.
    - Sizes: `&--size--sm` (height `64px`), `&--size--md` (height `128px`), `&--size--lg` (height `256px`).

### Instructions:
1. Study the provided component code (including props, emits, slots, expose).
2. Identify all public interfaces.
3. Generate documentation strictly following the template above.
3.1. If a component, prop, event, or slot is already described and there were no changes, do not correct the description.
3.2. Try to keep original descriptions unchanged.
4. Use the correct terminology (Props, Events, Slots, Expose).
4.1. All headings must be in the requested language.
4.2. In Storybook stories and MDX code examples, you MUST use the predefined layout helper classes (described above) instead of inline styles or custom CSS blocks.
4.3. Do not modify the original component code under any circumstances unless explicitly requested.
4.4. Strictly follow all rules in this prompt. There is zero tolerance for hallucinations: do not invent, assume, or add any non-existent properties, methods, events, slots, or external package dependencies.
4.5. Do not use horizontal lines (rules like `---` or `***`) and do not use markdown tables anywhere in the documentation. Structure all information using headings, paragraphs, lists, and code blocks.
5. Do not add unnecessary introductions or conclusions, only MDX.
6. Return only the full MDX code of the documentation without any additional text, comments, or markdown formatting (\`\`\`).
7. The result must be exclusively text (response), do not attach any files.
8. Response format. Your response must consist strictly of 5 parts, separated by the separator "#########". Do not add any text before or after this format.

**Technical Requirements (strictly preserve the following lines without changes):**
- `const meta = ...` — Storybook configuration.
- `import * as Component from ...` — component import.
- `import { Meta } from '@storybook/addon-docs/blocks'` — system import.
- `import { StorybookMain } from '@dxtmisha/wiki/storybook'` — system import.

Format:
[short description in a few words (3-5) about the component's purpose]
#########
[original component code (*.vue) with comments for methods (add them if missing). If all comments are already present, return --FULL--]
#########
[original component typing code (types.ts) with comments for props, emits, slots, and expose (add them if missing). If all comments are already present, return --FULL--]
#########
[original stories code (*.stories.ts). Analyze and add missing scenarios (stories) if necessary. If current stories are sufficient, return --FULL--]
#########
[the documentation itself in MDX format following the template above].

---

# Demo Component Example

Here is a full example of what an MDX documentation file should look like based on the above instructions. Notice the structure, how it describes events, exposes, slots, and properties logically.

```md
Component for creating popup menus, dropdown lists, and context menus with support for navigation and actions.

Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, support for nested structures, asynchronous data loading, an optimized rendering mode for large lists, and full control over the open/close state.

**Key Features:**

- Integration of Window, Bars, and List components
- Keyboard navigation through menu items
- Nested submenus with unlimited depth
- Asynchronous data loading via AJAX
- Lite mode for optimizing large lists (liteThreshold)
- Search and filtering of menu items
- Management of selected items (selected)
- Flexible positioning relative to the anchor

**Typical Use Cases:**

- Dropdown navigation menus
- Right-click context menus
- Action and operation menus
- Selectors with search and filtering
- Multi-level navigation menus
- Menus with dynamic data loading

<Source
  code={\`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
  { label: 'Create', value: 'create', icon: 'add' },
  { label: 'Edit', value: 'edit', icon: 'edit' },
  { label: 'Delete', value: 'delete', icon: 'delete' },
  {
    label: 'Export',
    value: 'export',
    children: [
      { label: 'PDF', value: 'pdf' },
      { label: 'Excel', value: 'excel' },
      { label: 'CSV', value: 'csv' }
    ]
  }
])

const handleClick = (value) => {
  console.log('Item selected:', value)
  isOpen.value = false
}
</script>

<template>
  <button @click="isOpen = true">Open Menu</button>

  <Menu
    v-model:open="isOpen"
    :list="menuItems"
    @click="handleClick"
  >
    <template #control="{ onclick }">
      <button @click="onclick">Actions</button>
    </template>
  </Menu>
</template>
\`}
  language="html"
/>

## Navigation through Menu Items

The \`previous()\` and \`next()\` methods are designed for programmatic navigation through menu items based on the current selection and the \`step\` property.

**Methods:**

- \`previous()\` — moves the selection to the previous item (back by \`step\` positions)
- \`next()\` — moves the selection to the next item (forward by \`step\` positions)
- \`step\` — number of items to skip during navigation (default: 1)

The methods work in conjunction with the reactive \`selected\` state: when \`previous()\` or \`next()\` is called, the new position is automatically calculated relative to the currently selected item. If no item is selected, the methods select the first available item. When the list boundaries (first or last item) are reached, navigation stops at the boundary item, preventing exit from the list.

<Source
  code={\`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item2')
</script>

<template>
  <!-- Call via ref -->
  <button @click="menuRef?.previous()">Back</button>
  <button @click="menuRef?.next()">Forward</button>

  <Menu
    ref="menuRef"
    v-model:selected="selected"
    :list="[
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: '3' }
    ]"
    :step="1"
  />

  <!-- Navigation in control slot -->
  <Menu v-model:selected="selected" :list="items">
    <template #control="{ previous, next, selectedNames }">
      <button @click="previous">◀</button>
      <span>{{ selectedNames[0] }}</span>
      <button @click="next">▶</button>
    </template>
  </Menu>

  <!-- With custom step -->
  <Menu
    ref="menuRef"
    v-model:selected="selected"
    :list="items"
    :step="2"
  />
</template>
\`}
  language="html"
/>

## Events

### \`click\`

The event is triggered when the component is clicked, passing the original DOM event and component data.

**Parameters:**
- \`event: MouseEvent\` — original DOM mouse event
- \`value: EventClickValue\` — object with component data

**EventClickValue Structure:**
- \`type: string\` — identifier of the click location, set via the \`data-event-type\` attribute on the element
- \`value: any\` — component value
- \`detail: Record<string, any> | undefined\` — additional event data

<Source
  code={\`
<script setup>
const handleClick = (event, value) => {
  console.log('DOM event:', event)
  console.log('Click type:', value.type)
  console.log('Value:', value.value)
  console.log('Details:', value.detail)
}
</script>

<template>
  <Component @click="handleClick">
    <button data-event-type="action">Click me</button>
  </Component>
</template>
\`}
  language="html"
/>

### \`clickLite\`

The event is triggered when the component is clicked, passing only data without the original DOM event (lightweight version).

**Parameters:**
- \`value: EventClickValue\` — object with component data

## Expose

- \`previous(): void\` — Moves the selection to the previous menu item based on the \`step\` property value.
- \`next(): void\` — Moves the selection to the next menu item based on the \`step\` property value.

## Slots

- \`control(props: MenuControlItem): VNode\` — Slot for placing the menu control element (trigger).
- \`title(props: MenuControlItem): VNode\` — Slot for placing the menu window title.
- \`footer(props: MenuControlItem): VNode\` — Slot for placing content at the bottom of the menu window (action buttons, information).
- \`default: VNode\` — Main slot for placing the main content of the component.
```
