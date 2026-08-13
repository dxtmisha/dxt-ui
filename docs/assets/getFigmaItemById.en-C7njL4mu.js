import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma-code/Functions/getFigmaItemById - Get Figma item by ID`}),`
`,(0,l.jsx)(t.h1,{id:`getfigmaitembyid`,children:(0,l.jsx)(t.code,{children:`getFigmaItemById`})}),`
`,(0,l.jsxs)(t.p,{children:[`An asynchronous utility for retrieving a Figma node by its ID and wrapping it in a `,(0,l.jsx)(t.code,{children:`FigmaItem`}),` class instance. This simplifies further interactions with the node, such as type checking, selection, or exporting.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — The identifier (ID) of the Figma node.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<FigmaItem | undefined>`}),` — A `,(0,l.jsx)(t.code,{children:`FigmaItem`}),` instance wrapping the node, or `,(0,l.jsx)(t.code,{children:`undefined`}),` if the node was not found.`]}),`
`,(0,l.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(t.h3,{id:`figmaitem`,children:`FigmaItem`}),`
`,(0,l.jsx)(t.p,{children:`A wrapper class for Figma nodes that provides high-level methods for:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Checking node types (`,(0,l.jsx)(t.code,{children:`isFrame()`}),`, `,(0,l.jsx)(t.code,{children:`isText()`}),`, etc.).`]}),`
`,(0,l.jsx)(t.li,{children:`Accessing parents and children.`}),`
`,(0,l.jsx)(t.li,{children:`Exporting to various formats.`}),`
`,(0,l.jsx)(t.li,{children:`Managing selection and viewport focus.`}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getFigmaItemById } from '@dxtmisha/figma-code'

async function highlightFrame(frameId: string) {
const item = await getFigmaItemById(frameId)

if (item && item.isFrame()) {
  item.toSelection()
  console.log('Selected frame:', item.getName())
} else {
  console.log('Frame not found or is not a frame node')
}
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};