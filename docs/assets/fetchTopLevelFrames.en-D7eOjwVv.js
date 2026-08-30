import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma/Functions/fetchTopLevelFrames - Fetch top-level frames`}),`
`,(0,l.jsx)(t.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(t.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for retrieving the list of all top-level frames currently present in the Figma document. It facilitates communication between the Figma UI and the plugin side to access the document structure.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — The function executed once the list of top-level frames is received.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(t.p,{children:[`An array of `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Name of the frame.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Unique identifier of the element.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`image?: Uint8Array | string`}),` — (Optional) The frame's preview image as a byte array or Base64 string.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Fetch all top-level frames and log their details
fetchTopLevelFrames((frames) => {
console.log('Top-level frames found:', frames.length)

frames.forEach(frame => {
  console.log(\`Frame: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};