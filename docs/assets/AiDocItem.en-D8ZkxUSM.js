import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiDocItem - AI Function Documentation Generator"}),`
`,e.jsx(n.h1,{id:"aidocitem-class",children:"AiDocItem Class"}),`
`,e.jsx(n.p,{children:"A dedicated class for generating and updating documentation for TypeScript functions using AI. It streamlines the creation of detailed function descriptions, parameter explanations, and usage examples."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Function-optimized"})," — uses specialized templates (",e.jsx(n.code,{children:"aiDocFunctionPrompt.en.txt"}),") designed for documenting logic-driven code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visual Consistency"})," — leverages reference data from ",e.jsx(n.code,{children:"demoDocEn.mdx"})," to produce documentation that fits the project's standard format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End-to-End Workflow"})," — handles everything from reading the source function to writing the final MDX file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Metadata"})," — automatically determines the correct Wiki path and generates a standardized page title."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"AiDocItem"})," by providing the project source path and the target file metadata."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — the base directory path of the project."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: GitFileItem"})," — information about the specific function file."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiDocItem } from '@dxtmisha/scripts'

const functionDoc = new AiDocItem('/src/functions', gitFileItem)

// Generate the documentation
await functionDoc.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): Promise<void>"})," — manages the complete documentation process: update checks, AI context preparation, and result writing."]}),`
`]}),`
`,e.jsx(n.h3,{id:"metadata",children:"Metadata"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — generates a standardized title for the function documentation page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getPathWiki(): string[]"})," — calculates the Wiki storage path based on the file's location."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBuildDisabled(): boolean"})," — checks if the source file is marked with ",e.jsx(n.code,{children:"// wiki:build-none"})," to skip generation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,e.jsx(n.p,{children:"Represents file information managed by Git."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — Relative path to the file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathByOS: string"})," — Absolute OS-specific path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date: string"})," — Last modification date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: any"})," — Reserved for additional metadata."]}),`
`]})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default};
