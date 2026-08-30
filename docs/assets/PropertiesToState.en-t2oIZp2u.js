import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToState - State Modifier Selector Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestostate-class`,children:`PropertiesToState Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToState`}),` class processes design token states (of type `,(0,c.jsx)(t.code,{children:`PropertyType.state`}),`) and transforms their names into SCSS modifier selectors (like `,(0,c.jsx)(t.code,{children:`&--state`}),` or `,(0,c.jsx)(t.code,{children:`&.parent--state`}),`). It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`State Selector Synthesis`}),` — Generates SCSS class modifier formats (`,(0,c.jsx)(t.code,{children:`&--modifier`}),`) representing component visual states.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nested State Resolution`}),` — Evaluates parent hierarchy to nest sub-states cleanly within nested modifier scopes (e.g. `,(0,c.jsx)(t.code,{children:`&.parent--modifier`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves state selectors to the `,(0,c.jsx)(t.code,{children:`032-state`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToState, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToState(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find all variables of type `,(0,c.jsx)(t.code,{children:`state`}),` and rewrite their selectors.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Formats modifier names, adding BEM modifier formatting (`,(0,c.jsx)(t.code,{children:`&--`}),` or `,(0,c.jsx)(t.code,{children:`&.parent--`}),`) based on top-level configuration and path ancestors.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};