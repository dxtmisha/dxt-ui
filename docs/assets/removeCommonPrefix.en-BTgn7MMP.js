import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/functional-basic/Functions/removeCommonPrefix - Remove common prefix"}),`
`,e.jsx(n.h1,{id:"removecommonprefix",children:e.jsx(n.code,{children:"removeCommonPrefix"})}),`
`,e.jsx(n.p,{children:"Removes a common prefix from the beginning of the main string. If the main string starts with the specified prefix, the function trims it and returns the string without leading and trailing whitespaces."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mainStr: string"})," — The main string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"prefix: string"})," — The prefix string to remove."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A new string without the prefix and trimmed of whitespaces."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Hello, world!', 'Hello, ')) // 'world!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function a(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};
