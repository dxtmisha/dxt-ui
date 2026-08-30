import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/2. AI Types and Prompts Generation`}),`
`,(0,c.jsx)(t.h1,{id:`ai-types--system-prompt-generation`,children:`AI Types & System Prompt Generation`}),`
`,(0,c.jsxs)(t.p,{children:[`In the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` ecosystem, preparing machine-readable context and training AI coding assistants is completely automated via two complementary CLI utilities: `,(0,c.jsx)(t.code,{children:`dxt-types`}),` (`,(0,c.jsx)(t.code,{children:`design-types.ts`}),`) and `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` (`,(0,c.jsx)(t.code,{children:`design-prompt.ts`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`These tools eliminate the manual burden of copying documentation, creating strictly typed, token-optimized code contracts and consolidated system rulebooks.`}),`
`,(0,c.jsx)(t.h2,{id:`key-advantages-of-automation`,children:`Key Advantages of Automation`}),`
`,(0,c.jsx)(t.h3,{id:`1-zero-hallucinations-via-pure-type-contracts`,children:`1. Zero Hallucinations via Pure Type Contracts`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-types`}),` command extracts TypeScript declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), strips private members and implementation details, and preserves strictly the public API. AI assistants rely exclusively on genuine library exports.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-single-source-of-truth`,children:`2. Single Source of Truth`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` command recursively traverses local packages and installed `,(0,c.jsx)(t.code,{children:`node_modules`}),` dependencies, compiles metadata, and writes `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` in the monorepo root, initializing context automatically at the start of any AI session.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-native-model-context-protocol-mcp-support`,children:`3. Native Model Context Protocol (MCP) Support`}),`
`,(0,c.jsxs)(t.p,{children:[`Both scripts automatically synthesize resource manifests (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` and `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`), allowing modern AI coding assistants to connect via the MCP protocol.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-what-to-do`,children:`Step-by-Step Guide (What to Do)`}),`
`,(0,c.jsxs)(t.h3,{id:`part-1-package-types-and-profile-generation-dxt-types`,children:[`Part 1. Package Types and Profile Generation (`,(0,c.jsx)(t.code,{children:`dxt-types`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`step-11-run-type-generation-in-the-package-directory`,children:`Step 1.1. Run Type Generation in the Package Directory`}),`
`,(0,c.jsx)(t.p,{children:`After adding or modifying functions, components, or interfaces, run inside the package folder:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`The script automatically executes the following actions:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Compiles TypeScript declarations into an isolated temporary folder.`}),`
`,(0,c.jsxs)(t.li,{children:[`Strips internal implementation details, `,(0,c.jsx)(t.code,{children:`private`}),`, and `,(0,c.jsx)(t.code,{children:`protected`}),` members.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Optimizes JSDoc descriptions using AI, preserving critical architectural tags (`,(0,c.jsx)(t.code,{children:`@example`}),`, `,(0,c.jsx)(t.code,{children:`@note`}),`, `,(0,c.jsx)(t.code,{children:`@warning`}),`, `,(0,c.jsx)(t.code,{children:`@remarks`}),`, `,(0,c.jsx)(t.code,{children:`@keywords`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Generates the `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` file containing compressed type contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Synthesizes the library profile `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` with the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` block from `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Writes the resource specification `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`DesignTypes: making AI types...
DesignTypes: AI types saved.
`})}),`
`,(0,c.jsxs)(t.h4,{id:`step-12-fast-offline-save-without-ai-dxt-types-save`,children:[`Step 1.2. Fast Offline Save Without AI (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`If you need to assemble types from an existing cache without invoking AI APIs:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.h4,{id:`cli-options-for-dxt-types`,children:[`CLI Options for `,(0,c.jsx)(t.code,{children:`dxt-types`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types [--prompts DIR] [--dir DIR] [--dist DIR]
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`)`]}),`: Path to local rule prompts (defaults to `,(0,c.jsx)(t.code,{children:`ai-resources`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`)`]}),`: Temporary directory for intermediate declarations (defaults to `,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`--dist`})}),`: Package compiled JS/DTS output folder (defaults to `,(0,c.jsx)(t.code,{children:`dist`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`part-2-global-prompt-consolidation-dxt-prompt`,children:[`Part 2. Global Prompt Consolidation (`,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`)`]}),`
`,(0,c.jsx)(t.h4,{id:`step-21-run-the-system-prompt-generator`,children:`Step 2.1. Run the System Prompt Generator`}),`
`,(0,c.jsxs)(t.p,{children:[`From the monorepo root, run `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`,(0,c.jsx)(t.p,{children:`The script builds the consolidated global context:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Recursively scans configured module directories (`,(0,c.jsx)(t.code,{children:`packages/*`}),`, `,(0,c.jsx)(t.code,{children:`node_modules/@dxtmisha/*`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Collects package descriptions (`,(0,c.jsx)(t.code,{children:`ai-description.md`}),`), guides (`,(0,c.jsx)(t.code,{children:`ai-doc.md`}),`), type links (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), and screenshots (`,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Merges the system role, AI Code Promise principles (`,(0,c.jsx)(t.code,{children:`aiCodeGlobalPrompt`}),`), and Vue Style Guide standards (`,(0,c.jsx)(t.code,{children:`aiCodeVuePrompt`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Embeds high-priority overrides from `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (if present).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Injects the mandatory final self-audit checklist (`,(0,c.jsx)(t.code,{children:`Self-Audit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Saves the resulting `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` in the project root.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Generating AI prompt...
end
`})}),`
`,(0,c.jsx)(t.h4,{id:`step-22-generation-with-consolidated-mcp-registry`,children:`Step 2.2. Generation with Consolidated MCP Registry`}),`
`,(0,c.jsxs)(t.p,{children:[`To assemble the consolidated `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` resource manifest, add the `,(0,c.jsx)(t.code,{children:`--mcp`}),` (`,(0,c.jsx)(t.code,{children:`-m`}),`) option:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`,(0,c.jsx)(t.h2,{id:`tool-architecture-under-the-hood`,children:`Tool Architecture Under the Hood`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Type Generation Engine (`,(0,c.jsx)(t.code,{children:`DesignTypes`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` — Manages temporary compilation of TypeScript declarations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` — Sanitizes AST declarations and removes private entities.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` — Interacts with language models for JSDoc normalization.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` — Caches and parses domain rules from `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),` — Synthesizes technical overviews in `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` — Registers MIME-typed resources in `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Prompt Aggregation Engine (`,(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` — Scans individual packages and gathers metadata.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` — Aggregates the global `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` resource registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`LibraryAiWiki`}),` — Synchronizes MDX documentation structures.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`advantages-over-manual-context-management`,children:`Advantages Over Manual Context Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Synchronization`}),`: AI context always matches active source code accurately.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Up to 80% Token Savings`}),`: Type sanitization and lazy loading prevent context window exhaustion.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tool-Agnostic Operation`}),`: Generated `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` operates uniformly across Antigravity, Cursor, Windsurf, Claude Code, and GitHub Copilot.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};