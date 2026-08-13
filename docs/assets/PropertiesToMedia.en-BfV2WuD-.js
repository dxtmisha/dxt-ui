import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToMedia - Media Query and Container Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestomedia-class`,children:`PropertiesToMedia Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToMedia`}),` class processes design tokens representing media queries and container queries, translating aliases and raw groups into standard CSS `,(0,c.jsx)(t.code,{children:`@media`}),` or `,(0,c.jsx)(t.code,{children:`@container`}),` constraints. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Media Alias Expansion`}),` — Looks up custom viewport abbreviations (e.g. `,(0,c.jsx)(t.code,{children:`md`}),`, `,(0,c.jsx)(t.code,{children:`lg`}),`) using design configurations and expands them into pixel definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Query Type Synthesis`}),` — Determines min-width and max-width ranges based on properties named `,(0,c.jsx)(t.code,{children:`media`}),`, `,(0,c.jsx)(t.code,{children:`mediaMax`}),`, `,(0,c.jsx)(t.code,{children:`container`}),`, or `,(0,c.jsx)(t.code,{children:`containerMax`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Media Group Expansion`}),` — Generates groups of state modifiers for each active media/container breakpoint defined in the design system.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the media query output to the `,(0,c.jsx)(t.code,{children:`040-media`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToMedia, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMedia(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`transform-operations`,children:`Transform Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to find and expand media query group nodes and translate individual query parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(design: string, name: string, item: PropertyItem): string`}),` — Converts media configuration parameters into standard CSS query criteria (e.g., `,(0,c.jsx)(t.code,{children:`(min-width: 768px)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypeByGroup(item: PropertyItem): PropertyType`}),` — Resolves the base property type from a container or media group item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValueForMedia(design: string, values: string[]): string[]`}),` — Replaces responsive aliases with their configured pixel measurements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValueGroup(design: string, name: string, item: PropertyItem, type: PropertyType): Record<string, PropertyItem> | undefined`}),` — Creates separate state modifiers for each breakpoint within a media group structure.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};