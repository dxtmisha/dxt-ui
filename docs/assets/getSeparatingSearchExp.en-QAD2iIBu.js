import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getSeparatingSearchExp - Build a RegExp for space-separated word search`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that builds a case-insensitive global `,(0,c.jsx)(t.code,{children:`RegExp`}),` for searching strings containing `,(0,c.jsx)(t.strong,{children:`any`}),` of the words from the search string (separated by spaces).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each word is split by spaces, escaped, and joined with the OR operator `,(0,c.jsx)(t.code,{children:`|`}),`. This is useful when you want to find a match for at least one of the entered words.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — A search string consisting of one or more space-separated words, or a `,(0,c.jsx)(t.code,{children:`RegExp`}),` object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number = 128`}),` — The maximum allowed length of the search string (ignored if a `,(0,c.jsx)(t.code,{children:`RegExp`}),` is passed).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — A regular expression with flags `,(0,c.jsx)(t.code,{children:`ig`}),` (global, case-insensitive). If the search string is empty or exceeds the limit, a regex that matches nothing is returned.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Special characters are escaped automatically
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};