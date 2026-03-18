import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignTypes - AI Type Generator"}),`
`,e.jsx(i.h1,{id:"designtypes-class",children:"DesignTypes Class"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"DesignTypes"})," class is a specialized utility designed to bridge the gap between complex codebase type definitions and AI coding assistants. It automates the extraction, sanitation, and compression of TypeScript declaration files (",e.jsx(i.code,{children:".d.ts"}),"), using AI to generate a hyper-minimalized version of the project's type system that provides maximum context with minimum token usage."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automated Discovery"})," — Recursively scans distribution directories to find relevant type declaration files."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Intelligent Filtering"})," — Automatically excludes internal constructor props and non-essential logic types while preserving public APIs."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"AI-Driven Compression"})," — Uses LLM prompts to strip unnecessary metadata (imports, Russian comments, empty lines) and consolidate definitions."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Unified Output"})," — Combines multiple fragmented declaration files into a single, cohesive type library."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Context Optimization"})," — Prioritizes interfaces, enums, and type aliases that are most critical for AI understanding."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(i.p,{children:"Initialize the generator by specifying the source directory where the compiled declaration files are located."}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dir: string"})," — The path to the input directory (default is ",e.jsx(i.code,{children:"'dist'"}),")."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"control",children:"Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(): void"})," — Starts the full generation pipeline: discovery, combination, AI processing, and storage."]}),`
`]}),`
`,e.jsx(i.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(i.h3,{id:"the-type-generation-pipeline",children:"The Type Generation Pipeline"}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"make()"})," is executed, the class coordinates a multi-stage workflow:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["File Filtering (",e.jsx(i.code,{children:"getListByFilter"}),")"]}),": The engine scans the directory for ",e.jsx(i.code,{children:".d.ts"})," files, filtering out internal implementation details like ",e.jsx(i.code,{children:"props.d.ts"})," or ",e.jsx(i.code,{children:"types.d.ts"})," within constructor folders."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Content Validation (",e.jsx(i.code,{children:"isContent"}),")"]}),": It verifies that each file actually contains meaningful type definitions (interfaces, types, or enums) before processing."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Consolidation (",e.jsx(i.code,{children:"toOneFile"}),")"]}),": All identified file contents are merged into a single large string, tagged with their original file paths for context."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["AI Transformation (",e.jsx(i.code,{children:"toAiEdit"}),")"]}),": The merged content is sent to an AI assistant with specific instructions to strip boilerplate, remove non-English comments, and minimize syntax."]}),`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Persistence (",e.jsx(i.code,{children:"save"}),")"]}),": The final, high-density type library is saved to the configured output path (usually specified in ",e.jsx(i.code,{children:"UI_FILE_AI_TYPES"}),")."]}),`
`]}),`
`,e.jsx(i.h3,{id:"use-case-ai-context-injection",children:"Use Case: AI Context Injection"}),`
`,e.jsx(i.p,{children:'The primary goal of this class is to create a "knowledge artifact" that can be injected into the system prompt of LLMs working on the project. By providing a clean, compressed overview of all available types and interfaces, the AI can write type-safe code and understand component architectures with significantly higher accuracy and lower cost.'})]})}function p(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
