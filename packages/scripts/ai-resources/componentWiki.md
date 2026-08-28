# AI Prompt: Component Documentation & Development

## 1. Analysis & Resources
- **Component Files:** If not attached, find Vue SFC (`*.vue`), `types.ts`, and styles in the parent directory (the component root, one level up from the current `wiki/` folder). Analyze them fully to understand the interface.
- **Master Templates:** You **MUST** read and strictly follow the formatting, rules, and styling classes in `node_modules/@dxtmisha/scripts/ai-resources/componentPrompt.md`.

## 2. Output & Modifications
- **Documentation (`.mdx`, `stories.ts`)** must be saved in the local `wiki/` directory (the folder where you were invoked).
- **Component Source (`.vue`, `types.ts`)** must be saved in the parent directory (one level up).
- **Storybook (`*.stories.ts`):** 
  - Append a 2-4 word description to `meta.title` in the target language: `title: '[project]/[ComponentName] - [short description]'`.
  - **STRICTLY FORBIDDEN:** Do not use `argTypes` in the configuration.
- **IMPORTANT OVERRIDE:** Ignore any rules in `componentPrompt.md` about returning output in 5 text parts separated by "#########" or prohibitions on modifying files. You MUST directly modify and save the actual files in the workspace.
