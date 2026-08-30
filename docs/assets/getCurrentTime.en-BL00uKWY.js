import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getCurrentTime - Get current time`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrenttime`,children:(0,c.jsx)(t.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the current time in milliseconds.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Warning (SSR):`}),` Using this function for rendering in SSR will almost certainly lead to hydration mismatches because the timestamp on the server will differ from the timestamp on the client.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The function is a wrapper around `,(0,c.jsx)(t.code,{children:`Date.now()`}),` and allows you to quickly get a timestamp.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
Current time in milliseconds (number).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Result: 1710498600000 (example)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};