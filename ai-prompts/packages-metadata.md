---
name: packages-metadata
description: Bring public monorepo package metadata up to date across packages/* — analyze changes, bump SemVer versions, refresh description and keywords, run the types script when present, update CHANGELOG.md, and synchronize dependent package versions across dependencies, optionalDependencies, and peerDependencies.
---

# Task: Updating Public Package Metadata Across the Monorepo

Your task is to audit all public packages in `packages/` and bring their package metadata, generated types, changelogs, and dependent package version constraints up to date.

---

## Execution Steps

### 1. Discover Target Public Packages (`packages/*/package.json`)
Scan every directory in `packages/` and inspect its `package.json`.

Include **only** public packages that satisfy **all** of the following criteria:
- **Public publish script**: `scripts["publish-to-npm"]` is present and configured for public publishing (e.g., `"publish-to-npm": "npm publish --access public"`).
- **Not a demo package**: Neither the package directory name nor `package.json` `name` contains `demo` (exclude `demo`, `demo-mcp`, `cms-demo`, or any other demo package).
- **Not private or excluded**: `"private"` is not `true` and `"ui-no-publish"` is not `true`.

Skip all other packages (demo packages, private/internal packages, and packages without `"publish-to-npm"`) and list them as skipped in the final report.

---

### 2. Analyze Changes & Update Package `version` (`package.json`)
For each target public package, inspect all changes inside `packages/<pkg>/` since its last released/documented version:
- Check Git history (`git log`, `git diff`) since the last version bump commit or the latest entry in `packages/<pkg>/CHANGELOG.md` (and, when registry access is available, compare with `npm view <package-name> version`).
- Also include any uncommitted working-tree changes (`git status`, `git diff`) affecting the package.
- Evaluate actual functional, API, type, style, asset, config, or dependency changes:
  - **No changes**: If no meaningful changes have occurred since the current version was released and documented, leave `"version"` unchanged.
  - **Changes detected**: Update `"version"` in `packages/<pkg>/package.json` according to **Semantic Versioning (SemVer)**:
    - **MAJOR (`X.0.0`)**: Breaking changes to public API, removed/renamed exports, or incompatible behavior/type contract changes.
    - **MINOR (`x.Y.0`)**: New backwards-compatible features, classes, functions, composables, components, props, exports, CLI commands, or capabilities.
    - **PATCH (`x.y.Z`)**: Backwards-compatible bug fixes, security fixes, type refinements, internal refactoring, performance improvements, test/documentation updates, or dependency updates.
  - **Avoid double-bumping**: If `"version"` in `package.json` is already higher than the latest published npm version (or newer than the top entry in `CHANGELOG.md`), verify that the current version bump level matches the accumulated changes (e.g., promote a patch bump to minor if new features were introduced) instead of incrementing it a second time.

---

### 3. Review & Update `description` and `keywords` (`package.json`, If Needed)
For each target public package, review `"description"` and `"keywords"` in `packages/<pkg>/package.json` against the package's current implementation, exports, `ai-types.md`, `ai-description.md`, `README.md`, and recent changes:
- **`description`**: Update only if it is missing, contains a placeholder (such as `"[description]"`), is outdated, or no longer accurately summarizes the package's capabilities. Keep it concise, accurate, and in English.
- **`keywords`**: Update only if relevant keywords for newly added features/capabilities are missing or if obsolete/duplicate entries should be cleaned up. Keep keywords lowercase, deduplicated, concise, and relevant for npm discoverability.
- If both `"description"` and `"keywords"` are already accurate and current, leave them unchanged.

---

### 4. Run `npm run types` (If Defined)
Check whether `packages/<pkg>/package.json` defines a `"types"` script (for example, `"types": "npm run library && npm run build && dxt-types"`).
- **If `"scripts.types"` exists**:
  - Run it for the package whenever the package has changes or its generated library/type files (`src/library.ts`, `dist/`, `ai-types.md`) may be outdated:
    ```bash
    npm --prefix packages/<pkg> run types
    ```
  - Executing `"types"` is explicitly required by this workflow when `"scripts.types"` is present.
  - If the command fails, stop and report the failing package and error output — do not silently ignore build/type generation errors.
- **If `"scripts.types"` does not exist**: Skip this step cleanly for that package.

---

### 5. Update `CHANGELOG.md`
Follow [`ai-prompts/changelog.md`](./changelog.md) (Keep a Changelog format: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`, reverse chronological order):
- For every public package with changes (or where the current `"version"` in `package.json` is missing from `packages/<pkg>/CHANGELOG.md`):
  - Add a new version section at the top of `packages/<pkg>/CHANGELOG.md` using `## [<version>] - YYYY-MM-DD` (matching `package.json`'s `"version"` and today's date), or update the existing unreleased block if a section for that exact version already exists.
  - If `packages/<pkg>/CHANGELOG.md` does not exist yet, create it following [`ai-prompts/changelog.md`](./changelog.md).
  - Do not rewrite or alter historical already-released entries.

