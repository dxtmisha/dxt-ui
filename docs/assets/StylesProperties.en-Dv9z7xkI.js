import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesProperties - Property Conversion Dispatcher`}),`
`,(0,c.jsx)(t.h1,{id:`stylesproperties-class`,children:`StylesProperties Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesProperties`}),` class acts as a central dispatcher for converting design properties into SCSS. It iterates through property branches and delegates the actual transformation to specialized `,(0,c.jsx)(t.code,{children:`StylesTo*`}),` classes based on the property's variable type.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type-Based Dispatching`}),` — Automatically selects the correct converter (e.g., `,(0,c.jsx)(t.code,{children:`StylesToVar`}),`, `,(0,c.jsx)(t.code,{children:`StylesToProperty`}),`, `,(0,c.jsx)(t.code,{children:`StylesToSelector`}),`) based on the `,(0,c.jsx)(t.code,{children:`PropertyType`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Processing`}),` — Handles nested property structures by recursively initializing itself for sub-branches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auxiliary Block Management`}),` — Intelligently wraps selectors and virtual elements in `,(0,c.jsx)(t.code,{children:`& { ... }`}),` blocks when they are part of a larger nested structure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Indentation Tracking`}),` — Manages and increases indentation levels as it descends into nested property branches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`State Preservation`}),` — Tracks whether it is processing the first element in a block to correctly manage vertical spacing.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`StylesProperties(space, property, parent)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — the indentation string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parent?: PropertyItem`}),` — the parent property item (optional).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Initialize StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — The main entry point. Iterates through the properties in the current branch and returns an array of SCSS strings representing the converted rules.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};