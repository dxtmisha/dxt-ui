import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getSeparatingSearchExp - Build a RegExp for space-separated word search`}),`
`,(0,c.jsx)(n.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that builds a case-insensitive global `,(0,c.jsx)(n.code,{children:`RegExp`}),` for searching strings containing `,(0,c.jsx)(n.strong,{children:`any`}),` of the words from the search string (separated by spaces).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Each word is split by spaces, escaped, and joined with the OR operator `,(0,c.jsx)(n.code,{children:`|`}),`. This is useful when you want to find a match for at least one of the entered words.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — A search string consisting of one or more space-separated words.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — A regular expression with flags `,(0,c.jsx)(n.code,{children:`ig`}),` (global, case-insensitive).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Special characters are escaped automatically
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};