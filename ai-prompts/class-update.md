---
name: class-update
description: Run a complete dependency-first quality and documentation cycle for a TypeScript class or classes folder ("class check", "full class check", "class update" in EN/RU): code review first with artifact links and ai-review.md sync, unit tests, multilingual Storybook MDX documentation, and lint/type/test verification.
---

# Complete Class Review, Test & Documentation Cycle

## Activation

- Recognize activation requests in both English and Russian by meaning, including equivalent wording and spelling variations:
  - *"full class check"*, *"class check"*, *"class update"*, *"review, test, and document class"*
  - *«полная проверка класса»*, *«проверка класса»*, *«обновление класса»*, *«код-ревью, тесты и документация класса»*
- Also activate when the developer mentions a TypeScript class source file (e.g. `packages/<pkg>/src/classes/<ClassName>.ts`) or a `classes/` directory alongside `code-review.md`, `test.md`, `doc-class.md`, and/or `packages/storybook` (or asks to run that combined pipeline).
- Keep this instruction file in English; respond to the developer and write code review reports in the developer's language per [code-review.md](./code-review.md).

---

## General Execution Rules

- **Strict Execution Order**: Always execute stages in order: **Registry & Dependency Check (Step 0) -> Code Review First (Step 1) -> Unit Tests (Step 2) -> Multilingual Storybook MDX Docs (Step 3) -> Verification & Registry Update (Step 4) -> Final Report with Links (Step 5)**.
- **No Rule Duplication**: Read each linked instruction completely before executing its step and follow its current rules without copying them here.
- **Directory Target Mode (Folder of Classes)**: When a `classes/` folder is provided:
  1. List class source files excluding `__tests__/`, `*.test.ts`, `*.spec.ts`, `*.stories.ts`, `*.mdx`, `*Types.ts`, `index.ts`, and `library.ts`.
  2. Sort candidates alphabetically and resolve intra-package dependencies depth-first before each parent class.
  3. Respect the per-run Group 2 limit (`12` classes/constructors/hooks per run) from [code-review.md](./code-review.md), pausing cleanly when reached and listing remaining unprocessed files.
- **Stop-on-Blocker Gate**: If any unresolved `P0` or `P1` blocker (or prohibited structural/breaking change, dependency cycle, or unrecoverable test/lint/type failure) is found during Step 1, **halt immediately** without finalizing tests, MDX docs, or `ai-review.md`. Present the findings and clickable link to the review artifact (`code_review_<Entity>.md`) and wait for developer confirmation.
- **Auto-Fix & Fast Track**: Safe, non-breaking `P2` in-place fixes (including bilingual JSDoc per [jdoc.md](./jdoc.md), redundant optional chaining, typing ergonomics, pure annotations, and member ordering) must be applied automatically in Step 1. When zero `P0`/`P1` blockers remain, proceed autonomously through Steps 2–5 without stopping for confirmation.
- **Build Execution Guard**: Follow [project rules](../ai-prompt.md) (Rule 8) — do **NOT** run `npm run build` or `storybook build` unless explicitly requested by the developer.

---

## Step 0: Check Registry & Dependencies (`ai-review.md`)

1. Read [code-review.md](./code-review.md) completely before inspecting or editing code.
2. Check `packages/<pkg>/ai-review.md` and Git status/commit history (`git status --porcelain`, `git log`) for the target class and its intra-package runtime dependencies (excluding `import type`, `*Types.ts`, static constants, `*.json`, and stylesheets).
3. Determine required work:
   - If the target class and all intra-package dependencies are already recorded in `ai-review.md` with **zero changes since review**, AND both `__tests__/<ClassName>.test.ts` and `src/storybook/classes/<ClassName>/<ClassName>.{en,ru,vi}.mdx` (for packages using per-class Storybook MDX docs) already exist and match the current source, report that the class is already verified and unchanged, and stop (or advance to the next candidate in Directory Mode).
   - If the class (or any intra-package dependency) is unreviewed or modified since review, OR if its tests or Storybook MDX documentation are missing/outdated, proceed with the required steps below.

---

## Step 1: Code Review First (Depth-First Dependency Order)

