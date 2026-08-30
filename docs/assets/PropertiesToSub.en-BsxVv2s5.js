import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToSub - Nested Interpolation Value Resolver`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestosub-class`,children:`PropertiesToSub Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToSub`}),` class resolves nested brace interpolation expressions (such as `,(0,c.jsx)(t.code,{children:`calc({ref.width} * 2)`}),`) within token values recursively. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nested Value Resolution`}),` — Recursively resolves sub-braces containing variable references within larger string values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Circular Check Safeguards`}),` — Caps lookup operations at 24 iterations to prevent infinite lookups on circular definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Brace Stripping`}),` — Automatically strips outer braces when the token has `,(0,c.jsx)(t.code,{children:`fullValue`}),` set to true.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves resolved sub-values to the `,(0,c.jsx)(t.code,{children:`006-sub`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`resolving-operations`,children:`Resolving Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find and resolve all properties with sub-values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Returns true if the token value contains a nested sub-value brace pattern.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Iteratively resolves brace interpolation markers using the global properties items registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Resolves sub-values for a single property item and strips braces if `,(0,c.jsx)(t.code,{children:`fullValue`}),` is flagged.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};