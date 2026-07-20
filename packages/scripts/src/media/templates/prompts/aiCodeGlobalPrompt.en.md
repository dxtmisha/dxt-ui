### Global Development Principles (AI Code Promise)

Your primary goal is to generate flawless, industrial-grade code that adheres to dxt-ui standards. You promise to follow these rules strictly:

0. **Mandatory Deep Study**:
   - Before developing anything for any project or package, you MUST study it completely to fully understand its architecture and stylistic guidelines.
   - Before modifying or fixing any file, you MUST fully study its internal structure and logic first.
   - Superficial study of files (e.g., scanning only filenames, function signatures, or performing quick keyword grep searches without reading the actual file contents via `view_file`) is strictly forbidden. You MUST read and study the files completely and thoroughly to understand their full implementations and logic.
   - If any instructions, paths, or files are specified as located inside `node_modules/` or any other external/linked directory, you MUST first check if this package exists locally in the workspace (for example, under `packages/`). If it does exist locally, you MUST resolve the paths to the local workspace package directory and study/modify the local source files instead.
   - **CRITICAL FIRST STEP:** If any project, module, or instruction contains links or references to specific files (e.g. types, developer guides, descriptions), you MUST study all these referenced files as your absolute first action. As soon as you start working with a project, or notice that it is imported/used in the code you are working with, you must immediately read and study all these referenced files before doing any planning, proposing code changes, or writing code. This is mandatory and applies even if the files are located in `node_modules/` (always resolve them to the local workspace directory first if they exist locally).
   - **STRICT BLOCKING GUARD (CHRONOLOGICAL ORDER RULES):**
     1. As your ABSOLUTE FIRST ACTION, before taking any other steps, you MUST check if the `ai-memory.md` file exists in the specific package directory or the repository root depending on the files you are working on:
        - If you are analyzing or modifying files that are located inside a package directory (e.g., any subdirectory under `packages/` like `packages/constructor/`, `packages/scripts/`, etc.), you MUST read/write the `ai-memory.md` file ONLY within that specific package directory (e.g. `packages/constructor/ai-memory.md` or `packages/scripts/ai-memory.md`). You are strictly FORBIDDEN from using, reading, or writing the global `ai-memory.md` in the repository root in this case.
        - If and only if the files you are working with are root-level configurations or not part of any package under `packages/`, you may read/write the `ai-memory.md` file in the repository root.
        If the required local package-level `ai-memory.md` (or root `ai-memory.md` for root-level files) exists, you MUST read it using `view_file`. If it does NOT exist, you MUST CREATE IT immediately using `write_to_file` as an empty file with only a single newline (no placeholder text, comments, or intro text).
     2. As your ABSOLUTE SECOND ACTION, you MUST use the `view_file` tool to read the master `ai-prompt.md` file located in the project root. You MUST read the descriptions of ALL libraries mentioned in this file. If there is even a 1% chance that a library mentioned in `ai-prompt.md` contains functionality or utilities relevant to your task, you are OBLIGED to read and study all files associated with that library that are specified in the `ai-prompt.md` under its respective section. You are strictly forbidden from writing custom logic (helpers, styles, configs, classes) without first performing an exhaustive check of the workspace's existing infrastructure via `grep_search` or `list_dir`.
     3. Identify all paths, directories, or packages involved in the user request.
     4. Scan the prompt for sections corresponding to those paths.
     5. Identify all paths to auxiliary documentation, types, or developer guides (such as `ai-types.md` or `ai-developer.md`) mentioned in those sections.
     6. You MUST use the `view_file` tool to read and study ALL of these referenced files (specifically, if type files like `ai-types.md` or developer guides like `ai-developer.md` are specified for the packages/projects you are working on, as well as the types/documentation files of any package dependencies listed in the package's package.json, you MUST read them completely) BEFORE calling `list_dir` on sub-folders, writing any plans/checklists, or proposing/making code changes. Bypassing this order is a critical protocol violation.

1. **"Copy-Paste Ready" Principle**:
   - Generate code that can be copied and run without a single manual edit.
   - All imports must be absolute or correct relative paths.
   - No `// ... rest of the code`, no `// imports here`. Only the complete, working file.

2. **Zero Tolerance for Hallucinations**:
   - Use only the libraries and versions specified in the project's `package.json`.
   - Do not invent API methods that do not exist in the current versions of dependencies.
   - If information is insufficient, it is better to ask or point out the limitation than to hallucinate.

3. **Clean Code Standards**:
   - **DRY & KISS**: Avoid duplication, write as simply and clearly as possible.
   - **SOLID**: Every module, class, or function must have one clear responsibility.
   - **Declarative Approach**: Prefer a declarative programming style (array functional methods, composition).
   - **No Abbreviations**: Do not use shortened or abbreviated names for variables, properties, arguments, methods, classes, etc. (e.g., do not use `el`, `rect1`/`r1`, `dx`/`dy`, `val`, `temp`). All identifiers must be descriptive, complete, and self-explanatory.
   - **Optimization and Clarity**: Write code that is highly optimized, performant, and clean, ensuring it is easy to read and understand.
   - **Single Responsibility (KISS/SOLID)**: Avoid creating large "mega-functions" or monolithic blocks. Each function must be concise and perform exactly one focused task (1 function = 1 functionality).

4. **Uncompromising TypeScript**:
   - No `any`. Use `unknown` if the type is truly unknown, or create generic types.
   - Never use `@ts-ignore`. If a type check suppression is absolutely necessary due to external limitations, use `@ts-expect-error` with a descriptive comment explaining why.
   - Always define interfaces for input and output data.
   - Use `as const`, `readonly`, and enums/union types to increase reliability.

5. **Professional Documentation (TSDoc)**:
   - Accompany all exported entities with TSDoc comments in the [wikiLanguage] language.
   - Describe the purpose, parameters, return values, and potential exceptions.
   - Usage examples in comments are encouraged for complex functions.

6. **Architectural Consistency**:
   - Respect the project structure. If it is standard in the project to move logic into `composables` or `utils`, follow that pattern.
   - Reuse existing infrastructure: Always check if the required functionality (e.g., API requests, state management, utilities) already exists in the project's core packages/modules or standard libraries before implementing it from scratch. To do this, you MUST read their respective type definitions or documentation files (such as `ai-types.md` or similar index files) to inspect their complete API surfaces and list of exported helpers.
   - Do not modify global styles or styles of base UI components unless explicitly requested.

7. **Security and Performance**:
   - Write error-proof code (guard clauses, optional chaining `?.`, nullish coalescing `??`).
   - Use explicit `try-catch` blocks for asynchronous operations. Never swallow errors silently; handle them appropriately or throw meaningful error messages.
   - Avoid redundant calculations in loops and heavy operations in reactive dependencies.

8. **Aesthetics and Conciseness**:
   - Code must be beautiful. Use logical indentation and group code by meaning.
   - Save tokens by avoiding redundant comments where the code speaks for itself.

9. **Strict Adherence to Instructions & Optimization**:
   - Perform all operations strictly in accordance with the provided commands and instructions.
   - Avoid guessing or performing unrelated extra actions. However, you are encouraged to analyze the requirements, optimize the code, and propose or implement better technical solutions directly related to achieving the task's goals.
   - Strictly adhere to the plan, checklists, and execution steps, while refining them for better quality and performance when needed.

10. **AI Workspace Memory (`ai-memory.md`)**:
    - As enforced by the STRICT BLOCKING GUARD, `ai-memory.md` MUST be created and read locally inside the root of the specific package you are working with (e.g., `packages/constructor/ai-memory.md` for code in `packages/constructor`).
    - Writing or reading `ai-memory.md` in the repository root when working on code inside a package is a critical violation of these rules.
    - Whenever you receive feedback, corrections, or instructions from the developer, you MUST update that specific package's local `ai-memory.md` file.
    - Explicit Memorization Requests: If the developer explicitly instructs you to "remember this", "keep this in mind", or makes a similar request regarding conventions or rules, you MUST immediately record this information in the relevant local `ai-memory.md` file.
    - Active Application: You must actively APPLY the rules and constraints from `ai-memory.md` to all code you generate. Rules in this file override general assumptions and have the highest priority.
    - The PRIMARY PURPOSE of this file is to store critical coding guidelines, specific architectural constraints, and "do's and don'ts" (e.g., "do not use X; use Y instead") to ensure the AI writes compliant, correct code.
    - DO NOT store change logs, lists of modified files, or commit-like messages (e.g., "updated file X, updated package Y"). Keep the file clean, concise, and focused strictly on active rules, design decisions, and coding standards.
    - DO NOT specify absolute file paths (e.g., file:///... or machine-specific directories like /Users/...) in the memory file. All references to files inside the project must use relative paths (e.g., src/types/textTypes.ts) so that the file works seamlessly for other developers on different operating systems and computers.
