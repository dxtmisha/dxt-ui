# Task: Automated Type & Metadata Updating (Incremental Update Mode)

Act as a technical infrastructure and AI documentation specialist for the `dxt-ui` project.
Your goal is to incrementally update the existing TypeScript type definitions (`ai-types.md`), project overview (`ai-description.md`), and MCP server metadata (`ai-mcp-resources.json`) without recreating them from scratch.

**CRITICAL INSTRUCTION**: All these rules must be strictly followed.

---

## Workflow Overview

1. **Step 1: Identify Changes via Git**
   Use git (e.g., `git diff`, `git log`, `git status`) to identify exactly which implementation files (`dist/` or `src/`) were recently changed, added, or deleted. DO NOT run `npx dxt-types raw`.

2. **Step 2: Incremental AI Agent Update**
   The AI agent processes the changes and manually updates the existing `ai-types.md`, `ai-description.md`, and `ai-mcp-resources.json` files to reflect the new state (if the file needs to be divided into parts, take the maximum possible volume at a time; if it can be processed entirely, it is better to choose processing it as a whole). This must be done STRICTLY MANUALLY. The use of automated scripts is STRICTLY FORBIDDEN.

---

## CRITICAL REQUIREMENT: Strict Manual Processing

- **NO SCRIPTS**: Writing or executing custom helper scripts (e.g., Node.js, Python, bash parsing, regex automation) or running `npx dxt-types raw` is **STRICTLY FORBIDDEN** for any tasks. All work must be done MANUALLY using direct file editing tools (if the process requires dividing the file into parts, take the maximum possible volume at a time; process entirely if possible).
- **FULL PROCESSING WITHOUT OMISSIONS**: The files and updates MUST be processed IN THEIR ENTIRETY. It is strictly forbidden to omit, skip, or delete anything (unless required by the incremental update logic).
- **DEEP MANUAL STUDY**: The AI agent MUST manually read, inspect, and analyze the specific JS implementation files in `dist/` or `src/` that have changed to fully understand the updates before editing the metadata.

---

## CRITICAL REQUIREMENT: English-Only Output (Strict Language Enforcement)

- **STRICTLY ENGLISH ONLY**: All new or updated text in `ai-types.md`, `ai-description.md`, and `ai-mcp-resources.json` MUST be written **EXCLUSIVELY IN ENGLISH**.
- **NO NON-ENGLISH TEXT**: Translate any new non-English comments to clear English.

---

## CRITICAL REQUIREMENT: AI Consumer Context (No Source Code Access)

- **EXCLUSIVE RELIANCE ON GENERATED METADATA**: Downstream AI coding assistants will NOT see the original source code. They will rely EXCLUSIVELY on the generated metadata files.
- **SELF-CONTAINED ACCURACY**: Every updated type contract, JSDoc description, module overview, and MCP resource MUST be completely self-contained, unambiguous, and accurate.

---

## Step-by-Step Instructions for AI Agent

### Step 1: Identify Changed Files
Use git commands (e.g. `git status`, `git diff HEAD`, `git diff <commit-hash>`) in the package directory to find out which source files (`src/` or `dist/`) were modified. Analyze the changes to understand what functions, classes, interfaces, or variables were added, modified, or removed.

---

### Step 2: Update Type Definitions (`ai-types.md`)
Open the existing `ai-types.md` file and manually apply the updates based on your git analysis.

#### Cleaning & Updating Rules:
- **Incremental Changes Only**: Do NOT regenerate the whole file. Only add new entities, update modified entities, and remove deleted entities based on the git diff.
- **Header Preservation**: Keep the first line intact: `All these methods are in the <package-name> (v<version>) library.`
- **Preserve Unchanged Entities**: It is STRICTLY FORBIDDEN to delete or omit any exported entities that were not affected by the recent changes.
- **Imports & Re-exports**: Do not add internal `import` statements or local re-exports.
- **Access Control**: Do not add non-public content (private/protected members).
- **Formatting & Cleanup**: Ensure there are no blank/empty lines between new/updated declarations. Delete regular inline comments and file links.

#### JSDoc & Comment Rules:
- **Study JS Implementation**: Manually inspect the changed JS code to understand the new behavior.
- **Obvious Entities (Removing JSDoc)**: Remove JSDoc for simple, self-explanatory entities.
- **Non-Obvious & Complex Entities (Retaining/Creating JSDoc)**: Retain or generate compact, single-line JSDoc for complex logic. 
- **Compact Formatting & Text Optimization**: Format new JSDocs compactly. Rewrite original text to be dense and concise. Keep ONLY `@example`, `@remarks`, `@note`, and `@warning` tags.
- **Location**: Place all JSDoc comments directly above the target declaration.

Save the updated text back to `ai-types.md`.

---

### Step 3: Update Project Overview & Rules (`ai-description.md`)
Analyze if the recent changes require updating the overall project overview.
- If new core capabilities or modules were added, update the "Key Capabilities & Groupings" section.
- If prompt files in `ai-resources/` were changed, update the "Mandatory Rules" section accordingly.

Save any necessary updates into `ai-description.md`.

---

### Step 4: Update MCP Resources Metadata (`ai-mcp-resources.json`)
Check if any new markdown documents (e.g. new prompt files) were added or removed.
- If so, update the JSON array in `ai-mcp-resources.json` manually following the existing schema.

Save the updated JSON array into `ai-mcp-resources.json`.

---

## Execution Checklist for AI Agent
- [ ] Use `git` to identify recent changes in the package implementation (`src/` or `dist/`).
- [ ] Manually read the changed source files to understand the updates.
- [ ] Incrementally update `ai-types.md` (add, modify, delete entities) strictly manually, applying all formatting and JSDoc rules.
- [ ] Update `ai-description.md` if the project overview or mandatory rules have changed.
- [ ] Update `ai-mcp-resources.json` if new resources were added or removed.
