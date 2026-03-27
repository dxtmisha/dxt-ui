import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getExactSearchExp - Build a RegExp for exact match`}),`
`,(0,c.jsx)(n.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(n.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that builds a case-insensitive `,(0,c.jsx)(n.code,{children:`RegExp`}),` for an exact match of the given string.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike `,(0,c.jsx)(n.code,{children:`getSearchExp`}),`, this function matches the entire string (with special characters escaped) without splitting it into separate words.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — The search string for exact matching.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — A regular expression with the `,(0,c.jsx)(n.code,{children:`i`}),` flag (case-insensitive).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — not an exact match
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};