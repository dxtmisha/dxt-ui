---
name: visual-test
description: Conduct automated AI-driven browser and visual testing of UI components, pages, and features using Chrome DevTools MCP / CDP and Apple Xcode Simulator, including pre-test source code and materials/ analysis, industry-standard test case specification (test-cases.md), live browser execution with smart screenshot and console evidence capture, incremental living test reports (test-report.md) with regression tracking and auto-cleanup of resolved failures, and comprehensive performance, speed, and UX improvement recommendations.
---

# Task: AI-Driven Browser & Visual Testing (Industrial-Grade QA Protocol)

Act as a Principal QA Automation Architect, Visual Design Systems Auditor, and Web Performance & UX Engineer. Your mission is to perform comprehensive, automated browser-based visual and functional testing of UI components, pages, or features in the `dxt-ui` ecosystem.

Visual testing in this project is **code-informed and specification-driven**: you must first analyze the source code and reference materials (`materials/`), verify browser automation tooling readiness, generate or validate an industry-standard test case specification, execute every scenario in a real browser, and maintain a living Markdown test report with visual evidence, actionable bug remediation guides, and deep performance/UX recommendations.

---

## 🔴 Mandatory Inputs & Pre-Test Analysis Protocol

Before opening the browser or creating any test files, you MUST complete the following preparation steps:

### 1. Verify Mandatory Developer Inputs
The developer must provide two core pieces of information:
1. **Browser Target URL / Route** where the entity is rendered and should be tested (e.g., `http://localhost:6006/?path=/story/...`, `http://localhost:5173/component-button`, or a specific local/staging URL).
2. **Source Code Path** where the implementation of the tested entity resides (e.g., `packages/d1/src/components/Ui/Button`, `packages/constructor/src/constructors/Button`, `packages/demo/src/pages/components/DemoButtonPage.vue`).

> [!IMPORTANT]
> **Missing Input Guard**: If the developer did not specify either the **Target URL/Route** or the **Source Code Path**, **STOP immediately** and ask the developer to provide the missing path/URL before proceeding. Never guess arbitrary URLs or file paths.

