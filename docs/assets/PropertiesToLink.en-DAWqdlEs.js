import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToLink - Reference Value Link Resolver`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestolink-class`,children:`PropertiesToLink Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToLink`}),` class resolves internal brace references (such as `,(0,c.jsx)(t.code,{children:`{design.component.property}`}),`) in the design token tree and replaces them with their actual values. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Link Resolving`}),` — Resolves multi-depth nested references by traversing the design token tree iteratively.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Circular Reference Protection`}),` — Caps depth traversal and flags processed references to avoid infinite loops.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Brace Syntax Matching`}),` — Validates link reference tokens matching the `,(0,c.jsx)(t.code,{children:`^{...}$`}),` pattern.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the resolved properties structure to the `,(0,c.jsx)(t.code,{children:`004-link`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToLink, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToLink(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`resolving-operations`,children:`Resolving Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to run a maximum of 32 passes resolving references until no more changes are found.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(design?: string, component?: string, properties?, parent?: string[]): boolean`}),` — Recursively scans properties, discovers links, resolves their source items, and queues them for splice injection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isType(item: PropertyItem): boolean`}),` — Checks if the property matches linkable types (e.g. `,(0,c.jsx)(t.code,{children:`link`}),`, `,(0,c.jsx)(t.code,{children:`var`}),`, `,(0,c.jsx)(t.code,{children:`property`}),`, `,(0,c.jsx)(t.code,{children:`selector`}),`, `,(0,c.jsx)(t.code,{children:`virtual`}),`, `,(0,c.jsx)(t.code,{children:`scss`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValue(value: PropertyItem['value']): value is string`}),` — Checks if the value is a valid reference string matching the brace pattern.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isIgnore(value: string): boolean`}),` — Checks if the reference is flagged to be ignored.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isLink(value: string): boolean`}),` — Checks if the reference link has already been resolved.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isData(value: PropertyItem['value']): value is PropertyList`}),` — Determines if the reference points to a complex object node.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(parent: string[], items: PropertyLinkItem[]): void`}),` — Splices resolved values back into their referencing parent nodes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addIgnore(value: string): void`}),` — Appends a value to the ignore array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLink(value: string): void`}),` — Registers a link as processed.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};