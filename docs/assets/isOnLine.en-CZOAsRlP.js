import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isOnLine - Check if device is online`}),`
`,(0,c.jsx)(t.h1,{id:`isonline`,children:(0,c.jsx)(t.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(t.p,{children:`A simple utility to determine the device's current connectivity status.`}),`
`,(0,c.jsxs)(t.p,{children:[`This function checks the `,(0,c.jsx)(t.code,{children:`navigator.onLine`}),` property. If the environment is not a browser (e.g., during Server-Side Rendering), it returns `,(0,c.jsx)(t.code,{children:`true`}),` by default to ensure that any network-dependent logic is not prematurely blocked.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if the device is online or if the environment is not a browser. Returns `,(0,c.jsx)(t.code,{children:`false`}),` if the device is explicitly offline.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Device is online!')
} else {
  console.log('Device is offline.')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};