import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSimilar - Relative Property Attribute Inheritor`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestosimilar-class`,children:`PropertiesToSimilar Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToSimilar`}),` class searches parent levels of the design token tree to locate similar properties (having matching names) and inherits their type and renaming rules. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Attribute Inheritance`}),` — Allows leaf tokens to inherit renaming formats and property variables from matching sibling/ancestor paths.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Exception Filtering`}),` — Automatically blocks inheritance from nodes designated as `,(0,c.jsx)(n.code,{children:`classType`}),` or `,(0,c.jsx)(n.code,{children:`subclass`}),` namespaces.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Upward Search`}),` — Recursively scans parent ancestors in reverse order (bottom-up) to find suitable attributes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the updated tokens structure to the `,(0,c.jsx)(n.code,{children:`010-similar`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSimilar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSimilar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`inheritance-operations`,children:`Inheritance Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to loop through all properties and apply inherited values from ancestors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(name: string, item: PropertyItem, parents: PropertyItemsParent[]): PropertyItem | undefined`}),` — Evaluates matching parent structures to find a source token candidate for attribute inheritance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(item: PropertyItem): boolean`}),` — Validates whether a token item is a variable or property candidate suitable for inheritance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isException(item?: PropertyItem): boolean`}),` — Returns true if the token type matches one of the blocked namespace exceptions.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};