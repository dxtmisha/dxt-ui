import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/AiDocItemComposables - AI Composable Documentation Generator"}),`
`,e.jsx(i.h1,{id:"aidocitemcomposables-class",children:"AiDocItemComposables Class"}),`
`,e.jsx(i.p,{children:"A specialized class for generating and updating documentation for Vue Composables using AI. It automates the process of analyzing composition functions, gathering context, and producing high-quality MDX documentation."}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Composition-focused"})," — uses specialized templates (",e.jsx(i.code,{children:"aiDocComposablePrompt.en.txt"}),") tailored for documenting Vue composables."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Visual Demos"})," — incorporates reference data from ",e.jsx(i.code,{children:"demoComposableEn.mdx"})," to maintain a consistent look for composable documentation."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Full Automation"})," — handles the technical steps of reading code, checking build status, and writing the final results."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Intelligent Routing"})," — automatically calculates the appropriate Wiki storage path and page title."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["Initialize the ",e.jsx(i.code,{children:"AiDocItemComposables"})," by providing the project source path and the target file metadata."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — the base directory path of the project."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: GitFileItem"})," — information about the specific composable file."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Generate the documentation
await composableDoc.make()
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"control",children:"Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(): Promise<void>"})," — executes the full documentation cycle: checks for updates, prepares the AI context, and writes the output."]}),`
`]}),`
`,e.jsx(i.h3,{id:"metadata",children:"Metadata"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getTitle(): string"})," — generates a standardized title for the composable documentation."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getPathWiki(): string[]"})," — calculates the Wiki path based on the file's location in the project."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — checks if the source file contains ",e.jsx(i.code,{children:"// wiki:build-none"})," to skip generation."]}),`
`]}),`
`,e.jsx(i.h2,{id:"types",children:"Types"}),`
`,e.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,e.jsx(i.p,{children:"Represents file information managed by Git."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — Relative path to the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pathByOS: string"})," — Absolute OS-specific path."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"date: string"})," — Last modification date."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: any"})," — Reserved for additional metadata."]}),`
`]})]})}function m(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{m as default};
