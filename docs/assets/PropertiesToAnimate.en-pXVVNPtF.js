import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToAnimate - Animation Property Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestoanimate-class`,children:`PropertiesToAnimate Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),` class is a concrete transformer designed to process animation configurations. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` and maps keyframes and frames into standardized, cacheable structures.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Frame Identification`}),` — Automatically detects properties of type `,(0,c.jsx)(n.code,{children:`PropertyType.animate`}),` and maps their underlying keyframes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hierarchical Naming`}),` — Combines parent path segments to generate descriptive, unique names for child animation elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Outputs processed properties to the `,(0,c.jsx)(n.code,{children:`044-animate`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Instantiate `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),` with a `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` collection, then call the execution method:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAnimate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToAnimate(items)
transformer.to() // Runs init() and writes to cache
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to resolve animation keyframe groups and rewrite frame properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Generates a unique, hyphenated name from path ancestors if `,(0,c.jsx)(n.code,{children:`fullName`}),` is not set on the item.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};