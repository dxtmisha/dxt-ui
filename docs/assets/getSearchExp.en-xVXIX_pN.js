import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getSearchExp - Build a RegExp matching all search words`}),`
`,(0,c.jsx)(n.h1,{id:`getsearchexp`,children:(0,c.jsx)(n.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that builds a case-insensitive `,(0,c.jsx)(n.code,{children:`RegExp`}),` matching strings that contain `,(0,c.jsx)(n.strong,{children:`all`}),` words from the search string (in any order).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Each word is split by spaces, escaped, and wrapped in a positive lookahead `,(0,c.jsx)(n.code,{children:`(?=.*?word)`}),`. This makes it ideal for live search or multi-word filtering UIs.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — A search string consisting of one or more space-separated words.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` (optional, default: `,(0,c.jsx)(n.code,{children:`128`}),`) — The maximum allowed length of the search string.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — A regular expression with the `,(0,c.jsx)(n.code,{children:`i`}),` flag (case-insensitive).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`If the `,(0,c.jsx)(n.code,{children:`search`}),` string is empty, not a string, or exceeds the `,(0,c.jsx)(n.code,{children:`limit`}),`, it returns `,(0,c.jsx)(n.code,{children:`/^/`}),` (matching the start of any string).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

// Basic usage
const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — contains both words
regex.test('bar foo')      // true  — order doesn't matter
regex.test('foo only')     // false — word "bar" is missing

// Special characters are escaped automatically
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false

// Using a custom limit
const regex3 = getSearchExp('very long search string', 10)
regex3.test('any string')   // true — returns /^/ because search length > 10
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};