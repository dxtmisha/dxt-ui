# AI Prompt: Component Documentation & Development

This instruction defines the rules for analyzing, documenting, and modifying components inside the workspace.

## 1. Component Resolution & Analysis

If the component source files are not directly attached in your context, they are located in the parent directory (one folder above this `wiki` folder).
- Study the main Vue SFC (`*.vue`), types/props (`types.ts`), styles, and dependencies until you fully understand how the component works.
- Once you have a complete understanding of its behavior and interface, further deep-dive study of outer dependencies is not required.

## 2. Master Prompt Templates

You must read, study, and strictly follow the detailed descriptions, rules, coding standards, and templates specified in:
- Workspace path: `packages/scripts/src/media/templates/prompts/componentPrompt.en.txt` (or `componentPrompt.ru.txt`)
- Node modules path: `node_modules/@dxtmisha/scripts/src/media/templates/prompts/componentPrompt.en.txt` (or `componentPrompt.ru.txt`)

> [!WARNING]
> If these files are not accessible, missing, or cannot be read, proceed with standard high-quality component documentation practices.

## 3. Output Locations & Code Structure Rules

You must save your changes in the correct target locations:
- **Documentation & Playground changes** (including MDX files and `stories.ts` playground configurations) must be saved inside this current directory (the `wiki` folder).
- **Component source changes** (including Vue SFC and typings/properties files) must be saved inside the parent directory (one level up from this current directory).

- **Storybook Stories Configuration (`*.stories.ts`)**:
  - In the `meta` object of `*.stories.ts`, you MUST append a concise short description of the component (2–4 words) to the `title` field after the component name separated by a dash:
    `title: '[project]/[ComponentName] - [short description of 2-4 words]'` (e.g. `'d1/Button - Interactive action trigger'` or `'d1/Button - Интерактивная кнопка действия'`).
  - The short description must capture the primary purpose of the component in 2–4 words in the target documentation language ([wikiLanguage]).
  - **No `argTypes`**: Adding `argTypes` to the `meta` configuration object or anywhere in `*.stories.ts` is **STRICTLY FORBIDDEN**.

> [!IMPORTANT]
> **Ignore Output Separation Rules in componentPrompt:**
> You must completely ignore any instructions or constraints in `componentPrompt.en.txt`/`componentPrompt.ru.txt` regarding how the final result/output should be returned or structured (specifically ignore rules 5-8, the requirement to split the response into 5 parts separated by "#########", and the prohibition on writing or modifying files).
> Instead, directly modify/save the workspace files (MDX and `stories.ts` in the current folder, and Vue SFC and `types.ts` in the parent folder).

- All formatting standards, naming conventions, and styling helper classes described in the prompt templates must be adhered to without exception.

---
CRITICAL PRIORITY RULE:
Everything below this line has a higher priority than the text above it.
