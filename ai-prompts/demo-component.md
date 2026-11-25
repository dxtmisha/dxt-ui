---
name: demo-component
description: Guidelines and requirements for creating comprehensive, accessible, and interaction-complete component demo pages in the demo package with router and homepage updates.
---

To create or update a demo page for a specific component (e.g., Badge, Button, Checkbox) in the `demo` package, perform the following steps:

### 0. General Rules
- **CRITICALLY IMPORTANT**: Always strictly follow the global rules and instructions described in the `ai-prompt.md` file. This includes naming standards, Vue component implementation rules, and the use of SCSS mixins and tokens. **All rules and patterns listed in this document are strictly mandatory and must be followed without exception.**
- **Control Elements**: For page/state control and interactive triggers inside a demo group (e.g., calling `expose` methods, toggling local states, mutating `v-model`, adding/removing items, or resetting a form), use only `<D1Button>` elements.
- **English-Only Content**: All textual content, labels, descriptions, aria-labels, and placeholder strings used inside demo pages must strictly be in English.
- **Demo Isolation**: Each group (`D1Group`) represents an individual, self-contained demo. Do not create any global/general settings, global controllers, or page-wide property toggle panels. Local `<D1Button>` triggers scoped strictly to a single `<D1Group>` (to test interactive actions, dynamic state changes, or programmatic `ref` methods for that specific scenario) are encouraged and required where applicable.

### 1. Component Analysis & Exhaustive Coverage (STRICTLY MANDATORY)
Before writing or updating a demo page, inspect **all** source files of the component:
- Constructor sources in `packages/constructor/src/constructors/[Component]` (`props.ts`, `types.ts`, `basicTypes.ts`, `[Component].ts`, `[Component]Design.tsx`, helper/state classes, and `style.scss`).
- UI component sources in `packages/d1/src/components/Ui/[Component]` (`D1[Component].vue`, `props.ts`, `properties.json`, and SCSS token files).
- Related/compound sub-components and dependent component props (e.g., item/group/navigation/trigger companions, or delegated props such as `icon`, `badge`, `progress`, `ripple`, `tooltip`, `window`, `*Attrs`).

The demo page **MUST** achieve **100% exhaustive coverage** across all six dimensions below:

#### 1.1. All Possible Variants, Props & Visual Tokens (100% Variant Coverage)
- **Every Prop & Union Value**: Cover every prop defined in `props.ts` and `properties.json`, including every allowed value of union/enum props:
  - Visual variants / appearances / types (`primary`, `secondary`, `outline`, `text`, `tonal`, `elevated`, `ghost`, etc.).
  - All palettes / semantic colors (`primary`, `secondary`, `success`, `warning`, `error`, `neutral`, custom/dynamic palettes).
  - All size scales (`xs`, `sm`, `md`, `lg`, `xl`, `auto`, etc.), border radius / shapes (`rounded`, `pill`, `square`, etc.), densities, alignments, orientations (`horizontal`, `vertical`), placements/positions, and layout/adaptive modes.
  - All boolean modifier flags and meaningful real-world combinations of props (e.g., icon + badge + loading, leading + trailing icons + counter, outline + disabled + palette).
- **100% States Coverage**: Display **all possible visual and behavioral states** without exception (`default`, `hover`-ready, `focus`, `active`, `selected`, `checked`, `indeterminate`, `disabled`, `readonly`, `loading` / `progress`, `skeleton` / `is-skeleton`, `error` / `validation`, `open` / `closed`, empty vs. populated).

