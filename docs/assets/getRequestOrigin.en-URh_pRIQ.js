import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/getRequestOrigin - Get Request Origin`}),`
`,(0,c.jsx)(t.h1,{id:`getrequestorigin`,children:(0,c.jsx)(t.code,{children:`getRequestOrigin`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function that extracts the origin (protocol and domain) from a `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Request`,rel:`nofollow`,children:`Request`}),` object. This is useful for getting the base URL of the current request without paths or query parameters.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — A standard Web API Request object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The origin string (e.g., `,(0,c.jsx)(t.code,{children:`https://example.com`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestOrigin } from '@dxtmisha/nitro-basic'

// Example with a Request object
const request = new Request('https://dxtmisha.com/docs/api?query=1')
const origin = getRequestOrigin(request)

// Result: "https://dxtmisha.com"
console.log(origin)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};