1. Traverse unreviewed or modified intra-package runtime dependencies depth-first (leaf dependencies first, then parent class) strictly per [code-review.md](./code-review.md).
2. For **each** reviewed dependency and for the target class:
   - Conduct the full architectural, security, SSR, memory, performance, boundary, and inbound-usage audit.
   - Apply all allowed `P2` in-place fixes (including bilingual JSDoc/TSDoc per [jdoc.md](./jdoc.md)).
   - Write the full review report artifact to `<appDataDir>/brain/<conversation-id>/code_review_<Entity>.md`.
3. Verify that zero unresolved `P0`/`P1` blockers remain before moving to Step 2. (If any `P0`/`P1` blocker exists, stop here and link `code_review_<Entity>.md` in the chat response.)

---

## Step 2: Create or Refine Unit Tests

1. Read [test.md](./test.md) completely before authoring or modifying tests.
2. Create or update `packages/<pkg>/src/**/__tests__/<ClassName>.test.ts` (and verify tests for any modified intra-package dependencies), covering:
   - Happy-path usage, static predicates, getters/methods, and type inference;
   - Reactive inputs (`Ref`, `reactive`, getter functions) where supported;
   - Boundary traps (`0`, `'0'`, `false`, `''`, whitespace-only strings, `null`, `undefined`, omitted optional keys);
   - Immutability, security/escaping boundaries, and error routing;
   - Multilingual/Unicode inputs and SSR isomorphism (`renderToString` / non-DOM safety);
   - Lifecycle cleanup and instance isolation.
3. Run targeted Vitest execution:
   ```bash
   npx vitest run packages/<pkg>/src/**/__tests__/<ClassName>.test.ts
   ```
   Ensure `0` failures, `0` skipped/todo tests, and `0` runtime warnings.

---

## Step 3: Generate or Synchronize Storybook Class MDX Documentation

1. Read [doc-class.md](./doc-class.md) completely before creating or updating MDX files.
2. Check whether `packages/<pkg>/src/storybook/classes/` exists (or whether the package maintains per-class Storybook MDX documentation):
   - Inspect neighboring class MDX folders (e.g. `AreaInclude`, `AriaStaticInclude`, `ControlAbstract`) to match the exact `<Meta title='...'/>` hierarchy, heading structure, and style rules (no mixing Short Style and Detailed Style within the same method group).
   - Create or update all three language variants in `packages/<pkg>/src/storybook/classes/<ClassName>/`:
     - `<ClassName>.en.mdx`
     - `<ClassName>.ru.mdx`
     - `<ClassName>.vi.mdx`
   - Ensure every static predicate, constructor parameter, getter, method, type/interface property, and TypeScript usage snippet matches the finalized implementation and remains semantically identical across EN, RU, and VI (keeping TypeScript signatures and identifiers in English).
   - If the target belongs to an internal helper or package that does not use `src/storybook/classes/`, note `MDX: N/A` and do not create unrequested MDX files.

---

## Step 4: Post-Modification Verification & Registry Update

1. Run ESLint auto-fix and non-emitting TypeScript verification (plus all affected Vitest suites) **after the final edit**:
   ```bash
   npx eslint --fix <modified-source-and-test-files>
   npx tsc -p packages/<pkg>/tsconfig.json --noEmit
   npx vitest run <affected-test-files>
   ```
   (Use `vue-tsc` instead of `tsc` when checking `.vue` files.)
2. Confirm `0` ESLint errors/warnings, `0` TypeScript errors, and `100%` passing tests.
3. Update `packages/<pkg>/ai-review.md` in dependency order (leaf dependencies first, then the target class), removing any older duplicate entry for re-reviewed files before appending at the end.

---

## Step 5: Final Report (Mandatory Clickable Links)

Deliver a concise summary in the developer's language containing:
1. **Code Review Scores & Artifact Links**: Clickable `file://` links to `code_review_<Entity>.md` for the target class and every reviewed intra-package dependency, including initial and post-fix scores (`X -> Y (Grade)`), plus a summary of applied `P2` fixes.
2. **Registry Link**: Clickable link to `packages/<pkg>/ai-review.md`.
3. **Unit Tests Link & Results**: Clickable link(s) to `<ClassName>.test.ts` (and dependency test files) with exact `vitest run` counts.
4. **Storybook MDX Documentation Links**: Clickable links to `<ClassName>.en.mdx`, `<ClassName>.ru.mdx`, and `<ClassName>.vi.mdx` (or `MDX: N/A`).
5. **Verification Status**: Exact ESLint and `tsc --noEmit` results (`0` errors/warnings).
