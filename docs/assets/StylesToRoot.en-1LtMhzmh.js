import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/StylesToRoot - At-Root Block Generator"}),`
`,e.jsx(t.h1,{id:"stylestoroot-class",children:"StylesToRoot Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"StylesToRoot"})," class is used to wrap a block of nested rules within a CSS ",e.jsx(t.code,{children:"@at-root"})," directive. This is useful for lifting rules out of their current scope to the root of the stylesheet."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"At-Root Wrapping"})," — Automatically wraps the generated content within an ",e.jsx(t.code,{children:"@at-root"})," block."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dynamic Selector Inclusion"})," — Appends the property name (acting as a selector extension) to the ",e.jsx(t.code,{children:"@at-root"})," directive."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Indentation Management"})," — Handles standard block indentation and leading empty lines."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["Initialize the ",e.jsx(t.code,{children:"StylesToRoot"})," converter with the required property and content callable."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"content?: () => string[]"})," — a callable function that returns an array of strings representing the internal style rules."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"first?: boolean"})," — indicates if this is the first element (optional)."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { StylesToRoot } from '@dxtmisha/scripts'

const converter = new StylesToRoot(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"control",children:"Control"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the process of wrapping the content in the ",e.jsx(t.code,{children:"@at-root"})," structure."]}),`
`]})]})}function p(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
