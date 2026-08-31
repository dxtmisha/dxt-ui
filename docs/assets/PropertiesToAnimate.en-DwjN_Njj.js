import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToAnimate - Animation Property Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestoanimate-class`,children:`PropertiesToAnimate Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToAnimate`}),` class is a concrete transformer designed to process animation configurations. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),` and maps keyframes and frames into standardized, cacheable structures.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Frame Identification`}),` — Automatically detects properties of type `,(0,c.jsx)(t.code,{children:`PropertyType.animate`}),` and maps their underlying keyframes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hierarchical Naming`}),` — Combines parent path segments to generate descriptive, unique names for child animation elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Outputs processed properties to the `,(0,c.jsx)(t.code,{children:`044-animate`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Instantiate `,(0,c.jsx)(t.code,{children:`PropertiesToAnimate`}),` with a `,(0,c.jsx)(t.code,{children:`PropertiesItems`}),` collection, then call the execution method:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToAnimate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToAnimate(items)
transformer.to() // Runs init() and writes to cache
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to resolve animation keyframe groups and rewrite frame properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Generates a unique, hyphenated name from path ancestors if `,(0,c.jsx)(t.code,{children:`fullName`}),` is not set on the item.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};