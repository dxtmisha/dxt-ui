import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/getFigmaItemByIdOrRoot - Get Figma node or document root`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(n.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(n.p,{children:[`An asynchronous utility that retrieves a Figma node by its ID. If the ID is not provided or the node is not found, it falls back to the document root (`,(0,l.jsx)(n.code,{children:`figma.root`}),`). This is useful for operations that can target either a specific element or the entire document.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Optional) The identifier (ID) of the Figma node.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<T>`}),` — The retrieved Figma node or `,(0,l.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// If id is provided, tries to get that node.
// Otherwise, returns figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Target node name:', node.name)
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};