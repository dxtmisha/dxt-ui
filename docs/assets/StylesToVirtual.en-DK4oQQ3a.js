import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesToVirtual - Pseudo-Element Generator"}),`
`,e.jsx(n.h1,{id:"stylestovirtual-class",children:"StylesToVirtual Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesToVirtual"})," class is responsible for generating CSS pseudo-elements (like ",e.jsx(n.code,{children:"::before"}),", ",e.jsx(n.code,{children:"::after"}),") and their associated styles."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pseudo-Element Wrapping"})," — Automatically wraps content within a ",e.jsx(n.code,{children:"&::[name]"})," selector."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Content Property"})," — For pseudo-elements like ",e.jsx(n.code,{children:"before"})," and ",e.jsx(n.code,{children:"after"}),", it automatically injects ",e.jsx(n.code,{children:"content: ' ';"})," if not otherwise specified."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indentation Management"})," — Correctly handles block indentation and optional leading empty lines."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"StylesToVirtual"})," converter with the required property and content callable."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the style rules for the pseudo-element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — indicates if this is the first element (optional)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToVirtual } from '@dxtmisha/scripts'

const converter = new StylesToVirtual(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the process of wrapping nested styles in a pseudo-element block."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
