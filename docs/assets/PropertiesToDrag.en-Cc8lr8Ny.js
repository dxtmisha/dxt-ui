import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToDrag - Branch Relocation Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestodrag-class`,children:`PropertiesToDrag Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToDrag`}),` class manages the translation and relocation of properties from one branch of the design token tree to another based on the `,(0,c.jsx)(n.code,{children:`drag`}),` directive. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Relocation Rules`}),` — Relocates property elements according to paths defined in `,(0,c.jsx)(n.code,{children:`drag`}),` properties (using `,(0,c.jsx)(n.code,{children:`.`}),` or `,(0,c.jsx)(n.code,{children:`..`}),` relative path segments).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Target Synthesizing`}),` — Automatically creates target directories and structures using `,(0,c.jsx)(n.code,{children:`dragSetting`}),` definitions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Atomic Value Moving`}),` — Merges values into the target elements while safely removing them from their source positions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the relocated property tree to the `,(0,c.jsx)(n.code,{children:`007-03-drag`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToDrag, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDrag(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`relocation-operations`,children:`Relocation Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to start reading and translating the property branches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDragSetting(property: PropertyItemsItem): Record<string, PropertyItem> | undefined`}),` — Evaluates `,(0,c.jsx)(n.code,{children:`dragSetting`}),` configuration to fetch the template properties representing target locations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(properties?: PropertyItemsItem): void`}),` — Recursively traverses the property tree to locate and process nodes targeted by `,(0,c.jsx)(n.code,{children:`drag`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`drag(parents: PropertyItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined`}),` — Performs path lookup (`,(0,c.jsx)(n.code,{children:`.`}),` for root, `,(0,c.jsx)(n.code,{children:`..`}),` for parent) to determine the exact destination node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toGo(item: PropertyItem, itemDrag: PropertyItem): boolean`}),` — Copies properties and values from the source element to the destination element.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};