---
name: visual-test-constructor
description: Automatically resolve component, demo page, and constructor source paths from any localhost demo URL, audit/update demo coverage according to demo-component.md, and launch visual-test.md.
---

# Skill: Visual Test Constructor from URL

When the user provides a local demo URL (e.g., `http://localhost:3000/component-motion-transform` or route `/component-[name]`) and requests a visual test for a constructor/component:

### Execution Protocol:
1. **Resolve Demo Page**:
   - Find the route in [`packages/demo/src/router.ts`](../packages/demo/src/router.ts) to locate the demo page: `packages/demo/src/pages/components/Demo<Name>Page.vue`.
2. **Resolve UI Component & Constructor**:
   - Extract the canonical component name from the demo page (e.g., `<D1MotionTransform>` -> `MotionTransform`).
   - UI Component: `packages/d1/src/components/Ui/<Name>/` (`D1<Name>.vue`, `props.ts`).
   - Constructor: `packages/constructor/src/constructors/<Name>/` (`<Name>.ts`, `<Name>Design.tsx`, `props.ts`, `types.ts`).
3. **Mandatory Demo Coverage Audit (Pre-Test Verification)**:
   - **CRITICAL**: Before compiling test cases or launching the visual test, the agent **MUST** perform an exhaustive contract audit of the component against its demo page.
   - Cross-check `Demo<Name>Page.vue` against the constructor's and UI component's `props.ts`, `types.ts`, slots, and visual tokens.
   - Verify that the demo page strictly satisfies the coverage requirements from [`ai-prompts/demo-component.md`](./demo-component.md):
     - **100% States Coverage**: All states without exception (`default`, `active`, `selected`, `disabled`, `readonly`, `loading`, `skeleton` / `is-skeleton`, `error` / `validation`, `focus`, `open`, empty / populated states, visual variants, sizes, palettes, and layout modes).
     - **100% Accepted Data Types & Formats Coverage**: All accepted data types and input formats for props, models, and slots (strings, numbers, booleans, arrays, nested objects, callback functions/promises, `v-model` two-way bindings, icon strings vs icon objects, custom formatters, and all available slots / scoped slot props).
     - **SSR & Lifecycle Edge Cases**: Edge cases affecting SSR, hydration, and DOM lifecycle (`in-dom`, `client-only`, programmatic ref controls, delayed rendering, etc.).
     - **Helper Components & Patterns**: Mandatory use of `DemoBox`, `DemoFlex`, `DemoLinkBlack`, `DemoValue`, and event tracking via `useDemoEvent`. Keep groups isolated inside `<D1Group>` (no global settings toggles).
     - **English-Only Content**: All textual content, labels, descriptions, and placeholder strings must strictly be in English.
     - **Minimalist Structure**: No redundant wrappers or custom styling unless strictly technically required.
   - **If any states, props, data formats, or slots are missing or not covered**:
     - The agent **MUST immediately update** `Demo<Name>Page.vue` following all rules and patterns from [`ai-prompts/demo-component.md`](./demo-component.md).
     - Verify the updated demo page with ESLint:
       ```bash
       npx eslint packages/demo/src/pages/components/Demo<Name>Page.vue
       ```
     - Only after ensuring the demo page completely and exhaustively covers all component capabilities, proceed to Step 4.
4. **Execute Visual Test**:
   - Target URL: the provided browser URL.
   - Target Directory: `packages/d1/ai-tests/D1<Name>/` (or `packages/constructor/ai-tests/<Name>/`).
   - Immediately proceed with executing [`ai-prompts/visual-test.md`](./visual-test.md) using the verified demo and resolved paths without asking the user for confirmation.

