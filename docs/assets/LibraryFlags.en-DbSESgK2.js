import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/LibraryFlags - Flags Connector Generator"}),`
`,e.jsx(n.h1,{id:"libraryflags-class",children:"LibraryFlags Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryFlags"})," class is responsible for generating files to connect country flags to the design system. It produces a TypeScript entry point for registering flags as icons and a JSON file containing a list of all available flag identifiers."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flag Connection Generation"})," — Creates a TypeScript initialization file that registers flags as global icons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Identifier List Generation"})," — Produces a JSON file for metadata and automated flag selection."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Standardization"})," — Automatically formats flag identifiers to follow the ",e.jsx(n.code,{children:"flag-[code]"})," convention."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Processing"})," — Scans and processes all available flags from the media library."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"LibraryFlags(items)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: LibraryItems"})," — an object for working with the list of components and managing file writes."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Triggers the generation of the flag connection files (TS and JSON)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"generated-files-structure",children:"Generated Files Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make"})," method generates two main files to integrate flags into the library:"]}),`
`,e.jsxs(n.h3,{id:"1-flag-connection-flagsts",children:["1. Flag Connection (",e.jsx(n.code,{children:"flags.ts"}),")"]}),`
`,e.jsxs(n.p,{children:["Registers flags as global icons using the ",e.jsx(n.code,{children:"Icons"})," manager."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-us', flags.us)
  Icons.add('flag-gb', flags.gb)
}
`})}),`
`,e.jsxs(n.h3,{id:"2-flag-identifiers-flagsjson",children:["2. Flag Identifiers (",e.jsx(n.code,{children:"flags.json"}),")"]}),`
`,e.jsx(n.p,{children:"A simple array of strings containing all generated flag keys."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`["flag-us", "flag-gb"]
`})})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
