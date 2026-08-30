import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToMulti - Multi-Value Property Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestomulti-class`,children:`PropertiesToMulti Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToMulti`}),` class converts design tokens that contain multiple custom properties or states into standardized structures where values are grouped appropriately under their key names. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-Value Conversion`}),` — Finds properties with type `,(0,c.jsx)(t.code,{children:`property`}),` that hold complex nested values and restructures them.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`State Promotion`}),` — Resolves underlying values (like variables or states) and maps them into state modifier structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the transformed structures to the `,(0,c.jsx)(t.code,{children:`012-multi`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToMulti, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMulti(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`transform-operations`,children:`Transform Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to retrieve multi-value properties and rewrite their children.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): PropertyItemsItem[]`}),` — Filters all active items, returning only property variables that possess non-empty, complex value objects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(name: string, properties: PropertyList, isVar: boolean): void`}),` — Restructures child values, promoting their properties into state structures and adjusting the output property type based on `,(0,c.jsx)(t.code,{children:`isVar`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};