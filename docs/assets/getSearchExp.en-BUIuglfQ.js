import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getSearchExp - Build a RegExp matching all search words`}),`
`,(0,c.jsx)(t.h1,{id:`getsearchexp`,children:(0,c.jsx)(t.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that builds a case-insensitive `,(0,c.jsx)(t.code,{children:`RegExp`}),` matching strings that contain `,(0,c.jsx)(t.strong,{children:`all`}),` words from the search string (in any order).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each word is split by spaces, escaped, and wrapped in a positive lookahead `,(0,c.jsx)(t.code,{children:`(?=.*?word)`}),`. This makes it ideal for live search or multi-word filtering UIs.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — A search string consisting of one or more space-separated words.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` (optional, default: `,(0,c.jsx)(t.code,{children:`128`}),`) — The maximum allowed length of the search string.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — A regular expression with the `,(0,c.jsx)(t.code,{children:`i`}),` flag (case-insensitive).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If the `,(0,c.jsx)(t.code,{children:`search`}),` string is empty, not a string, or exceeds the `,(0,c.jsx)(t.code,{children:`limit`}),`, it returns `,(0,c.jsx)(t.code,{children:`/^/`}),` (matching the start of any string).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};