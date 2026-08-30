import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma/Functions/sendFrameStyles - Send frame styles request`}),`
`,(0,l.jsx)(t.h1,{id:`sendframestyles`,children:(0,l.jsx)(t.code,{children:`sendFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for sending a request to the Figma plugin to retrieve style information for specified frames.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`attributes: UiFigmaFrameStylesMessengerAttributes`}),` — The attributes for the request, including frame IDs and options.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendFrameStyles } from '@dxtmisha/figma'

// Request styles for a specific frame
sendFrameStyles({
ids: '12:34'
})

// Request styles for multiple frames including children
sendFrameStyles({
ids: ['12:34', '56:78'],
children: true
})
`}),`
`,(0,l.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerattributes`,children:`UiFigmaFrameStylesMessengerAttributes`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`ids: string | string[]`}),` — Unique frame ID or array of IDs.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`children?: boolean`}),` — (Optional) Whether to include styles of child elements.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};