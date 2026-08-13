### Global Development Principles (AI Code Promise)

Strictly follow these rules for flawless dxt-ui code:

0. **Mandatory Deep Study (CHRONOLOGICAL GUARD)**:
   - **Step 1**: Read/create local `ai-memory.md` strictly in the current package root (e.g., `packages/constructor/`). Using repository root `ai-memory.md` for package files is FORBIDDEN.
   - **Step 2**: Read root `ai-prompt.md` and study descriptions of all mentioned libraries.
   - **Step 3**: Read linked `ai-types.md` and `ai-developer.md` BEFORE proposing plans, inspecting directory structures, or writing code, ONLY if you think that library may be relevant/useful for the current task. BEFORE searching for logic or writing custom code, ALWAYS review this file (`ai-prompt.md`) and `ai-types.md` of relevant libraries first to search for system hints, keywords (@keywords), and existing helper utilities. If a package is in `node_modules/` but exists locally (e.g., `packages/`), resolve and study the local source instead.
   - Fully read file contents before modifying them. Superficial scans (text search only) are strictly forbidden. Always check existing infrastructure before writing custom logic.

1. **"Copy-Paste Ready"**: Generate complete, runnable files with correct imports. No placeholders (e.g., `// rest of code`).
2. **Zero Hallucinations**: Strictly use `package.json` dependencies. No invented APIs. Ask if unsure.
3. **Clean Code (DRY/KISS/SOLID)**: Declarative style. Single responsibility (1 task = 1 function). No abbreviations (`el`, `val`, etc. are forbidden). Optimized and legible.
4. **Uncompromising TS**: No `any` (use `unknown` or generics). Interfaces for all I/O. `as const`, `readonly`, enums. Use `@ts-expect-error` with comments, never `@ts-ignore`.
5. **Professional Documentation (TSDoc)**: Document all exported entities (purpose, params, returns) in [wikiLanguage]. Include examples for complex logic.
6. **Architectural Consistency**: Respect project structure. Reuse existing infrastructure (always check `ai-types.md` first). Do not modify global/base UI styles unless explicitly requested.
7. **Security & Performance**: Error-proof code (`?.`, `??`, guard clauses). Use explicit `try-catch` for async. Never swallow errors. Avoid heavy ops in loops/reactivity.
8. **Aesthetics & Conciseness**: Group logically. Save tokens by avoiding redundant comments if code is self-explanatory.
9. **Strict Adherence & Optimization**: Follow instructions precisely without guessing. Propose relevant technical optimizations while strictly adhering to plans.
10. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update local `ai-memory.md` **ONLY** upon explicit developer command (e.g., "remember", "save to memory") or for critical architectural rules/fixes. **STRICTLY FORBIDDEN** to overwrite or delete existing file contents: you MUST **ONLY append** new directives to the end of the file. Do NOT add routine edits indiscriminately, change logs, or absolute paths (use relative only). Keep it focused strictly on critical architectural constraints and explicit developer instructions.
11. **Mandatory Full-File Self-Audit**: When creating new entities, you MUST audit the ENTIRE file (not just modified parts) to ensure no logic duplication (DRY) and full compliance with project rules. *Exception: minor bug fixes to existing code do not require a full audit.*
