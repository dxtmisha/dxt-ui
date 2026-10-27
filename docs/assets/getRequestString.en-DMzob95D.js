import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getRequestString - Build query string`}),`
`,(0,c.jsx)(t.h1,{id:`getrequeststring`,children:(0,c.jsx)(t.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Transforms an object or array into a URL-style formatted string (by default, a query string for GET parameters) where keys and values are joined by designated delimiters. Keys are trimmed and URL-encoded via `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),`, values are converted to strings and URL-encoded, nested objects and arrays are recursively serialized using bracket notation (`,(0,c.jsx)(t.code,{children:`key[subKey]`}),` or `,(0,c.jsx)(t.code,{children:`key[]`}),`), and resulting entries are sorted alphabetically.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Record<string, unknown> | readonly unknown[]`}),` — The data object or array to convert.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sign?: string`}),` — (Optional) The character linking a key to its value. Defaults to `,(0,c.jsx)(t.code,{children:`'='`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator?: string`}),` — (Optional) The character separating key-value pairs. Defaults to `,(0,c.jsx)(t.code,{children:`'&'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subKey?: string`}),` — (Optional) Parent key prefix used for formatting nested object properties or array elements.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A formatted and sorted query string (or `,(0,c.jsx)(t.code,{children:`''`}),` if `,(0,c.jsx)(t.code,{children:`request`}),` is not an object or array).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'comfortable chair'
}

console.log(getRequestString(params)) 
// 'page=2&search=comfortable%20chair&sort=desc'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};