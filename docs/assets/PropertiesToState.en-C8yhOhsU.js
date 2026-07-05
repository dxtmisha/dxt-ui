import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToState - State Modifier Selector Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestostate-class`,children:`PropertiesToState Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToState`}),` class processes design token states (of type `,(0,c.jsx)(n.code,{children:`PropertyType.state`}),`) and transforms their names into SCSS modifier selectors (like `,(0,c.jsx)(n.code,{children:`&--state`}),` or `,(0,c.jsx)(n.code,{children:`&.parent--state`}),`). It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`State Selector Synthesis`}),` — Generates SCSS class modifier formats (`,(0,c.jsx)(n.code,{children:`&--modifier`}),`) representing component visual states.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nested State Resolution`}),` — Evaluates parent hierarchy to nest sub-states cleanly within nested modifier scopes (e.g. `,(0,c.jsx)(n.code,{children:`&.parent--modifier`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves state selectors to the `,(0,c.jsx)(n.code,{children:`032-state`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToState, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToState(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find all variables of type `,(0,c.jsx)(n.code,{children:`state`}),` and rewrite their selectors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Formats modifier names, adding BEM modifier formatting (`,(0,c.jsx)(n.code,{children:`&--`}),` or `,(0,c.jsx)(n.code,{children:`&.parent--`}),`) based on top-level configuration and path ancestors.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};