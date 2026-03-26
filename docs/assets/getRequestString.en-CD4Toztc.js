import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getRequestString - Build query string`}),`
`,(0,c.jsx)(n.h1,{id:`getrequeststring`,children:(0,c.jsx)(n.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(n.p,{children:[`Transforms a dictionary object into a URL-style formatted string (by default, a query string for GET parameters) where keys and values are joined by designated delimiters. Before string construction, all values are cast to strings, trimmed of whitespace, and passed through `,(0,c.jsx)(n.code,{children:`encodeURIComponent`}),` to ensure safe URL transmission. Keys are sorted alphabetically.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Record<string, any>`}),` — The data object to convert.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sign: string`}),` — (Optional) The character linking a key to its value. Defaults to `,(0,c.jsx)(n.code,{children:`=`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — (Optional) The character separating pairs. Defaults to `,(0,c.jsx)(n.code,{children:`&`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A formatted and sorted string.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'comfortable chair'
}

console.log(getRequestString(params)) 
// 'page=2&search=comfortable%20chair&sort=desc'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};