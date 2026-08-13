import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSubclass - BEM Subclass Selector Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestosubclass-class`,children:`PropertiesToSubclass Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToSubclass`}),` class transforms design tokens designating subclasses (of type `,(0,c.jsx)(t.code,{children:`PropertyType.subclass`}),`) into nested BEM element class selectors (such as `,(0,c.jsx)(t.code,{children:`&__subclass`}),`). It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`BEM Selector Synthesis`}),` — Converts subclass token nodes into SCSS parent-nested element selectors (`,(0,c.jsx)(t.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hierarchy Detection`}),` — Checks parent levels to ensure BEM classes are nested correctly according to component structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the subclass selector mapping to the `,(0,c.jsx)(t.code,{children:`036-subclass`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSubclass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSubclass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find all variables of type `,(0,c.jsx)(t.code,{children:`subclass`}),` and rewrite their selectors.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isParentState(parents: PropertyItemsItem['parents']): boolean`}),` — Determines if the immediate ancestor in the path matches a state/modifier layout wrapper.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Resolves the sub-class selector, prepending BEM formatting (`,(0,c.jsx)(t.code,{children:`&__`}),` or `,(0,c.jsx)(t.code,{children:`& .`}),`) based on top-level configuration and ancestor paths.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};