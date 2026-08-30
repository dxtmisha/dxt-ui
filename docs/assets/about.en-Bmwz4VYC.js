import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/# About the Approach`}),`
`,(0,c.jsx)(t.h1,{id:`concept-of-ai-driven-development-aidd`,children:`Concept of AI-Driven Development (AIDD)`}),`
`,(0,c.jsxs)(t.p,{children:[`Development in the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` ecosystem is engineered for seamless, deep integration with Artificial Intelligence (LLM) agents. The project features a complete AI infrastructure that extends far beyond generic code completion prompts.`]}),`
`,(0,c.jsx)(t.p,{children:`The core concept relies on automatically provisioning structured, machine-readable data to AI agents before code generation begins. Every package across the monorepo contains machine-readable rules, contracts, and localized memory that aggregate into a unified global context.`}),`
`,(0,c.jsx)(t.h2,{id:`challenges-of-standard-ai-development`,children:`Challenges of Standard AI Development`}),`
`,(0,c.jsx)(t.p,{children:`Employing AI without specialized infrastructure introduces several major risks:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lack of Project Context.`}),` The AI lacks up-to-date knowledge about project architecture, design system primitives, SCSS tokens, and naming conventions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Distortion and Hallucinations.`}),` Without precise type contracts and verified utility definitions, generated code frequently contains nonexistent methods or obsolete signatures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tool and Vendor Lock-in.`}),` Instructions and rules are often tightly bound to specific editor formats (e.g., `,(0,c.jsx)(t.code,{children:`.cursorrules`}),` or Claude Projects). Changing assistants or IDEs requires re-configuring everything from scratch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Inaccessibility of External Libraries (`,(0,c.jsx)(t.code,{children:`node_modules`}),`).`]}),` Coding assistants ignore `,(0,c.jsx)(t.code,{children:`node_modules`}),` by default due to token context limits. As a result, AI cannot see exported functions, components, or dependency types, leading to invented signatures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Manual Context Gathering.`}),` Developers must manually attach dozens of source files to explain component architecture to the agent.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context Loss Across Sessions.`}),` Architectural decisions, bug fixes, and constraints discussed in one task are lost in subsequent conversations.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The objective of AIDD architecture in `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` is to eliminate these risks by scoping agent responsibilities and providing a deterministic, predictable, and platform-agnostic context.`]}),`
`,(0,c.jsx)(t.h2,{id:`core-principles-of-the-approach`,children:`Core Principles of the Approach`}),`
`,(0,c.jsxs)(t.p,{children:[`AIDD is grounded in `,(0,c.jsx)(t.strong,{children:`deterministic context management`}),` and mandatory preliminary study before a single line of code is produced. The central backbone and single source of truth for all AI agents is the consolidated `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` file.`]}),`
`,(0,c.jsx)(t.p,{children:`Key architectural principles:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Single Source of Truth`}),`
Instead of fragmented instructions and manual copy-pasting, the agent receives a centralized machine-readable `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` file automatically assembled from contracts, documentation, and rules across all monorepo packages and `,(0,c.jsx)(t.code,{children:`node_modules`}),` dependencies.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Deep Study (Chronological Guard)`}),`
Agents are strictly forbidden from writing code or presenting blind implementation plans. A mandatory chronological reading sequence is enforced:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Read local package memory (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`);`]}),`
`,(0,c.jsxs)(t.li,{children:[`Study the global prompt (`,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`) and requirements for utilized libraries (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, etc.);`]}),`
`,(0,c.jsxs)(t.li,{children:[`Target-study specialized type contracts (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), internal standards (`,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`), and domain rules (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`) only for relevant packages;`]}),`
`,(0,c.jsx)(t.li,{children:`Read target source files completely before modifying them.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Contract-Based Development & Zero Hallucinations`}),`
AI strictly relies on actual exports from `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` and registered dependencies in `,(0,c.jsx)(t.code,{children:`package.json`}),`. Inventing nonexistent methods or parameters is prohibited. Generated code is complete, strictly typed, and "Copy-Paste Ready" without placeholders.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Strict Scope Lock`}),`
The agent operates strictly and only on what was explicitly requested, never stepping outside component or package boundaries. Unsolicited refactoring, configuration changes, or unrequested build script executions are strictly forbidden.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Decentralized Rules & Experience Retention`}),`
Rules and architectural patterns are documented at the individual package level, while the local workspace memory mechanism (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`) captures crucial developer directions to prevent recurring mistakes across sessions.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Final Self-Audit`}),`
Before completing any task, the agent must perform a line-by-line self-audit of all modified code to verify 100% compliance with all `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` standards.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`prompt-formulation-comparison-without-aidd-vs-with-aidd`,children:`Prompt Formulation Comparison: Without AIDD vs With AIDD`}),`
`,(0,c.jsxs)(t.p,{children:[`Below is a direct comparison of developer task prompts when working with artificial intelligence under the standard approach versus within the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` AIDD ecosystem.`]}),`
`,(0,c.jsx)(t.h3,{id:`request-without-aidd-infrastructure-standard-approach`,children:`Request WITHOUT AIDD Infrastructure (Standard Approach)`}),`
`,(0,c.jsx)(t.p,{children:`Developers must repeatedly craft massive prompts, manually copy dozens of code fragments, and reiterate architectural guidelines:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`"Build a Vue 3 notification banner component D1Notification.
ATTENTION: strictly use <script setup lang="ts">, never use any!
Type all props via TypeScript interfaces, make strict interfaces for emits as well.
Use BEM naming for classes, root class d1-notification.
Here are SCSS mixins from our @dxtmisha/styles package (pastes 200 lines of SCSS).
Here is our color tokens list (pastes JSON). No inline styles!
For logic management use the constructor from @dxtmisha/constructor (pastes 150 lines of code).
Don't forget the skeleton state! Here are the skeleton rules (pastes another file).
And remember: the icon offset must be sm, not md, as you mistakenly did last time!
For showing notifications use useSnackbar from functional, here is its signature..."
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result:`}),` Massive token consumption, context drift, high hallucination risk, constant bugs, and manual refactoring.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`request-with-aidd-infrastructure-dxt-ui-ecosystem`,children:`Request WITH AIDD Infrastructure (dxt-ui Ecosystem)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thanks to automated generation of `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, and local workspace `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`, developers express tasks concisely in a single sentence:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`"Create the D1Notification component in package @dxtmisha/d1"
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The AI agent automatically knows all BEM, SCSS, and Vue Style Guide standards from `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The AI agent automatically retrieves local constraints and preferences from `,(0,c.jsx)(t.code,{children:`packages/d1/ai-memory.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The AI agent opens `,(0,c.jsx)(t.code,{children:`ai-resources/colors-and-palettes.md`}),` and `,(0,c.jsx)(t.code,{children:`ai-resources/skeleton.md`}),` on-demand based on triggers from `,(0,c.jsx)(t.code,{children:`Mandatory Rules`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`The AI agent generates clean, strictly typed, and "Copy-Paste Ready" code.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Effortless Course Correction:`}),` Even if the model makes an occasional mistake, fixing it is vastly simpler and faster: you no longer need to re-explain the whole architecture or paste library code — a concise one-sentence hint or "Remember: ..." command is enough for the agent to adjust immediately and lock the lesson into memory for future tasks.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};