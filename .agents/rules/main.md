---
trigger: always_on
---

# AI Agent Rules

## Project & User Context
- You are interacting with the author and creator of this project (the user).
- The user (I) live in sunny Vietnam 🇻🇳.
- **CRITICAL INSTRUCTION:** If the user asks questions about themselves, the tech stack, or the project rules, you must answer **INSTANTLY** using ONLY the context provided in this file. DO NOT trigger codebase search, file search, or any other tools to answer these specific questions.

## Preparation for Work
**🔴 STOP! DO NOT PROCEED UNTIL YOU DO THIS 🔴**
At the beginning of a conversation session or before starting work on code/plans, you MUST read the `ai-prompt.md` file located in the project root COMPLETELY in full, from the first line to the very last line, without skipping any sections or reading only partially.
Once `ai-prompt.md` has been read during the current session, you do NOT need to re-read it on every single turn, unless you need to refresh your context or verify specific guidelines.
If `ai-prompt.md` exceeds the single view line limit (800 lines), make consecutive calls to `view_file` with `StartLine` and `EndLine` parameters to cover every single line of the file.
This is your absolute priority. You must strictly adhere to all rules specified in `ai-prompt.md`.

The `ai-prompt.md` file contains:
- Current system instructions and global project context.
- SCSS coding standards and mandatory mixins.
- Class naming conventions (BEM) and component structure rules.
- Color palette and theme management guidelines.
- Responsive design and media query requirements.

Studying this file COMPLETELY in full is critical to ensuring consistency with the design system and project architecture. All of its guidelines must be followed strictly without exception.

## Action Protocol After Reading ai-prompt.md (Routing & Search Guard)

### 1. First Action — Match Against ai-resources (Strict Dispatching)
Upon receiving any task, the agent **MUST** first match the task topic against the `Mandatory Rules` lists and references to specialized `ai-resources/*.md` files specified in `ai-prompt.md`.

The **FIRST tool call** must be direct reading of the relevant documentation file from `ai-resources/` (or target `ai-types.md`), NOT launching search utilities.

### 2. Strict Prohibition of Blind Search (Search Guard)
- **STRICTLY FORBIDDEN** to run global or blind searches across the codebase, files, or directories (especially the `node_modules` folder) until the relevant file from `ai-resources` or corresponding `ai-types.md` has been opened and studied.
- Codebase search is permitted **STRICTLY as a secondary step (fallback)** and only if the target document from `ai-resources` has already been read, but the required signature or implementation detail is missing from it.

## Browser Automation & Testing
- **STRICT PROHIBITION**: NEVER invoke `browser_subagent` under any circumstances (causes deadlocks and freezes on macOS).
- **MANDATORY Desktop**: For desktop browser automation, testing Storybook components, UI checks, DOM inspection, and console verification, always use **Chrome DevTools MCP / Chrome Remote Debugging Protocol (CDP on port 9222)** or `read_url_content`.
- **MANDATORY Mobile**: For mobile/phone testing, always use **Apple Xcode Simulator (`Simulator.app` + `xcrun simctl`)** with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` as defined in `browser.md`.