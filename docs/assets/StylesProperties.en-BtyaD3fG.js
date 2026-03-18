import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/StylesProperties - Property Conversion Dispatcher"}),`
`,e.jsx(r.h1,{id:"stylesproperties-class",children:"StylesProperties Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"StylesProperties"})," class acts as a central dispatcher for converting design properties into SCSS. It iterates through property branches and delegates the actual transformation to specialized ",e.jsx(r.code,{children:"StylesTo*"})," classes based on the property's variable type."]}),`
`,e.jsx(r.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Type-Based Dispatching"})," — Automatically selects the correct converter (e.g., ",e.jsx(r.code,{children:"StylesToVar"}),", ",e.jsx(r.code,{children:"StylesToProperty"}),", ",e.jsx(r.code,{children:"StylesToSelector"}),") based on the ",e.jsx(r.code,{children:"PropertyType"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Recursive Processing"})," — Handles nested property structures by recursively initializing itself for sub-branches."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Auxiliary Block Management"})," — Intelligently wraps selectors and virtual elements in ",e.jsx(r.code,{children:"& { ... }"})," blocks when they are part of a larger nested structure."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Indentation Tracking"})," — Manages and increases indentation levels as it descends into nested property branches."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"State Preservation"})," — Tracks whether it is processing the first element in a block to correctly manage vertical spacing."]}),`
`]}),`
`,e.jsx(r.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(r.p,{children:["To initialize the object, call the ",e.jsx(r.code,{children:"StylesProperties(space, property, parent)"})," constructor."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"space: string"})," — the indentation string."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"property: PropertyItemsItem"})," — the current branch of the property tree being processed."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"parent?: PropertyItem"})," — the parent property item (optional)."]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Initialize StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"control",children:"Control"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"make(): string[]"})," — The main entry point. Iterates through the properties in the current branch and returns an array of SCSS strings representing the converted rules."]}),`
`]})]})}function p(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{p as default};
