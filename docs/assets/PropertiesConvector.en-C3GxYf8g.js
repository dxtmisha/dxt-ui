import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesConvector - Semantic Token Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiesconvector-class`,children:`PropertiesConvector Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` class is a specialized static utility designed to handle complex semantic transformations of design tokens. It acts as a dispatcher for the token processing engine, identifying specific property types (like colors, shadows, or typography) and applying specialized conversion logic to Ensure raw data is normalized into usable design system structures.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Semantic Dispatching`}),` — Automatically routes tokens to specialized convectors based on their `,(0,c.jsx)(t.code,{children:`type`}),` metadata.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Traversal`}),` — Deeply traverses nested property objects to ensure all child tokens are processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specialized Converters`}),` — Integrates dedicated logic for `,(0,c.jsx)(t.code,{children:`color`}),`, `,(0,c.jsx)(t.code,{children:`boxShadow`}),`, `,(0,c.jsx)(t.code,{children:`fontFamilies`}),`, and `,(0,c.jsx)(t.code,{children:`typography`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`In-Place Transformation`}),` — Modifies property objects directly to maintain structural integrity during the build process.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`As a static utility class, `,(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` does not require instantiation. Its primary function is accessed directly.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Transform a set of raw properties
PropertiesConvector.to(rawProperties)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`transformation`,children:`Transformation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(properties): void`}),` — Recursively processes a property list, applying type-specific transformations to each item.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-conversion-dispatch-flow`,children:`The Conversion Dispatch Flow`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` manages the transformation lifecycle through a recursive matching strategy:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Detection`}),`: For each item in the provided property cluster, it checks if a corresponding convector exists in its internal registry (e.g., matching `,(0,c.jsx)(t.code,{children:`color`}),` to `,(0,c.jsx)(t.code,{children:`convectorColor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specialized Execution`}),`: If a match is found, the specific convector logic is executed on the item, transforming its raw values into finalized formats.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Branching`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If the item has a `,(0,c.jsx)(t.code,{children:`value`}),` that is an object, it recursively calls `,(0,c.jsx)(t.code,{children:`to()`}),` on that object.`]}),`
`,(0,c.jsx)(t.li,{children:`If the item itself is an object without a recognized type, it continues the traversal to find nested tokens.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Integrity`}),`: The process ensures that complex structures (like typography maps or multi-layered shadows) are fully resolved before the next stage of the pipeline.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};