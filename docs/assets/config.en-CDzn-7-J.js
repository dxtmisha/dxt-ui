import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/10. Configuration (design.config.json)`}),`
`,(0,c.jsx)(t.h1,{id:`designconfigjson-configuration-for-ai--type-generation`,children:`design.config.json Configuration for AI & Type Generation`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`design.config.json`}),` file serves as the centralized configuration hub for managing AI documentation generation, TypeScript declaration (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) compilation, source file scanning, and AI model parameters.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The configuration file resides at the monorepo root or at individual package roots. Packages can override base settings and inherit them through the `,(0,c.jsx)(t.code,{children:`"extends"`}),` inheritance mechanism.`]}),`
`,(0,c.jsx)(t.h2,{id:`minimal-configuration-example-for-ai`,children:`Minimal Configuration Example for AI`}),`
`,(0,c.jsxs)(t.p,{children:[`To enable the `,(0,c.jsx)(t.code,{children:`dxt-types`}),` generator and the `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` system prompt builder, specifying provider credentials is sufficient:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`complete-configuration-example-for-dts--ai-types`,children:`Complete Configuration Example for .d.ts & AI Types`}),`
`,(0,c.jsx)(t.p,{children:`Below is a complete configuration example covering all parameters that govern TypeScript declaration compilation and AI context building:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "extends": "../../design.config.json",
  "packagePrefix": "@dxtmisha",
  "typesPaths": [
    "src"
  ],
  "typesMatch": [
    "Button",
    "Input"
  ],
  "typesExclude": [
    "\\\\.wiki\\\\.(d\\\\.)?ts$",
    "wiki/",
    "library/"
  ],
  "typesWithoutVue": false,
  "typesDir": "ai-types-temp",
  "distDir": "dist",
  "aiResourcesDir": "ai-resources",
  "promptScanDepth": 6,
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  },
  "aiTypesConcurrency": 8
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`parameter-reference-for-ai--type-generation`,children:`Parameter Reference for AI & Type Generation`}),`
`,(0,c.jsx)(t.h3,{id:`1-ai-provider-connection-settings`,children:`1. AI Provider Connection Settings`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, default: `,(0,c.jsx)(t.code,{children:`'gemini'`}),`) — AI provider backend for JSDoc normalization and summary generation. Supported options:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini`}),` — Official Google Gemini API (via `,(0,c.jsx)(t.code,{children:`@google/genai`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini-cli`}),` — Local Gemini CLI invocations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`openai`}),` — OpenAI models (GPT-4o, GPT-4o-mini, and compatible endpoints).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude`}),` — Anthropic Claude API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude-cli`}),` / `,(0,c.jsx)(t.code,{children:`claude-agent`}),` — Anthropic CLI and agent runners.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zai`}),` — Zhipu AI (GLM model family).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — Model identifier string (e.g., `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — API authentication key for the selected AI provider.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` (`,(0,c.jsx)(t.code,{children:`object`}),`) — Custom generation options (e.g., response temperature `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`, token limits, custom headers).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiTypesConcurrency`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, default: `,(0,c.jsx)(t.code,{children:`8`}),`) — Maximum number of TypeScript declaration files processed by the AI model concurrently during `,(0,c.jsx)(t.code,{children:`dxt-types`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-typescript--dts-compilation-parameters`,children:`2. TypeScript & .d.ts Compilation Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesPaths`})}),` (`,(0,c.jsx)(t.code,{children:`string[]`}),`, default: `,(0,c.jsx)(t.code,{children:`['src']`}),`) — Array of source directories scanned for TypeScript declarations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesMatch`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — Substrings or regex patterns to filter and selectively include specific components or files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesExclude`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — Array of regex patterns or directory paths to exclude auxiliary files, test helpers, and internal wikis from type scanning (e.g., `,(0,c.jsx)(t.code,{children:`["\\\\.wiki\\\\.(d\\\\.)?ts$", "wiki/", "library/"]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesWithoutVue`})}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`, default: `,(0,c.jsx)(t.code,{children:`false`}),`) — Compilation mode toggle. Set to `,(0,c.jsx)(t.code,{children:`true`}),` for pure TypeScript/JavaScript packages without `,(0,c.jsx)(t.code,{children:`.vue`}),` components to bypass `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` in favor of standard `,(0,c.jsx)(t.code,{children:`tsc`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, default: `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`) — Temporary directory name where `,(0,c.jsx)(t.code,{children:`dxt-types`}),` extracts raw `,(0,c.jsx)(t.code,{children:`.d.ts`}),` files prior to AST sanitization and private member stripping.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`distDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, default: `,(0,c.jsx)(t.code,{children:`'dist'`}),`) — Path to the compiled bundle directory, used by the generator to verify export signatures.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-system-prompt-integration`,children:`3. System Prompt Integration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiResourcesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, default: `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`) — Directory containing specialized topic guidelines. `,(0,c.jsx)(t.code,{children:`dxt-types`}),` scans this folder and populates the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` block in `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`promptScanDepth`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, default: `,(0,c.jsx)(t.code,{children:`6`}),`) — Maximum directory recursion depth when discovering packages and compiling `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`packagePrefix`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — Monorepo scope prefix (e.g., `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` or `,(0,c.jsx)(t.code,{children:`@my-org`}),`) for resolving package imports in prompts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`inheritance--secure-local-keys-local`,children:`Inheritance & Secure Local Keys (.local)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Inheritance (`,(0,c.jsx)(t.code,{children:`extends`}),`):`]}),`
In monorepo setups, the base configuration resides at the repository root, while individual packages in `,(0,c.jsx)(t.code,{children:`packages/*`}),` inherit from it via `,(0,c.jsx)(t.code,{children:`"extends": "../../design.config.json"`}),`, overriding only package-specific settings (`,(0,c.jsx)(t.code,{children:`typesWithoutVue`}),`, `,(0,c.jsx)(t.code,{children:`typesPaths`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Local Keys (`,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`):`]}),`
To prevent committing personal API keys (`,(0,c.jsx)(t.code,{children:`aiKey`}),`) to Git, create a `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),` file adjacent to the main config. The scripts automatically merge local properties over base values. Ensure `,(0,c.jsx)(t.code,{children:`*.local.json`}),` is listed in `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};