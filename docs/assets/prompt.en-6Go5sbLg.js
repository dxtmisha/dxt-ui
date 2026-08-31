import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/1. System Prompt`}),`
`,(0,c.jsx)(t.h1,{id:`consolidated-system-prompt-ai-promptmd`,children:`Consolidated System Prompt (ai-prompt.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` file is the central consolidated document of the monorepo, serving as the `,(0,c.jsx)(t.strong,{children:`Single Source of Truth`}),` for all Large Language Models and AI coding assistants (Claude, Gemini, Antigravity, Cursor, Windsurf, Claude Code, GitHub Copilot).`]}),`
`,(0,c.jsxs)(t.p,{children:[`The file is generated automatically by the `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` utility, merging base engineering principles, Vue component standards, and the complete documentation of all monorepo packages and installed dependencies.`]}),`
`,(0,c.jsxs)(t.h2,{id:`key-problems-solved-by-ai-promptmd`,children:[`Key Problems Solved by `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Eliminating "Context Amnesia"`}),` — Developers no longer need to write tedious system prompts, explain BEM rules, or prohibit `,(0,c.jsx)(t.code,{children:`any`}),` types manually. The assistant automatically receives the full monorepo standard at the beginning of each session.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Protection Against Hallucinations (Zero Hallucinations)`}),` — The document embeds an accurate index of all available libraries, complete with their descriptions, capabilities, and links to verified type declarations (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`). The agent only uses genuine methods and interfaces.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instant Monorepo Synchronization`}),` — Whenever public methods or components are updated in any package (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, etc.), running `,(0,c.jsx)(t.code,{children:`npm run prompt`}),` updates the root file so all AI assistants immediately gain access to updated signatures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tool and Environment Agnostic`}),` — A single standardized markdown rules file works identically across any IDE, code editor, and AI model.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`internal-structure-of-ai-promptmd`,children:`Internal Structure of ai-prompt.md`}),`
`,(0,c.jsx)(t.p,{children:`The file is structured into four interconnected logical layers:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`System Role & Global Principles (AI Code Promise)`}),`
Strict code quality and agent discipline rules:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chronological Guard`}),` — Mandatory reading order (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Copy-Paste Ready`}),` — Complete, fully runnable files without missing parts or placeholders.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Uncompromising TS`}),` — Strict typing, prohibition of `,(0,c.jsx)(t.code,{children:`any`}),`, mandatory interfaces for all I/O.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Scope Lock`}),` — Prohibition of unsolicited refactorings, configuration changes, or arbitrary edits.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Vue Component Implementation Rules (Vue.js Style Guide)`}),`
UI component standards:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Strictly use `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`PascalCase component names and kebab-case BEM classes.`}),`
`,(0,c.jsx)(t.li,{children:`Unidirectional data flow (Props Down, Events Up).`}),`
`,(0,c.jsx)(t.li,{children:`Prohibition of modifying base UI styles of existing library components.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Package Registry`}),`
Metadata overview for each discovered package:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Package name and local path.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — Concise technical purpose of the library.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — Explicit conditions when the AI must read full type signatures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — List of core functional modules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — Mandatory domain regulations and study triggers from `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Relative paths to `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`, and the `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` directory.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`High-Priority Directives`}),`
Custom project overrides from `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (if present in the root directory), taking precedence over all default rules.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Final Self-Audit`}),`
A mandatory verification checklist executed before concluding any task.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example-ai-promptmd-excerpt`,children:`Example ai-prompt.md Excerpt`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.

## Global Code Implementation Rules
### Global Development Principles (AI Code Promise)
0. Mandatory Deep Study (CHRONOLOGICAL GUARD):
   - Step 1: Read/create local ai-memory.md strictly in current package root.
   - Step 2: Read root ai-prompt.md and study library descriptions.
   - Step 3: Study linked ai-types.md BEFORE writing code.
1. "Copy-Paste Ready": Generate complete runnable files. No placeholders.
2. Zero Hallucinations: Strictly use package.json dependencies.
3. Uncompromising TS: No any. Interfaces for all I/O.

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Package Description & Module Overview
This package provides a comprehensive collection of Vue 3 UI components and design system utilities built on top of constructor primitives.

Key Capabilities: UI Components, Form Controls, Navigation Elements, Layout Containers, Data Display

## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics:
- 'node_modules/@dxtmisha/d1/ai-resources/background.md': Rules and mixins for configuring background colors, surface opacities, and gradients in SCSS.
- 'node_modules/@dxtmisha/d1/ai-resources/border.md': SCSS styling standards and mixins for borders and dividers.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/d1/ai-types.md'

## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
`})}),`
`,(0,c.jsx)(t.h2,{id:`running-the-generator`,children:`Running the Generator`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Via npm script:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Via npx CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`With MCP (Model Context Protocol) resource generation:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};