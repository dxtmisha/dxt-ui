import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma-code/Functions/getFigmaItemByIdOrRoot - Get Figma node or document root`}),`
`,(0,l.jsx)(t.h1,{id:`getfigmaitembyidorroot`,children:(0,l.jsx)(t.code,{children:`getFigmaItemByIdOrRoot`})}),`
`,(0,l.jsxs)(t.p,{children:[`An asynchronous utility that retrieves a Figma node by its ID. If the ID is not provided or the node is not found, it falls back to the document root (`,(0,l.jsx)(t.code,{children:`figma.root`}),`). This is useful for operations that can target either a specific element or the entire document.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Optional) The identifier (ID) of the Figma node.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<T>`}),` — The retrieved Figma node or `,(0,l.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getFigmaItemByIdOrRoot } from '@dxtmisha/figma-code'

async function getStorageNode(id?: string) {
// If id is provided, tries to get that node.
// Otherwise, returns figma.root.
const node = await getFigmaItemByIdOrRoot(id)

console.log('Target node name:', node.name)
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};