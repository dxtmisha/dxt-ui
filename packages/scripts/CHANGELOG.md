# Changelog

All notable changes to this project will be documented in this file.

## [0.11.3] - 2026-08-19

### Added
- **Constants**: Added `UI_DIR_RESOURCES` (`'resources'`) directory constant in `src/config.ts`.
- **Scaffolding Template**: Added `"screenshot": "dxt-screenshot"` script entry to the library package template (`src/media/templates/packages/library/package.json`).

### Changed
- **AI Prompt Metadata Separation & Granular Cache**:
  - Split prompt metadata caching from monolithic `prompts.json` files into individual JSON files saved in `ai-types-list/resources/`.
  - Updated `DesignTypesPrompts` to read, aggregate, and persist prompt cache items as separate `.json` files in the resources directory.
  - Added `getCacheDir()`, `getCachePath()`, and `saveCacheItem()` methods in `DesignTypesPrompts` to manage individual prompt metadata files.
  - Refactored `make()` and `toAiPromptItem()` to write prompt cache files immediately on change.
- **AI Types Save Workflow (`dxt-types-save`)**:
  - Made `DesignTypes.makeSave()` asynchronous (`Promise<this>`) and added automatic package description generation via `await this.description.make()`.
  - Updated `bin/design-types-save.ts` to await `makeSave()`.

## [0.11.2] - 2026-08-14

### Changed
- **AI Prompt Templates**:
  - Streamlined global development principles in `aiCodeGlobalPrompt.en.md` and `aiCodeGlobalPrompt.ru.md` to remove redundant guidelines and improve token efficiency.
  - Strengthened strict instruction-following directives with explicit prohibitions against unsolicited changes, arbitrary refactoring, and unauthorized file modifications.
  - Updated TSDoc documentation language rule to default to `[wikiLanguage]` unless the project defines its own documentation standard.
  - Clarified source code reading requirements: strictly forbidding superficial scans when modifying existing files while encouraging keyword search before scanning large `ai-types.md` references.
- **Library AI Prompt Generator**:
  - Removed duplicate `## Core Rules & Directives` preamble block in `LibraryAiPrompt` to keep generated `ai-prompt.md` clean and consistent.

## [0.11.1] - 2026-08-14

### Changed
- **AI Prompt Templates**:
  - Refined AI initialization step in `aiCodeGlobalPrompt.en.md` and `aiCodeGlobalPrompt.ru.md` to load `ai-types.md` and `ai-developer.md` conditionally only when relevant to the task.
  - Added comprehensive definitions of `ai-types.md` (what the file is, its contents including TypeScript signatures and `@keywords` search tags, and how to work with it).
  - Added directive to use fast text/grep search on `ai-types.md` before scanning the entire file line-by-line to preserve context tokens.

## [0.11.0] - 2026-08-13

### Added
- **CLI `dxt-types-save` & Fast Save Mode**: Added `dxt-types-save` CLI executable script (`bin/design-types-save.ts`) and `makeSave()` method in `DesignTypes` to generate `ai-types.md` from cached `ai-types-list` files without invoking AI APIs.
- **MD5 Hash Calculation & `ai-types-list` Sync**:
  - Added `md5` hash property to `DesignTypesItem` (`DesignTypesList`) and `getMd5` calculation utility in `DesignTypes`.
  - Added `UI_DIR_AI_TYPES_LIST` constant (`ai-types-list`) to `src/config.ts`.
  - Added `saveList` method to save copies of type definition files with MD5 headers (`// md5:...`) to `ai-types-list`, skipping redundant writes for unchanged content.
- **Modular Class Structure for AI Types Generation**:
  - Extracted core `DesignTypes` logic into specialized sub-classes: `DesignTypesAi`, `DesignTypesMake`, `DesignTypesPrompts`, `DesignTypesDescription`, and `DesignTypesMcp`.
  - Registered and exported new classes in `@dxtmisha/scripts` entrypoint (`src/library.ts`).
- **Prompt Metadata & Cache System**:
  - Structured AI prompt generation output using JSON metadata (title, description) via `toAiJson`.
  - Implemented prompt item caching with MD5 hash validation (`DesignTypesPromptCacheItem` and `DesignTypesPrompts` cache persistence).
- **Dedicated MCP & Description Generators**:
  - Added `DesignTypesDescription` for generating high-density project overview descriptions with capability lists and study triggers.
  - Added `DesignTypesMcp` for populating MCP server resource descriptors (`ai-mcp.json`) using cached prompt metadata.

