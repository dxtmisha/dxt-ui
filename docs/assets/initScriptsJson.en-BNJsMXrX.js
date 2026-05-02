import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initScriptsJson - Hydration Scripts Generation`}),`
`,(0,c.jsx)(n.h1,{id:`initscriptsjson`,children:(0,c.jsx)(n.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`A function to generate the JSON scripts required for data hydration on the client side. It collects the current state from `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` and `,(0,c.jsx)(n.code,{children:`Api`}),` hydration data, combining them into a single string of HTML scripts.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A string containing JSON scripts (e.g., `,(0,c.jsx)(n.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Insert hydrationScripts into your HTML template before the closing </body> tag
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};