This is the basic functional library (@dxtmisha/functional-basic). It contains framework-agnostic algorithms, utilities, and classes.

ATTENTION FOR VUE ENVIRONMENT:
If you are developing in Vue, ALWAYS look for the required functionality (composables, reactive wrappers) inside the `@dxtmisha/functional` library FIRST.
And ONLY if there is no reactive or Vue-specific analog there, you may use the functionality directly from this library (@dxtmisha/functional-basic).

=============================================================================
CLASS STRUCTURE & CODING STANDARDS (RULES FOR AI)
=============================================================================

To maintain consistency and high industrial quality across the dxt-ui codebase, all TypeScript classes inside `@dxtmisha/functional-basic` must strictly adhere to the following rules regarding structure, member ordering, and styles.

1. ORDER OF MEMBERS WITHIN A CLASS
Members in every class MUST be ordered in the following sequence:

   A. Class Properties / Member Variables:
      - Placed at the very top of the class body.
      - Ordered by visibility: Public first, then Protected, and Private last.
      - Within each visibility level, group by logical connection or alphabetically.
      - Initialize default values directly on declaration when possible.

   B. Constructor:
      - Placed immediately after all property declarations.
      - Parameter properties (e.g., `protected url: string`) are allowed to simplify declaration.

   C. Public Methods:
      - Placed after the constructor.
      - Grouped logically:
        1. Getters, checkers, and status-check methods (e.g., `is*`, `get*`).
        2. Setters and configuration methods (e.g., `set*`).
        3. Core executors and action methods (e.g., `request()`, `fetch()`, `show()`).

   D. Protected Methods:
      - Placed after all public methods.
      - Contain internal utility and helper logic accessible to subclasses.

   E. Private Methods:
      - Placed at the very end of the class.
      - Strict encapsulation of internal logic.

2. CODING & STYLE CONVENTIONS
   - Naming:
     * Classes: PascalCase (e.g., `LoadingInstance`).
     * Methods & Properties: camelCase (e.g., `registrationEvent`, `registrationList`).
     * Constants inside files: UPPER_SNAKE_CASE (e.g., `LOADING_EVENT_NAME`).
   - TypeScript Safety:
     * Never use `any`. Use generic parameters or `unknown` if the type is dynamic/undefined.
     * Explicitly declare return types for ALL public, protected, and private methods (including `void`).
     * Use interfaces/types to define structural contracts for complex inputs and outputs.
   - SSR Isolation (Server-Side Rendering):
     * The library must be fully isomorphic and safe for SSR.
     * Avoid storing request-specific state in global/static class properties directly.
     * Use `ServerStorage.get('key', () => new Instance())` for request-isolated singletons.
     * Use `isDomRuntime()` checks before accessing browser-only APIs like `window`, `document`, or `location`.
