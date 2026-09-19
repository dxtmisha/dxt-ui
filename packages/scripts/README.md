# @dxtmisha/scripts

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fscripts.svg)](https://www.npmjs.com/package/@dxtmisha/scripts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/scripts` is a powerful suite of development scripts, CLI tools, and an AI context engineering engine designed specifically for modern UI libraries and TypeScript monorepos. It bridges the gap between design systems and Large Language Models (LLMs) — transforming complex codebases into token-efficient, context-rich type summaries (`ai-types.md`) and consolidated system prompts (`ai-prompt.md`, `AGENTS.md`), while automating component scaffolding, token compilation, and library exports.

## Why this library?

Maintaining a UI library and pairing with AI coding assistants (Claude, Gemini, ChatGPT, Antigravity, Cursor) introduces two major challenges. On one hand, developers face repetitive boilerplate: scaffolding components, writing props interfaces, managing barrel exports, compiling tokens, and taking screenshots. On the other hand, feeding raw codebases or standard `.d.ts` declaration files into LLMs quickly exhausts context windows with internal implementation noise, leading to hallucinations, invented props, and broken design token conventions.

`scripts` brings all these solutions together into a unified, tested toolkit. It provides an automated AI pipeline that cleans TypeScript declarations via AST transforms and generates search-optimized type definitions (`dxt-types`), assembles consolidated system prompts with safe `AGENTS.md` synchronization (`dxt-prompt`), and automates the entire UI lifecycle from component creation (`dxt-component`) to monorepo package building (`dxt-build-packages`).

## What does it do?

For **AI prompt consolidation (`dxt-prompt`)** — `LibraryAiPrompt` scans workspace packages and dependencies to build a unified `ai-prompt.md` system prompt. It consolidates global development rules, Vue style guides (`--vue`), package overviews, links to specialized `ai-resources/*.md` guides, type definitions, and visual screenshot references. It safely synchronizes rules into `AGENTS.md` using MD5-tracked boundary comments without overwriting developer instructions, and generates MCP (Model Context Protocol) configurations (`--mcp`).

For **AI-optimized type generation (`dxt-types`)** — `DesignTypes` compiles TypeScript declarations, strips private/internal symbols via AST transformation (`DesignTypesMakeTsTransformer`), caches unchanged files via MD5 diffing, and uses AI to generate a minimal, token-efficient `ai-types.md`. It injects searchable `@keywords` tags and concise bilingual (EN/RU) JSDoc comments so AI agents can look up signatures instantly before scanning files. It also generates package summaries (`ai-description.md`), MCP server definitions (`ai-mcp.json`), and handles gitignore rules.

For **fast cached type rebuilding (`dxt-types-save`)** — an instant offline command that re-assembles `ai-types.md` and MCP resources directly from cached `ai-types-list/` chunks without calling external LLM APIs, ideal for CI/CD pipelines and fast local builds.

For **component scaffolding (`dxt-component`)** — automatic generation of full Vue component templates. A single command sets up `.vue` files, `props.ts`, `styleToken.scss`, and barrel exports, complete with TypeScript definitions.

For **design system orchestration (`dxt-constructor`)** — a robust suite of classes to parse TypeScript props, manage constructor configurations, and synchronize design tokens.

For **visual screenshot capture (`dxt-screenshot`)** — browser automation using Puppeteer to capture high-resolution WebP component screenshots across themes and states, extracting rendered DOM HTML and computed styles for multimodal AI visual inspection.

For **library management (`dxt-library`)** — automated maintenance of `index.ts` files (barrel exports) across packages, ensuring all components and utilities are correctly exposed.

For **monorepo build orchestration (`dxt-build-packages`)** — topologically ordered compilation and publishing (`dxt-build-publish-packages`) of workspace packages.

## Installation

```bash
npm install -D @dxtmisha/scripts
```

> **Note:** TypeScript sources are shipped directly. Requires a TypeScript runner like `vite-node`, `tsx`, or manual transpilation.

## Quick Start

### CLI Commands

```bash
# 1. Compile declarations and generate AI-optimized type definitions (ai-types.md)
npx dxt-types

# 2. Fast rebuild of ai-types.md from cache without calling AI APIs
npx dxt-types-save

# 3. Generate consolidated ai-prompt.md, update AGENTS.md, and create MCP resources
npx dxt-prompt --mcp --vue

# 4. Scaffold component templates in empty directories
npx dxt-component

# 5. Build component constructors and token bindings
npx dxt-constructor

# 6. Rebuild library index exports
npx dxt-library

# 7. Capture component screenshots for multimodal AI context
npx dxt-screenshot

# 8. Build all monorepo packages in dependency order
npx dxt-build-packages
```

### Programmatic Usage

```typescript
import {
  DesignTypes,
  LibraryAiPrompt,
  ComponentCreator,
  LibraryExport
} from '@dxtmisha/scripts'

// 1. Generate AI-optimized types (ai-types.md, ai-description.md, ai-mcp.json)
const types = new DesignTypes()
await types.make()

// 2. Consolidate repository AI prompt (ai-prompt.md) and sync AGENTS.md
const prompt = new LibraryAiPrompt([], true, true)
prompt.make()

// 3. Scaffold component templates
const creator = new ComponentCreator()
creator.make()

// 4. Manage barrel exports
const library = new LibraryExport()
library.make()
```

## Principles

- **Zero Hallucination by Design** — bounded, verified AI context. Generating compact `ai-types.md` and consolidated `ai-prompt.md` files prevents LLMs from guessing signatures or misinterpreting tokens.
- **Search Before Full Scan** — `@keywords` indexing and structured headers allow AI agents to quickly retrieve needed types via text search without burning context tokens on massive files.
- **Non-Destructive Agent Rules** — updates to `AGENTS.md` are performed strictly within MD5-tracked marker blocks, preserving developer-specific instructions.
- **Developer Experience First** — commands are simple, outputs are predictable. You shouldn't have to write boilerplate or manually maintain exports and documentation prompts.
- **TypeScript-first** — strict typing and AST-level transformations out of the box, integrating seamlessly into modern monorepo tooling.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## Difference from other tools

- **`@dxtmisha/scripts`** — an integrated design system engine combining UI scaffolding, token compilation, and specialized AI context generation (`ai-types.md`, `ai-prompt.md`, `AGENTS.md`, MCP). Not just a generic generator like Yeoman or Plop, but an end-to-end bridge between design system architecture and AI coding agents.

## License

[MIT](LICENSE)