### 2. Language Determination (`./design.config.json` -> `wikiLanguage`)
- Inspect `./design.config.json` (or the target package's `design.config.json`) to read the `wikiLanguage` property (e.g., `"ru"` or `"en"`).
- Write all test case specifications (`test-cases.md`) and test reports (`test-report.md`) strictly in the configured language (`"ru"` -> Russian, `"en"` -> English), keeping technical identifiers, prop names, CSS classes, file paths, and console logs in their original form.

### 3. Deep Source Code Analysis (Code-First Phase)
Before touching the browser, thoroughly read and analyze the source code at the provided path:
- **Component & Constructor Architecture**: Inspect the Vue component (`.vue`), constructor/logic classes (`*Design.ts`, `*Core.ts`, `props.ts`, `types.ts`, `basicTypes.ts`), composables (`use*.ts`), and SCSS/token definitions (`style.scss`, `properties.json`).
- **Contract Extraction**: Catalog all:
  - **Props & Variants**: Palettes, sizes, appearances/types, alignments, boolean flags, adaptive breakpoints, formatting options, validation props, and skeleton states (`is-skeleton`).
  - **Interactive States**: Default, hover, focus / `focus-visible`, active/pressed, disabled, readonly, loading/progress, selected/checked/indeterminate, empty state, and error/invalid state.
  - **Slots & Emits**: All named/default slots, scoped slot bindings, `v-model` bindings, and emitted events (`click`, `change`, `update:modelValue`, etc.).
  - **Accessibility (A11y) & Keyboard**: Expected WAI-ARIA roles, `aria-*` attributes, `tabindex`, focus trapping, and keyboard handlers (`Enter`, `Space`, `Escape`, `Arrow` keys).
  - **SSR & Hydration Constraints**: Client-only vs SSR-safe rendering (`in-dom`, teleport targets, dynamic IDs).

### 4. Mandatory `materials/` Directory Discovery & Inspection
You MUST search for and inspect the `materials/` directory to incorporate design mockups, PRDs, business requirements, and specifications into your test plan. Search at two levels:
1. **Component / Entity Level**: Inside or adjacent to the tested entity's source directory (e.g., `<source-code-path>/materials/`).
2. **Project / Package Root Level**:
   - If the entity belongs to a **subproject/package within a monorepo** (e.g., `packages/d1/`, `packages/demo/`, `packages/constructor/`), look specifically in the **root directory of that subproject/package** (`packages/<pkg>/materials/`).
   - If the project is a standalone repository (or tested at the root level), look in the **repository root** (`./materials/`).
- If a `materials/` folder exists and contains relevant files (Figma screenshots, mockups, technical specs, user flows, edge-case requirements), study them thoroughly and include visual/functional conformance checks against those materials in Step 2.

---

## Step 0: Tooling & Environment Readiness Check (Pre-Flight Gate)

Before creating folders or starting tests, verify that all required browser automation tools and target servers are available and operational:

### 1. Required Browser Automation Stack
- **STRICT PROHIBITION (`browser_subagent`)**: Calling `browser_subagent` is **CATEGORICALLY FORBIDDEN** under all circumstances (causes process deadlocks and session freezes on macOS).
- **Desktop Browser Testing (Mandatory)**:
  - Check for **Chrome DevTools MCP** tools (`navigate_page`, `evaluate_script`, `click`, `hover`, `fill`, `press_key`, `take_screenshot`, `take_snapshot`, `resize_page`, `list_console_messages`, `list_network_requests`, etc.); **OR**
  - Direct connection to Google Chrome via **Chrome Remote Debugging Protocol (CDP)** at `http://127.0.0.1:9222`.
- **Mobile / iOS Testing (When Mobile Device Testing is Required)**:
  - Check for **Apple Xcode Simulator** (`Simulator.app` + `xcrun simctl` with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`).
- **Target Server Reachability**:
  - Verify that the target URL provided by the developer is reachable and serving the application (e.g., HTTP `200 OK` without connection refused errors).

### 2. Immediate Halt & Setup Instructions on Missing Tools
If the browser automation tool (Chrome DevTools MCP / Chrome CDP / Xcode Simulator) is missing/unavailable, or if the target local dev server is not running and cannot be reached:
1. **IMMEDIATELY STOP** the testing process. Do NOT fabricate test results or simulate browser behavior mentally.
2. **Notify the Developer** clearly specifying which tool, browser instance, or dev server is missing or unreachable.
3. **Provide Step-by-Step Installation & Launch Instructions**:
   - **To enable Chrome DevTools MCP** (in IDE / Agent MCP configuration):
     ```json
     {
       "mcpServers": {
         "chrome-devtools": {
           "command": "npx",
           "args": ["-y", "chrome-devtools-mcp@latest", "--browser-url=http://127.0.0.1:9222"]
         }
       }
     }
     ```
   - **To launch Google Chrome with Remote Debugging (CDP on port 9222)**:
     ```bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
       --remote-debugging-port=9222 \
       --user-data-dir=/tmp/chrome-dev-profile &
     ```
   - **To boot Apple Xcode Simulator (for mobile WebKit testing)**:
     ```bash
     DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl boot "iPhone 17 Pro"
     open -a /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
     ```
   - **To start the target local server** (e.g., Storybook or Demo app):
     ```bash
     # For Demo package:
     npm --prefix packages/demo run dev
     # For Storybook:
     npm --prefix packages/storybook run storybook
     ```

---

## Step 1: Test Results Directory Structure (`ai-tests/<entity-name>/`)

1. Determine the **Project Root**:
   - If testing a subproject/package inside a monorepo (e.g., `packages/demo`, `packages/d1`), use the root of that subproject/package (`packages/<pkg>/`) — or the repository root if testing from the root workspace.
2. Check if the **`ai-tests/`** directory exists in the project root. If it does not exist, create it.
3. Inside `ai-tests/`, check for a subdirectory named after the target entity: **`ai-tests/<entity-name>/`** (using the exact canonical name of the component, page, or feature, e.g., `ai-tests/D1Button/` or `ai-tests/DemoButtonPage/`). Create it if it does not exist, along with a **`screenshots/`** subfolder for visual artifacts.

### Standard Directory Layout
```text
<project-root>/
└── ai-tests/
    └── <entity-name>/
        ├── test-cases.md       # Step 2: Comprehensive test case specification
        ├── test-report.md      # Step 4: Living execution report & regression log
        └── screenshots/        # Step 3 & 4: Visual confirmation screenshots
            ├── TC-VIS-001.png
            ├── TC-INT-002.png
            └── ...
```

---

## Step 2: Test Case Specification (`test-cases.md`) — Industry-Leading Standard

Before clicking anything in the browser, you must establish the complete test specification in `ai-tests/<entity-name>/test-cases.md`.

### 1. Existence & Relevance Check (Idempotency Rule)
- **If `test-cases.md` DOES NOT exist**: Create it from scratch covering all scenarios derived from the source code and `materials/` analysis.
- **If `test-cases.md` ALREADY exists**:
  1. Read `test-cases.md` in full and compare it against the current source code (`props.ts`, component template, logic, styles) and `materials/`.
  2. **If outdated or incomplete** (e.g., new props, slots, states, or edge cases were added to the code, or behaviors changed): Update and refine `test-cases.md` to cover all new/modified scenarios while preserving valid existing cases and their IDs.
  3. **If completely up-to-date and comprehensive**: **Do NOT modify `test-cases.md`** — leave it untouched and proceed directly to **Step 3**.

### 2. How to Formulate Test Cases (Standards of Industry Leaders: Google ACC, ISO/IEC/IEEE 29119, ISTQB, Playwright/Chromatic)

Design test cases using **Google's ACC Matrix (Attribute, Component, Capability)** combined with **ISO/IEC/IEEE 29119-3** specification standards, **Equivalence Partitioning (EP)**, **Boundary Value Analysis (BVA)**, and **State-Transition Testing**.

Every test suite in `test-cases.md` MUST systematically cover the following **6 mandatory test categories**:

1. **`VIS` — Visual & Design System Compliance (`TC-VIS-xxx`)**:
   - Baseline rendering against `materials/` mockups and DXT UI design tokens.
   - Theme & palette adaptability (Light mode, Dark mode, dynamic palette props such as `primary`, `secondary`, `success`, `warning`, `error`, `neutral`).
   - Size scales (`xs`, `sm`, `md`, `lg`, `xl`), border radius, elevation/shadows, spacing/padding, and typography presets.
   - Alignment, icon/avatar placement (leading/trailing), badge overlays, and zero unintended clipping, text overlap, or subpixel misalignment.
2. **`INT` — Interactive States & Functional Contract (`TC-INT-xxx`)**:
   - Full UI state machine transitions: `Default` -> `Hover` -> `Focus-Visible` -> `Active/Pressed` -> `Selected/Checked` -> `Disabled` -> `Readonly` -> `Loading/Progress` -> `Skeleton (is-skeleton)`.
   - User interactions: mouse clicks, double clicks, drag/drop, input typing, clearing, form submission, opening/closing modals/menus/popovers.
   - Props & Slots reactivity: dynamic prop switching, conditional slot rendering (`default`, `prefix`, `suffix`, `header`, `footer`), `v-model` synchronization, and event emissions.
3. **`BND` — Boundary Values, Edge Cases & Resilience (`TC-BND-xxx`)**:
   - **Empty & Nullish Inputs**: Empty strings `""`, whitespace-only `"   "`, `null`, `undefined`, empty arrays `[]` (placeholder/empty state rendering).
   - **Extreme Content Lengths**: Single character (`"A"`), very long multi-sentence text (1000+ chars), unbroken strings without spaces (`"AAAA...AAAA"` — checking `text-overflow: ellipsis` or `word-break` without breaking container bounds), multiline content.
   - **Numeric & Logical Boundaries**: `0` (verifying `0` is rendered and not treated as falsy empty), negative numbers, `max` / `min` thresholds, decimal values.
   - **Multilingual, Unicode & RTL**: Cyrillic, Vietnamese diacritics (`"Học tiếng Việt"`), CJK, Emojis (`"🚀🔥✨"`), and RTL layout direction (`dir="rtl"`).
   - **Security & Stress**: HTML/XSS strings in labels/inputs (`"<img src=x onerror=alert(1)>"` rendered strictly as escaped text), rapid repeated clicks (debouncing, zero duplicate actions or broken animations).
4. **`RSP` — Responsive & Viewport Adaptivity (`TC-RSP-xxx`)**:
   - Desktop viewport (`1440×900`), Tablet viewport (`768×1024`), and Mobile viewport (`375×812`).
   - Container query / flex-wrap adaptation, horizontal scroll behavior, sticky elements, and touch target sizing on mobile (`>= 44×44px` where applicable).
5. **`A11Y` — Accessibility & Keyboard Navigation (`TC-A11Y-xxx`)**:
   - Full keyboard operability (`Tab`, `Shift+Tab` focus order, `Enter` and `Space` activation, `Escape` dismissal, `Arrow` key navigation in lists/tabs/menus/radios).
   - Visible focus ring (`:focus-visible` outline compliance).
   - Semantic HTML & WAI-ARIA verification (`role`, `aria-label`, `aria-expanded`, `aria-disabled`, `aria-checked`, `aria-invalid`, `aria-hidden="true"` on decorative icons).
6. **`LOG` — Console, Events & Runtime Health (`TC-LOG-xxx`)**:
   - Zero `console.error`, zero uncaught exceptions, zero unhandled promise rejections, and zero Vue runtime/hydration warnings (`[Vue warn]`) across all interactions.
   - Verification of expected console outputs, event tracker logs, or network payloads.

### 3. Mandatory `test-cases.md` Structure & Template

Format `ai-tests/<entity-name>/test-cases.md` strictly according to this template:

```markdown
# Test Case Specification: <EntityName>

- **Entity**: `<EntityName>`
- **Source Code Path**: `<relative-path-to-code>`
- **Target URL**: `<target-url>`
- **Reference Materials**: `<path-to-materials-or-"None">`
- **Last Verified / Updated**: `YYYY-MM-DD`
- **Total Test Cases**: `<N>`

---

## 1. Coverage Matrix Overview

| Category | Code | Count | Priority Distribution | Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Visual & Tokens** | `VIS` | <n> | P0, P1 | Layout, palettes, sizes, dark/light mode, typography |
| **Interactive & Functional** | `INT` | <n> | P0, P1 | States (hover/focus/disabled/loading/skeleton), props, events |
| **Boundaries & Edge Cases** | `BND` | <n> | P1, P2 | Empty, `0`, overflow text, Unicode/Vietnamese/Cyrillic, XSS |
| **Responsive & Viewport** | `RSP` | <n> | P1, P2 | Desktop (1440px), Tablet (768px), Mobile (375px) |
| **Accessibility (A11y)** | `A11Y` | <n> | P1, P2 | Keyboard flow, focus-visible ring, ARIA attributes |
| **Console & Runtime** | `LOG` | <n> | P0, P1 | Console logs, event payloads, zero errors/Vue warnings |

---

## 2. Detailed Test Cases

### [TC-VIS-001] <Concise Action-Oriented Title>
- **Priority**: `P0 (Critical)` | `P1 (High)` | `P2 (Medium)` | `P3 (Low)`
- **Category**: `Visual & Design System`
- **Preconditions**: Navigate to `<URL>`, viewport `1440×900`, theme `Light`.
- **Test Steps**:
  1. Locate `<selector / component section>`.
  2. Inspect computed styles, bounding boxes, and visual alignment.
- **Expected Result**: Component renders with correct token colors, padding, typography, and zero clipping or overlap.
- **Evidence Type**: `Screenshot` (`./screenshots/TC-VIS-001.png`)

### [TC-LOG-001] <Concise Action-Oriented Title for Console/Event Case>
- **Priority**: `P1 (High)`
- **Category**: `Console & Runtime`
- **Preconditions**: Navigate to `<URL>`, clear console messages.
- **Test Steps**:
  1. Trigger action `<click / input>` on `<element>`.
  2. Inspect browser console output / event log display.
- **Expected Result**: Console/event log outputs exact message `"<expected-message>"` with `0` errors or warnings.
- **Evidence Type**: `Console/Log` (No screenshot required unless visual anomaly occurs)
```

---

## Step 3: Automated Browser Test Execution

Once `test-cases.md` is ready, execute **every single test case** systematically in the real browser:

1. **Sequential & Isolated Execution**:
   - Walk through every `[TC-XXX-NNN]` case listed in `test-cases.md` in order.
   - Before each test case (or group), ensure clean preconditions (reset viewport size, scroll target into view, reset modified inputs/toggles, check console state).
2. **Deep DOM, Geometry & Computed Style Verification**:
   - Do not rely solely on a superficial glance: use `evaluate_script` alongside visual inspection to check:
     - `getBoundingClientRect()` (detecting unintended zero-width/height elements, overflowing children, or overlapping siblings).
     - `window.getComputedStyle(el)` (verifying CSS variables, colors, `outline`, `opacity`, `pointer-events`, `text-overflow`).
     - DOM attributes (`aria-*`, `disabled`, `inert`, `role`, `class`).
     - Console messages via `list_console_messages` (checking for errors, `[Vue warn]`, or expected log outputs).
3. **Smart Evidence Collection Rule (Screenshots vs. Console/Text Logs)**:
   - **When Visual Confirmation Matters (`Evidence Type: Screenshot` or `Both`)**:
     - Capture a screenshot of the relevant component/viewport and save it to `ai-tests/<entity-name>/screenshots/<TC-ID>.png` (e.g., `TC-VIS-001.png`).
     - If a visual or functional failure is detected on a visual case, capture the failure state screenshot (e.g., `TC-VIS-001.png` or `TC-VIS-001-fail.png`) so the developer can immediately see the defect.
   - **When Only Console / Event / Non-Visual Output Matters (`Evidence Type: Console/Log`)**:
     - If the test case verifies a console message, event emission payload, or internal state where a screenshot adds no visual value, **do NOT take a screenshot**.
     - Instead, record the exact console message, event output, or returned DOM value directly in the report.

---

## Step 4: Test Report Generation & Living Lifecycle (`test-report.md`)

Document the execution results in `ai-tests/<entity-name>/test-report.md` following the **Industry-Leading QA Report Standard** (combining Google Test Summary, IEEE 829 / ISO 29119, and Allure/Playwright reporting best practices).

### 1. Incremental Update & Regression Lifecycle Rules (CRITICAL)

You MUST treat `test-report.md` and `screenshots/` as a **living document**, never overwriting blindly:

1. **Reuse & Update Existing Report**:
   - If `ai-tests/<entity-name>/test-report.md` and `./screenshots/` **already exist**, **DO NOT create a new file from scratch**. Update the existing `test-report.md` in place.
2. **Transitioning Fixed Cases (`❌ FAIL` -> `✅ OK`)**:
   - If a test case in the existing `test-report.md` previously failed (`❌ FAIL`), and in the current test run it **passes without issues**:
     - Change its status in the main Test Results section from `❌ FAIL` to `✅ OK`.
     - Update its screenshot or console log evidence to reflect the healthy passing state.
     - **Delete/remove this resolved test case from the Failure Log section at the bottom of the file** (if all failures in a dated Failure Log block at the bottom are now resolved, delete that entire dated failure block).
3. **Handling New or Persisting Failures (Appending Dated Failure Report at the End)**:
   - If the current test run completes with one or more failed test cases (`❌ FAIL`):
     - Mark those cases as `❌ FAIL` in the main Test Results table/cards.
     - At the **very end of `test-report.md`**, append a **new dated Failure Log section** (`## 🚨 Active Failure Report — YYYY-MM-DD HH:mm`) containing:
       1. **Execution Date & Time**.
       2. **List of Failed Test Cases** (`TC-ID` and title).
       3. **What Broke (Symptom, Root Cause & Visual/Console Evidence)**: Detailed explanation of what failed in the browser, embedded/linked failure screenshot (`./screenshots/<TC-ID>.png`) or exact console error output, and the root cause identified in the source code.
       4. **How to Fix It (Actionable Remediation Guide)**: Concrete, step-by-step code instructions specifying the exact file path, component/class, lines, and code/SCSS changes required to fix the defect.
   - Remember: as soon as these broken cases are fixed and verified in a subsequent test run, **remove the resolved failure report from the bottom of the file** and set the cases to `✅ OK` in the main table.

### 2. Mandatory Advisory Section: Performance, Speed, Architecture & UX Audit

Every `test-report.md` MUST include a dedicated, deep-dive engineering and UX audit section (**Section 3: AI Audit — Performance, Speed & UX Recommendations**) where you critically evaluate the entity and write actionable proposals covering:
- **What Works Poorly / Pain Points**:
  - Any sluggish interactions, layout shifts (CLS), flickering transitions, awkward click/hover areas, focus loss, clipped tooltips/menus, or brittle DOM structures noticed during live browser testing.
- **Performance & Speed Optimizations**:
  - Rendering efficiency, DOM node count reduction, avoiding layout thrashing (`transform`/`opacity` animations instead of `top`/`left`/`width`/`height`), `v-memo` / `computed` caching, lazy rendering (`in-dom` / `IntersectionObserver`), event listener throttling/debouncing, and Core Web Vitals (LCP, INP, CLS).
- **UX / UI & Accessibility Enhancements**:
  - Micro-interactions, visual feedback clarity, touch ergonomics on mobile, keyboard navigation smoothness, empty/loading/error state ergonomics, and ARIA/screen-reader improvements.

### 3. Mandatory `test-report.md` Structure & Template

Format `ai-tests/<entity-name>/test-report.md` strictly according to this template:

```markdown
# Visual & Browser Test Report: <EntityName>

- **Entity**: `<EntityName>`
- **Source Code**: [`<EntityName>`](<relative-path-to-source>)
- **Target URL**: `<target-url>`
- **Materials Checked**: `<path-to-materials-or-"None">`
- **Browser / Environment**: `Chrome (CDP / DevTools MCP), macOS`
- **Last Run Date**: `YYYY-MM-DD HH:mm`
- **Overall Status**: `✅ PASSED` | `❌ FAILED (<F> issues)`

---

## 1. Executive Summary & Metrics

| Metric | Count | Share |
| :--- | :--- | :--- |
| **Total Test Cases** | `<Total>` | `100%` |
| **Passed (`✅ OK`)** | `<Passed>` | `<XX%>` |
| **Failed (`❌ FAIL`)** | `<Failed>` | `<XX%>` |
| **Console Errors / Warnings** | `<0 or N>` | — |

---

## 2. Test Execution Results (Baseline Matrix)

### 2.1. Visual & Design System (`VIS`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-VIS-001` | <Title> | ✅ OK | Renders accurately according to D1 tokens; zero clipping or overlap. | [📸 TC-VIS-001](./screenshots/TC-VIS-001.png) |
| `TC-VIS-002` | <Title> | ❌ FAIL | Text overflows button container on narrow width. | [📸 TC-VIS-002](./screenshots/TC-VIS-002.png) |

#### Visual Previews (`VIS`)
![TC-VIS-001 — Default Rendering](./screenshots/TC-VIS-001.png)

---

### 2.2. Interactive & Functional States (`INT`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-INT-001` | <Title> | ✅ OK | Hover, focus-visible ring, and active states transition smoothly. | [📸 TC-INT-001](./screenshots/TC-INT-001.png) |
| `TC-INT-002` | <Title> | ✅ OK | Click event emitted once; value updated in DOM. | `Console/DOM: eventName = "click"` |

---

### 2.3. Boundaries & Edge Cases (`BND`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-BND-001` | <Title> | ✅ OK | Value `0` and Unicode/Vietnamese strings render cleanly; XSS payload escaped. | [📸 TC-BND-001](./screenshots/TC-BND-001.png) |

---

### 2.4. Responsive & Viewport Adaptivity (`RSP`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-RSP-001` | <Title> | ✅ OK | Adapts cleanly across 1440px, 768px, and 375px viewports. | [📸 TC-RSP-001](./screenshots/TC-RSP-001.png) |

---

### 2.5. Accessibility & Keyboard (`A11Y`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-A11Y-001` | <Title> | ✅ OK | Focus-visible ring appears on `Tab`; `Enter`/`Space` activates control. | [📸 TC-A11Y-001](./screenshots/TC-A11Y-001.png) |

---

### 2.6. Console, Events & Runtime Health (`LOG`)

| ID | Test Case | Status | Observed Result | Evidence (Screenshot / Console) |
| :--- | :--- | :--- | :--- | :--- |
| `TC-LOG-001` | <Title> | ✅ OK | Zero console errors, zero `[Vue warn]` messages during full interaction cycle. | `Console: 0 errors, 0 warnings` |

---

## 3. 💡 AI Audit: Performance, Speed & UX Improvement Recommendations

### 3.1. What Works Poorly / Identified Weaknesses
- **<Issue / Friction Point Title>**: <Detailed explanation of what feels suboptimal, fragile, or visually inconsistent in the current implementation>.

### 3.2. Performance & Speed Optimizations
- **<Optimization Title (e.g., Rendering / Animation / Reactivity / DOM Weight)>**:
  - *Observation*: <What happens currently during browser execution>.
  - *Recommendation*: <Concrete code/CSS optimization to improve frame rate, reduce re-renders, or speed up load/interaction time>.

### 3.3. UX, UI & Accessibility Enhancements
- **<UX Enhancement Title>**:
  - *Observation*: <Current user experience behavior>.
  - *Recommendation*: <How to improve micro-interactions, keyboard flow, visual clarity, or mobile touch ergonomics>.

---

<!--
  INCLUDE SECTION 4 ONLY WHEN ACTIVE FAILURES EXIST.
  When a new test run has failures, append a dated block below.
  When previously failing cases are fixed and pass (✅ OK), REMOVE them (or the entire resolved block) from this section!
-->
## 4. 🚨 Active Failure & Regression Log

### Run: `YYYY-MM-DD HH:mm`

#### ❌ [TC-VIS-002] <Failed Test Case Title>
- **What Broke**: <Detailed description of the visual, layout, functional, or console error observed in the browser>.
- **Evidence**: [📸 Failure Screenshot](./screenshots/TC-VIS-002.png) / `Console Error: <exact message>`
- **Root Cause in Code**: In `<path/to/file.vue#LXX>`, <explanation of why the bug occurs>.
- **How to Fix (Remediation Guide)**:
  1. Open `<path/to/file>`.
  2. Replace / update `<problematic code or SCSS rule>` with:
     ```scss
     // Proposed fix
     ```
  3. Re-run `visual-test` to verify and auto-clear this failure entry.
```

