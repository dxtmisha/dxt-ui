---
name: git-push
description: Run ESLint fix on modified files, halt on remaining warnings/errors, perform a strict code review; if flaws are found halt and report to developer, otherwise immediately commit and push.
---

# Task: Strict Code Review, ESLint Fix, and Git Commit/Push

Your task is to apply ESLint auto-fixes to all modified files, verify that no warnings or errors remain, and perform a thorough, rigorous code review of all changes and affected code before committing. If any lint warnings/errors, flaws, dead code, or standards violations are detected, you must report them to the developer in detail and HALT the process. If no issues were found, proceed immediately with generating a Conventional Commits message, staging, committing, and pushing to the remote repository.

### Execution Steps:

1. **Change Discovery & Context Gathering**:
   - Inspect all changes using `git status` and `git diff`.
   - Identify all modified, added, or deleted files, as well as adjacent files and dependent code directly or indirectly affected by the changes (call sites, exported interfaces, re-exports, contracts).

2. **ESLint Auto-Fix & Lint Verification (MANDATORY BEFORE COMMIT)**:
   - Run ESLint with auto-fix on all modified/added files:
     ```bash
     npx eslint --fix <file-paths>
     ```
   - Re-check the linting status of modified files.
   - **Lint Gate & Halt on Warnings/Errors (STRICT PROCESS HALT)**:
     - If after auto-fix there are **ANY remaining warnings or errors** (even a single warning):
       1. **HALT THE PROCESS IMMEDIATELY**. Do NOT proceed to code review, staging, committing, or pushing (`git add`, `git commit`, `git push` are strictly forbidden).
       2. Present a detailed report of all remaining ESLint warnings and errors to the developer (file paths, line numbers, ESLint rule names, and problem descriptions).
       3. Stop and wait for the developer's instructions.
     - Only when ESLint passes cleanly with 0 errors and 0 warnings, proceed to the code review.

3. **Strict Code Review (MANDATORY AUDIT BEFORE COMMIT)**:
   - **Dead & Residual Code Audit**:
     - Check for and identify unused imports, variables, functions, arguments, types, and interfaces.
     - Detect temporary debugging artifacts: `console.log`, `debugger`, dump statements, test flags, and commented-out code blocks.
     - Ensure no unfinished placeholders (e.g. `// TODO`, `// rest of code`) remain in production code.
   - **Architectural & Project Standards Compliance**:
     - Verify strict alignment with all rules in `ai-prompt.md` and local package instructions (`ai-developer.md`, `ai-memory.md`).
     - **TypeScript Strictness**: Zero `any` (use `unknown` or generics), explicit return types where required, use `@ts-expect-error` with explanatory comments (never `@ts-ignore`), immutability (`readonly`, `as const`).
     - **Naming Conventions**: Full, descriptive names without forbidden abbreviations (`el`, `val`, `temp`, `res`, etc.).
     - **Bilingual JSDoc/TSDoc**: Ensure mandatory bilingual (English and Russian) documentation is present and formatted according to `jdoc.md` on all modified or newly introduced classes, functions, methods, interfaces, and types.
     - **Styles & Design System (if applicable)**: Ensure styles strictly reuse mixins and tokens from `@dxtmisha/styles`, strictly no hardcoded color values, and strict BEM naming.
     - **Vue Standards (if applicable)**: Strictly `<script setup lang="ts">`, semantic HTML, accessible ARIA attributes, clean templates without inline logic or styles.
     - **Accessibility & ARIA (A11y)**: Ensure correct ARIA roles, states, attributes, screen reader labeling, decorative element hiding (`aria-hidden="true"` / `AriaStaticInclude.hidden()`), and keyboard accessibility.
   - **Review Gate & Halt on Defects (STRICT PROCESS HALT)**:
     - **If ANY flaws, dead code, typing violations, or standards discrepancies are discovered**:
       1. **HALT THE PROCESS IMMEDIATELY**. Do NOT proceed to staging, committing, or pushing (`git add`, `git commit`, `git push` are strictly forbidden at this stage).
       2. Present a detailed, structured report of all detected defects to the developer (file paths, line numbers, description of the violation, and recommended fixes).
       3. Stop and wait for the developer's instructions.
       4. Proceed to steps 4 and 5 **STRICTLY AND ONLY IF** the developer explicitly tells you to proceed (or after the issues are resolved according to their instructions).
     - **If NO flaws are found** (all checks pass cleanly):
       - Immediately proceed to step 4 (Commit Message Generation) and step 5 (Staging, Committing, and Pushing) without waiting for extra confirmation. Output the generated commit message and push status in the final response.

4. **Commit Message Generation**:
   - Compose a commit title and detailed description adhering to the **Conventional Commits** standard (`feat`, `fix`, `docs`, `refactor`, `style`, `chore`, etc.):
     - `<type>(<scope>): <short summary in imperative mood>`
     - Detailed bullet points explaining the motivation and essence of changes.
   - Both title and description must be in English.
   - Output the proposed commit message (Title and Description) clearly in the response.

5. **Staging, Committing, and Pushing**:
   - Stage all verified changes:
     ```bash
     git add .
     ```
   - Commit with the prepared message:
     ```bash
     git commit -m "<type>(<scope>): <short description>" -m "<detailed list of changes>"
     ```
   - Push to the remote repository:
     ```bash
     git push
     ```
