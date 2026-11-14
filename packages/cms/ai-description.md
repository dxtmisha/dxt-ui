Core Purpose: This library provides a template structure for creating modular, reusable, and type-safe component/utility packages within the design system.

Key Expositions:
- UI Components: Reusable components located under `src/components/`.
- Composables: Stateful composition hooks under `src/composables/`.
- Classes: Logical or utility class abstractions under `src/classes/`.
- Functions: Pure helpers and utility functions under `src/functions/`.
- Types: TypeScript declarations and interfaces under `src/types/`.

Critical Development Rules:
- **Do NOT modify `src/library.ts` directly**: This file is auto-generated and serves as the main entry point exporting all library entities. Manually editing it is strictly forbidden.
- **Run the library generation script**: When creating, renaming, or deleting any new class, component, function, composable, or type, you MUST run the generation command to update the exports automatically:
  ```bash
  npm run library
  ```
