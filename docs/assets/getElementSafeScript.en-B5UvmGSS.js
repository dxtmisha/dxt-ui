import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getElementSafeScript - Generation of a safe script for hydration`}),`
`,(0,c.jsx)(t.h1,{id:`getelementsafescript`,children:(0,c.jsx)(t.code,{children:`getElementSafeScript`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility for generating a safe `,(0,c.jsx)(t.code,{children:`<script type="application/json">`}),` tag, which is used for transferring data from the server to the client (hydration).`]}),`
`,(0,c.jsxs)(t.p,{children:[`This function automatically serializes data into JSON and escapes closing `,(0,c.jsx)(t.code,{children:`<\/script>`}),` tags, preventing XSS attacks and HTML parsing errors when embedding data.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — The unique identifier (ID) for the script tag.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: any`}),` — The data that needs to be serialized and stored in the tag.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A string containing the ready HTML script tag.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementSafeScript } from '@dxtmisha/functional-basic'

const data = { 
  user: 'Misha', 
  content: '<\/script><script>alert(1)<\/script>' 
}

console.log(getElementSafeScript('hydration-data', data))
// Result:
// <script id="hydration-data" type="application/json">
//   {"user":"Misha","content":"<\\\\/script><script>alert(1)<\\\\/script>"}
// <\/script>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};