import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignTypes - AI Type Generator`}),`
`,(0,c.jsx)(n.h1,{id:`designtypes-class`,children:`DesignTypes Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` class is a specialized utility designed to bridge the gap between complex codebase type definitions and AI coding assistants. It automates the extraction, sanitation, and compression of TypeScript declaration files (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`), using AI to generate a hyper-minimalized version of the project's type system that provides maximum context with minimum token usage.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Discovery`}),` — Recursively scans distribution directories to find relevant type declaration files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Filtering`}),` — Automatically excludes internal constructor props and non-essential logic types while preserving public APIs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI-Driven Compression`}),` — Uses LLM prompts to strip unnecessary metadata (imports, Russian comments, empty lines) and consolidate definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Output`}),` — Combines multiple fragmented declaration files into a single, cohesive type library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Context Optimization`}),` — Prioritizes interfaces, enums, and type aliases that are most critical for AI understanding.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Initialize the generator by specifying the source directory where the compiled declaration files are located.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — The path to the input directory (default is `,(0,c.jsx)(n.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Starts the full generation pipeline: discovery, combination, AI processing, and storage.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-type-generation-pipeline`,children:`The Type Generation Pipeline`}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`make()`}),` is executed, the class coordinates a multi-stage workflow:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`File Filtering (`,(0,c.jsx)(n.code,{children:`getListByFilter`}),`)`]}),`: The engine scans the directory for `,(0,c.jsx)(n.code,{children:`.d.ts`}),` files, filtering out internal implementation details like `,(0,c.jsx)(n.code,{children:`props.d.ts`}),` or `,(0,c.jsx)(n.code,{children:`types.d.ts`}),` within constructor folders.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Content Validation (`,(0,c.jsx)(n.code,{children:`isContent`}),`)`]}),`: It verifies that each file actually contains meaningful type definitions (interfaces, types, or enums) before processing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Consolidation (`,(0,c.jsx)(n.code,{children:`toOneFile`}),`)`]}),`: All identified file contents are merged into a single large string, tagged with their original file paths for context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`AI Transformation (`,(0,c.jsx)(n.code,{children:`toAiEdit`}),`)`]}),`: The merged content is sent to an AI assistant with specific instructions to strip boilerplate, remove non-English comments, and minimize syntax.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Persistence (`,(0,c.jsx)(n.code,{children:`save`}),`)`]}),`: The final, high-density type library is saved to the configured output path (usually specified in `,(0,c.jsx)(n.code,{children:`UI_FILE_AI_TYPES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`use-case-ai-context-injection`,children:`Use Case: AI Context Injection`}),`
`,(0,c.jsx)(n.p,{children:`The primary goal of this class is to create a "knowledge artifact" that can be injected into the system prompt of LLMs working on the project. By providing a clean, compressed overview of all available types and interfaces, the AI can write type-safe code and understand component architectures with significantly higher accuracy and lower cost.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};