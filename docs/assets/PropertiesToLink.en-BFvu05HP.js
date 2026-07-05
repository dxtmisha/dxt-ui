import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToLink - Reference Value Link Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestolink-class`,children:`PropertiesToLink Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToLink`}),` class resolves internal brace references (such as `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),`) in the design token tree and replaces them with their actual values. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Link Resolving`}),` — Resolves multi-depth nested references by traversing the design token tree iteratively.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Circular Reference Protection`}),` — Caps depth traversal and flags processed references to avoid infinite loops.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Brace Syntax Matching`}),` — Validates link reference tokens matching the `,(0,c.jsx)(n.code,{children:`^{...}$`}),` pattern.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the resolved properties structure to the `,(0,c.jsx)(n.code,{children:`004-link`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToLink, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToLink(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`resolving-operations`,children:`Resolving Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to run a maximum of 32 passes resolving references until no more changes are found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(design?: string, component?: string, properties?, parent?: string[]): boolean`}),` — Recursively scans properties, discovers links, resolves their source items, and queues them for splice injection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isType(item: PropertyItem): boolean`}),` — Checks if the property matches linkable types (e.g. `,(0,c.jsx)(n.code,{children:`link`}),`, `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`virtual`}),`, `,(0,c.jsx)(n.code,{children:`scss`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(value: PropertyItem['value']): value is string`}),` — Checks if the value is a valid reference string matching the brace pattern.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isIgnore(value: string): boolean`}),` — Checks if the reference is flagged to be ignored.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLink(value: string): boolean`}),` — Checks if the reference link has already been resolved.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isData(value: PropertyItem['value']): value is PropertyList`}),` — Determines if the reference points to a complex object node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(parent: string[], items: PropertyLinkItem[]): void`}),` — Splices resolved values back into their referencing parent nodes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addIgnore(value: string): void`}),` — Appends a value to the ignore array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLink(value: string): void`}),` — Registers a link as processed.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};