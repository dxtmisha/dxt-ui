import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiDoc - AI Documentation Engine"}),`
`,e.jsx(n.h1,{id:"aidoc-class",children:"AiDoc Class"}),`
`,e.jsx(n.p,{children:"The central engine for orchestrating AI-driven documentation generation across the project. It coordinates reading configuration, scanning directories, and delegating documentation tasks to specialized AI handlers."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Batch Processing"})," — automatically iterates through configured directories to generate documentation for multiple files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Project-wide Integration"})," — reads project settings via ",e.jsx(n.code,{children:"PropertiesConfig"})," to determine target paths and scopes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Git Intelligence"})," — uses ",e.jsx(n.code,{children:"GitRead"})," to identify relevant files and filter them based on repository status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error Resilience"})," — robust error handling during the documentation process to ensure the engine fails gracefully or reports issues clearly."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AiDoc"})," class is typically instantiated as a singleton or a main coordinator to start the documentation build."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Start processing all configured directories
await engine.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): Promise<void>"})," — the main entry point. Reads configuration and starts processing all defined documentation directories."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"makeDirectory(dir: string): Promise<void>"})," — processes all relevant files within a specific directory by delegating to specialized AI handlers."]}),`
`]}),`
`,e.jsx(n.p,{children:"A high-level coordinator that doesn't expose public configuration properties or complex state."})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
