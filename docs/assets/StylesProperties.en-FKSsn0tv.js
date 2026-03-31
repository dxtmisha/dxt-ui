import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/StylesProperties - Property Conversion Dispatcher`}),`
`,(0,c.jsx)(n.h1,{id:`stylesproperties-class`,children:`StylesProperties Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` class acts as a central dispatcher for converting design properties into SCSS. It iterates through property branches and delegates the actual transformation to specialized `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` classes based on the property's variable type.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type-Based Dispatching`}),` — Automatically selects the correct converter (e.g., `,(0,c.jsx)(n.code,{children:`StylesToVar`}),`, `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),`, `,(0,c.jsx)(n.code,{children:`StylesToSelector`}),`) based on the `,(0,c.jsx)(n.code,{children:`PropertyType`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Processing`}),` — Handles nested property structures by recursively initializing itself for sub-branches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auxiliary Block Management`}),` — Intelligently wraps selectors and virtual elements in `,(0,c.jsx)(n.code,{children:`& { ... }`}),` blocks when they are part of a larger nested structure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Indentation Tracking`}),` — Manages and increases indentation levels as it descends into nested property branches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`State Preservation`}),` — Tracks whether it is processing the first element in a block to correctly manage vertical spacing.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`StylesProperties(space, property, parent)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — the indentation string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: PropertyItem`}),` — the parent property item (optional).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Initialize StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — The main entry point. Iterates through the properties in the current branch and returns an array of SCSS strings representing the converted rules.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};