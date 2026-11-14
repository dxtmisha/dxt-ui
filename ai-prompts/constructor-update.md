---
name: constructor-update
description: Run a full dependency-first update cycle for one constructor when requested ("full constructor check" or "full check" for a constructor path in EN/RU), skipping unchanged completed registry entries.
---

# Complete Constructor Update Cycle

## Activation

- Recognize activation requests in both English and Russian by meaning, including equivalent wording and spelling variations. Keep this instruction file entirely in English.
- Activate for a request to perform a "full constructor check" or "full check of a constructor", or the equivalent request in Russian.
- Also activate for a general "full check" request in either language when the supplied link, file mention, or path identifies a constructor under `packages/constructor/src/constructors/<Component>/`. Infer the component from that path; the user does not need to repeat the word "constructor".
- Treat both forms as requests for this entire workflow, not just code review or test execution. Start with the registry check in Step 0 and retain the one-constructor-per-invocation limit.
- Do not apply this workflow to a general full-check request for an unrelated target. If neither the request nor its linked path identifies a constructor, clarify the target before starting the cycle.

## 0. Check the Registry First

**Before analyzing a component, discovering dependencies, or making any changes, first read the [component update log registry](../packages/constructor/ai-constructor-update.md).** This applies to both the original target and every discovered dependency.

- The component identifier is its exact directory name in `packages/constructor/src/constructors/<Component>/`.
- An entry counts as **completed** only when `Date (ISO 8601, UTC)` and **every** stage column (`Dependencies`, `Architecture`, `Code review`, `Tests`, `Build`, `Demo`, `Visual testing`, `Wiki`) contain valid completion values (not empty or `-`).
- If `Date (ISO 8601, UTC)` or any stage column is missing, empty, `-`, or invalid (including an interrupted/incomplete cycle), treat the entry as incomplete/stale and run the full cycle.
- If the identifier is already in the registry table as a **completed** entry, **always verify that the entry is still current before skipping the component**. Compare `Date (ISO 8601, UTC)` against subsequent changes to the component and its dependencies.
- Check the entire constructor directory, including classes, tests, types, and styles, as well as related UI files, demo, and wiki. Follow the current dependency chain to check changes to dependency components; changes to the dependency set also invalidate the entry. This traversal only verifies freshness and selects a target; it is not a review of multiple constructors.
- Account for commits after `Date (ISO 8601, UTC)` (`git log --since="<Date (ISO 8601, UTC)>" -- <paths>`), staged/unstaged changes, and new untracked files (`git status --porcelain --untracked-files=all -- <paths>`), including deletions and renames. Do not rely solely on file modification times or the latest commit date: neither proves that nothing has changed since verification.
- **If any changes have occurred since `Date (ISO 8601, UTC)`, repeat the full dependency traversal from Step 1 and the entire cycle for the selected constructor**, retaining the one-constructor-per-invocation limit. Existing visual test cases still allow the skip described in Step 5.
- If the Git history is missing or unchanged status cannot be confirmed, treat the entry as stale and repeat the full cycle. Uncommitted changes always require re-verification, even if they may have been included in the previous cycle.
- Skip Steps 2–7 **only** for a **completed** entry when the component and its dependencies are confirmed unchanged since `Date (ISO 8601, UTC)`. For a single original target, report the previous `Date (ISO 8601, UTC)` and that no changes have occurred since completion, then stop; for a queue, proceed to the next candidate.
- If the registry is missing, create it with an empty table using the format in Step 7. Failure to read an existing registry requires stopping; do not treat it as empty.
- An entry in `ai-review.md` only records a separate code review and does not replace a full-cycle entry in this registry.

## General Execution Rules

