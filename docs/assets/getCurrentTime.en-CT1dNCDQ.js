import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getCurrentTime - Get current time`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrenttime`,children:(0,c.jsx)(n.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the current time in milliseconds.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Warning (SSR):`}),` Using this function for rendering in SSR will almost certainly lead to hydration mismatches because the timestamp on the server will differ from the timestamp on the client.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The function is a wrapper around `,(0,c.jsx)(n.code,{children:`Date.now()`}),` and allows you to quickly get a timestamp.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
Current time in milliseconds (number).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Result: 1710498600000 (example)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};