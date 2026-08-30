import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Composables/useHeaders - Get Headers`}),`
`,(0,c.jsx)(t.h1,{id:`useheaders`,children:(0,c.jsx)(t.code,{children:`useHeaders`})}),`
`,(0,c.jsxs)(t.p,{children:[`A composable function that provides access to the API headers of the current request. It can return either the entire `,(0,c.jsx)(t.code,{children:`Headers`}),` object or the value of a specific header by its name.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Optional header name.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Headers | undefined`}),` — If no name is provided, returns the entire headers object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — If a name is provided, returns the value of that header.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useHeaders } from '@dxtmisha/nitro-basic'

// Get a specific header
const contentType = useHeaders('Content-Type')

// Get all headers
const headers = useHeaders()
if (headers) {
  console.log(headers.get('Authorization'))
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};