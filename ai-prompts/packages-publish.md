---
name: packages-publish
description: Check publication status of all monorepo packages against npmjs registry, identify unreleased versions, and guide publication.
---

# Task: Check and Verify Package Publication on npmjs

Your task is to audit all packages in the monorepo (`packages/*/package.json`), compare their local versions against the versions published on npmjs (`https://registry.npmjs.org`), and identify packages with updated versions that have not yet been published.

### Execution Steps:

1. **Scanning Monorepo Packages**:
   - Iterate through all packages in `packages/*/package.json`.
   - Read `name`, `version`, `private`, and check for the `"ui-no-publish": true` flag.
   - Filter packages:
     - **Publishable**: Packages with `"private": false` (or not private) and without `"ui-no-publish": true`.
     - **Private / Internal**: Packages with `"private": true` or `"ui-no-publish": true` (skip registry verification).

2. **Checking npmjs Registry**:
   - For each publishable package, query the npm registry:
     ```bash
     npm view <package-name> version
     ```
   - Handle possible responses:
     - Version string returned (e.g. `0.118.0`).
     - Error `404 Not Found` (package not published yet).

3. **Comparison and Status Classification**:
   - Compare local version against published version:
     - **Up to date** (`local === npm`): The latest version is already published.
     - **Needs publish** (`local !== npm`): Local version has been updated but not yet published to npmjs.
     - **Not published** (`404 Not Found`): Package is not yet published to npmjs.

4. **Structured Report**:
   - Output a clear summary table:
     - `Package` (with clickable link to `packages/<name>/package.json`);
     - `Local Version`;
     - `npmjs Version`;
     - `Status` (✅ Up to date, ❌ Needs publish, ⚠️ Not found, 🔒 Private/Skipped).
   - Explicitly list all packages that require publication.
   - Provide instructions and commands to publish unreleased packages:
     ```bash
     cd packages/<package-name> && npm run publish-to-npm
     ```
