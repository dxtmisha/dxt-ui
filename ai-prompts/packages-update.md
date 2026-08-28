# Task: Update Packages and Dependencies without TypeScript

Your task is to update all dependencies (`dependencies` and `devDependencies`) in `package.json` to their latest stable versions, **excluding** the `typescript` (`ts`) package, and download/install them in the project.

### Execution Steps:

1. **Dependency Analysis**:
   - Analyze the current project's `package.json`.
   - Determine the latest versions of all external packages, except for local workspace packages (`workspace:*`) and the `typescript` package.

2. **Updating Versions in `package.json`**:
   - Run the update for all packages, excluding `typescript`:
     ```bash
     npx npm-check-updates -x typescript -u
     ```
   - Ensure that the `typescript` version remains unchanged.
   - Local monorepo packages (`workspace:*`) must not be affected.

3. **Installing Packages**:
   - Install the updated dependencies:
     ```bash
     npm install
     ```
   - Wait for the installation to finish and ensure that `package-lock.json` and `node_modules` are successfully updated without critical errors.

4. **Update Report**:
   - Output a visual list or table with all updated packages (old version → new version).
   - Confirm that the `typescript` package was not altered.
