import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesConvector - Semantic Token Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesconvector-class`,children:`PropertiesConvector Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` class is a specialized static utility designed to handle complex semantic transformations of design tokens. It acts as a dispatcher for the token processing engine, identifying specific property types (like colors, shadows, or typography) and applying specialized conversion logic to Ensure raw data is normalized into usable design system structures.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Semantic Dispatching`}),` — Automatically routes tokens to specialized convectors based on their `,(0,c.jsx)(n.code,{children:`type`}),` metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Traversal`}),` — Deeply traverses nested property objects to ensure all child tokens are processed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Specialized Converters`}),` — Integrates dedicated logic for `,(0,c.jsx)(n.code,{children:`color`}),`, `,(0,c.jsx)(n.code,{children:`boxShadow`}),`, `,(0,c.jsx)(n.code,{children:`fontFamilies`}),`, and `,(0,c.jsx)(n.code,{children:`typography`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`In-Place Transformation`}),` — Modifies property objects directly to maintain structural integrity during the build process.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As a static utility class, `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` does not require instantiation. Its primary function is accessed directly.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Transform a set of raw properties
PropertiesConvector.to(rawProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`transformation`,children:`Transformation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(properties): void`}),` — Recursively processes a property list, applying type-specific transformations to each item.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-conversion-dispatch-flow`,children:`The Conversion Dispatch Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` manages the transformation lifecycle through a recursive matching strategy:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Detection`}),`: For each item in the provided property cluster, it checks if a corresponding convector exists in its internal registry (e.g., matching `,(0,c.jsx)(n.code,{children:`color`}),` to `,(0,c.jsx)(n.code,{children:`convectorColor`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Specialized Execution`}),`: If a match is found, the specific convector logic is executed on the item, transforming its raw values into finalized formats.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Branching`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`If the item has a `,(0,c.jsx)(n.code,{children:`value`}),` that is an object, it recursively calls `,(0,c.jsx)(n.code,{children:`to()`}),` on that object.`]}),`
`,(0,c.jsx)(n.li,{children:`If the item itself is an object without a recognized type, it continues the traversal to find nested tokens.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Integrity`}),`: The process ensures that complex structures (like typography maps or multi-layered shadows) are fully resolved before the next stage of the pipeline.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};