import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/StylesToProperty - CSS Property Generator"}),`
`,e.jsx(r.h1,{id:"stylestoproperty-class",children:"StylesToProperty Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"StylesToProperty"})," class is responsible for converting design properties into standard CSS properties or SCSS mixin calls. It handles variable generation, special property formatting, and auxiliary values for things like opacity."]}),`
`,e.jsx(r.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Standard CSS Properties"})," — Generates property-value pairs (e.g., ",e.jsx(r.code,{children:"margin-top: 10px;"}),")."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"SCSS Mixin Integration"})," — Automatically converts specific properties into mixin calls if they are registered in ",e.jsx(r.code,{children:"styleTypes"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"CSS Variable Generation"})," — Can generate custom CSS variables if the ",e.jsx(r.code,{children:"varKey"})," flag is set on the property."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Auxiliary Value Initialization"})," — Automatically includes initialization calls for opacity-related properties if the base property is missing."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Sorting and Spacing"})," — Adds vertical spacing between properties if their sort index changes."]}),`
`]}),`
`,e.jsx(r.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(r.p,{children:["Initialize the ",e.jsx(r.code,{children:"StylesToProperty"})," converter with the required property branch."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"content?: () => string[]"})," — not typically used for properties as they are leaf nodes."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"first?: boolean"})," — indicates if this is the first element (optional)."]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"control",children:"Control"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"make(): string[]"})," — The main entry point. Orchestrates the transformation, including variable generation and mixin resolution."]}),`
`]})]})}function p(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
