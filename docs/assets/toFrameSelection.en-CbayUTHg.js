import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/toFrameSelection - Select and focus frame`}),`
`,(0,l.jsx)(n.h1,{id:`toframeselection`,children:(0,l.jsx)(n.code,{children:`toFrameSelection`})}),`
`,(0,l.jsx)(n.p,{children:`An asynchronous utility that finds a Figma node by its ID, moves the viewport to it, and selects it. If the node is on a different page, it automatically switches to that page.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Optional) The identifier (ID) of the node to select.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toFrameSelection } from '@dxtmisha/figma-code'

async function jumpToElement(nodeId: string) {
await toFrameSelection(nodeId)
console.log('Viewport moved and node selected')
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};