import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSub - Nested Interpolation Value Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestosub-class`,children:`PropertiesToSub Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToSub`}),` class resolves nested brace interpolation expressions (such as `,(0,c.jsx)(n.code,{children:`calc({ref.width} * 2)`}),`) within token values recursively. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nested Value Resolution`}),` — Recursively resolves sub-braces containing variable references within larger string values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Circular Check Safeguards`}),` — Caps lookup operations at 24 iterations to prevent infinite lookups on circular definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Brace Stripping`}),` — Automatically strips outer braces when the token has `,(0,c.jsx)(n.code,{children:`fullValue`}),` set to true.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves resolved sub-values to the `,(0,c.jsx)(n.code,{children:`006-sub`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`resolving-operations`,children:`Resolving Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find and resolve all properties with sub-values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Returns true if the token value contains a nested sub-value brace pattern.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Iteratively resolves brace interpolation markers using the global properties items registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Resolves sub-values for a single property item and strips braces if `,(0,c.jsx)(n.code,{children:`fullValue`}),` is flagged.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};