import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/LibraryAiWikiItem - AI Wiki Component Handler"}),`
`,e.jsx(i.h1,{id:"libraryaiwikiitem-class",children:"LibraryAiWikiItem Class"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"LibraryAiWikiItem"})," class is a wrapper around component data, specifically designed to handle AI Wiki-related operations for a single component. It provides methods to check for the existence of AI Wiki files, generate component codes, and create import strings."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Status Checking"}),": Determines if a component has an associated AI Wiki implementation file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Import Generation"}),": Creates correct TypeScript import strings for the AI Wiki component."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Path Management"}),": Handles the resolution of paths to the component's AI Wiki file."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["Initialize ",e.jsx(i.code,{children:"LibraryAiWikiItem"})," by providing a ",e.jsx(i.code,{children:"LibraryData"})," object."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: LibraryData"})," — An object containing component metadata (name, design, directory, etc.)."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

const componentData = {
  name: 'button',
  design: 'dxt',
  alias: 'dxt.button',
  codeFull: 'DxtButton',
  dir: 'DxtButton'
}

const aiItem = new LibraryAiWikiItem(componentData)

// Check status
if (aiItem.isAiWiki()) {
  const importStr = aiItem.getImport()
  // "import DxtButton from '../../components/DxtButton/DxtButtonAiWiki.vue'"
}
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"state",children:"State"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isAiWiki(): boolean"})," — Checks if the corresponding ",e.jsx(i.code,{children:"*AiWiki.vue"})," file exists in the component's directory."]}),`
`]}),`
`,e.jsx(i.h3,{id:"data-retrieval",children:"Data Retrieval"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getCode(): string"})," — Returns the full code identifier of the component (e.g., ",e.jsx(i.code,{children:"DxtButton"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getComponentFileNameAiWiki(): string"})," — Returns the expected filename for the AI Wiki implementation (e.g., ",e.jsx(i.code,{children:"DxtButtonAiWiki.vue"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getImport(): string"})," — Generates a TypeScript import string for the AI Wiki component."]}),`
`]})]})}function m(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{m as default};
