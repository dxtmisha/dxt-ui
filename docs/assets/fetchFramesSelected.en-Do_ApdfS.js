import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchFramesSelected - Fetch selected frames`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframesselected`,children:(0,l.jsx)(n.code,{children:`fetchFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for retrieving the IDs of currently selected frames from the Figma plugin. It facilitates communication between the Figma UI and the plugin side to access the user's current selection.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (selected: string[]) => void`}),` — The function executed once the list of selected frame IDs is received.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFramesSelected } from '@dxtmisha/figma'

// Fetch selected frames and log their IDs
fetchFramesSelected((selectedIds) => {
if (selectedIds.length === 0) {
  console.log('No frames selected')
} else {
  console.log('Selected frame IDs:', selectedIds)
}
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};