---

### 6. Synchronize Dependent Package Versions Across All Packages (After Checking All Packages)
Execute this step **only after** Steps 1–5 have been completed for all public packages and their versions are finalized.

1. **Collect Current Package Versions**:
   - Build a complete map of `{ packageName: version }` from every `packages/*/package.json` (and reference root `package.json` when verifying shared external dependency versions).

2. **Audit All Dependency Sections**:
   Inspect and synchronize version constraints across **all** workspace packages (`packages/*/package.json`, as well as root `package.json` where `>=` ranges are used) in:
   - `dependencies`
   - `optionalDependencies`
   - `peerDependencies`

3. **Update Version Constraints**:
   - **Internal monorepo dependencies (`@dxtmisha/*`)**:
     - Update every `@dxtmisha/*` entry in `dependencies`, `optionalDependencies`, and `peerDependencies` whose referenced package has a newer version, strictly using the `">=<version>"` format (e.g., `"@dxtmisha/media": ">=1.1.2"`, `"@dxtmisha/functional-basic": ">=2.2.0"`, `"@dxtmisha/wiki": ">=1.2.0"`).
     - For public packages, always use `">=<version>"` — never `workspace:*` or `"*"`. Preserve intentional `workspace:*` entries only in private/non-public packages if already used there.
   - **External & Peer/Optional Dependency Alignment**:
     - For packages declaring external dependencies across `dependencies`, `optionalDependencies`, and `peerDependencies` (such as `@dxtmisha/configuration` or `@dxtmisha/scripts`), verify that version ranges are up to date and consistent with the project's current dependency versions, preserving existing constraint prefixes (`>=` / `^`) and avoiding unintended changes to `typescript` constraints.

4. **Propagate Cascading Dependency Updates**:
   - If a public package had no source changes in Step 2, but received an updated internal `@dxtmisha/*` dependency version in this step:
     - Bump its **PATCH** version in `package.json` (if its current version is already published/documented),
     - Document the dependency update in its `CHANGELOG.md` under `### Changed` → `- **Dependencies**:`, and
     - Propagate the updated version to any downstream packages that depend on it until all internal dependency constraints are fully consistent.

5. **Preserve Valid Formatting**:
   - Keep every modified `package.json` valid JSON with consistent indentation and key ordering.

---

### 7. Final Report
Provide a concise, structured summary table covering all audited public packages (plus a brief list of skipped packages):
- `Package` (clickable link to `packages/<pkg>/package.json`)
- `Version` (`old → new` or `unchanged`)
- `Metadata` (`description` / `keywords` updated or `unchanged`)
- `Types Script` (`ran` / `skipped (no script)` / `unchanged`)
- `CHANGELOG.md` (`updated` / `created` / `unchanged`)
- `Dependencies Synced` (updated entries in `dependencies`, `optionalDependencies`, `peerDependencies`, or `none`)
