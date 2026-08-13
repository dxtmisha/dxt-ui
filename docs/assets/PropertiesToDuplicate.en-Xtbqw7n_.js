import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToDuplicate - Duplicate Token Detector`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestoduplicate-class`,children:`PropertiesToDuplicate Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToDuplicate`}),` class scans the design token tree to locate identical structures or groups of values, flagging duplicate nodes to encourage reuse. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Identical Node Scanning`}),` — Compares the serialized string value of token configurations containing 5 or more keys.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Duplicate Grouping`}),` — Groups duplicate objects and derives a common camelCase name representing their logical connection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flagging Metadata`}),` — Writes a `,(0,c.jsx)(t.code,{children:`duplicate`}),` reference onto the items, allowing other processors to suggest optimization.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the duplicate reports to the `,(0,c.jsx)(t.code,{children:`910-duplicate`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToDuplicate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToDuplicate(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`detection-operations`,children:`Detection Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to run the duplicate check and apply flags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(properties: PropertiesDuplicateItem['properties']): string`}),` — Formats a camelCase group name using the unique path parts of the duplicated items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findDuplicate(list: PropertiesDuplicateList, valueDuplicate: string): PropertiesDuplicateList`}),` — Traverses the list of candidate configurations to find matches for a target duplicate string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initList(): PropertiesDuplicateList`}),` — Scans the entire token tree to build a flat map of complex configurations (having >= 5 keys) for comparison.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initDuplicate(list: PropertiesDuplicateList): PropertiesDuplicate`}),` — Groups matching entries into deduplicated groups.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};