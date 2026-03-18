import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/getExactSearchExp - Build a RegExp for exact match"}),`
`,e.jsx(t.h1,{id:"getexactsearchexp",children:e.jsx(t.code,{children:"getExactSearchExp"})}),`
`,e.jsxs(t.p,{children:["A utility that builds a case-insensitive ",e.jsx(t.code,{children:"RegExp"})," for an exact match of the given string."]}),`
`,e.jsxs(t.p,{children:["Unlike ",e.jsx(t.code,{children:"getSearchExp"}),", this function matches the entire string (with special characters escaped) without splitting it into separate words."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"search: string"})," — The search string for exact matching."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"RegExp"})," — A regular expression with the ",e.jsx(t.code,{children:"i"})," flag (case-insensitive)."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — not an exact match
`})})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
