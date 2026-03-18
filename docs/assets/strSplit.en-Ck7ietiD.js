import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/strSplit - Splitting a string with limit support (PHP style)"}),`
`,e.jsx(t.h1,{id:"strsplit",children:e.jsx(t.code,{children:"strSplit"})}),`
`,e.jsxs(t.p,{children:["Splits a string into an array of substrings using a specified separator. Unlike the standard ",e.jsx(t.code,{children:"String.prototype.split"}),", when a limit is specified, the remainder of the string is preserved in the last element of the array (similar to the ",e.jsx(t.code,{children:"explode"})," function in PHP)."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: number | string"})," — The original value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"separator: string"})," — The separator."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"limit?: number"})," — The maximum number of elements. If there are more elements than the limit, the last element will contain the entire remainder of the string."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"string[]"})," — An array of substrings."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { strSplit } from '@dxtmisha/functional-basic'

// Without limit
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// With limit 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// With a number as the value
strSplit(123.456, '.') // ['123', '456']
`})})]})}function m(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
