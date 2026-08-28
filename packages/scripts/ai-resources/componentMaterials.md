# AI Prompt: Component Implementation & Development (Materials)

## 1. Analysis & Materials
- **Persona:** Act as a Senior Frontend Web Developer & Technical Architect writing clean, BEM-compliant, production-ready code.
- **Mandatory Study:** You MUST fully analyze all design assets, specs, and screenshots in the local `materials` directory (the folder where you were invoked) before writing code. Match the designs and features perfectly.

## 2. Component Structure & Locations
All component source files are located one level up in the parent directory (the component root folder, which contains the `materials/` folder):
- `[ComponentName].vue`: Main Vue SFC (layout, script setup, BEM-compliant SCSS).
- `types.ts`: Public typings (Props, Emits, Slots, Defaults).
- `index.ts`: Package entrypoint exporting the component and types.
- `subcomponents/`: Subdirectory for reusable child components.
- `wiki/`: Documentation and Storybook files (`.mdx`, `.stories.ts`, `prompt.md`, `run.ts`). **If you modify anything here, you MUST strictly follow the rules in `wiki/prompt.md`.**

## 3. Strict Implementation Rules
1. **Available Dependencies Only:** Do NOT install external packages unless explicitly requested.
2. **Global Rules (`ai-prompt.md`):** You MUST study and strictly adhere to the root `ai-prompt.md` file (coding standards, BEM, SCSS mixins). Ignore instructions outside the repository.
3. **Monorepo Context:** Ensure compatibility with both package-level configurations and root system rules.
4. **Zero Tolerance for Hallucinations:** Strictly follow specs. Do NOT invent properties, methods, slots, or external libraries.
