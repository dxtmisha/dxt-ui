# Changelog

All notable changes to this project will be documented in this file.

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
