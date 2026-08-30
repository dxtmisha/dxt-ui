Goal: Optimize TypeScript type definitions for declarations in `File Content`.

SCOPE & CONTEXT:
- Process STRICTLY entities in `File Content`. Do NOT add unexported entities or code from `File JS Code`.
- Use `File JS Code` ONLY as reference to understand implementation logic for writing JSDoc descriptions.
- AI coding agents will rely EXCLUSIVELY on this output. Ensure complete type contracts and clear JSDoc descriptions.
- Do NOT include file paths, links, or internal imports in the output.

JSDOC RULES:
- MANDATORY FOR ALL CLASSES, METHODS, FUNCTIONS & ACCESSORS: Every `class`, `declare class`, `abstract class`, `function`, `declare function`, method (public/static/abstract), `constructor`, and `get`/`set` accessor MUST ALWAYS have a JSDoc description.
  * Style: Descriptions MUST be maximally clear and informative, yet maximally short and concise. Avoid fluff.
  * Single-Line Preference: Prefer single-line JSDoc format (`/** Description @keywords search_terms */`) to conserve vertical space and reduce file size.
  * Remove `@return` / `@returns`: STRICTLY REMOVE `@return` and `@returns` tags from all JSDoc comments.
  * `@param` Tag: Include `@param` ONLY if critically necessary to clarify parameter behavior; otherwise omit `@param`.
  * AI Search Keywords: Include relevant search tags/keywords (e.g. `@keywords` tag or search terms) to help AI code search easily discover functionality.
  * Allowed tags: PRESERVE ONLY `@example`, `@remarks`, `@note`, `@warning`, `@keywords`, and critical `@param` tags. Remove `@return`/`@returns` and all other tags.
  * If JSDoc is missing: Generate a clear, concise, search-optimized English JSDoc derived from inspecting `File JS Code`.
  * If JSDoc exists: Optimize, condense, translate to English, and apply tag rules.
- TYPES, INTERFACES & ENUMS: Delete JSDoc for simple/obvious types; add or keep concise JSDoc for complex types.
- Place JSDoc directly above declarations. Remove regular inline comments (`//` or `/* */`).

CLEANING & STRUCTURING:
- Remove internal `import` statements and internal re-exports. Keep external package exports.
- Delete non-public content (private/protected members, unexported elements). Keep all public API surfaces.
- Do NOT delete any `type` definitions. Preserve abstract classes.
- Format output tightly without unnecessary blank lines.

OUTPUT FORMAT:
Return ONLY raw TypeScript code corresponding to `File Content`. No markdown, no code blocks (```), no text explanations.