- **Analyze and update only one constructor per invocation**, together with its local helper classes. Constructor dependency traversal selects the first incomplete component; perform Steps 2–7 only for that component. Step 3 also permits the executable intra-package dependency reviews and finalization required by `code-review.md`, without running the full constructor cycle for those dependencies.
- After selecting the single target constructor, update its single row in [ai-constructor-update.md](../packages/constructor/ai-constructor-update.md) **progressively after each completed stage** (`Dependencies`, `Architecture`, `Code review`, `Tests`, `Build`, `Demo`, `Visual testing`, `Wiki`), recording that stage's UTC ISO 8601 completion timestamp (`YYYY-MM-DDTHH:mm:ssZ`). Keep `Date (ISO 8601, UTC)` and unfinished stages as `-` until Step 7.
- When starting or repeating a full cycle for a component that already has a row, reset `Date (ISO 8601, UTC)` and all not-yet-reverified stage columns to `-` in that row, then update each stage column as it finishes without creating duplicate rows.
- After completing the selected constructor and finalizing `Date (ISO 8601, UTC)` in Step 7, provide a report and stop. Do not automatically proceed to its parent, a sibling dependency, or the next component in the queue. Continue only upon the user's next instruction, checking the registry and traversing dependencies again.
- Follow the [project rules](../ai-prompt.md) and their mandatory references for affected packages.
- This file defines execution order only. Before each step, read its linked instruction completely and follow the current version. Do not copy or duplicate its rules here.
- **Immediately stop the entire cycle on any unresolved blocking problem at any step**, including the current component, its parents, and the remaining queue. Exceptions are the explicitly ignorable warnings below, **mandatory automatic fixes allowed by linked instructions** (such as `P2` in-place auto-fixes, unit test/MDX updates, and `Fast Track` Step 3 finalization for the current component in [code-review.md](./code-review.md), as well as architectural compliance fixes in Step 2), and automatic correction of noncritical build errors in Step 3.2 under the conditions below. **Do not stop, ask confirmation, or raise blocking warnings for any issue that can be fixed automatically** — fix it in place, verify it, record it in the report, and continue the cycle. The stop rule covers **only** unresolved `P0`/`P1` code review blockers (and structural or breaking changes prohibited from automatic fixing), failing verification checks or errors that cannot be resolved by allowed auto-fixes, dependency cycles, missing mandatory instructions, and inability to perform a required check.
- **Explicitly Ignorable Warnings**: `PLUGIN_TIMINGS` build performance diagnostics and Storybook `No story files found for the specified pattern` warnings for unrelated or empty package patterns may be ignored. They do **not** require stopping, additional user confirmation, or another verification run solely because they appeared. Continue the cycle and note them in the final report. The command must still succeed, and the selected component's required tests must actually be discovered and pass; missing tests for the selected component or a zero-test run do not qualify for this exception. This exception takes precedence over warning-free requirements in linked instructions and does not require suppressing the diagnostics or disabling checks.
- When a stopping condition occurs, report the component, step, specific problem, supporting evidence, and unfinished work. Except for the explicitly ignorable warnings and allowed automatic fixes described above, do not bypass a blocking problem or proceed further. Continue only upon a separate user instruction; after resolving the cause, repeat the interrupted step and checks that depend on it.
- Planned migration, architectural compliance work, and updates to tests, demo, and wiki belong to their respective steps. An unresolved blocking defect, conflicting requirement, or unrecoverable failed verification discovered during that work requires stopping.
- This workflow's stage ordering and single-constructor scope take precedence over advancing to other entities in linked instructions: `Fast Track` and finalization in [code-review.md](./code-review.md) apply automatically within Step 3 for the current component and its intra-package dependencies, without skipping later steps (`3.1`–`7`) or advancing to parent/sibling/queued constructors. Never record `Date (ISO 8601, UTC)` (full completion) prematurely.
- When stopping, preserve completed work, registry entries for previously completed components, and the timestamps of stages already completed for the current component, leaving `Date (ISO 8601, UTC)` and unfinished stages as `-`. A component is considered fully completed only when `Date (ISO 8601, UTC)` and all stage columns are filled.

## 1. Traverse Dependencies from Leaves to Parent

After checking the registry, identify the components on which the current constructor depends: child components it uses, includes from other components, and base components inherited from. Follow [component-dependencies.md](./component-dependencies.md) for integration rules and [code-review.md](./code-review.md) for reviewing executable dependencies within the package.

