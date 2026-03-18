import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/LibraryItems - Component List Manager"}),`
`,e.jsx(n.h1,{id:"libraryitems-class",children:"LibraryItems Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryItems"})," class is responsible for managing the list of components within the design system. It provides utilities to retrieve component data, count components, determine component paths, and write data to the library directory."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Management"})," — Retrieves and organizes components by design groups."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Resolution"})," — Determines the correct absolute paths for design system components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Writing Utility"})," — Provides a standardized way to write TypeScript and JSON files to the library, including auto-generated headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Configuration Integration"})," — Seamlessly integrates with ",e.jsx(n.code,{children:"PropertiesConfig"})," and ",e.jsx(n.code,{children:"PropertiesFile"})," for project-specific settings."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"LibraryItems"})," class without arguments."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"data-retrieval",children:"Data Retrieval"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): LibraryAll"})," — returns the full list of components organized by design groups."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponentList(): LibraryData[]"})," — returns a flat array of all components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCount(): number"})," — returns the total number of components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getComponentsPath(): string[]"})," — returns the path elements for the components directory."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"write",children:e.jsx(n.code,{children:"write"})}),`
`,e.jsx(n.p,{children:"Writes the provided data to a file within the library directory. Automatically adds a generation header for TypeScript files."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — the file name (without extension)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: string[]"})," — an array of strings to write. Each string will be separated by a newline character."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string = 'ts'"})," — the file extension. Defaults to ",e.jsx(n.code,{children:"ts"}),". ",e.jsx(n.code,{children:"json"})," is also supported."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function x(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{x as default};
