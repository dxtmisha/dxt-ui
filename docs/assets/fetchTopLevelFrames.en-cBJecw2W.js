import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchTopLevelFrames - Fetch top-level frames`}),`
`,(0,l.jsx)(n.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(n.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for retrieving the list of all top-level frames currently present in the Figma document. It facilitates communication between the Figma UI and the plugin side to access the document structure.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — The function executed once the list of top-level frames is received.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(n.p,{children:[`An array of `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Name of the frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Unique identifier of the element.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — (Optional) The frame's preview image as a byte array or Base64 string.`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Fetch all top-level frames and log their details
fetchTopLevelFrames((frames) => {
console.log('Top-level frames found:', frames.length)

frames.forEach(frame => {
  console.log(\`Frame: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};