# Changelog

All notable changes to this project will be documented in this file.

## [0.10.6] - 2026-07-05

### Changed
- **Library Template prompt**: Updated `prompt.md` in the library template `materials/` folder to describe library/package architecture, entrypoints, and file structures instead of web application/landing page layouts.
- **Library Template description**: Updated `ai-description.md` in the library template folder to include mandatory development guidelines for auto-generating exports (forbidding manual edits of `src/library.ts` and enforcing `npm run library`).

## [0.10.5] - 2026-07-05

### Added
- **PackageFile utility**: Support for `'prepublishOnly'` script fallback in the `getCodeBuildOrRecovery()` utility method.
- **AI Prompt Templates**: Updated global code generation guidelines (`aiCodeGlobalPrompt.en.md`, `aiCodeGlobalPrompt.ru.md`) and component prompt templates to enforce comprehensive type analysis, ban absolute file paths in `ai-memory.md` configurations, and standardize documentation formatting structures.

### Changed
- **Package Types Output**: Simplified package types export configurations in `DesignComponent`, `DesignConstructor`, `DesignUi`, and library package templates by mapping type output paths directly to the root `dist` folder rather than nested `dist/src` sub-directories.
- **AI Prompt Generation**: Overhauled automated prompt and type definition instructions to strongly direct AI assistants to perform thorough pre-analyses on type structures before modifying the codebase.

## [0.10.4] - 2026-06-29

### Added
- **JSDoc**: Added comprehensive bilingual (EN/RU) JSDoc comments to the `AiDoc` class, its constructor, and all internal methods.

### Changed
- **AiDoc**: Initialized `ServerStorage.setErrorStatus(true)` in the constructor to force standard error status config on ServerStorage during AI documentation generation.

## [0.10.3] - 2026-06-25

### Added
- **Web-Types Generation**: Modernized component Web-Types generation to support modern IDE contributions structure:
  - Switched output generation schema from legacy HTML `'tags'` to the new `'vue-components'` syntax standard.
  - Implemented typescript types (`WebTypesPropItem`, `WebTypesVueComponentItem`) to map components, slots, properties, symbols, events, descriptions, and JS interfaces.

## [0.10.2] - 2026-06-18

### Changed
- **AI Documentation Support**: Migrated template files from `.txt` to `.md` extensions (prompts, rules, and helper templates) to align with standard markdown format.
- **Developer Instructions**: Expanded default prompts with stricter code rules (banned `@ts-ignore`, mandated active usage of `ai-memory.md`).

## [0.10.1] - 2026-06-17

### Added
- **AI Guidelines**: Integrated package-scoped memory rules to instruct the AI assistant to read or create the package-level `ai-memory.md` files for persistent guidelines.

## [0.10.0] - 2026-05-20

### Added
- **OpenAI Provider**: Implemented `AiOpenAiLite` and `AiOpenAi` classes providing a fully typed OpenAI SDK integration, supporting chat completions with image and text content blocks.
- **Z.ai Provider**: Implemented `AiZAiLite` and `AiZAi` classes as OpenAI-compatible Zhipu AI integration, automatically routing to the correct endpoint (`api.z.ai` for international access). The `baseURL` is configurable via `aiConfig.baseURL` in `design.config.json`.
- **Claude Agent Provider**: Added `AiClaudeAgent` and `AiClaudeAgentLite` classes supporting the extended Anthropic agent API workflow.
- **Build Orchestration**: Introduced `BuildPackages` and `BuildPublishPackages` classes for comprehensive monorepo build and publish orchestration with incremental tracking support.
- **Package Management**: Added `PackageFile` class for structured package configuration file handling.
- **`run` utility**: Added a new `run()` utility function for streamlined subprocess execution across scripts.

### Changed
- **`AiType` config type**: Expanded `AiType` to include all supported providers: `'claude' | 'claude-cli' | 'claude-agent' | 'gemini' | 'gemini-cli' | 'openai' | 'zai'`. Previously only `gemini` and `gemini-cli` were available.
- **`useAi` composable**: Updated routing switch to instantiate the correct AI class for all providers including `claude`, `claude-agent`, `claude-cli`, `openai`, and `zai`.
- **Library exports**: Updated `library.ts` and `library-ai.ts` to export all new AI provider classes, agent classes, build orchestration classes and the `run` utility.

### Removed
- **CLI variants from `library-ai.ts`**: Removed exports of `AiGoogleCli`, `AiGoogleCliLite`, `AiClaudeCli`, and `AiClaudeCliLite` from the lightweight AI-only export surface. These remain accessible via the main `library.ts` entry point.

---

## [0.9.1] - 2026-05-18

### Changed
- **Component Documentation Prompts**: Overhauled `componentPrompt.en.txt` and `componentPrompt.ru.txt` to enforce `storybookStyle.scss` helper usage in Storybook stories, standardized slot/expose signature formatting, and mandatory `<Source />` code block inclusion.
- **Architectural Guardrails**: Added strict instructions against code modifications and hallucinations during AI-assisted code and documentation generation.
- **Wiki Template**: Updated `componentDoc/wiki/run.ts` to dynamically resolve and read prompt instructions from `prompt.txt`.
- **Template Structure**: Created `componentDoc/materials/` workspace directory with `README.md` and `prompt.txt` templates containing target implementation instructions and monorepo context.



## [0.8.2] - 2026-05-13

### Changed
- **Type Generation**: Modified `DesignReplace.ts` to implement stricter typing for generated component properties. Removed the automatic addition of the generic `string` type to union prop definitions, ensuring generated components use precise literal types.
- **Wiki Integration**: Updated `DesignWikiStormItem.ts` to improve technical data generation for the wiki system.

## [0.8.0] - 2026-05-10

### Added
- **AI Prompt System**: Introduced `LibraryAiPrompt` and `LibraryAiPromptItem` classes for automated, recursive AI prompt generation across the monorepo.
- **Nitro Scaffolding**: Added a full Nitro + Vue 3 SSR boilerplate template for rapid project initialization.
- **Design Prompt CLI**: Added `design-prompt` CLI tool for aggregating documentation, types, and screenshots into AI-ready context files.
- **Config Standardization**: Standardized project constants in `config.ts` to support automated discovery and design workflows.

### Changed / Improved
- **Build System**: Updated script library exports and synchronized workspace dependencies.
- **Library Exports**: Synchronized package-lock and updated internal script exports for better consistency.

## [0.7.11] - 2026-05-05

### Added
- **Figma API**: Implemented a robust Figma API client (`FigmaApi`, `DesignFigma`) supporting file retrieval, node filtering, image generation, and style metadata extraction.
- **Storybook Integration**: Configured Storybook to monitor the `demo-test` directory, enabling better testing and visualization of experimental components.
- **Browser Automation**: Introduced a dedicated `BrowserItem` class to encapsulate Puppeteer logic, supporting advanced features like custom wait states and extended viewport heights.

### Changed / Improved
- **Automated Screenshots**: Overhauled the `DesignScreenshot` class to handle server lifecycle and capture triggers more reliably. Standardized screenshot constants (timeouts, quality, and browser arguments).
- **Library Exports**: Streamlined library exports by centralizing design and browser-related utilities.
- **Type Generation**: Updated `DesignTypes` to force `ServerStorage` error status during generation. Fixed a type generation issue in `DesignReplace` to ensure flexible string types in component property templates.
