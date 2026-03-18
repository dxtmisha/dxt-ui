import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PropertiesConvector - Semantic Token Transformer"}),`
`,e.jsx(s.h1,{id:"propertiesconvector-class",children:"PropertiesConvector Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesConvector"})," class is a specialized static utility designed to handle complex semantic transformations of design tokens. It acts as a dispatcher for the token processing engine, identifying specific property types (like colors, shadows, or typography) and applying specialized conversion logic to Ensure raw data is normalized into usable design system structures."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Semantic Dispatching"})," — Automatically routes tokens to specialized convectors based on their ",e.jsx(s.code,{children:"type"})," metadata."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Recursive Traversal"})," — Deeply traverses nested property objects to ensure all child tokens are processed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Specialized Converters"})," — Integrates dedicated logic for ",e.jsx(s.code,{children:"color"}),", ",e.jsx(s.code,{children:"boxShadow"}),", ",e.jsx(s.code,{children:"fontFamilies"}),", and ",e.jsx(s.code,{children:"typography"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"In-Place Transformation"})," — Modifies property objects directly to maintain structural integrity during the build process."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["As a static utility class, ",e.jsx(s.code,{children:"PropertiesConvector"})," does not require instantiation. Its primary function is accessed directly."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Transform a set of raw properties
PropertiesConvector.to(rawProperties)
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"transformation",children:"Transformation"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"to(properties): void"})," — Recursively processes a property list, applying type-specific transformations to each item."]}),`
`]}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-conversion-dispatch-flow",children:"The Conversion Dispatch Flow"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesConvector"})," manages the transformation lifecycle through a recursive matching strategy:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type Detection"}),": For each item in the provided property cluster, it checks if a corresponding convector exists in its internal registry (e.g., matching ",e.jsx(s.code,{children:"color"})," to ",e.jsx(s.code,{children:"convectorColor"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Specialized Execution"}),": If a match is found, the specific convector logic is executed on the item, transforming its raw values into finalized formats."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Recursive Branching"}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["If the item has a ",e.jsx(s.code,{children:"value"})," that is an object, it recursively calls ",e.jsx(s.code,{children:"to()"})," on that object."]}),`
`,e.jsx(s.li,{children:"If the item itself is an object without a recognized type, it continues the traversal to find nested tokens."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Data Integrity"}),": The process ensures that complex structures (like typography maps or multi-layered shadows) are fully resolved before the next stage of the pipeline."]}),`
`]})]})}function p(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};
