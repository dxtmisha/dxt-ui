import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/figma/Functions/fetchFrameStyles - Fetch frame styles`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframestyles`,children:(0,l.jsx)(n.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for retrieving style information for specified frames from the Figma plugin. It allows access to CSS styles, JSON data, and text content for nodes and their children.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — The function executed once the style data for the requested frames is received.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Fetch styles for frames and log the result
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('Frame ID:', item.id)
  console.log('Style data:', item.data)
})
})
`}),`
`,(0,l.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(n.p,{children:[`An array of `,(0,l.jsx)(n.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),` objects.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Unique frame identifier.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`data: UiFigmaFrameStylesList`}),` — List of style data for the frame.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(n.p,{children:[`Extends `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Frame name.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Unique element identifier.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Optional) Compact node data in JSON format.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text?: string`}),` — (Optional) Text content (for text nodes).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Optional) Map of CSS styles for the element.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Optional) Map of CSS styles for children elements.`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};