### Changed
- **AI Types & Prompt Optimization**:
  - Optimized JSDoc extraction in `DesignTypesMake` (`hasJSDoc` check): skips passing full JS source implementation (`fullJsContent`) when TypeScript declarations already contain complete JSDoc annotations, significantly reducing token usage.
  - Restructured AI prompt context in `DesignTypesAi` to separate target declaration file content from supplementary JS implementation context.
  - Updated prompt guidelines for `dxt-types` generation to require concise JSDocs, keyword search tags, and stripped `@returns` tags.
- **Scaffolding Template**: Added `ai-types.md` to package template `.gitignore` (`_.gitignore.txt`).

## [0.10.16] - 2026-08-11

### Changed
- **AI Prompts**: Refined Vue component logic rules in `aiCodeVuePrompt.en.md` and `aiCodeVuePrompt.ru.md` — restricted mandatory composable extraction to complex logic, clarifying that simple logic or calling existing hooks does not require a separate composable.

## [0.10.15] - 2026-08-10

### Added
- **AI Prompt Self-Audit Directive**: Added `getAuditPrompt` method in `LibraryAiPrompt` to append a strict, mandatory self-audit directive (`## Mandatory Final Self-Audit (CRITICAL GUARD & STRICT COMPLIANCE)`) at the end of generated AI prompt files (`ai-prompt.md`), instructing AI models to re-study and audit all generated code against project rules before concluding work.

## [0.10.13] - 2026-08-06

### Changed
- **AI Workspace Memory**: Updated `aiCodeGlobalPrompt` templates (EN & RU) and root `ai-prompt.md` to restrict `ai-memory.md` updates strictly to explicit developer requests or critical architectural rules.
- **DesignTypes**: Refined AI prompt summary generation in `toAiPromptName` to produce high-density topic and trigger criteria descriptions, and fixed prompt string joining formatting.



### Changed
- **AI Generators & Design Types**: Added support for generating `ai-mcp.json` resources in `LibraryAiPrompt`, updated `DesignTypes.toAiEdit` JSDoc instructions, updated `AiZAiLite` prompt parameters, and updated package metadata (`ai-memory.md`).

## [0.10.11] - 2026-08-05

### Changed
- **DesignTypes**: Updated AI JSDoc generation prompt rules in `toAiEdit` to delete JSDocs for obvious entities and generate concise (1-line) or detailed descriptions for non-obvious entities based on JS code inspection.
- **DesignTypes**: Extended `toAiMcpPrompts` to include `ai-types.md` and `ai-description.md` alongside prompt files when generating MCP server resources (`ai-mcp.json`).

## [0.10.10] - 2026-08-05

### Changed
- **AI Prompts**: Updated prompt templates (`aiCodeGlobalPrompt.en.md`, `aiCodeGlobalPrompt.ru.md`) to strictly mandate recording developer preferences into package `ai-memory.md` files.

## [0.10.9] - 2026-08-03

### Changed
- **DesignTypes**: Updated AI prompt instructions in `DesignTypes.toAiEdit` and `DesignTypes.toAiDescription`:
  - Enforced strict prompt boundaries forbidding AI agents from analyzing unprovided external files, links, paths, or environment data.
  - Enhanced JSDoc generation rules to generate English JSDocs for non-obvious entities directly from JS implementation code.
  - Expanded project description structure in `toAiDescription` to detail all exposed capabilities and triggers for `ai-types.md` analysis, and added optional `code` parameter support.

## [0.10.8] - 2026-07-28

### Added / Updated
- **AI Prompt Templates**: Overhauled global AI prompt templates (`aiCodeGlobalPrompt.en.md`, `aiCodeGlobalPrompt.ru.md`) with streamlined rules, mandatory deep study workflows (`view_file`), prohibition of superficial code scans, and full-file self-audit requirements.
- **DesignReplace**: Escaped dollar sign (`$`) characters in replacement value strings in `DesignReplace` to prevent regex capture group interpolation issues during template processing.
- **DesignTypes**: Added JavaScript File Validator and improved TypeScript schema generation and translation logic.

## [0.10.7] - 2026-07-06

### Changed
- **DesignTypes**: Updated the AI prompt in `DesignTypes.toAiEdit` to translate Russian JSDocs/comments to English instead of just removing them, if an English version is missing.

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
