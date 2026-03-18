import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/LibraryTypes - Vue Type Definitions Generator"}),`
`,e.jsx(n.h1,{id:"librarytypes-class",children:"LibraryTypes Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"LibraryTypes"})," class is responsible for generating global Type Definition files for Vue components. This enables full IDE support and type checking for the design system components used globally within a Vue application."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Component Support"})," — Generates ",e.jsx(n.code,{children:"declare module"})," blocks for ",e.jsx(n.code,{children:"@vue/runtime-core"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Type Mapping"})," — Automatically links component code names to their respective ",e.jsx(n.code,{children:".vue"})," file types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved DX"})," — Enables IntelliSense and prop validation for design system components in Vue templates."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Path Resolution"})," — Correctly resolves component source paths based on the design system configuration."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"LibraryTypes(items)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: LibraryItems"})," — an object for working with the list of components and managing file writes."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): void"})," — Triggers the generation of the global type definition file (",e.jsx(n.code,{children:"types.d.ts"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"generated-file-structure",children:"Generated File Structure"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"make"})," method generates a ",e.jsx(n.code,{children:"types"})," file (typically ",e.jsx(n.code,{children:"types.d.ts"}),") that extends Vue's global component registry."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Generated Code Profile:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Module:"})," ",e.jsx(n.code,{children:"@vue/runtime-core"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interface:"})," ",e.jsx(n.code,{children:"GlobalComponents"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Output:"})," A mapping of all library components."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
