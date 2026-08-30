import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToClone - Parameter Inheritance Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestoclone-class`,children:`PropertiesToClone Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToClone`}),` class duplicates configuration parameters and configuration structures from parent elements down into matching descendant properties. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cascading Configurations`}),` — Clones settings marked with `,(0,c.jsx)(t.code,{children:`settingClone`}),` down the property tree.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deep Traversal`}),` — Recursively scans and inherits attributes for similar properties in descendants.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Ignoring`}),` — Automatically ignores variable and property types when performing the cloning process to prevent overriding values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the state of processed properties to the `,(0,c.jsx)(t.code,{children:`007-01-clone`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToClone, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClone(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`cloning-operations`,children:`Cloning Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to traverse all properties and apply clones.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findItem(parent: PropertyItem, name: string): PropertyItem[]`}),` — Recursively searches descendant levels of a parent element for similar property records.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(original: PropertyItem, properties: PropertyItem[]): void`}),` — Performs the attribute injection, merging properties from the original item without overwriting existing data.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};