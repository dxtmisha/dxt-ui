import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/getFigmaItemById - Get Figma item by ID`}),`
`,(0,l.jsx)(n.h1,{id:`getfigmaitembyid`,children:(0,l.jsx)(n.code,{children:`getFigmaItemById`})}),`
`,(0,l.jsxs)(n.p,{children:[`An asynchronous utility for retrieving a Figma node by its ID and wrapping it in a `,(0,l.jsx)(n.code,{children:`FigmaItem`}),` class instance. This simplifies further interactions with the node, such as type checking, selection, or exporting.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — The identifier (ID) of the Figma node.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<FigmaItem | undefined>`}),` — A `,(0,l.jsx)(n.code,{children:`FigmaItem`}),` instance wrapping the node, or `,(0,l.jsx)(n.code,{children:`undefined`}),` if the node was not found.`]}),`
`,(0,l.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(n.h3,{id:`figmaitem`,children:`FigmaItem`}),`
`,(0,l.jsx)(n.p,{children:`A wrapper class for Figma nodes that provides high-level methods for:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Checking node types (`,(0,l.jsx)(n.code,{children:`isFrame()`}),`, `,(0,l.jsx)(n.code,{children:`isText()`}),`, etc.).`]}),`
`,(0,l.jsx)(n.li,{children:`Accessing parents and children.`}),`
`,(0,l.jsx)(n.li,{children:`Exporting to various formats.`}),`
`,(0,l.jsx)(n.li,{children:`Managing selection and viewport focus.`}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};