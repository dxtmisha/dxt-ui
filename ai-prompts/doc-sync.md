---
name: doc-sync
description: Mandatory workflow to add, update, or remove JSDoc and Storybook/Wiki documentation whenever a class, function, composable, type, or component is added, modified, renamed, or deleted.
---

# Task: Synchronizing Documentation on Entity Changes

Whenever you **add**, **modify**, **rename**, or **delete** an entity (class, method, function, composable, type/interface, or component), you **MUST** keep its documentation synchronized with the implementation in the same task (unless the developer explicitly asks to skip documentation updates).

> **Scope Discipline**: Synchronize documentation strictly for the entity or entities created or changed in the current task. Do not make unsolicited edits to unrelated documentation files.

---

## Execution Protocol

### 1. Inline Bilingual JSDoc / TSDoc
Follow [`ai-prompts/jdoc.md`](./jdoc.md) strictly:
- **Added entities/members**: Document every exported class, function, composable, method, interface, type, enum, and property using the mandatory bilingual standard (English on top, Russian on bottom; `@param` and `@returns` separated by ` / `; compact `/** EN / RU */` for types/properties).
- **Modified entities/members**: Update JSDoc descriptions, `@param`, and `@returns` whenever parameters, optionality (`?`), default values, return types, or behavior change.
- **Removed entities/members**: Ensure no stale JSDoc references remain.

### 2. Storybook MDX Documentation (`packages/<pkg>/src/storybook/`)
Check whether `packages/<pkg>/src/storybook/` exists for the modified package:
- **Locate Existing Docs**: Search `packages/<pkg>/src/storybook/` for files matching the entity name (e.g., `classes/<Entity>/<Entity>.{en,ru,vi}.mdx`, `functions/<name>/<name>.{en,ru,vi}.mdx`, `composables/<name>/<name>.{en,ru,vi}.mdx`, or topical guide pages referencing the entity).
- **On Entity / Member Addition**:
  - For classes in packages using per-class MDX documentation, generate or update `.en.mdx`, `.ru.mdx`, and `.vi.mdx` strictly following [`ai-prompts/doc-class.md`](./doc-class.md).
  - For functions, composables, or topical guides in packages using `src/storybook/`, create or update `.en.mdx`, `.ru.mdx`, and `.vi.mdx` matching the exact layout, `<Meta title='...'/>` hierarchy, and style of neighboring MDX files in that directory.
  - Note: If the package does not maintain per-entity MDX files under `src/storybook/` (for example, internal-only helpers or packages without `src/storybook/`), do not create unrequested MDX files.
- **On Entity / Member Modification**:
  - Update **all** language variants (`.en.mdx`, `.ru.mdx`, `.vi.mdx`) consistently:
    - Key Features / overview (when new capabilities or guarantees are introduced or removed);
    - Constructor / Initialization signature and parameters;
    - Method/function signatures, parameter types, optionality (`?`), default values, return types, descriptions, and TypeScript usage examples;
    - Keep method formatting consistent within each section/group (never mix Short Style and Detailed Style inside the same group, per [`ai-prompts/doc-class.md`](./doc-class.md)).
- **On Entity Rename or Deletion**:
  - Rename/update or remove the corresponding `.en.mdx`, `.ru.mdx`, `.vi.mdx` directory/files so no broken or orphaned documentation remains.

### 3. Component Wiki & Stories (`packages/wiki`)
When adding or modifying `@dxtmisha/constructor` components (props, events, slots, exposed methods/properties):
- Update `wikiDescriptions[Component].ts`, `wikiMdx[Component].ts`, and `[component].{en,ru}.mdx` strictly following [`ai-prompts/wiki-descriptions.md`](./wiki-descriptions.md).

### 4. Final Verification
1. Confirm every documented signature, parameter name, optionality, default value, and return type matches the actual TypeScript implementation.
2. Confirm all language files (`.en.mdx`, `.ru.mdx`, `.vi.mdx` / `.en.mdx`, `.ru.mdx`) remain semantically identical while keeping TypeScript identifiers and signatures in English.
3. Respect the **Build Execution Guard** (`ai-prompt.md` Rule 8): do **NOT** run `npm run build` or `storybook build` proactively unless explicitly requested.