#### 1.2. All Available Component Capabilities, Slots, Sub-Components & Data Formats
- **100% Accepted Data Types & Formats**: Demonstrate **every accepted data type and input format** for props, models, and slots (`string`, `number`, `boolean`, arrays, nested objects, `ListRecord` items, callback functions/promises, `v-model` bindings, icon strings vs. icon prop objects, image/media inputs, custom formatters, and numeric/date/unit formatting options).
- **100% Slots & Scoped Slots**: Demonstrate every default and named slot (`default`, `prefix`, `suffix`, `leading`, `trailing`, `header`, `footer`, `title`, `description`, `control`, `body`, `empty`, etc.), explicitly rendering scoped slot props whenever a slot exposes bindings.
- **Compound & Dependent Components**: If the component works with child/companion components (e.g., `Tabs` + `TabsNavigation`, `List` + `ListItem`, `Grid` + `GridItem`) or integrates dependent components via props/slots (`icon`, `badge`, `tooltip`, `menu`, `window`, `progress`), include dedicated groups demonstrating these integrations.

#### 1.3. All Possible Actions & Interactive Scenarios (100% Action Coverage — CRITICAL)
Account for **every possible user interaction, state transition, and programmatic action** supported by the component:
- **Direct User Interactions**: Cover every interactive flow the component supports — clicking, double-clicking, toggling, single/multi-selection, opening/closing overlays, hovering/focusing triggers, typing/editing/clearing input, dragging/dropping, scrolling/pagination/stepping, outside-click dismissal, and nested/chained actions.
- **Blocked & Guarded Actions**: Explicitly include interactive examples of `disabled`, `readonly`, and `loading` states so tests can verify that clicks, keyboard activation, and value mutations are properly prevented.
- **Two-Way Binding & Value Lifecycle (`v-model`)**: Pair interactive `v-model` components with `<DemoValue>` and local `<D1Button>` triggers to test both user-driven updates and programmatic mutations (set value, switch value, toggle, clear/reset to empty/nullish, update collections by adding/updating/removing/reordering items).
- **All Emitted Events (`emits`)**: Wire **every single event** declared in the component (`click`, `change`, `input`, `update:modelValue`, `update:selected`, `open`, `close`, `focus`, `blur`, `clear`, `select`, `load`, `error`, etc.) using `useDemoEvent` and `<DemoValue>`, displaying both the event name and relevant emitted payload/arguments.
- **All Programmatic Methods & Refs (`defineExpose`)**: Whenever the component exposes methods or reactive properties via `defineExpose` (e.g., `open()`, `close()`, `toggle()`, `focus()`, `blur()`, `clear()`, `reset()`, `validate()`, `checkValidity()`, `reportValidity()`, `update()`, `scrollTo()`), create a dedicated group with a template `ref`, `<D1Button>` triggers for each exposed method, and `<DemoValue>` showing the resulting state or return value.
- **Form Integration & Validation Actions**: For form controls and input components, include a self-contained `<form>` group covering native and custom validation (`required`, `min`, `max`, `maxlength`, `pattern`, `validationMessage`, `forceShowMessage`), form submission, error display, and reset behavior.
- **Dynamic & Asynchronous Flows**: Where supported, demonstrate runtime state transitions via local `<D1Button>` controls — toggling `loading`, `is-skeleton`, `open`, `disabled`, triggering async callbacks/promises (e.g., delayed load, async before-open/before-close guards), and dynamic prop switching.

#### 1.4. Accessible Component Usage & A11y Coverage (MANDATORY)
- **Accessible by Default**: Every interactive example on the demo page must follow WAI-ARIA and HTML semantics best practices (e.g., meaningful labels on buttons/inputs, explicit `aria-label` on icon-only controls, `alt` text on meaningful images, proper label/description associations).
- **Dedicated Accessibility Scenarios**: Explicitly cover accessibility props and behaviors supported by the component:
  - Semantic roles and ARIA attributes (`role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`, `aria-disabled`, `aria-checked`, `aria-invalid`, `aria-live`, `tabindex`).
  - Keyboard interaction flows (`Tab` / `Shift+Tab` focus order, visible `:focus-visible` ring, `Enter` / `Space` activation, `Escape` dismissal, `Arrow` / `Home` / `End` navigation for composite widgets like menus, tabs, lists, radios, and sliders).
  - Focus management (initial focus, focus trapping in modals/dialogs, and restoring focus on close).

