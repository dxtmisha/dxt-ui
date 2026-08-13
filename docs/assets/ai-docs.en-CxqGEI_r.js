import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# AI Documentation (AI Docs)`}),`
`,(0,c.jsx)(t.h1,{id:`forming-ai-documentation`,children:`Forming AI Documentation`}),`
`,(0,c.jsx)(t.p,{children:`Modern development increasingly relies on artificial intelligence tools (GitHub Copilot, Cursor, custom LLM agents). However, complex architectures, deep file nesting, and redundant comments often confuse AI or overflow its context window.`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` package solves this problem by automatically generating optimized instructions, types, and metadata specifically compressed and formatted for neural networks.`]}),`
`,(0,c.jsx)(t.h2,{id:`type-optimization-designtypes`,children:`Type Optimization (DesignTypes)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` class is an intelligent type "bundler" that prepares the project's types to be fed into the AI's context.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`How it works:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Build Scanning:`}),` The script analyzes the `,(0,c.jsx)(t.code,{children:`dist/`}),` directory, finding all declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), excluding utility files (wiki, basic types).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Merging:`}),` The found files are combined into a single text array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Compression (AI Edit):`}),` The script sends the resulting code to the internal AI (via `,(0,c.jsx)(t.code,{children:`useAi`}),`) with a strict prompt:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Remove all Russian comments (to save tokens and ensure universality).`}),`
`,(0,c.jsx)(t.li,{children:`Condense English comments to a minimum without losing meaning.`}),`
`,(0,c.jsxs)(t.li,{children:[`Remove all `,(0,c.jsx)(t.code,{children:`private`}),` and `,(0,c.jsx)(t.code,{children:`protected`}),` methods, leaving only the public API.`]}),`
`,(0,c.jsx)(t.li,{children:`Remove imports and massive enums that provide no practical value.`}),`
`,(0,c.jsxs)(t.li,{children:[`Preserve all crucial JSDoc tags (`,(0,c.jsx)(t.code,{children:`@example`}),`, `,(0,c.jsx)(t.code,{children:`@remarks`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Result:`}),` An `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` file is generated, containing an extremely compressed yet comprehensive type library. AI assistants can read this in a fraction of a second to understand the package architecture and write flawless code.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`generating-descriptions-ai-description`,children:`Generating Descriptions (AI Description)`}),`
`,(0,c.jsxs)(t.p,{children:[`In addition to types, the script analyzes the code and automatically generates `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`. This is a highly technical project summary that:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Explains the main purpose of the library to another AI assistant.`}),`
`,(0,c.jsx)(t.li,{children:`Lists the core classes, hooks, and utilities.`}),`
`,(0,c.jsxs)(t.li,{children:[`Provides strict triggers — indicating exactly when the AI is required to read `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` before writing code.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`generating-ai-instructions-aidoc`,children:`Generating AI Instructions (AiDoc)`}),`
`,(0,c.jsxs)(t.p,{children:[`The system includes an `,(0,c.jsx)(t.code,{children:`AiDoc`}),` module that recursively traverses component directories and uses AI to generate or update markdown instructions for developers (e.g., `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`AiDocType`}),` class analyzes the source code of specific directories and formulates behavior rules: how to properly extend the constructor, which `,(0,c.jsx)(t.code,{children:`Include`}),` classes to use, and which patterns are forbidden.`]}),`
`,(0,c.jsx)(t.h2,{id:`main-commands`,children:`Main Commands`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-types`})}),` — runs the generation and compression of TypeScript types (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ai-doc`})}),` — runs the generation of AI documentation across project directories.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};