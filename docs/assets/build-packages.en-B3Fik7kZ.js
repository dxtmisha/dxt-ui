import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/5. Build Packages`}),`
`,(0,c.jsx)(t.h1,{id:`monorepo-package-building`,children:`Monorepo Package Building`}),`
`,(0,c.jsxs)(t.p,{children:[`In the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` design system, the compilation process for all interdependent packages across the monorepo is fully automated using the `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` CLI utility. Developers no longer need to manually manage module compilation order or spend time recompiling unchanged packages.`]}),`
`,(0,c.jsx)(t.p,{children:`The tool manages the entire build pipeline, automatically resolves the dependency build graph via priority settings, and applies intelligent incremental caching.`}),`
`,(0,c.jsx)(t.h2,{id:`key-advantages`,children:`Key Advantages`}),`
`,(0,c.jsx)(t.h3,{id:`1-intelligent-caching-and-instant-incremental-builds`,children:`1. Intelligent Caching and Instant Incremental Builds`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` tracks the state of built packages using a local cache file `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. If a package source code and version remain unchanged since the previous build, the compilation step is skipped instantly.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-guaranteed-build-order-via-priorities-ui-priority`,children:[`2. Guaranteed Build Order via Priorities (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each package in `,(0,c.jsx)(t.code,{children:`package.json`}),` can declare its build priority weight via `,(0,c.jsx)(t.code,{children:`ui-priority`}),`. The orchestrator sorts packages in ascending numerical order, ensuring foundational libraries (`,(0,c.jsx)(t.code,{children:`functional`}),`, `,(0,c.jsx)(t.code,{children:`styles`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`) are compiled before dependent UI components (`,(0,c.jsx)(t.code,{children:`d1`}),`) and documentation.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-automatic-build-script-discovery`,children:`3. Automatic Build Script Discovery`}),`
`,(0,c.jsxs)(t.p,{children:[`The orchestrator determines the optimal compilation command for each package using a structured fallback hierarchy: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-what-to-do`,children:`Step-by-Step Guide (What to Do)`}),`
`,(0,c.jsx)(t.h3,{id:`step-1-configure-the-packagejson-file`,children:`Step 1. Configure the package.json File`}),`
`,(0,c.jsxs)(t.p,{children:[`Ensure your package's `,(0,c.jsx)(t.code,{children:`package.json`}),` includes build scripts and optional `,(0,c.jsx)(t.code,{children:`ui-priority`}),` configuration:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.0",
  "ui-priority": 400,
  "scripts": {
    "build": "vite build",
    "prepublishOnly": "npm run build"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-2-run-the-build-command`,children:`Step 2. Run the Build Command`}),`
`,(0,c.jsxs)(t.p,{children:[`Execute `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` in your terminal:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The builder scans `,(0,c.jsx)(t.code,{children:`packages/`}),`, orders all discovered packages by priority, and builds only those whose versions have changed:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages changed: 2
`})}),`
`,(0,c.jsx)(t.p,{children:`If no packages require an update, the builder exits cleanly in a fraction of a second:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages - no changes
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-3-inspect-the-build-log-cache`,children:`Step 3. Inspect the Build Log Cache`}),`
`,(0,c.jsxs)(t.p,{children:[`After compilation, the built package versions are automatically persisted in `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "@dxtmisha/functional-basic": "1.0.0",
  "@dxtmisha/functional": "1.0.0",
  "@dxtmisha/styles": "1.0.0",
  "@dxtmisha/constructor": "1.0.0",
  "@dxtmisha/d1": "1.0.0"
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-4-rebuild-on-code-updates`,children:`Step 4. Rebuild on Code Updates`}),`
`,(0,c.jsxs)(t.p,{children:[`When you modify a package and bump its version in `,(0,c.jsx)(t.code,{children:`package.json`}),`, re-running `,(0,c.jsx)(t.code,{children:`npx dxt-build-packages`}),` automatically detects the version mismatch against the cached log and rebuilds only that modified package.`]}),`
`,(0,c.jsxs)(t.h2,{id:`managing-build-priorities-ui-priority`,children:[`Managing Build Priorities (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ui-priority`}),` numerical property in `,(0,c.jsx)(t.code,{children:`package.json`}),` defines the compilation sequence. Lower numbers build earlier:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100 – 200 (Core Utilities and Styles)`}),`: Foundational packages without internal dependencies (`,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`300 – 400 (Abstractions and Constructors)`}),`: Component engine core and protocols (`,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/mcp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`500 (Standard Default)`}),`: UI component libraries and design systems (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/figma`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`600 – 900 (Integrations and Documentation)`}),`: High-level consumers and tooling (`,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/storybook`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`configuration-flags-in-packagejson`,children:`Configuration Flags in package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-priority`}),` (number)`]}),`: Priority weight in the build queue (defaults to `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-test`}),` (boolean)`]}),`: When set to `,(0,c.jsx)(t.code,{children:`true`}),`, the package is considered a test package and is excluded from automated builds.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Build Script Priority`}),`: The orchestrator inspects `,(0,c.jsx)(t.code,{children:`scripts`}),` and executes the first available command: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, then `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, then `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`advantages-over-manual-builds`,children:`Advantages Over Manual Builds`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Up to 90% Time Savings`}),`: Only packages with version differences are compiled.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Eliminates Broken Dependencies`}),`: Guarantees lower-level libraries are compiled before dependent components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Full Transparency`}),`: Transparent tracking of all build states in a local log file.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};