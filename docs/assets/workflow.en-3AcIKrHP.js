import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/4. Full Workflow`}),`
`,(0,c.jsx)(t.h1,{id:`full-development-workflow-aidd-workflow`,children:`Full Development Workflow (AIDD Workflow)`}),`
`,(0,c.jsxs)(t.p,{children:[`To keep the AI-Driven Development (AIDD) ecosystem synchronized and effective when implementing or maintaining packages across the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` library, developers follow a standardized engineering workflow.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-1-writing-source-code`,children:`Step 1: Writing Source Code`}),`
`,(0,c.jsx)(t.p,{children:`Standard development of logic, components, and utilities within the monorepo:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Build Vue 3 components strictly using `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Extract business logic and state management into external Composables (`,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Apply SCSS tokens and mixins from `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` without inline styles or raw media queries.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-2-code-documentation-tsdoc--jsdoc`,children:`Step 2: Code Documentation (TSDoc / JSDoc)`}),`
`,(0,c.jsx)(t.p,{children:`Prepare the public API for machine analysis and automated AI metadata generation:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JSDoc Descriptions`}),` — Document exported classes, methods, functions, properties, and interfaces according to bilingual standards (English / Russian).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Special Tags`}),` — Actively apply tags that the generator guarantees to preserve in `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@example`}),` — Canonical usage examples for methods or components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@note`}),` — Architectural notes, initialization constraints, and side effects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` — Runtime environment limitations (e.g., SSR safety or DOM-only operations).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` — Associative search keywords for rapid AI text retrieval.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding and error center routing.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии и маршрутизацией через центр ошибок.
 * @example
 * const data = await apiRequest.get('/user/profile')
 *
 * @note Automatically attaches Bearer authorization headers when session token is active.
 * @warning Do not call directly in component templates; use executeUseLocal service wrappers.
 * @keywords api request http fetch get post session auth
 * @param url request endpoint url / url адрес эндпоинта запроса
 * @param options request configuration / конфигурация запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T> {
  // ...
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-3-generating-package-types--metadata`,children:`Step 3: Generating Package Types & Metadata`}),`
`,(0,c.jsx)(t.p,{children:`Once code authoring is complete, run the type and metadata generator inside the package directory:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`The command automatically:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Compiles `,(0,c.jsx)(t.code,{children:`.d.ts`}),` declaration files into a temporary directory.`]}),`
`,(0,c.jsx)(t.li,{children:`Filters out private and protected members.`}),`
`,(0,c.jsxs)(t.li,{children:[`Generates a compact `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` file with optimized signatures and `,(0,c.jsx)(t.code,{children:`@keywords`}),` tags.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Generates `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` with package purpose, study triggers, and the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` block from `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Updates MCP resource definitions in `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-4-capturing-visual-context-optional-for-ui`,children:`Step 4: Capturing Visual Context (Optional for UI)`}),`
`,(0,c.jsxs)(t.p,{children:[`For UI component libraries (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`) or visual components, capture visual interface state:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The utility automatically boots the local dev server, connects via headless browser, captures high-resolution screenshots (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), and exports the rendered DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`) and computed CSS (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`step-5-aggregating-the-global-prompt`,children:`Step 5: Aggregating the Global Prompt`}),`
`,(0,c.jsx)(t.p,{children:`To synchronize all changes into the root system prompt, run in the monorepo root:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` script aggregates metadata across all updated packages and dependencies, rewriting `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` and `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-6-task-delegation--experience-retention`,children:`Step 6: Task Delegation & Experience Retention`}),`
`,(0,c.jsx)(t.p,{children:`When interacting with AI assistants:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The AI reads the updated `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` and `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, producing precise, hallucination-free code.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If specific engineering constraints or lessons arise during the task, use the `,(0,c.jsx)(t.strong,{children:`"Remember"`}),` trigger so the agent updates `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` for future sessions.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};