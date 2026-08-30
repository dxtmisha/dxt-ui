import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToVariable - Property Type Resolver`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestovariable-class`,children:`PropertiesToVariable Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToVariable`}),` class analyzes properties in the design token tree to dynamically resolve and assign their matching `,(0,c.jsx)(t.code,{children:`PropertyType`}),` classifications based on hierarchy, names, and values. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Type Inference`}),` — Assigns exact property type flags (e.g. `,(0,c.jsx)(t.code,{children:`var`}),`, `,(0,c.jsx)(t.code,{children:`property`}),`, `,(0,c.jsx)(t.code,{children:`selector`}),`, `,(0,c.jsx)(t.code,{children:`subclass`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`) to tokens by checking CSS compatibility lists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hierarchical Classification`}),` — Walks parent nodes to inherit classifications and resolves component and design top-level wrappers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selectors and Pseudo-Elements Detection`}),` — Compares token names against lists of standard CSS selectors and pseudo-elements (like `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`::before`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves resolved variable types to the `,(0,c.jsx)(t.code,{children:`008-variable`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToVariable, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVariable(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`type-resolution-operations`,children:`Type Resolution Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to iterate through all properties and assign their resolved type classifications.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCategory(item: PropertyItem): PropertyType | undefined`}),` — Infers type based on categories like `,(0,c.jsx)(t.code,{children:`root`}),` or `,(0,c.jsx)(t.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByMain(design: string, component: string | undefined, name: string): PropertyType | undefined`}),` — Checks if the token represents the main design or component namespace wrapper.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByProperty(name: string): PropertyType | undefined`}),` — Matches the token name against a standard list of CSS properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySelector(name: string): PropertyType | undefined`}),` — Matches the token name against standard CSS pseudo-classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySubclass(item: PropertyItem): PropertyType | undefined`}),` — Identifies subclass structures based on empty configurations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVarParent(parent?: PropertyItem): PropertyType | undefined`}),` — Inherits `,(0,c.jsx)(t.code,{children:`var`}),` classification if the parent element has variable type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByNone(item: PropertyItem): PropertyType | undefined`}),` — Returns type `,(0,c.jsx)(t.code,{children:`none`}),` if the token has explicit hidden type config.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByVirtual(name: string): PropertyType | undefined`}),` — Matches the token name against standard CSS pseudo-elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findType(name: string, item: PropertyItem): PropertyType`}),` — Central orchestrator that runs all sub-matchers to determine the exact property type fallback.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};