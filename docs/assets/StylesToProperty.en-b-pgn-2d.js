import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesToProperty - CSS Property Generator`}),`
`,(0,c.jsx)(t.h1,{id:`stylestoproperty-class`,children:`StylesToProperty Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesToProperty`}),` class is responsible for converting design properties into standard CSS properties or SCSS mixin calls. It handles variable generation, special property formatting, and auxiliary values for things like opacity.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standard CSS Properties`}),` — Generates property-value pairs (e.g., `,(0,c.jsx)(t.code,{children:`margin-top: 10px;`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SCSS Mixin Integration`}),` — Automatically converts specific properties into mixin calls if they are registered in `,(0,c.jsx)(t.code,{children:`styleTypes`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS Variable Generation`}),` — Can generate custom CSS variables if the `,(0,c.jsx)(t.code,{children:`varKey`}),` flag is set on the property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auxiliary Value Initialization`}),` — Automatically includes initialization calls for opacity-related properties if the base property is missing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sorting and Spacing`}),` — Adds vertical spacing between properties if their sort index changes.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the `,(0,c.jsx)(t.code,{children:`StylesToProperty`}),` converter with the required property branch.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — the indentation string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — not typically used for properties as they are leaf nodes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — indicates if this is the first element (optional).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — The main entry point. Orchestrates the transformation, including variable generation and mixin resolution.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};