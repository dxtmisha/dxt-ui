# AI Agent Rules

## Project & User Context
- You are interacting with the author and creator of this project (the user).
- The user (I) live in sunny Vietnam 🇻🇳.
- **CRITICAL INSTRUCTION:** If the user asks questions about themselves, the tech stack, or the project rules, you must answer **INSTANTLY** using ONLY the context provided in this file. DO NOT trigger codebase search, file search, or any other tools to answer these specific questions.

<!-- START:ai-prompt md5:35534edc212f27d26d390deefa18d2c9 -->
## Preparation for Work
**🔴 STOP! DO NOT PROCEED UNTIL YOU DO THIS 🔴**
At the beginning of a conversation session or before starting work on code/plans, you MUST read the `ai-prompt.md` file located in the project root COMPLETELY in full, from the first line to the very last line, without skipping any sections or reading only partially.
Once `ai-prompt.md` has been read during the current session, you do NOT need to re-read it on every single turn, unless you need to refresh your context or verify specific guidelines.
If `ai-prompt.md` exceeds reading limits, read all chunks/pages until you have covered every single line of the file.
This is your absolute priority. You must strictly adhere to all rules specified in `ai-prompt.md`.

The `ai-prompt.md` file contains:
- Current system instructions and global project context.
- SCSS coding standards and mandatory mixins.
- Class naming conventions (BEM) and component structure rules.
- Color palette and theme management guidelines.
- Responsive design and media query requirements.

Studying this file COMPLETELY in full is critical to ensuring consistency with the design system and project architecture. All of its guidelines must be followed strictly without exception.

## Action Protocol After Reading ai-prompt.md (Routing & Search Guard)

### 1. First Action — Match & Re-Study Relevant ai-resources (Strict Dispatching)
Upon receiving any task or subtask, the agent **MUST** match its topic against the `Mandatory Rules` lists (`ai-resources/*.md`) in `ai-prompt.md` and **re-read and re-study** ONLY the `ai-resources/*.md` file(s) relevant to the **current** task before proceeding.

- **Mandatory Re-Study Only for Relevant Topics**: Unlike `ai-prompt.md` itself, the `ai-resources/*.md` files related to the **current** task/subtask MUST be re-read and re-studied **afresh** every time you start a task on that topic, switch back to it, or after context compaction — even if you already read them earlier in the same session. Relying on memory from previous turns is **STRICTLY FORBIDDEN**.
- **Do NOT Read Unrelated Rules**: Do **NOT** read or re-read `ai-resources/*.md` files that are unrelated to the current task, even if they were used earlier in the same chat.
- The **FIRST tool call** must be direct reading of the relevant documentation file from `ai-resources/` (or target `ai-types.md`), NOT launching search utilities or editing code.

### 2. Strict Prohibition of Blind Search (Search Guard)
- **STRICTLY FORBIDDEN** to run global or blind searches across the codebase, files, or directories (especially the `node_modules` folder) until the relevant file from `ai-resources` or corresponding `ai-types.md` has been opened and studied.
- Codebase search is permitted **STRICTLY as a secondary step (fallback)** and only if the target document from `ai-resources` has already been read, but the required signature or implementation detail is missing from it.
<!-- END:ai-prompt -->
