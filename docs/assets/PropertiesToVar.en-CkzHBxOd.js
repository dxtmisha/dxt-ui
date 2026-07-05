import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToVar - CSS Variable Value Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestovar-class`,children:`PropertiesToVar Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),` class converts design tokens representing variables into standard CSS custom properties (`,(0,c.jsx)(n.code,{children:`--var-name: values`}),`). It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CSS Variable Synthesis`}),` — Converts variable token names into double-dash prefixed custom properties (`,(0,c.jsx)(n.code,{children:`--prefix-name`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Math Expression Wrapping`}),` — Automatically wraps standard mathematical expressions (`,(0,c.jsx)(n.code,{children:`+`}),`, `,(0,c.jsx)(n.code,{children:`-`}),`, `,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`/`}),`) inside `,(0,c.jsx)(n.code,{children:`calc(...)`}),` blocks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reference Expansion`}),` — Resolves brace references into nested CSS `,(0,c.jsx)(n.code,{children:`var(...)`}),` formats, supporting default fallbacks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Opacity Flag Resolution`}),` — Safely detects color variables containing opacity attributes, tagging them with transparency metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the resolved variable definitions to the `,(0,c.jsx)(n.code,{children:`020-var`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`resolving-operations`,children:`Resolving Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to retrieve variable type nodes, synthesize variable names, format their CSS values, and resolve color transparency.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(property: PropertyItemsItem): string`}),` — Constructs standard CSS property naming keys (e.g. `,(0,c.jsx)(n.code,{children:`--sys-color-primary`}),`) scoped by ancestor namespaces.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toCalculator(value: string, full?: boolean): string`}),` — Wraps mathematical equations in `,(0,c.jsx)(n.code,{children:`calc()`}),` statements if not already formatted.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toLink(value: string): string`}),` — Normalizes link index keys to standard variable name segments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(value: string, defaultValue?: PropertyItem['_default']): string`}),` — Resolves nested brace references into standard CSS `,(0,c.jsx)(n.code,{children:`var(--name, fallback)`}),` values recursively.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNone(parents: PropertyItemsParent[]): boolean`}),` — Returns true if any parent element is of type `,(0,c.jsx)(n.code,{children:`PropertyType.none`}),`, representing a hidden property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isColorWithOpacity(property: PropertyItemsItem): boolean`}),` — Safely traverses color references to verify if transparency properties are active.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};