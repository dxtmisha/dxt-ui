import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToMedia - Media Query and Container Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestomedia-class`,children:`PropertiesToMedia Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToMedia`}),` class processes design tokens representing media queries and container queries, translating aliases and raw groups into standard CSS `,(0,c.jsx)(n.code,{children:`@media`}),` or `,(0,c.jsx)(n.code,{children:`@container`}),` constraints. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media Alias Expansion`}),` — Looks up custom viewport abbreviations (e.g. `,(0,c.jsx)(n.code,{children:`md`}),`, `,(0,c.jsx)(n.code,{children:`lg`}),`) using design configurations and expands them into pixel definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Query Type Synthesis`}),` — Determines min-width and max-width ranges based on properties named `,(0,c.jsx)(n.code,{children:`media`}),`, `,(0,c.jsx)(n.code,{children:`mediaMax`}),`, `,(0,c.jsx)(n.code,{children:`container`}),`, or `,(0,c.jsx)(n.code,{children:`containerMax`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media Group Expansion`}),` — Generates groups of state modifiers for each active media/container breakpoint defined in the design system.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the media query output to the `,(0,c.jsx)(n.code,{children:`040-media`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToMedia, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMedia(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`transform-operations`,children:`Transform Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find and expand media query group nodes and translate individual query parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(design: string, name: string, item: PropertyItem): string`}),` — Converts media configuration parameters into standard CSS query criteria (e.g., `,(0,c.jsx)(n.code,{children:`(min-width: 768px)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypeByGroup(item: PropertyItem): PropertyType`}),` — Resolves the base property type from a container or media group item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueForMedia(design: string, values: string[]): string[]`}),` — Replaces responsive aliases with their configured pixel measurements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueGroup(design: string, name: string, item: PropertyItem, type: PropertyType): Record<string, PropertyItem> | undefined`}),` — Creates separate state modifiers for each breakpoint within a media group structure.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};