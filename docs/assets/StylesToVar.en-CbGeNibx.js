import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesToVar - CSS Variable Converter"}),`
`,e.jsx(r.h1,{id:"stylestovar-class",children:"StylesToVar Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"StylesToVar"})," class is used to convert design properties into CSS variables. It can handle individual variables or process all nested variables within a branch."]}),`
`,e.jsx(r.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Batch Variable Processing"})," — Can iterate through a branch and generate CSS variable declarations for all sub-properties marked as variables."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Individual Variable Generation"})," — Can also be used to generate a single variable for the current property."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Color-to-RGB Transformation"})," — Automatically converts color values into RGB format (wrapped in ",e.jsx(r.code,{children:"ui.toColorRbg"}),") for better compatibility with opacity management."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Opacity Support"})," — Generates additional ",e.jsx(r.code,{children:"-opacity"})," variables if the property has opacity data."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Value Normalization"})," — Ensures values are correctly escaped and defaults to ",e.jsx(r.code,{children:"unset"})," if the value is missing."]}),`
`]}),`
`,e.jsx(r.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(r.p,{children:["Initialize the ",e.jsx(r.code,{children:"StylesToVar"})," converter with the required property branch."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"content?: () => string[]"})," — not typically used for variable blocks."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"first?: boolean"})," — indicates if this is the first element (optional)."]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"control",children:"Control"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the generation of one or multiple CSS variables based on the property structure."]}),`
`]})]})}function p(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
