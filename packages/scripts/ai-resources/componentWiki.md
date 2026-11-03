# AI Prompt: Component Documentation & Development

## 1. Analysis & Resources
- **Component Files:** If not attached, find Vue SFC (`*.vue`), `types.ts`, styles, and any child components in `subcomponents/` in the parent directory (the component root, one level up from the current `wiki/` folder). Analyze them fully to understand the main interface and all internal subcomponents.
- **Master Templates:** You **MUST** read and strictly follow the formatting, rules, and styling classes in `node_modules/@dxtmisha/scripts/ai-resources/componentPrompt.md`.

## 2. Output & Modifications
- **Documentation (`.mdx`, `stories.ts`)** must be saved in the local `wiki/` directory (the folder where you were invoked).
- **Component Source (`.vue`, `types.ts`, `subcomponents/`)** must be saved in the parent directory (one level up).
- **Storybook (`*.stories.ts`):** 
  - Append a 2-4 word description to `meta.title` in the target language: `title: '[project]/[ComponentName] - [short description]'`.
  - **argTypes:** You **MUST** define `argTypes` for component properties, specifying controls (`control: 'select' | 'boolean' | 'text' | ...`), `options` (for enums/unions), descriptions, and default values (e.g. `table: { defaultValue: { summary: '...' } }`).
  - **args:** **DO NOT** specify values in `args` if they match the component's default values. Only include arguments in `args` when their values differ from defaults or are required for proper display.
  - **All Possible Story Types & Interaction Tests (`play`):** In addition to the default `Component` story, you **MUST** add all possible story variations covering different prop combinations, visual states, slots, events, and interactive scenarios. Every story **MUST** include automated Storybook tests using the `play` function (`import { expect, within, userEvent, waitFor } from 'storybook/test'`) to verify DOM structure, classes, attributes, and user interactions.
  - **Subcomponents Stories & Tests (`subcomponents/`):** If child components exist in `../subcomponents/`, you **MUST** also create dedicated stories and `play` tests for each subcomponent to thoroughly test their props, states, slots, and events.
  - **Strict Exclusion from Documentation (`.mdx`):** All additional variant, test, and subcomponent stories are strictly for Storybook testing — **NEVER** add or embed them into the `.mdx` documentation file (do not render them via `<Canvas>` or `<Story>` in `.mdx`; `.mdx` must only use the main `Component.Component` story inside `<StorybookMain>`).
- **IMPORTANT OVERRIDE:** Ignore any rules in `componentPrompt.md` about returning output in 5 text parts separated by "#########" or prohibitions on modifying files. You MUST directly modify and save the actual files in the workspace.