#### 1.5. Boundary Values, Edge Cases & Resilience
- **Empty & Nullish Inputs**: Empty string `""`, whitespace-only `"   "`, `null`, `undefined`, and empty arrays `[]` (verifying empty/placeholder states).
- **Numeric & Logical Boundaries**: `0` (ensuring `0` renders visibly and is not treated as empty), negative numbers, decimals, and `min`/`max` limits.
- **Extreme Content & Overflow**: Single-character labels, very long multi-sentence text, unbroken strings without spaces (testing ellipsis/wrapping without breaking bounds), multiline text, and Unicode/special characters.
- **Container & Responsive Behavior**: Constrained/narrow containers (e.g., inside `<DemoBox>`), wrapping, horizontal overflow/scroll behavior, and adaptive/breakpoint props where supported.

#### 1.6. SSR, Hydration & DOM Lifecycle Cases
- Cover all properties and edge cases affecting **SSR**, hydration, and DOM lifecycle (`in-dom`, `client-only`, teleport targets, delayed/lazy rendering, and conditional `v-if` mount/unmount toggle via a local `<D1Button>` when lifecycle cleanup or DOM observers are involved).

### 2. Creating the Demo Page
- Create or update the file `packages/demo/src/pages/components/Demo[Component]Page.vue`.
- **Auxiliary Components (MANDATORY)**: You **MUST** explore the contents of `packages/demo/src/components` and use the helper components defined there. **Do NOT invent your own custom components, wrappers, or logging panels if a corresponding helper is already provided.**
    - `DemoBox`: Box container with system border, padding, and rounded corners (use to group, constrain width, or visually isolate elements).
    - `DemoFlex`: Flex container with standard spacing tokens (use for horizontal row layout or grouping of inline elements).
    - `DemoLink`: Regular navigation link.
    - `DemoLinkBlack`: Back link pointing to the home page (use at the top of every demo page).
    - `DemoValue`: Display helper for model values, exposed return values, and event tracking variables.
- **Imports**: Import the necessary components from `../../components/[Name].vue`.
- **Template Structure**:
    - Use `<DemoLinkBlack/>` at the beginning.
    - Wrap everything in `<D1Page label="[Component]">`.
    - Use `<D1Section>` and separate `<D1Group>` blocks within it for each logical category (e.g., Basic, Variants & Palettes, Sizes & Shapes, States, Data Types & Formats, Slots, Interactive Actions & `v-model`, Programmatic Expose, Form & Validation, Events, Accessibility, Boundary & Edge Cases, SSR & Lifecycle).
    - **Minimalism**: Wrap components in additional elements (`div`, etc.) as little as possible. Avoiding wrappers entirely is a major plus.
- **Styles**:
    - The name of the main (root) CSS class must **strictly match** the component name itself (in kebab-case). For example, for `DemoBadgePage.vue`, the root class is `.demo-badge-page`.
    - **Minimalism**: Add styles only if absolutely necessary for the component's functionality or display. Do not add styles for "aesthetics" or decoration if there is no technical need. If no custom layout/flex styling is needed, keep the `<style lang="scss">` block completely empty (like in `DemoCheckboxPage.vue` or `DemoSwitchPage.vue`).
    - Use `__` for naming internal elements (e.g., `&__wrapper`) and `--` for modifiers (e.g., `&--large`).
    - Within the root class block, use SCSS nesting (`&`) to form element names (e.g., `&__wrapper { ... }` inside `.demo-badge-page` becomes `.demo-badge-page__wrapper`).

