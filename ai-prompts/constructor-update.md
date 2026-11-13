---
name: constructor-update
description: Run a full dependency-first update cycle for one constructor when requested ("full constructor check" or "full check" for a constructor path in EN/RU), skipping recent or unchanged registry entries.
---

# Complete Constructor Update Cycle

## Activation

- Recognize activation requests in both English and Russian by meaning, including equivalent wording and spelling variations. Keep this instruction file entirely in English.
- Activate for a request to perform a "full constructor check" or "full check of a constructor", or the equivalent request in Russian.
- Also activate for a general "full check" request in either language when the supplied link, file mention, or path identifies a constructor under `packages/constructor/src/constructors/<Component>/`. Infer the component from that path; the user does not need to repeat the word "constructor".
- Treat both forms as requests for this entire workflow, not just code review or test execution. Start with the registry check in Step 0 and retain the one-constructor-per-invocation limit.
- Do not apply this workflow to a general full-check request for an unrelated target. If neither the request nor its linked path identifies a constructor, clarify the target before starting the cycle.

## 0. Check the Registry First

**Before analyzing a component, discovering dependencies, or making any changes, first read the [completed component registry](../packages/constructor/ai-constructor-update.md).** This applies to both the original target and every discovered dependency.

- The component identifier is its exact directory name in `packages/constructor/src/constructors/<Component>/`.
- If the identifier is already in the registry table, **first check whether at least 3 days (72 hours) have passed since the recorded completion timestamp** (comparing the current UTC time against the entry's `Completion timestamp (ISO 8601, UTC)`).
  - If the timestamp is valid and **less than 3 days have elapsed since completion**, **skip Steps 2–7** without running change verification or re-checking the component (even if recent fixes or subsequent commits touched files). This prevents immediately re-running the entire cycle right after fixes or completion. For a single original target, report the previous completion timestamp and that less than 3 days have elapsed, then stop; for a dependency or queue, treat it as current and proceed to the next candidate.
  - If the timestamp is missing or invalid, treat the entry as stale and repeat the full cycle.
- **Once 3 days or more have elapsed since completion, verify that the entry is current before skipping the component**. Compare the completion timestamp and recorded Git commit against subsequent changes to the component and its dependencies.
- Check the entire constructor directory, including classes, tests, types, and styles, as well as related UI files, demo, and wiki. Follow the current dependency chain to check changes to dependency components; changes to the dependency set also invalidate the entry. This traversal only verifies freshness and selects a target; it is not a review of multiple constructors.
- Account for commits after the recorded Git commit (`git log <commit>..HEAD -- <paths>`), staged/unstaged changes, and new untracked files (`git status --porcelain --untracked-files=all -- <paths>`), including deletions and renames. Do not rely solely on file modification times or the latest commit date: neither proves that nothing has changed since verification.
- **If changes have occurred since completion after the 3-day cooldown has elapsed, repeat the full dependency traversal from Step 1 and the entire cycle for the selected constructor**, retaining the one-constructor-per-invocation limit. An old entry (3+ days) does not justify skipping steps when changes exist. Existing visual test cases still allow the skip described in Step 5.
- If the Git commit or comparison history is missing, or unchanged status cannot be confirmed after 3 or more days have elapsed, treat the entry as stale and repeat the full cycle. Uncommitted changes require re-verification once the 3-day cooldown has elapsed, even if they may have been included in the previous cycle.
- Skip Steps 2–7 when less than 3 days have elapsed since completion, or when 3 or more days have elapsed and the component and its dependencies have not changed since completion. For a single original target, report the previous completion timestamp and reason for skipping, then stop; for a queue, proceed to the next candidate.
- If the registry is missing, create it with an empty table using the format in Step 7. Failure to read an existing registry requires stopping; do not treat it as empty.
- An entry in `ai-review.md` only records a separate code review and does not replace a full-cycle entry in this registry.

## General Execution Rules

- **Analyze and update only one constructor per invocation**, together with its local helper classes. Dependency traversal is allowed only to select the first incomplete component; perform architectural analysis, code review, and Steps 2–7 only for the selected constructor.
- After completing the selected constructor, record the result in the registry, provide a report, and stop. Do not automatically proceed to its parent, a sibling dependency, or the next component in the queue. Continue only upon the user's next instruction, checking the registry and traversing dependencies again.
- Follow the [project rules](../ai-prompt.md) and their mandatory references for affected packages.
- This file defines execution order only. Before each step, read its linked instruction completely and follow the current version. Do not copy or duplicate its rules here.
- **Immediately stop the entire cycle on any problem at any step**, including the current component, its parents, and the remaining queue. Exceptions are the explicitly ignorable warnings below and automatic correction of noncritical build errors in Step 3.2 under the conditions below. The stop rule also covers every code review finding regardless of priority, verification errors or other warnings, dependency cycles, missing mandatory instructions, and inability to perform a required check.
- **Explicitly Ignorable Warnings**: `PLUGIN_TIMINGS` build performance diagnostics and Storybook `No story files found for the specified pattern` warnings for unrelated or empty package patterns may be ignored. They do **not** require stopping, additional user confirmation, or another verification run solely because they appeared. Continue the cycle and note them in the final report. The command must still succeed, and the selected component's required tests must actually be discovered and pass; missing tests for the selected component or a zero-test run do not qualify for this exception. This exception takes precedence over warning-free requirements in linked instructions and does not require suppressing the diagnostics or disabling checks.
- Report the component, step, specific problem, supporting evidence, and unfinished work. Except for the explicitly ignorable warnings above and allowed build fixes in Step 3.2, do not automatically fix or bypass the problem or proceed further. Continue only upon a separate user instruction; after resolving the cause, repeat the interrupted step and checks that depend on it.
- Planned migration, architectural compliance work, and updates to tests, demo, and wiki belong to their respective steps. A defect, conflicting requirements, or failed verification discovered during that work requires stopping.
- This workflow's ordering and stop rules take precedence over automatic fixes, Fast Track, finalization, and advancement to other entities in linked instructions. Do not execute their later steps ahead of the order below. Never record full completion prematurely.
- When stopping, preserve completed work and registry entries for previously completed components. Do not add an incomplete component to the registry.

## 1. Traverse Dependencies from Leaves to Parent

After checking the registry, identify the components on which the current constructor depends: child components it uses, includes from other components, and base components inherited from. Follow [component-dependencies.md](./component-dependencies.md) for integration rules and [code-review.md](./code-review.md) for reviewing executable dependencies within the package.

- For each dependency, repeat Step 0 first, then recursively apply Step 1 until reaching a component with no incomplete dependencies.
- For the first component with no incomplete dependencies, perform **the entire cycle in Steps 2–7**, record successful completion in the registry, provide a report, and **stop**. Do not return to its parent during this invocation.
- Process multiple dependencies in alphabetical order. Process shared dependencies once, checking the registry on subsequent encounters.
- Maintain the current traversal stack. If a component appears again in that stack, stop and report the cycle path.
- Local helper classes belong to their component's work; do not create separate demos or wiki entries for them. Do not automatically extend migration to other packages.

## 2. Migrate or Audit the Architecture

Fully apply [design-logic.md](./design-logic.md) to the current component and its helper classes.

- If the component has not migrated to the new architecture, perform the complete migration according to that instruction.
- If it has already migrated, audit compliance with **all** requirements and bring the implementation into compliance. Using the new base architecture alone does not justify skipping the audit.

## 3. Perform Code Review

Apply [code-review.md](./code-review.md) to the resulting component implementation and affected helper classes.

Any finding stops the entire cycle under the general rules above. Automatic fixes and continuation in `code-review.md` do not override this stop. An earlier review does not replace verification of a changed implementation.

## 3.1. Update and Verify Tests

After successful review, create or update **all three testing levels** according to [test.md](./test.md):

- **The whole component** — integration tests in `<Component>.test.ts` covering the design layer, orchestrator, and helper classes working together.
- **Each class individually** — separate unit tests in `<ClassName>.test.ts` for every class of the current constructor, including the orchestrator, design layer, local helpers, and Include classes. Integration tests do not replace individual class tests; if the orchestrator shares the component's name, use `<Component>.unit.test.ts` for its unit tests.
- **The whole component in SSR mode** — a separate `<Component>.ssr.test.ts` file covering server rendering of the entire component with its orchestrator, design layer, and helper classes. Individual class SSR tests do not replace this test.

Run verification for all three levels according to [test.md](./test.md). Stop on any problem; proceed to rebuilding only after all checks pass.

## 3.2. Rebuild constructor and d1

After successful code review and all test checks in Step 3.1, execute **sequentially**:

1. `npm run prepublishOnly` in [packages/constructor](../packages/constructor/) — the script is `npm run library && npm run constructor && npm run build && dxt-types-save`.
2. After the `constructor` command succeeds, `npm run prepublishOnly` in [packages/d1](../packages/d1/) — the script is `npm run ui && npm run build && npm run wiki-storm && dxt-types-save`.

Use the complete `prepublishOnly` scripts from the corresponding `package.json` files, including generation, building, and saving types. This step explicitly authorizes both command chains; restrictions on unsolicited generation and builds in general rules and linked instructions do not cancel this step. Successful completion requires every command in both chains to succeed.

- For a noncritical build error, **automatically fix its cause and repeat the builds in the same order** without additional confirmation. Noncritical fixes are local corrections to imports, exports, types, or syntax in the current component's files and its integration in `d1` that preserve public API and behavior.
- If a fix requires behavior or public API changes, an architectural decision, broad changes, changes to another constructor, or its severity is unclear, stop with a report. Do not hide errors by disabling checks, weakening types, or introducing temporary workarounds.
- After an automatic fix, repeat code review of changed files under Step 3 and affected test checks under Step 3.1, then run both builds again. Findings during repeated review stop the cycle under the general rules.
- If the same error recurs after a fix without confirmed progress, stop and report the cause; do not repeat builds indefinitely.
- Proceed to demo development only after both packages build successfully. Include build results and automatic fixes in the final report.

## 4. Create or Update the Demo

Create the demo or bring the existing demo into alignment with the current component contract according to [demo-component.md](./demo-component.md). Complete its required checks before proceeding.

## 5. Run Visual Testing Unless Cases Already Exist

**Before starting this step's checks, start the demo server with `npm run dev` in [packages/demo](../packages/demo/)** — the `"dev": "vite dev"` script in [packages/demo/package.json](../packages/demo/package.json). If the server is already running, use the existing process. Wait for server readiness and confirm that the current component's demo page is accessible; use the actual URL for visual testing. If startup fails or the page is unavailable, stop and report the problem.

Check for an existing `test-cases.md` specifically for the current component in the testing directories specified by [visual-test-constructor.md](./visual-test-constructor.md).

- If cases already exist, **skip the entire visual testing stage**. Report the case file path and reason for skipping; do not present a skip as a successful test run.
- If cases do not exist, fully execute [visual-test-constructor.md](./visual-test-constructor.md), including the visual testing instruction it invokes, for the current component's demo.
- Inability to access cases or required tools requires stopping, not skipping.

## 6. Update the Wiki

Update the current component's documentation according to [wiki-descriptions.md](./wiki-descriptions.md). Complete its required checks. If previously verified component code changes during later steps, repeat review and affected checks before recording completion.

## 7. Record Successful Completion

Only after all dependencies are complete, code review passes without findings, and every step for the current component succeeds (with only the visual testing skip described above allowed), add one row to [ai-constructor-update.md](../packages/constructor/ai-constructor-update.md). The explicitly ignorable warnings in General Execution Rules do not count as failed checks and do not prevent recording successful completion.

Registry table format:

| Component | Completion timestamp (ISO 8601, UTC) | Git commit (HEAD) | Code review report | Visual testing |
| --- | --- | --- | --- | --- |

Use the actual completion time with second precision and the UTC timezone, the full current `HEAD` hash, a link or path to the review report, and the visual testing result: `Passed: <report>` or `Skipped: cases already exist — <path>`. For a component completing a repeated cycle, update its existing row only after the entire cycle succeeds; preserve other rows. Do not create duplicates or record incomplete components. If a repeated cycle stops, the previous entry remains historical and is not considered current.

After recording completion, **stop and report on the single constructor processed**: completed steps, check results, links to the code review report and registry, and the reason for skipping visual testing if applicable. State the original target and remaining dependency chain for the next invocation without beginning their analysis or updates. When stopping because of a problem, explicitly state it and the unfinished steps.
