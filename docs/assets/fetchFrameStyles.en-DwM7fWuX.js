import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma/Functions/fetchFrameStyles - Fetch frame styles`}),`
`,(0,l.jsx)(t.h1,{id:`fetchframestyles`,children:(0,l.jsx)(t.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for retrieving style information for specified frames from the Figma plugin. It allows access to CSS styles, JSON data, and text content for nodes and their children.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — The function executed once the style data for the requested frames is received.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Fetch styles for frames and log the result
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('Frame ID:', item.id)
  console.log('Style data:', item.data)
})
})
`}),`
`,(0,l.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(t.p,{children:[`An array of `,(0,l.jsx)(t.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),` objects.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Unique frame identifier.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`data: UiFigmaFrameStylesList`}),` — List of style data for the frame.`]}),`
`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(t.p,{children:[`Extends `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Frame name.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Unique element identifier.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Optional) Compact node data in JSON format.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`text?: string`}),` — (Optional) Text content (for text nodes).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Optional) Map of CSS styles for the element.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Optional) Map of CSS styles for children elements.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};