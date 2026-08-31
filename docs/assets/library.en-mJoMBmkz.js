import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/6. Library Integration`}),`
`,(0,c.jsx)(t.h1,{id:`integrating-aidd-into-libraries--packages`,children:`Integrating AIDD into Libraries & Packages`}),`
`,(0,c.jsx)(t.p,{children:`For a component library, UI kit, or utility package to seamlessly interact with AI assistants under the AI-Driven Development (AIDD) paradigm, the package must directly supply structured, machine-readable metadata.`}),`
`,(0,c.jsxs)(t.p,{children:[`When such a library is installed into a project, the AI assistant automatically gains access to curated public type definitions (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), package architectural profiles (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), specialized topic guidelines (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`), visual snapshots (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`), and MCP resources (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`). This enables the AI to utilize the library with zero hallucinations and without requiring developers to manually copy and paste source code into the chat.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-1-installing-the-scripts-package`,children:`Step 1: Installing the Scripts Package`}),`
`,(0,c.jsxs)(t.p,{children:[`Install the `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` package into your library's `,(0,c.jsx)(t.code,{children:`devDependencies`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-2-configuring-designconfigjson`,children:`Step 2: Configuring design.config.json`}),`
`,(0,c.jsxs)(t.p,{children:[`All AI metadata generation workflows are managed through the `,(0,c.jsx)(t.code,{children:`design.config.json`}),` configuration file located at the library root (or inherited via `,(0,c.jsx)(t.code,{children:`"extends"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`The configuration is created exclusively on the library side to define AI provider settings for intelligent signature and JSDoc formatting:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Configuration Properties:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` — Supported AI provider: `,(0,c.jsx)(t.code,{children:`gemini`}),` (including `,(0,c.jsx)(t.code,{children:`gemini-cli`}),`), `,(0,c.jsx)(t.code,{children:`openai`}),`, `,(0,c.jsx)(t.code,{children:`claude`}),` (including `,(0,c.jsx)(t.code,{children:`claude-cli`}),` and `,(0,c.jsx)(t.code,{children:`claude-agent`}),`), and `,(0,c.jsx)(t.code,{children:`zai`}),` (Zhipu AI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` — Model identifier (e.g. `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` — API key for the selected AI provider.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` — Provider-specific generation options (e.g. response temperature `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-3-configuring-packagejson-build-scripts`,children:`Step 3: Configuring package.json Build Scripts`}),`
`,(0,c.jsxs)(t.p,{children:[`Add type and visual context generation commands to the `,(0,c.jsx)(t.code,{children:`scripts`}),` section of the library's `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build": "vite build && vue-tsc --emitDeclarationOnly",
    "types": "npm run build && dxt-types",
    "types:save": "dxt-types-save",
    "screenshot": "dxt-screenshot"
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Critical Rule: Build the bundle before generating types. The `,(0,c.jsx)(t.code,{children:`dxt-types`}),` command must run strictly after building the package bundle (`,(0,c.jsx)(t.code,{children:`npm run build && dxt-types`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Why this is required:`}),` The AI generator analyzes the compiled, production-ready package. The compiled bundle is significantly cleaner than raw source code: it is free of intermediate scaffolding, private internal helpers, and unexported symbols. Analyzing the compiled bundle ensures the cleanest and most accurate public API contract for the AI.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Command Summary:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types`})}),` — Full type compilation, AST sanitization of private members, AI-powered JSDoc normalization, and generation of `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, and `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run types:save`})}),` — Fast regeneration of metadata and MCP resources from the existing type cache without invoking external AI APIs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`npm run screenshot`})}),` — Launches a local dev server in a headless browser, capturing UI component screenshots (`,(0,c.jsx)(t.code,{children:`ai-screenshot/*.webp`}),`), rendered DOM (`,(0,c.jsx)(t.code,{children:`screenshot-code.html`}),`), and computed CSS styles (`,(0,c.jsx)(t.code,{children:`screenshot-styles.css`}),`) for multimodal AI models.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-4-authoring-code-metadata-and-specialized-guides`,children:`Step 4: Authoring Code Metadata and Specialized Guides`}),`
`,(0,c.jsx)(t.p,{children:`High-accuracy AI interactions depend on well-structured source code annotations and documentation files:`}),`
`,(0,c.jsx)(t.h3,{id:`1-jsdoc-annotations-special-tags--automatic-keywords`,children:`1. JSDoc Annotations (Special Tags & Automatic @keywords)`}),`
`,(0,c.jsx)(t.p,{children:`Annotate all public methods, functions, interfaces, and components with clear JSDoc comments:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@example`})}),` — Practical usage examples for methods or component templates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@note`})}),` — Architectural caveats, lifecycle rules, and side effects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@warning`})}),` — Execution environment constraints (e.g., browser-only execution or template lifecycle warnings).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@remarks`})}),` — Expanded technical rationale for complex logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Automatic `,(0,c.jsx)(t.code,{children:`@keywords`}),` Generation:`]}),` Search tags and synonyms (`,(0,c.jsx)(t.code,{children:`@keywords`}),`) are `,(0,c.jsx)(t.strong,{children:`generated automatically by the AI`}),` during `,(0,c.jsx)(t.code,{children:`npm run types`}),` (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`). Developers do not need to write `,(0,c.jsx)(t.code,{children:`@keywords`}),` manually: the language model analyzes the function semantics and automatically enhances signatures in `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` with associative search keys for rapid AI retrieval.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
 * Executes a localized HTTP request with automatic session token binding.
 *
 * Выполняет локализованный HTTP-запрос с автоматической привязкой токена сессии.
 * @example
 * const user = await fetchApi<UserProfile>('/api/user/me')
 *
 * @note Automatically attaches Bearer token from active session storage.
 * @warning Do not invoke directly in component template render cycle.
 * @param url request endpoint URL / URL адрес эндпоинта
 * @param options request options / параметры запроса
 * @returns parsed response data / распарсенные данные ответа
 */
export async function fetchApi<T>(url: string, options?: RequestOptions): Promise<T>;
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-library-architectural-manifesto-ai-docmd`,children:`2. Library Architectural Manifesto (ai-doc.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Create an `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` file in the library root. It documents foundational coding rules and patterns for consumers of the library:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Architectural philosophy (e.g. "all UI components are strictly presentation-only; logic must reside in composables").`}),`
`,(0,c.jsx)(t.li,{children:`Mandatory constraints (e.g. "never use raw hex colors; use design tokens from the package").`}),`
`,(0,c.jsxs)(t.li,{children:[`During documentation generation, `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` is automatically embedded into `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` and consolidated into `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-specialized-topic-guides-ai-resources`,children:`3. Specialized Topic Guides (ai-resources/)`}),`
`,(0,c.jsxs)(t.p,{children:[`Place narrow topic guides into the library's `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` directory (e.g. `,(0,c.jsx)(t.code,{children:`ai-resources/colors.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/skeleton.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/storage.md`}),`):`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Format rules following the "Anti-Pattern vs Recommended Pattern" structure.`}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-types`}),` script automatically analyzes these files and populates the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` block in `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-5-configuring-library-gitignore`,children:`Step 5: Configuring Library .gitignore`}),`
`,(0,c.jsx)(t.p,{children:`Generated type artifacts and temporary compilation directories must be excluded from Git:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-types.md
ai-description.md
ai-types-temp
ai-tmp
ai-mcp-resources.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important Rule:`}),` Do `,(0,c.jsx)(t.strong,{children:`NOT`}),` add `,(0,c.jsx)(t.code,{children:`ai-doc.md`}),` or the `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` folder to `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. These are hand-crafted source files that contain essential architectural knowledge and must be tracked in Git.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-6-running-generation-and-verifying-outputs`,children:`Step 6: Running Generation and Verifying Outputs`}),`
`,(0,c.jsx)(t.p,{children:`Run the type compilation pipeline:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run types
`})}),`
`,(0,c.jsx)(t.p,{children:`Upon completion, the package root will contain:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-types.md`})}),` — Token-optimized TypeScript specifications with `,(0,c.jsx)(t.code,{children:`@keywords`}),` tags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-description.md`})}),` — Package capabilities overview with the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` index.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`})}),` — Model Context Protocol resource registry.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`For UI packages, capture visual context:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-7-publishing-and-distributing-the-package`,children:`Step 7: Publishing and Distributing the Package`}),`
`,(0,c.jsx)(t.p,{children:`To ensure downstream consumers and projects receive out-of-the-box AI integration, verify that AI metadata files are included in the published package bundle.`}),`
`,(0,c.jsxs)(t.p,{children:[`Check the `,(0,c.jsx)(t.code,{children:`files`}),` field in the library's `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "files": [
    "dist",
    "ai-types.md",
    "ai-description.md",
    "ai-resources",
    "ai-screenshot",
    "ai-mcp-resources.json",
    "ai-doc.md"
  ]
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`When client applications install the published package, running `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` automatically discovers `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` and aggregates the library's contracts into the consolidated `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};