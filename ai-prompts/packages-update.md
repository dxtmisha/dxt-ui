---
name: packages-update
description: Update all package.json dependencies and devDependencies to latest stable versions across the root project and all monorepo packages (packages/*), excluding typescript.
---

# Task: Update Packages and Dependencies without TypeScript

Your task is to update all dependencies (`dependencies` and `devDependencies`) in the root `package.json` as well as across all monorepo packages (`packages/*/package.json`) to their latest stable versions, **excluding** the `typescript` (`ts`) package, and download/install them in the project.

### Execution Steps:

1. **Dependency Analysis**:
   - Analyze the root `package.json` and all monorepo package files (`packages/*/package.json`).
   - Determine the latest versions of all external packages, except for local workspace packages (`workspace:*`) and the `typescript` package.
   - For internal monorepo dependencies (`@dxtmisha/*`), check if any package version was changed in `packages/*/package.json` and synchronize required version constraints across dependent packages.

2. **Updating Versions in `package.json`**:
   - Run the update for the root project and all workspaces (`packages/*`), excluding `typescript`:
     ```bash
     npx npm-check-updates --root --workspaces -x typescript -u
     ```
     *(Or run sequentially for root and workspaces)*:
     ```bash
     npx npm-check-updates -x typescript -u
     npx npm-check-updates --workspaces -x typescript -u
     ```
   - Ensure that the `typescript` version remains unchanged in all files.
   - Local monorepo packages (`workspace:*` or `>=...` referencing internal `@dxtmisha/*` packages) must not be corrupted by external npm packages.

3. **Installing Packages**:
   - Install the updated dependencies across the entire monorepo:
     ```bash
     npm install
     ```
   - Wait for the installation to finish and ensure that `package-lock.json` and `node_modules` are successfully updated without critical errors.

4. **Update Report**:
   - Output a visual list or table with all updated packages (old version → new version), grouped by root and workspace packages (`packages/*`).
   - Confirm that the `typescript` package was not altered anywhere.
