import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToVariable - Property Type Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestovariable-class`,children:`PropertiesToVariable Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToVariable`}),` class analyzes properties in the design token tree to dynamically resolve and assign their matching `,(0,c.jsx)(n.code,{children:`PropertyType`}),` classifications based on hierarchy, names, and values. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Type Inference`}),` — Assigns exact property type flags (e.g. `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`none`}),`) to tokens by checking CSS compatibility lists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hierarchical Classification`}),` — Walks parent nodes to inherit classifications and resolves component and design top-level wrappers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selectors and Pseudo-Elements Detection`}),` — Compares token names against lists of standard CSS selectors and pseudo-elements (like `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves resolved variable types to the `,(0,c.jsx)(n.code,{children:`008-variable`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`type-resolution-operations`,children:`Type Resolution Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to iterate through all properties and assign their resolved type classifications.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Infers type based on categories like `,(0,c.jsx)(n.code,{children:`root`}),` or `,(0,c.jsx)(n.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Checks if the token represents the main design or component namespace wrapper.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — Matches the token name against a standard list of CSS properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — Matches the token name against standard CSS pseudo-classes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Identifies subclass structures based on empty configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Inherits `,(0,c.jsx)(n.code,{children:`var`}),` classification if the parent element has variable type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Returns type `,(0,c.jsx)(n.code,{children:`none`}),` if the token has explicit hidden type config.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — Matches the token name against standard CSS pseudo-elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Central orchestrator that runs all sub-matchers to determine the exact property type fallback.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};