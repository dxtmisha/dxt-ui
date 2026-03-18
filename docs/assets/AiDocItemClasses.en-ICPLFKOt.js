import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/AiDocItemClasses - AI Class Documentation Generator"}),`
`,e.jsx(i.h1,{id:"aidocitemclasses-class",children:"AiDocItemClasses Class"}),`
`,e.jsx(i.p,{children:"A dedicated class for generating and updating documentation for TypeScript classes using AI. It automates the entire process, including reading source code, collecting context, interacting with AI models, and generating standardized MDX documentation files."}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automated Generation"})," — handles the full lifecycle of creating documentation from a class definition."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Template-driven"})," — uses specialized prompt templates (",e.jsx(i.code,{children:"aiDocClassPrompt.en.txt"}),") to ensure consistent AI output."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Demo-aware"})," — incorporates reference demonstration files (",e.jsx(i.code,{children:"demoClassEn.mdx"}),") to guide the AI in visual formatting."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Smart Logic"})," — automatically determines Wiki paths and titles based on the source file structure."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Build Guard"})," — integrates with the build system to ensure only valid, compilable code is documented."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["Initialize the ",e.jsx(i.code,{children:"AiDocItemClasses"})," by providing the source path and the target file information."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — the base directory path of the project."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: GitFileItem"})," — information about the specific TypeScript class file."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Generate the documentation
await classDoc.make()
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"control",children:"Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(): Promise<void>"})," — starts the documentation cycle: checks for updates, prepares context, invokes AI, and writes results."]}),`
`]}),`
`,e.jsx(i.h3,{id:"metadata",children:"Metadata"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getTitle(): string"})," — generates a standardized title for the documentation page."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getPathWiki(): string[]"})," — calculates the target storage path in the Wiki based on the file's location."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — checks if the source file is marked with ",e.jsx(i.code,{children:"// wiki:build-none"})," to skip processing."]}),`
`]}),`
`,e.jsx(i.h2,{id:"types",children:"Types"}),`
`,e.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,e.jsx(i.p,{children:"Represents file information managed by Git."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — Relative path to the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pathByOS: string"})," — Absolute OS-specific path."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"date: string"})," — Last modification date."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: any"})," — Reserved for additional metadata."]}),`
`]})]})}function m(s={}){const{wrapper:i}={...t(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{m as default};
