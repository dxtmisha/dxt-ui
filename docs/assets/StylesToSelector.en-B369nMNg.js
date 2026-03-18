import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesToSelector - CSS Selector Generator"}),`
`,e.jsx(n.h1,{id:"stylestoselector-class",children:"StylesToSelector Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToSelector"})," class is responsible for generating CSS selectors for sub-properties, such as pseudo-classes (",e.jsx(n.code,{children:":hover"}),", ",e.jsx(n.code,{children:":active"}),") or targeted component states. It intelligently determines whether to use a direct pseudo-class or a mixin."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Selector Generation"})," — Automatically converts property names into appropriate CSS selectors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mixin Integration"})," — Recognizes specific states like ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"active"}),", ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"disabled"}),", and ",e.jsx(n.code,{children:"readonly"}),", and uses corresponding SCSS mixins."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context-Aware Class Resolution"})," — Detects if the sub-property belongs to the main component class to optimize the mixin parameters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indentation Management"})," — Ensures correct block structure and vertical spacing."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"StylesToSelector"})," converter with the required property and content callable."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the internal style rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element (optional)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToSelector } from '@dxtmisha/scripts'

const converter = new StylesToSelector(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates selector resolution and block wrapping. Only generates output if internal content exists."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
