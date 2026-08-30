import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesToVar - CSS Variable Converter`}),`
`,(0,c.jsx)(t.h1,{id:`stylestovar-class`,children:`StylesToVar Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` class is used to convert design properties into CSS variables. It can handle individual variables or process all nested variables within a branch.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Batch Variable Processing`}),` — Can iterate through a branch and generate CSS variable declarations for all sub-properties marked as variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Individual Variable Generation`}),` — Can also be used to generate a single variable for the current property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Color-to-RGB Transformation`}),` — Automatically converts color values into RGB format (wrapped in `,(0,c.jsx)(t.code,{children:`ui.toColorRbg`}),`) for better compatibility with opacity management.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Opacity Support`}),` — Generates additional `,(0,c.jsx)(t.code,{children:`-opacity`}),` variables if the property has opacity data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Value Normalization`}),` — Ensures values are correctly escaped and defaults to `,(0,c.jsx)(t.code,{children:`unset`}),` if the value is missing.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` converter with the required property branch.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — the indentation string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — not typically used for variable blocks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — indicates if this is the first element (optional).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — The main entry point. Orchestrates the generation of one or multiple CSS variables based on the property structure.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};