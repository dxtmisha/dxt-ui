### Global Development Principles (AI Code Promise)

Strictly follow these rules for flawless dxt-ui code:

0. **Mandatory Deep Study (CHRONOLOGICAL GUARD)**:
   - **Step 1**: Read/create local `ai-memory.md` strictly in the current package root (e.g., `packages/constructor/`). Using repository root `ai-memory.md` for package files is FORBIDDEN.
   - **Step 2**: Read root `ai-prompt.md` and study descriptions of all mentioned libraries.
   - **Step 3**: Study linked `ai-types.md` and `ai-developer.md` BEFORE proposing plans, inspecting directory structures, or writing code, ONLY if you think that library may be relevant/useful for the current task. If a package is in `node_modules/` but exists locally (e.g., `packages/`), resolve and study the local source instead.
   - Fully read source file contents before modifying them (superficial scans without reading context are forbidden when modifying existing code). Always check existing infrastructure before writing custom logic.

1. **"Copy-Paste Ready"**: Generate complete, runnable files with correct imports. No placeholders (e.g., `// rest of code`).
2. **Zero Hallucinations**: Strictly use `package.json` dependencies. No invented APIs. Ask if unsure.
3. **Uncompromising TS**: No `any` (use `unknown` or generics). Interfaces for all I/O. `as const`, `readonly`, enums. Use `@ts-expect-error` with comments, never `@ts-ignore`.
4. **Professional Documentation (TSDoc)**: Document all exported entities (purpose, params, returns). Use [wikiLanguage] by default unless the project defines its own documentation standard. Include examples for complex logic.
5. **Architectural Consistency**: Respect project structure. Reuse existing infrastructure (always re-study this file before writing custom code). Do not modify global/base UI styles unless explicitly requested.
6. **Strict Adherence & Optimization (STRICT PROHIBITION OF UNSOLICITED ACTIONS)**: Do STRICTLY and ONLY what is requested in the prompt. Making unsolicited changes, arbitrary refactoring, or modifying unrelated files without explicit instructions is STRICTLY FORBIDDEN. Follow instructions precisely without guessing, proposing technical optimizations only within the approved scope.
7. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update local `ai-memory.md` **ONLY** upon explicit developer command (e.g., "remember", "save to memory") or for critical architectural rules/fixes. Whenever adding a new rule, **always optimize, structure, and condense the entire accumulated text** in the file: merge related items, eliminate duplicates, and keep statements maximally clear, dense, and concise without losing any previously established constraints or rules. **STRICTLY FORBIDDEN** to discard existing rules. Do NOT add routine edits indiscriminately, change logs, or absolute paths (use relative only). Keep it focused strictly on critical architectural constraints and explicit developer instructions.
8. **Package Type Reference (`ai-types.md`)**:
    - **Purpose & Content**: An AI-optimized complete technical reference of a package containing all public TypeScript declarations (classes, methods, functions, types, interfaces, enums, constants) with concise JSDoc and search tags (`@keywords`).
    - **How to Work (Search Before Full Scan)**: Due to the large size of `ai-types.md` files (thousands of lines), do **NOT** read or scan the entire file line-by-line upfront. **First, use text search** (by keywords, `@keywords`, function/class names) to locate required helpers, types, and signatures quickly to save context tokens. Reading the entire file is only needed when performing deep architectural analysis of the whole package.
    - **Code Reuse**: Before writing custom utility logic or types, ALWAYS check `ai-types.md` of relevant packages to discover and reuse existing infrastructure, classes, and helper functions (DRY).
9. **Build & Test Execution Guard**: Do **NOT** run project builds (`npm run build`, `storybook build`, etc.) or test suites (`npm run test`, `vitest`, etc.) proactively during code authoring or intermediate steps until the developer explicitly confirms that work is completed, asks to run tests/verification, or when entering dedicated debugging and fix mode.

