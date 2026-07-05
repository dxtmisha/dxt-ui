import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSubclass - BEM Subclass Selector Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestosubclass-class`,children:`PropertiesToSubclass Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToSubclass`}),` class transforms design tokens designating subclasses (of type `,(0,c.jsx)(n.code,{children:`PropertyType.subclass`}),`) into nested BEM element class selectors (such as `,(0,c.jsx)(n.code,{children:`&__subclass`}),`). It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`BEM Selector Synthesis`}),` — Converts subclass token nodes into SCSS parent-nested element selectors (`,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hierarchy Detection`}),` — Checks parent levels to ensure BEM classes are nested correctly according to component structures.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the subclass selector mapping to the `,(0,c.jsx)(n.code,{children:`036-subclass`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSubclass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSubclass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find all variables of type `,(0,c.jsx)(n.code,{children:`subclass`}),` and rewrite their selectors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isParentState(parents: PropertyItemsItem['parents']): boolean`}),` — Determines if the immediate ancestor in the path matches a state/modifier layout wrapper.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Resolves the sub-class selector, prepending BEM formatting (`,(0,c.jsx)(n.code,{children:`&__`}),` or `,(0,c.jsx)(n.code,{children:`& .`}),`) based on top-level configuration and ancestor paths.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};