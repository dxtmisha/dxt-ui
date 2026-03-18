import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional-basic/Functions/getSeparatingSearchExp - Build a RegExp for space-separated word search"}),`
`,e.jsx(n.h1,{id:"getseparatingsearchexp",children:e.jsx(n.code,{children:"getSeparatingSearchExp"})}),`
`,e.jsxs(n.p,{children:["A utility that builds a case-insensitive global ",e.jsx(n.code,{children:"RegExp"})," for searching strings containing ",e.jsx(n.strong,{children:"any"})," of the words from the search string (separated by spaces)."]}),`
`,e.jsxs(n.p,{children:["Each word is split by spaces, escaped, and joined with the OR operator ",e.jsx(n.code,{children:"|"}),". This is useful when you want to find a match for at least one of the entered words."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: string"})," — A search string consisting of one or more space-separated words."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — A regular expression with flags ",e.jsx(n.code,{children:"ig"})," (global, case-insensitive)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Special characters are escaped automatically
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function p(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{p as default};
