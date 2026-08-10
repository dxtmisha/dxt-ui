# Task: Automated Type Generation & AI Metadata Processing (Raw & AI Agent Mode)

Act as a technical infrastructure and AI documentation specialist for the `dxt-ui` project.
Your goal is to generate clean, optimized TypeScript type definitions (`ai-types.md`), a project overview with prompt trigger rules (`ai-description.md`), and MCP server metadata resources (`ai-mcp-resources.json`).

**CRITICAL INSTRUCTION**: All these rules must be strictly followed.

---

## Workflow Overview

1. **Step 1: Execute Raw Type Extraction**
   Run the CLI script in `raw` mode (without AI) to aggregate declaration files into `ai-types.md` and prepare empty target files:
   ```bash
   npx dxt-types raw
   ```
   *(Alternative: `npm run types raw` or `npx vite-node node_modules/@dxtmisha/scripts/bin/design-types.ts raw`)*

2. **Step 2: AI Agent Optimization (Cleanup & Manual JSDoc Processing)**
   The AI agent processes the generated `ai-types.md`. All processing (cleanup, translation, and JSDoc optimization) is performed in a single stage STRICTLY MANUALLY, section by section. If the file is too big, it MUST be divided into parts and fully processed. Leaving the file "as is" is STRICTLY FORBIDDEN. The use of automated scripts is also STRICTLY FORBIDDEN.

---

## CRITICAL REQUIREMENT: Strict Manual Processing

- **NO SCRIPTS**: Writing or executing custom helper scripts (e.g., Node.js, Python, bash parsing, regex automation) is **STRICTLY FORBIDDEN** for any tasks (cleanup, translation, JSDoc generation, etc.). All work must be done MANUALLY, no matter the file size or volume. The process can be divided into stages (chunk by chunk) if the file is too large, but `ai-types.md` MUST be fully processed—leaving it "as is" is STRICTLY FORBIDDEN. Manual inspection and editing using direct file tools is required.
- **DEEP MANUAL STUDY**: The AI agent MUST manually read, inspect, and analyze the JS implementation files in `dist/` or `src/` to fully understand every function, method, class, parameter, return value, and side effect before writing JSDocs.

---

## CRITICAL REQUIREMENT: English-Only Output (Strict Language Enforcement)

- **STRICTLY ENGLISH ONLY**: All generated text and contents in `ai-types.md`, `ai-description.md`, and `ai-mcp-resources.json` MUST be written **EXCLUSIVELY IN ENGLISH**.
- **NO NON-ENGLISH TEXT**: Translate all existing non-English comments (Russian, etc.) to clear English. Including any non-English text (Russian, Vietnamese, etc.) in JSDocs, comments, descriptions, summaries, or metadata is **STRICTLY FORBIDDEN**.

---

## CRITICAL REQUIREMENT: AI Consumer Context (No Source Code Access)

- **EXCLUSIVE RELIANCE ON GENERATED METADATA**: Downstream AI coding assistants working with this package will NOT see the original source code (`dist/` or `src/`) or any other implementation files. They will rely EXCLUSIVELY on the generated metadata files (`ai-types.md`, `ai-description.md`, and `ai-mcp-resources.json`) for all coding tasks, contract inspections, and operational understanding.
- **SELF-CONTAINED ACCURACY**: Every type contract, JSDoc description, module overview, and MCP resource MUST be completely self-contained, unambiguous, and accurate, providing all context required for downstream AI agents without requiring external source code access.

---

## Step-by-Step Instructions for AI Agent

### Step 1: Run Script in Raw Mode
Run `npx dxt-types raw` in the package directory. This creates:
- `ai-types.md`: Contains concatenated `.d.ts` declaration content with header `All these methods are in the <package-name> library.`
- `ai-description.md`: Created as an empty file.
- `ai-mcp-resources.json`: Created as an empty array (`[]`).

---

### Step 2: Optimize Type Definitions (`ai-types.md`)
Read `ai-types.md` and inspect JS implementation code in `dist/` or `src/` manually to sanitize and optimize type contracts for AI consumption.

#### Cleaning & Sanitization Rules (Must Be Performed Manually):
- **Header Preservation**: Keep the first line intact: `All these methods are in the <package-name> library.`
- **Preserve All Exported Entities**: It is STRICTLY FORBIDDEN to delete, omit, or remove any exported functions, methods, classes, interfaces, or types. Every single public API entity exported by the package MUST be retained in `ai-types.md`.
- **Imports & Re-exports**: Remove all internal `import` statements and local internal re-exports (e.g. `export * from "./..."`). Retain exports from external packages.
- **Access Control**: Delete non-public content (private/protected class members, unexported helper functions). Preserve all public API surfaces.
- **Types & Enums**: Retain all `type` declarations. Remove oversized enums or verbose structures that add length without critical context.
- **Abstract Classes Caution**: Exercise extreme caution when considering removing abstract classes—if there is even a 5% chance an abstract class helps downstream AI agents understand the API or construct code, it MUST be retained.
- **Declaration Exclusions**: Exclude `.vue.d.ts`, `wiki.d.ts`, `wikiData.d.ts`, and internal constructor files (except `basicTypes.d.ts`, `types.d.ts`, and `props.d.ts`).
- **Formatting & Cleanup**: MANDATORY to remove all blank/empty lines between declarations (format output tightly). Delete all regular inline and block comments (`//` or `/* ... */`), as well as all comments containing file links or file paths (e.g., `// file:...`, `// packages/...`).