- **Minimalist Group Patterns (STRICTLY MANDATORY)**:
    **CRITICAL**: You must strictly adhere to these minimalist patterns for every component group. Absolutely no clutter, nested wrappers, or unnecessary custom styling is allowed. Follow the styling patterns from neighboring files (e.g., `DemoButtonPage.vue`, `DemoBadgePage.vue`, `DemoCheckboxPage.vue`):
    
    * **No Wrapper Layout (Vertical Stack)**: For form elements and block components (like `D1Checkbox`, `D1Switch`), place them directly inside `<D1Group>` without any wrappers or container divs. Let the default flow handle spacing:
      ```vue
      <D1Group label="Basic">
        <D1Checkbox label="Default" v-model="value" />
        <DemoValue :value="value" />
      </D1Group>
      ```
      
    * **Inline Flex Layout (Horizontal Row)**: For small inline components (like `D1Button`, `D1Badge`), wrap them in a single `div` named after the component (e.g., `<div class="demo-button-page">`) to align them via flexbox:
      ```vue
      <D1Group label="Types">
        <div class="demo-button-page">
          <D1Button label="Primary" primary />
          <D1Button label="Secondary" secondary />
        </div>
      </D1Group>
      ```
      The styles for such layout must be extremely basic:
      ```scss
      .demo-button-page {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: center;
      }
      ```
      
    * **Group Separation (`DemoFlex`)**: Use `<DemoFlex>` helper only when you need custom spacing/separators between inline items or sub-sections in a group (e.g., as in `DemoBadgePage.vue` with overlapping badges, or a row of local `<D1Button>` action triggers).
    
    * **Interactive Actions & Programmatic `expose` Group**: Keep local action controls minimal using `<D1Button>`, a template `ref`, and `<DemoValue>`:
      ```vue
      <D1Group label="Actions & Expose">
        <D1Component ref="componentRef" v-model="actionValue" label="Controlled Component" />
        <DemoFlex>
          <D1Button label="Set value" @click="actionValue = 'Updated'" />
          <D1Button label="Focus" @click="componentRef?.focus()" />
          <D1Button label="Clear" @click="actionValue = ''" />
        </DemoFlex>
        <DemoValue :value="actionValue" />
      </D1Group>
      ```

    * **Events Group**: Track every emitted event (and its payload when relevant) minimally and consistently using `useDemoEvent` and `<DemoValue>`:
      ```vue
      <D1Group label="Events">
        <D1Checkbox label="Event Tracker" @change="onEvent('change')" />
        <DemoValue :value="eventName" />
      </D1Group>
      ```
      
    * **Keep it Clean**: Never write inline styles or add extra wrapper `div` tags unless absolutely required for absolute positioning or layout structure. Let the library components dictate their own visual boundaries.

### 3. Router Registration
- Update `packages/demo/src/router.ts`:
    - Import the new page (**maintain alphabetical order of imports**).
    - Add the route to the `routes` array with the path `/component-[component-name-kebab]` (**maintain alphabetical order in the routes list**).

### 4. Updating the Home Page
- Update `packages/demo/src/pages/DemoHomePage.vue`:
    - Add `<DemoLink label="[Component]" name="component-[component-name-kebab]"/>` to the "Components" group.
    - **Maintain alphabetical order** among existing links.

### 5. Mandatory Completeness Audit Before Finishing
Before considering the demo page complete, verify every item below:
- [ ] **All Variants & Props**: Every prop from `props.ts`, every token variant from `properties.json`, and every visual/behavioral state is demonstrated.
- [ ] **All Data Formats & Slots**: Every accepted input type, slot, scoped slot binding, and companion/dependent component integration is covered.
- [ ] **All Interactive & Programmatic Actions**: Every user action, `v-model` mutation flow, blocked state (`disabled` / `readonly` / `loading`), emitted event (`emits`), form/validation flow (if applicable), and exposed `ref` method (`defineExpose`) can be triggered and observed via `<DemoValue>`.
- [ ] **Accessibility (A11y)**: All interactive controls have accessible names, ARIA attributes/roles are demonstrated, and keyboard navigation/focus flows work properly.
- [ ] **Edge Cases & SSR**: Boundary values (`""`, `0`, `null`, long text, narrow container) and SSR/DOM lifecycle props (`in-dom`, `client-only`, mount/unmount) are covered.
- [ ] **Standards & Hygiene**: Isolated `<D1Group>` blocks (no global settings), `<D1Button>`-only controls, English-only copy, minimalist markup/SCSS, and alphabetical registration in `router.ts` and `DemoHomePage.vue`.
