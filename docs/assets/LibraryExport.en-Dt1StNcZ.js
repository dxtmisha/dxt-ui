import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/LibraryExport - Export Generator"}),`
`,e.jsx(n.h1,{id:"libraryexport-class",children:"LibraryExport Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryExport"})," class is responsible for aggregating and generating a unified export file for the library. It scans designated directories for TypeScript and Vue files, creating a single entry point that simplifies library imports."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unified Export Generation"})," — creates a comprehensive entry point for all exportable components and utilities."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart File Identification"})," — automatically handles exports for ",e.jsx(n.code,{children:".ts"})," files (using ",e.jsx(n.code,{children:"export *"}),") and ",e.jsx(n.code,{children:".vue"})," files (using ",e.jsx(n.code,{children:"import"})," then ",e.jsx(n.code,{children:"export const"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Integration"})," — automatically includes global CSS or SCSS styles if they exist."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filtering"})," — excludes test files (",e.jsx(n.code,{children:".test."}),") and files marked with the ",e.jsx(n.code,{children:"UI_FLAG_NOT_EXPORT"})," flag."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize and run the export generator using the ",e.jsx(n.code,{children:"make"})," method."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"generation",children:"Generation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — the main entry point that triggers the file discovery and generation process."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-of-generated-output",children:"Example of Generated Output"}),`
`,e.jsx(n.p,{children:"The generated file aggregate imports and exports like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