#### JSDoc & Comment Rules:
- **Study JS Implementation**: Manually inspect JS code to thoroughly understand full behavior, parameters, return values, and primary purpose.
- **Obvious Entities (Removing JSDoc)**: Mandatorily remove JSDoc for simple, self-explanatory entities whose purpose, parameters, and return values are unambiguous purely from their name (e.g., basic type guards `isString`, `isArray`, `isObject`, basic utility functions `capitalize`, `copyObject`, `random`, `sleep`, `toString`, standard zero-logic getters/setters).
- **Non-Obvious & Complex Entities (Retaining/Creating JSDoc)**: Retain or generate JSDoc for all entities involving non-trivial business logic, multiple options/parameters, side effects, or configuration structures (e.g., `replaceTemplate`, `sortList`, `SearchList`, `Api` methods, `GeoIntl`, complex interfaces and types). Maintain a balanced middle ground: do not strip JSDoc from complex or domain-specific functions, and do not retain redundant JSDoc on self-explanatory basic utilities.
- **Compact Formatting & Text Optimization**: Format JSDoc comments in a compact, single-line format (`/** ... */`) whenever possible. Optimize and shorten the text content of JSDocs. Do not just take the original text or directly translate it—rewrite it to be as concise and dense as possible without losing critical context.
- **Non-Obvious Entities with JSDoc**: Translate comments to clear English, optimizing and shortening the text. Keep ONLY `@example`, `@remarks`, `@note`, and `@warning` tags (strip all other tags). **CRITICAL**: The `@example`, `@remarks`, `@note`, and `@warning` tags MUST NEVER be deleted, removed, or altered structurally—only translate and optimize their text content to English.
- **Non-Obvious Entities without JSDoc**: Generate an accurate, concise English JSDoc description that briefly reflects the function's purpose, parameters, and operational logic derived from inspecting its JS implementation code.
- **Complex Entities**: Generate a concise English JSDoc covering the internal operational logic, parameters, return values, and side effects derived from JS implementation logic, kept as compact as possible.
- **Location**: Place all JSDoc comments directly above the target declaration.

Save the resulting cleaned text back to `ai-types.md`.

---

### Step 3: Generate Project Overview & Rules (`ai-description.md`)
Analyze `ai-types.md` and JS implementation code manually to construct a high-density, concise project summary in `ai-description.md`.

#### Document Structure (Single cohesive text block):
1. **Core Purpose**: 1-2 sentences summarizing the library's primary technical function and responsibility.
2. **Key Capabilities & Groupings**: Group classes, composables, or components into functional modules (e.g., API/Network, Storage, Localization, Form Components, Layout Controls, Utilities) and summarize capabilities in tight sentences. Do NOT list individual method names—group by function instead.
3. **Triggers for Studying `ai-types.md`**: Under what specific coding tasks, keywords, requirements, or architectural needs is it mandatory for the AI agent to study `ai-types.md`?
4. **Integration Context**: 1 sentence explaining how this library connects with other stack frameworks or packages.

#### Mandatory Rules Section:
Check `ai-resources/` for prompt files. If prompt files exist, append a section formatted as follows:

```markdown
## Mandatory Rules
Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):
- 'node_modules/<package-name>/<file-path>': <1-2 sentence trigger and topic summary (max 30-35 words in English)>
```

Save the resulting text into `ai-description.md`.

---

### Step 4: Generate MCP Resources Metadata (`ai-mcp-resources.json`)
Construct an array of MCP resource metadata objects for `ai-types.md`, `ai-description.md`, and any prompt files in `ai-resources/` manually.

#### Resource Item Schema:
```json
{
  "uri": "<package-name>/<file-path>",
  "name": "<Concise English Title (2-4 words)> (<package-name>)",
  "mimeType": "text/markdown",
  "description": "<High-density English summary (1-2 sentences)>"
}
```

#### Example Output (`ai-mcp-resources.json`):
```json
[
  {
    "uri": "@dxtmisha/functional-basic/ai-types.md",
    "name": "Type Definitions (@dxtmisha/functional-basic)",
    "mimeType": "text/markdown",
    "description": "Compressed and AI-optimized TypeScript declaration contracts for core utilities."
  },
  {
    "uri": "@dxtmisha/functional-basic/ai-description.md",
    "name": "Package Overview & Rules (@dxtmisha/functional-basic)",
    "mimeType": "text/markdown",
    "description": "High-density project overview, key capabilities, and prompt trigger guidelines."
  }
]
```

Save the resulting JSON array into `ai-mcp-resources.json`.

---

## Execution Checklist for AI Agent
- [ ] Run `npx dxt-types raw` in the package root.
- [ ] Manually read `ai-types.md` and JS files in `dist/` or `src/`.
- [ ] Manually perform basic cleanup (remove blank lines, file link comments, standard comments) and optimize JSDocs (no scripts allowed).
- [ ] Preserve all exported functions, methods, classes, interfaces, and types (deletion is strictly forbidden).
- [ ] Manually compose project overview and scan prompt files for `ai-description.md`.
- [ ] Manually build JSON resources array for all markdown documents and write to `ai-mcp-resources.json`.
