import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/9. AI Interaction`}),`
`,(0,c.jsx)(t.h1,{id:`ai-interaction--priority-hierarchy`,children:`AI Interaction & Priority Hierarchy`}),`
`,(0,c.jsxs)(t.p,{children:[`The AIDD architecture in `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` is designed for maximum clarity, predictability, and token efficiency when interacting with AI coding assistants.`]}),`
`,(0,c.jsx)(t.p,{children:`Instead of dumping the entire monorepo codebase into the model's context window, it employs a multi-layered lazy loading strategy coupled with a strict priority hierarchy.`}),`
`,(0,c.jsx)(t.h2,{id:`multi-layered-context-loading-strategy`,children:`Multi-Layered Context Loading Strategy`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Layer 1: Overview Context (Session Start)`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Only `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` is loaded initially.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The AI acquires overarching engineering rules (AI Code Promise, Vue Style Guide) and high-level profiles of all libraries (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Purpose:`}),` The AI understands the full ecosystem capabilities without saturating context memory with minute implementation details.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Layer 2: In-Depth Context On-Demand`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — Detailed TypeScript specifications (loaded strictly when calling package methods or verifying signatures).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-developer.md`})}),` — Internal package standards (loaded strictly when editing the package's internal code).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-resources/*.md`})}),` — Domain regulations (loaded when triggered by the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` block).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-screenshot/`})}),` — Visual screenshots and DOM/CSS (loaded when styling and building UI interfaces).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Layer 3: Local Workspace Memory`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-memory.md`})}),` — Dynamic constraints, rules, and learnings captured specifically within the current package.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`priority-chain`,children:`Priority Chain`}),`
`,(0,c.jsx)(t.p,{children:`When resolving conflicts between different documentation files, the AI follows a strict precedence order:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` (Highest Local Priority)`]}),` — Local package experience and explicit developer instructions supersede all other rules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (Highest Global Priority)`]}),` — Project-level directives in the monorepo root overriding base system conventions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. `,(0,c.jsx)(t.code,{children:`ai-developer.md`})]}),` — Approved package-level engineering standards and checklists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. `,(0,c.jsx)(t.code,{children:`ai-resources/*.md`})]}),` — Domain-specific technical standards (e.g., colors, borders, elevation, API reference).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),` — Base global principles (AI Code Promise, Vue Guide) and package overview cards.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),` — TypeScript signatures and code contracts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`practical-interaction-scenarios`,children:`Practical Interaction Scenarios`}),`
`,(0,c.jsx)(t.h3,{id:`scenario-1-developing-a-component-in-dxtmishad1`,children:`Scenario 1: Developing a Component in @dxtmisha/d1`}),`
`,(0,c.jsxs)(t.p,{children:[`Developer task: `,(0,c.jsx)(t.em,{children:`"Create the D1Badge component in package @dxtmisha/d1."`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Start:`}),` The AI reads `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` and locates the `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),` package entry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Studying Standards:`}),` The agent opens `,(0,c.jsx)(t.code,{children:`packages/d1/ai-developer.md`}),` to review file structure and `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),` integration patterns.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Checking Memory:`}),` The agent opens `,(0,c.jsx)(t.code,{children:`packages/d1/ai-memory.md`}),` to verify local conventions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Checking Mandatory Rules:`}),` The agent checks `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` in `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, reading `,(0,c.jsx)(t.code,{children:`ai-resources/colors-and-palettes.md`}),` and `,(0,c.jsx)(t.code,{children:`ai-resources/rounded.md`}),` for proper token resolution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Implementation:`}),` The component is built in strict accordance with the guidelines from all four documents.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`scenario-2-consuming-a-library-in-an-application`,children:`Scenario 2: Consuming a Library in an Application`}),`
`,(0,c.jsxs)(t.p,{children:[`Developer task: `,(0,c.jsx)(t.em,{children:`"Implement a cached HTTP client with error center handling."`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Start:`}),` The AI reads the project's root `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Detecting Dependency:`}),` In the library summary, it finds `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` (`,(0,c.jsx)(t.em,{children:`"HTTP client, state storage, i18n localization, ErrorCenter"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Trigger Evaluation:`}),` The trigger states: `,(0,c.jsx)(t.em,{children:`"Study when working with HTTP requests, API caching, or ErrorCenter"`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Loading Types:`}),` The AI opens `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/functional-basic/ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Accurate Code Generation:`}),` The AI identifies the `,(0,c.jsx)(t.code,{children:`ApiFetch`}),` class, `,(0,c.jsx)(t.code,{children:`get()`}),` / `,(0,c.jsx)(t.code,{children:`post()`}),` methods, and `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`, producing 100% accurate calls without hallucinations.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`scenario-3-enforcing-a-project-directive-via-ai-instructionmd`,children:`Scenario 3: Enforcing a Project Directive via ai-instruction.md`}),`
`,(0,c.jsx)(t.p,{children:`A lead engineer introduces an urgent rule across all packages:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`An `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` file is created in the repository root.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The command `,(0,c.jsx)(t.code,{children:`npm run prompt`}),` is executed.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The script embeds the directive into the `,(0,c.jsx)(t.code,{children:`High-Priority Directives`}),` section of `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`From that moment, any AI assistant reading `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` immediately applies the rule across the entire monorepo.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`interaction-matrix`,children:`Interaction Matrix`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Adding a new method or export`}),` ➔ Run `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ Updates `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` and `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` ➔ Run `,(0,c.jsx)(t.code,{children:`npm run prompt`}),` ➔ Updates global `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Adding a new domain rule`}),` ➔ Create file in `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` ➔ Run `,(0,c.jsx)(t.code,{children:`npm run types`}),` ➔ Run `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Correcting AI behavior in chat`}),` ➔ Use trigger "Remember" ➔ AI appends rule to `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` without requiring project rebuilds.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};