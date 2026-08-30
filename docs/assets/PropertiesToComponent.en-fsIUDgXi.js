import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToComponent - Component Property Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestocomponent-class`,children:`PropertiesToComponent Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToComponent`}),` class converts design tokens designated as component or theme namespaces into normalized component property names. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Namespace Scope Resolution`}),` — Identifies tokens of type `,(0,c.jsx)(t.code,{children:`PropertyType.component`}),` or `,(0,c.jsx)(t.code,{children:`PropertyType.theme`}),` and formats their names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hierarchical Naming`}),` — Automatically prefixes component names with ancestor namespaces to prevent collisions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the component property output to the `,(0,c.jsx)(t.code,{children:`028-component`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToComponent, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToComponent(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to process component and theme variable nodes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Resolves the unique name of a component, combining ancestor paths unless `,(0,c.jsx)(t.code,{children:`fullName`}),` is enabled.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};