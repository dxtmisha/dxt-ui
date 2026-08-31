# Task: Checking and Synchronizing Package Dependencies

Your task is to conduct a complete audit and synchronization of the `dependencies` section in all `package.json` files across the monorepo packages (`packages/*/package.json`) based on the actual usage of modules, components, and styles in the source code (`packages/*/src/`).

### Execution Steps:

1. **Scanning Package Source Code**:
   - Analyze all source code files (`.ts`, `.tsx`, `.vue`, `.js`, `.scss`) in the `src/` directory of each package (`packages/<package-name>/src/`).
   - Gather a comprehensive list of all used external and monorepo dependencies:
     - JS/TS imports: `import ... from '@coralclub/...'`, `from '@dxtmisha/...'`, etc.
     - SCSS imports and mixins: `@use '@coralclub/c3/ui-properties'`, `@import '@coralclub/...'`.
     - Usage of global design system components in Vue templates (`.vue`): `<C3*` tags (which require the `"@coralclub/c3": "*"` dependency).

2. **Reconciliation with `package.json`**:
   - Compare the detected imports in the code with the current `dependencies` section in `packages/<package-name>/package.json`.
   - Identify:
     - **Missing dependencies**: packages that are actually imported or used in `src/` but are not declared in `dependencies`.
     - **Extraneous dependencies**: packages that are declared in `dependencies` but are not used in the package's code.

3. **Synchronization and Updating `package.json`**:
   - Add all missing dependencies to the `dependencies` of the corresponding `package.json` (for internal monorepo packages, as well as DXT ecosystem or Coral Club packages, strictly specify version from the latest version and above `">="`, e.g. `">=1.10.1"`, never `workspace:*` or `"*"`).
   - Carefully update the files, keeping the JSON valid and preserving the structure.

4. **Final Report**:
   - Output a structured summary for all checked packages:
     - Package name;
     - Status (updated / unchanged);
     - List of added/updated dependencies.
