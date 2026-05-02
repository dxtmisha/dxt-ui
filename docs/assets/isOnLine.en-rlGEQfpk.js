import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isOnLine - Check if device is online`}),`
`,(0,c.jsx)(n.h1,{id:`isonline`,children:(0,c.jsx)(n.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(n.p,{children:`A simple utility to determine the device's current connectivity status.`}),`
`,(0,c.jsxs)(n.p,{children:[`This function checks the `,(0,c.jsx)(n.code,{children:`navigator.onLine`}),` property. If the environment is not a browser (e.g., during Server-Side Rendering), it returns `,(0,c.jsx)(n.code,{children:`true`}),` by default to ensure that any network-dependent logic is not prematurely blocked.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the device is online or if the environment is not a browser. Returns `,(0,c.jsx)(n.code,{children:`false`}),` if the device is explicitly offline.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Device is online!')
} else {
  console.log('Device is offline.')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};