- For each dependency, repeat Step 0 first, then recursively apply Step 1 until reaching a component with no incomplete dependencies.
- For the first component with no incomplete dependencies, initialize or reset its row in [ai-constructor-update.md](../packages/constructor/ai-constructor-update.md), record the `Dependencies` completion timestamp (UTC, ISO 8601), then perform **the cycle in Steps 2–7**, updating each stage column as it completes, and **stop**. Do not return to its parent during this invocation.
- Process multiple dependencies in alphabetical order. Process shared dependencies once, checking the registry on subsequent encounters.
- Maintain the current traversal stack. If a component appears again in that stack, stop and report the cycle path.
- Local helper classes belong to their component's work; do not create separate demos or wiki entries for them. Do not automatically extend migration to other packages.

## 2. Migrate or Audit the Architecture

Fully apply [design-logic.md](./design-logic.md) to the current component and its helper classes.

- If the component has not migrated to the new architecture, perform the complete migration according to that instruction.
- If it has already migrated, audit compliance with **all** requirements and bring the implementation into compliance. Using the new base architecture alone does not justify skipping the audit.
- After completing Step 2 without blocking issues, record the `Architecture` completion timestamp (UTC, ISO 8601) in the component's registry row.

## 3. Perform Code Review

Apply [code-review.md](./code-review.md) to the resulting component implementation and affected helper classes.

Before reviewing a file, recursively review and finalize its unreviewed or changed executable intra-package dependencies, including their required checks and `ai-review.md` entries, as specified by `code-review.md`. These prerequisite reviews are part of Step 3 and do not complete a constructor cycle or permit advancing to another constructor. Ignore the per-run file-count limits and automatic pauses tied to those limits in `code-review.md` for this workflow; retain its dependency ordering, freshness checks, and other applicable requirements.

Automatically apply all safe, non-breaking `P2` in-place fixes, unit test/MDX updates, and post-modification checks allowed by `code-review.md` without stopping or warning for permission. Stop the cycle under the general rules above **only** if unresolved `P0`/`P1` blockers, prohibited structural/breaking changes, or unrecoverable check failures remain. An earlier review does not replace verification of a changed implementation. After Step 3 completes without unresolved `P0`/`P1` blockers (including `Fast Track` finalization for the current component in `code-review.md`), record the `Code review` completion timestamp (UTC, ISO 8601) in the component's registry row and proceed immediately to Step 3.1.

## 3.1. Update and Verify Tests

After successful review, create or update **all three testing levels** according to [test.md](./test.md):

- **The whole component** — integration tests in `<Component>.test.ts` covering the design layer, orchestrator, and helper classes working together.
- **Each class individually** — separate unit tests in `<ClassName>.test.ts` for every class of the current constructor, including the orchestrator, design layer, local helpers, and Include classes. Integration tests do not replace individual class tests; if the orchestrator shares the component's name, use `<Component>.unit.test.ts` for its unit tests.
- **The whole component in SSR mode** — a separate `<Component>.ssr.test.ts` file covering server rendering of the entire component with its orchestrator, design layer, and helper classes. Individual class SSR tests do not replace this test.

Run verification for all three levels according to [test.md](./test.md). Stop on any problem; after all checks pass, record the `Tests` completion timestamp (UTC, ISO 8601) in the component's registry row and proceed to rebuilding.

## 3.2. Rebuild constructor and d1

After successful code review and all test checks in Step 3.1, execute **sequentially**:

1. `npm run prepublishOnly` in [packages/constructor](../packages/constructor/) — the script is `npm run library && npm run constructor && npm run build && dxt-types-save`.
2. After the `constructor` command succeeds, `npm run prepublishOnly` in [packages/d1](../packages/d1/) — the script is `npm run ui && npm run build && npm run wiki-storm && dxt-types-save`.

Use the complete `prepublishOnly` scripts from the corresponding `package.json` files, including generation, building, and saving types. This step explicitly authorizes both command chains; restrictions on unsolicited generation and builds in general rules and linked instructions do not cancel this step. Successful completion requires every command in both chains to succeed.

