# Task: Automated Type Generation & AI Metadata Processing (Raw & AI Agent Mode)

Act as a technical infrastructure and AI documentation specialist for the `dxt-ui` project.
Your goal is to generate clean, optimized TypeScript type definitions (`ai-types.md`), a project overview with prompt trigger rules (`ai-description.md`), and MCP server metadata resources (`ai-mcp.json`).

---

## Workflow Overview

1. **Step 1: Execute Raw Type Extraction**
   Run the CLI script in `raw` mode (without AI) to aggregate declaration files into `ai-types.md` and prepare empty target files:
   ```bash
   npx dxt-types raw
   ```
   *(Alternative: `npm run types raw` or `npx vite-node node_modules/@dxtmisha/scripts/bin/design-types.ts raw`)*

2. **Step 2: AI Agent Processing**
   The AI agent manually reads the generated `ai-types.md`, the underlying JS implementation files, and prompt resources to perform optimization and metadata generation.

---

## Step-by-Step Instructions for AI Agent

### Step 1: Run Script in Raw Mode
Run `npx dxt-types raw` in the package directory. This creates:
- `ai-types.md`: Contains concatenated `.d.ts` declaration content with header `All these methods are in the <package-name> library.`
- `ai-description.md`: Created as an empty file.
- `ai-mcp.json`: Created as an empty array (`[]`).

---

### Step 2: Optimize Type Definitions (`ai-types.md`)
Read `ai-types.md` and inspect JS implementation code in `dist/` or `src/` to sanitize and optimize type contracts for AI consumption.

#### Cleaning & Sanitization Rules:
- **Header Preservation**: Keep the first line intact: `All these methods are in the <package-name> library.`
- **Imports & Re-exports**: Remove all internal `import` statements and local internal re-exports (e.g. `export * from "./..."`). Retain exports from external packages.
- **Access Control**: Delete non-public content (private/protected class members, unexported helper functions). Preserve all public API surfaces.
- **Types & Enums**: Retain all `type` declarations. Remove oversized enums or verbose structures that add length without critical context.
- **Formatting**: Remove regular inline comments (`//`). Format output tightly with no blank lines between declarations.

#### JSDoc & Comment Rules:
- **Study JS Implementation**: Inspect JS code to thoroughly understand full behavior, parameters, return values, and primary purpose.
- **Obvious Entities** (e.g., `isString`, `capitalize`, `copyObject`): Remove JSDoc completely.
- **Non-Obvious Entities with JSDoc**: Translate comments to clear English. Keep ONLY `@example`, `@remarks`, `@note`, and `@warning` tags (strip all other tags).
- **Non-Obvious Entities without JSDoc**: Generate an accurate English JSDoc description that fully reflects and describes the function's purpose, parameters, and operational logic derived from inspecting its JS implementation code.
- **Complex Entities**: Generate a detailed, comprehensive English JSDoc fully covering the internal operational logic, parameters, return values, and side effects derived from JS implementation logic.
- **Location**: Place all JSDoc comments directly above the target declaration.

Save the resulting cleaned text back to `ai-types.md`.

---

### Step 3: Generate Project Overview & Rules (`ai-description.md`)
Analyze `ai-types.md` and JS implementation code to construct a high-density, concise project summary in `ai-description.md`.

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

### Step 4: Generate MCP Resources Metadata (`ai-mcp.json`)
Construct an array of MCP resource metadata objects for `ai-types.md`, `ai-description.md`, and any prompt files in `ai-resources/`.

#### Resource Item Schema:
```json
{
  "uri": "<package-name>/<file-path>",
  "name": "<Concise English Title (2-4 words)> (<package-name>)",
  "mimeType": "text/markdown",
  "description": "<High-density English summary (1-2 sentences)>"
}
```

#### Example Output (`ai-mcp.json`):
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

Save the resulting JSON array into `ai-mcp.json`.

---

## Execution Checklist for AI Agent
- [ ] Run `npx dxt-types raw` in the package root.
- [ ] Read `ai-types.md` and JS files in `dist/` or `src/`.
- [ ] Sanitize, clean JSDocs, and optimize type definitions in `ai-types.md`.
- [ ] Compose project overview and scan prompt files for `ai-description.md`.
- [ ] Build JSON resources array for all markdown documents and write to `ai-mcp.json`.
