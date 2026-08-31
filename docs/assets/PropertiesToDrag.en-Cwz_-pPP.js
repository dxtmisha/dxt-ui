import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToDrag - Branch Relocation Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestodrag-class`,children:`PropertiesToDrag Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToDrag`}),` class manages the translation and relocation of properties from one branch of the design token tree to another based on the `,(0,c.jsx)(t.code,{children:`drag`}),` directive. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Relocation Rules`}),` — Relocates property elements according to paths defined in `,(0,c.jsx)(t.code,{children:`drag`}),` properties (using `,(0,c.jsx)(t.code,{children:`.`}),` or `,(0,c.jsx)(t.code,{children:`..`}),` relative path segments).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Target Synthesizing`}),` — Automatically creates target directories and structures using `,(0,c.jsx)(t.code,{children:`dragSetting`}),` definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Atomic Value Moving`}),` — Merges values into the target elements while safely removing them from their source positions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the relocated property tree to the `,(0,c.jsx)(t.code,{children:`007-03-drag`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToDrag, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDrag(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`relocation-operations`,children:`Relocation Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to start reading and translating the property branches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDragSetting(property: PropertyItemsItem): Record<string, PropertyItem> | undefined`}),` — Evaluates `,(0,c.jsx)(t.code,{children:`dragSetting`}),` configuration to fetch the template properties representing target locations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(properties?: PropertyItemsItem): void`}),` — Recursively traverses the property tree to locate and process nodes targeted by `,(0,c.jsx)(t.code,{children:`drag`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`drag(parents: PropertyItemsParent[], item: PropertyItem, setting: Record<string, PropertyItem>): PropertyItem | undefined`}),` — Performs path lookup (`,(0,c.jsx)(t.code,{children:`.`}),` for root, `,(0,c.jsx)(t.code,{children:`..`}),` for parent) to determine the exact destination node.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toGo(item: PropertyItem, itemDrag: PropertyItem): boolean`}),` — Copies properties and values from the source element to the destination element.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};