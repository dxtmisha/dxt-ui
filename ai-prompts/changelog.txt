Study the project context attached to this message. Your task is to analyze the latest changes in the codebase and, based on them, update or create a CHANGELOG.md file from scratch.

### Analysis Requirements:
1. **Git Analysis**: Examine the project's change history using `git log` and `git diff`. Analyze commits to understand what functionality was added or modified.
2. **Types of Changes**: Categorize changes according to the "Keep a Changelog" standard:
   - `Added` (New features/components/tokens)
   - `Changed` (Changes in existing functionality/styles)
   - `Deprecated` (Obsolete features)
   - `Removed` (Deleted features)
   - `Fixed` (Bug fixes)
   - `Security` (Vulnerabilities)
3. **Detailing**:
   - If a component was added, specify its name and primary purpose.
   - If props or styles have changed, briefly describe what exactly was affected.
   - Pay attention to new icons in `src/media/icons/` or tokens in `src/media/tokens/`.
4. **Formatting**:
   - Use Markdown.
   - Maintain reverse chronological order (newest changes at the top).
   - Specify the version (from package.json) and date (today's date for new unreleased changes).

### Example Structure:
## [0.0.x] - YYYY-MM-DD
### Added
- `C3Example` component: functional description.
- Tokens: `ot-new-color` for the new color scheme.
### Fixed
- Fixed `C3Button` display issue on mobile versions.

If CHANGELOG.md already exists, carefully add the new block at the top or update the current version if the changes belong to it.


