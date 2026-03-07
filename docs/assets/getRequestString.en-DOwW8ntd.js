import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getRequestString - Build query string"}),`
`,e.jsx(n.h1,{id:"getrequeststring",children:e.jsx(n.code,{children:"getRequestString"})}),`
`,e.jsxs(n.p,{children:["Transforms a dictionary object into a URL-style formatted string (by default, a query string for GET parameters) where keys and values are joined by designated delimiters. Before string construction, all values are cast to strings, trimmed of whitespace, and passed through ",e.jsx(n.code,{children:"encodeURIComponent"})," to ensure safe URL transmission. Keys are sorted alphabetically."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: Record<string, any>"})," — The data object to convert."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sign: string"})," — (Optional) The character linking a key to its value. Defaults to ",e.jsx(n.code,{children:"="}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"separator: string"})," — (Optional) The character separating pairs. Defaults to ",e.jsx(n.code,{children:"&"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A formatted and sorted string."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'comfortable chair'
}

console.log(getRequestString(params)) 
// 'page=2&search=comfortable%20chair&sort=desc'
`})})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
