import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/initScriptsJson - Hydration Scripts Generation`}),`
`,(0,c.jsx)(t.h1,{id:`initscriptsjson`,children:(0,c.jsx)(t.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`A function to generate the JSON scripts required for data hydration on the client side. It collects the current state from `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` and `,(0,c.jsx)(t.code,{children:`Api`}),` hydration data, combining them into a single string of HTML scripts.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A string containing JSON scripts (e.g., `,(0,c.jsx)(t.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Insert hydrationScripts into your HTML template before the closing </body> tag
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};