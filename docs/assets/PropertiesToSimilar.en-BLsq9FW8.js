import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSimilar - Relative Property Attribute Inheritor`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestosimilar-class`,children:`PropertiesToSimilar Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToSimilar`}),` class searches parent levels of the design token tree to locate similar properties (having matching names) and inherits their type and renaming rules. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Attribute Inheritance`}),` — Allows leaf tokens to inherit renaming formats and property variables from matching sibling/ancestor paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Exception Filtering`}),` — Automatically blocks inheritance from nodes designated as `,(0,c.jsx)(t.code,{children:`classType`}),` or `,(0,c.jsx)(t.code,{children:`subclass`}),` namespaces.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Upward Search`}),` — Recursively scans parent ancestors in reverse order (bottom-up) to find suitable attributes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the updated tokens structure to the `,(0,c.jsx)(t.code,{children:`010-similar`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSimilar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSimilar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`inheritance-operations`,children:`Inheritance Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to loop through all properties and apply inherited values from ancestors.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParent(name: string, item: PropertyItem, parents: PropertyItemsParent[]): PropertyItem | undefined`}),` — Evaluates matching parent structures to find a source token candidate for attribute inheritance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(item: PropertyItem): boolean`}),` — Validates whether a token item is a variable or property candidate suitable for inheritance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isException(item?: PropertyItem): boolean`}),` — Returns true if the token type matches one of the blocked namespace exceptions.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};