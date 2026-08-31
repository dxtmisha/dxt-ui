import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/3. Project Memory`}),`
`,(0,c.jsx)(t.h1,{id:`local-package-memory-ai-memorymd`,children:`Local Package Memory (ai-memory.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file is a long-term memory mechanism for AI agents at the level of an individual monorepo package. It preserves architectural experience, design decisions, discovered constraints, and developer preferences across conversation sessions.`]}),`
`,(0,c.jsx)(t.p,{children:`Unlike static global prompt files, package memory is dynamically curated during collaborative development and holds the highest local priority when making agent decisions.`}),`
`,(0,c.jsx)(t.h2,{id:`why-local-memory-is-essential-in-a-monorepo`,children:`Why Local Memory is Essential in a Monorepo`}),`
`,(0,c.jsxs)(t.p,{children:[`In a complex monorepo with multiple independent packages (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, etc.), different areas possess unique characteristics:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context Isolation`}),` — Rules and styling constraints of `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` should not contaminate or complicate the context of `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Preventing Repeated Mistakes`}),` — When a developer points out a specific package quirk (such as avoiding tables in MDX for `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`), the agent records this constraint and never makes the mistake again.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Independence from Chat History`}),` — When restarting context or beginning a new dialogue, the agent reads `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` as step one and immediately respects all local agreements.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`strict-rules-for-maintaining-ai-memorymd`,children:`Strict Rules for Maintaining ai-memory.md`}),`
`,(0,c.jsx)(t.p,{children:`To maintain the clarity and efficiency of the workspace memory, strict rules are enforced:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Strict Local Placement`}),`
The `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file must reside strictly in the root of the target package (e.g., `,(0,c.jsx)(t.code,{children:`packages/scripts/ai-memory.md`}),`). Placing package-specific directives in the repository-root memory file is forbidden.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Explicit Developer Trigger`}),`
The AI updates `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` `,(0,c.jsx)(t.strong,{children:`only`}),` upon explicit developer command (keywords: "Remember", "Save to memory", "Запомни") or when finalizing critical architectural fixes.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Content Integrity & Deduplication`}),`
When adding a new rule, the agent is `,(0,c.jsx)(t.strong,{children:`only allowed to eliminate exact duplicates or resolve direct conflicts`}),`. The content and wording of existing rules must not be modified, condensed, or rewritten. Deleting previously established rules and constraints is strictly prohibited.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Critical Architectural Rules Only`}),`
Recording routine changelogs, verbose chat conversations, or temporary scratch notes is prohibited. The memory file contains strictly actionable architectural constraints, typing contracts, and formatting guidelines.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Relative Paths`}),`
Only relative paths from the package root are allowed; absolute machine paths are forbidden.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example-ai-memorymd-file`,children:`Example ai-memory.md File`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Workspace Memory (packages/scripts)

This file contains package-specific guidelines for @dxtmisha/scripts.

## Guidelines
- Follow strictly all global development principles from root ai-prompt.md.
- Documentation formatting rules for Storybook:
  - Do NOT use horizontal lines (---).
  - Do NOT use markdown tables (| ... |) — format all structured items as bullet lists (- **Key**: description).
  - Focus on practical developer workflows and actions, not internal engine details.
`})}),`
`,(0,c.jsx)(t.h2,{id:`comparing-ai-memorymd-with-built-in-ide-memories`,children:`Comparing ai-memory.md with Built-in IDE Memories`}),`
`,(0,c.jsx)(t.p,{children:`Modern code editors and AI plugins (Cursor, Windsurf, Claude Code) provide built-in rules and memory mechanisms. However, for professional team workflows and design system maintenance, built-in editor memories suffer from three fundamental drawbacks:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Vendor Lock-in:`}),`
Memories stored inside Cursor do not migrate to Windsurf, Claude Code, GitHub Copilot, or Antigravity IDE. The `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file uses standard Markdown, universally understood by any modern AI coding assistant.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Absence from Version Control (Git):`}),`
Built-in editor memories reside locally on an individual developer's machine and are not committed to Git. Consequently, when a new team member joins, their AI assistant starts with a blank slate and repeats previous mistakes. The `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file is committed to Git, synchronizing engineering context across the entire team.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Lack of Modular Scoping (Package Scopes):`}),`
Built-in editor memory is typically global across the entire repository. In a monorepo, UI kit styling rules inadvertently pollute backend or utility context. The `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file is strictly scoped to its own package directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-use-memory-in-your-workflow`,children:`How to Use Memory in Your Workflow`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Saving an Agreement:`}),`
Developer: `,(0,c.jsx)(t.em,{children:`"Remember: across all storybook docs in this package, never use horizontal lines or markdown tables."`}),`
Agent: Appends the directive to the local `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` file of the current package.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Reading at Session Start:`}),`
Whenever assigned a task in a package, the agent follows the `,(0,c.jsx)(t.strong,{children:`Chronological Guard`}),` protocol, reading `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` before taking any action.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};