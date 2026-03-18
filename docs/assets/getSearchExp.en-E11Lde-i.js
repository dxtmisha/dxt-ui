import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getSearchExp - Build a RegExp matching all search words"}),`
`,e.jsx(r.h1,{id:"getsearchexp",children:e.jsx(r.code,{children:"getSearchExp"})}),`
`,e.jsxs(r.p,{children:["A utility that builds a case-insensitive global ",e.jsx(r.code,{children:"RegExp"})," matching strings that contain ",e.jsx(r.strong,{children:"all"})," words from the search string (in any order)."]}),`
`,e.jsxs(r.p,{children:["Each word is split by spaces, escaped, and wrapped in a lookahead ",e.jsx(r.code,{children:"(?=.*?word)"}),". This makes it ideal for live search or multi-word filtering UIs."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"search: string"})," — A search string consisting of one or more space-separated words."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Returns:"}),`
`,e.jsx(r.code,{children:"RegExp"})," — A regular expression with flags ",e.jsx(r.code,{children:"ig"})," (global, case-insensitive)."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { getSearchExp } from '@dxtmisha/functional-basic'

const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — contains both words
regex.test('bar foo')      // true  — order doesn't matter
regex.test('foo only')     // false — word bar is missing

// Special characters are escaped automatically
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false
`})})]})}function x(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
