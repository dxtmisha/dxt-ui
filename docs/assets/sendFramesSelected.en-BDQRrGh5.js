import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/sendFramesSelected - Update frame selection state`}),`
`,(0,l.jsx)(n.h1,{id:`sendframesselected`,children:(0,l.jsx)(n.code,{children:`sendFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for notifying the Figma plugin to update the selection state of a specific frame. This is typically used to add or remove frames from a multi-selection list managed by the plugin.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — The ID of the frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selected: boolean`}),` — The desired selection state (true to select, false to deselect).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendFramesSelected } from '@dxtmisha/figma'

// Add a frame to the selection
sendFramesSelected('12:34', true)

// Remove a frame from the selection
sendFramesSelected('12:34', false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};