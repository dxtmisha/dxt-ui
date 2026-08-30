import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/5. Documentation Generation`}),`
`,(0,c.jsx)(t.h1,{id:`types--documentation-generation-dxt-types`,children:`Types & Documentation Generation (dxt-types)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-types`}),` command and its core underlying class `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` manage the compilation, sanitization, token compression, and generation of the complete AI artifact suite for any monorepo package.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The engine transforms massive TypeScript declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) into a concise, token-efficient `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` type reference, constructs the architectural `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` profile, and registers Model Context Protocol (MCP) resources.`]}),`
`,(0,c.jsx)(t.h2,{id:`architectural-generation-pipeline`,children:`Architectural Generation Pipeline`}),`
`,(0,c.jsx)(t.p,{children:`The generation pipeline follows structured execution stages:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`1. Declaration Compilation (`,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),`)`]}),`
The script builds TypeScript declarations into an isolated temporary directory (e.g., `,(0,c.jsx)(t.code,{children:`ai-types-temp/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`2. Filtering and Structure Sanitization (`,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),`)`]}),`
The engine removes implementation bodies, private (`,(0,c.jsx)(t.code,{children:`private`}),`) and protected (`,(0,c.jsx)(t.code,{children:`protected`}),`) members, preserving strictly the public API interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`3. AI Optimization (`,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),`)`]}),`
The AI model analyzes type contracts and compiled JavaScript, strips redundant verbosity, standardizes concise English JSDoc descriptions, and outputs `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`4. Domain Resource Processing (`,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),`)`]}),`
The utility parses the package's `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` directory, collecting headers and summaries of specialized rule documents.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`5. Package Profile Creation (`,(0,c.jsx)(t.code,{children:`DesignTypesDescription`}),`)`]}),`
Generates `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` containing the package description, study triggers, and the `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`6. MCP Resource Registration (`,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),`)`]}),`
Generates `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` containing URI declarations for all package types, overviews, screenshots, and prompt guidelines for MCP clients.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`7. Artifact Cleanup`}),`
The temporary compilation directory is automatically wiped upon completion.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`governing-generation-via-jsdoc-tags`,children:`Governing Generation via JSDoc Tags`}),`
`,(0,c.jsxs)(t.p,{children:[`The pipeline automatically filters out boilerplate comments while `,(0,c.jsx)(t.strong,{children:`guaranteeing the preservation and transfer`}),` of specialized architectural tags to `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@example`}),` (Usage Examples)`]}),` — Demonstrates canonical code patterns for calling a method, service, or component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@note`}),` (Architectural Notes)`]}),` — Records side effects, initialization constraints, and lifecycle behavior.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@warning`}),` (Warnings and Constraints)`]}),` — Highlights critical execution boundaries (e.g., "DOM-only" or "SSR safety").`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@remarks`}),` (Extended Comments)`]}),` — Conveys detailed technical rationale for intricate engineering logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`@keywords`}),` (Search Tags)`]}),` — Associative search terms enabling AI agents to pinpoint the required interface via text search without full-file scans.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`structure-of-ai-descriptionmd`,children:`Structure of ai-description.md`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ai-description.md`}),` file serves as the package summary for the global prompt:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — 1-2 concise sentences summarizing the technical role of the library.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — Clear technical conditions under which an AI assistant must inspect `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — Comma-separated list of core capabilities (strictly 1-3 words per item).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — Registry of domain guidelines from `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` with concise triggers.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`execution-modes`,children:`Execution Modes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Standard Generation with AI:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsx)(t.p,{children:`Performs complete compilation and invokes AI models for optimal text compression and description synthesis.`}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Fast Offline Save (`,(0,c.jsx)(t.code,{children:`dxt-types-save`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsx)(t.p,{children:`Fast mode assembling existing cached types and updating MCP definitions without making external AI API network requests.`}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};