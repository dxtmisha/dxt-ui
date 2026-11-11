---
name: visual-test-constructor
description: Automatically resolve component, demo page, and constructor source paths from any localhost demo URL and launch visual-test.md.
---

# Skill: Visual Test Constructor from URL

When the user provides a local demo URL (e.g., `http://localhost:3000/component-motion-transform` or route `/component-[name]`) and requests a visual test for a constructor/component:

### Execution Protocol:
1. **Resolve Demo Page**:
   - Find the route in [`packages/demo/src/router.ts`](../packages/demo/src/router.ts) to locate the demo page: `packages/demo/src/pages/components/Demo<Name>Page.vue`.
2. **Resolve UI Component & Constructor**:
   - Extract the canonical component name from the demo page (e.g., `<D1MotionTransform>` -> `MotionTransform`).
   - UI Component: `packages/d1/src/components/Ui/<Name>/` (`D1<Name>.vue`, `props.ts`).
   - Constructor: `packages/constructor/src/constructors/<Name>/` (`<Name>.ts`, `<Name>Design.tsx`, `props.ts`, `types.ts`).
3. **Execute Visual Test**:
   - Target URL: the provided browser URL.
   - Target Directory: `packages/d1/ai-tests/D1<Name>/` (or `packages/constructor/ai-tests/<Name>/`).
   - Immediately proceed with executing [`ai-prompts/visual-test.md`](./visual-test.md) using the resolved paths without asking the user for confirmation.