- For a noncritical build error, **automatically fix its cause and repeat the builds in the same order** without additional confirmation. Noncritical fixes are local corrections to imports, exports, types, or syntax in the current component's files and its integration in `d1` that preserve public API and behavior.
- If a fix requires behavior or public API changes, an architectural decision, broad changes, changes to another constructor, or its severity is unclear, stop with a report. Do not hide errors by disabling checks, weakening types, or introducing temporary workarounds.
- After an automatic fix, repeat code review of changed files under Step 3 and affected test checks under Step 3.1 (updating the `Code review` and `Tests` timestamps), then run both builds again. Auto-fixable `P2` issues are resolved automatically before rebuilding; unresolved `P0`/`P1` findings during repeated review stop the cycle under the general rules.
- If the same error recurs after a fix without confirmed progress, stop and report the cause; do not repeat builds indefinitely.
- Proceed to demo development only after both packages build successfully, and record the `Build` completion timestamp (UTC, ISO 8601) in the component's registry row. Include build results and automatic fixes in the final report.

## 4. Create or Update the Demo

Create the demo or bring the existing demo into alignment with the current component contract according to [demo-component.md](./demo-component.md). Complete its required checks before proceeding, then record the `Demo` completion timestamp (UTC, ISO 8601) in the component's registry row.

## 5. Run Visual Testing Unless Cases Already Exist

**Before starting this step's checks, start the demo server with `npm run dev` in [packages/demo](../packages/demo/)** — the `"dev": "vite dev"` script in [packages/demo/package.json](../packages/demo/package.json). If the server is already running, use the existing process. Wait for server readiness and confirm that the current component's demo page is accessible; use the actual URL for visual testing. If startup fails or the page is unavailable, stop and report the problem.

Check for an existing `test-cases.md` specifically for the current component in the testing directories specified by [visual-test-constructor.md](./visual-test-constructor.md).

- If cases already exist, **skip the entire visual testing stage** and record `Skipped (<UTC timestamp>)` in the `Visual testing` column. Report the case file path and reason for skipping; do not present a skip as a successful test run.
- If cases do not exist, fully execute [visual-test-constructor.md](./visual-test-constructor.md), including the visual testing instruction it invokes, for the current component's demo, and record its completion timestamp (UTC, ISO 8601) in the `Visual testing` column.
- Inability to access cases or required tools requires stopping, not skipping.

## 6. Update the Wiki

Update the current component's documentation according to [wiki-descriptions.md](./wiki-descriptions.md). Complete its required checks, and record the `Wiki` completion timestamp (UTC, ISO 8601) in the component's registry row. If previously verified component code changes during later steps, repeat review and affected checks (updating the corresponding stage timestamps) before recording final completion.

## 7. Record Successful Completion

Only after all dependencies are complete, code review passes without unresolved `P0`/`P1` blockers, and every stage column (`Dependencies`, `Architecture`, `Code review`, `Tests`, `Build`, `Demo`, `Visual testing`, `Wiki`) for the current component is filled (with only the visual testing skip described above allowed), record the final completion timestamp in the `Date (ISO 8601, UTC)` column of the component's row in [ai-constructor-update.md](../packages/constructor/ai-constructor-update.md). The explicitly ignorable warnings in General Execution Rules do not count as failed checks and do not prevent recording final completion.

Registry table format:

| Component | Date (ISO 8601, UTC) | Dependencies | Architecture | Code review | Tests | Build | Demo | Visual testing | Wiki |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Use actual UTC timestamps with second precision (`YYYY-MM-DDTHH:mm:ssZ`) for `Date (ISO 8601, UTC)` and for each completed stage column (and `Skipped (<YYYY-MM-DDTHH:mm:ssZ>)` in `Visual testing` when existing cases caused a skip), using `-` for any stage not yet completed. Maintain exactly one row per component without duplicates. If a cycle stops mid-way, preserve the row with completed stage timestamps and leave `Date (ISO 8601, UTC)` and unfinished stage columns as `-` so the component remains marked incomplete.

After recording completion, **stop and report on the single constructor processed**: completed steps, stage timestamps, check results, links to the code review report and registry, and the reason and path for skipping visual testing if applicable. State the original target and remaining dependency chain for the next invocation without beginning their analysis or updates. When stopping because of a problem, explicitly state it and the unfinished steps.
