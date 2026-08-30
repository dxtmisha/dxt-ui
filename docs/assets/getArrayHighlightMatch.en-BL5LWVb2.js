import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/getArrayHighlightMatch - Structured highlight matches`}),`
`,(0,l.jsx)(t.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(t.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`A utility for splitting a string into an array of objects for highlighting matches. Each object contains the `,(0,l.jsx)(t.code,{children:`text`}),` and a boolean `,(0,l.jsx)(t.code,{children:`isMatch`}),` indicating if it matches the search query. This is useful for UI frameworks like Vue or React to render highlighted text without using `,(0,l.jsx)(t.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — The initial string to process.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string`}),` — The search string (supports space-separated multi-word search).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`{ text: string, isMatch: boolean }[]`}),` — An array of text segments with match status.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { getArrayHighlightMatch } from '@dxtmisha/functional-basic'

const result = getArrayHighlightMatch('Hello world', 'hello')
/*
[
{ text: 'Hello', isMatch: true },
{ text: ' world', isMatch: false }
]
*/

// Example in Vue template:
// <template v-for="item in getArrayHighlightMatch(text, search)">
//   <span :class="{ 'sys-highlight-match': item.isMatch }">{{ item.text }}</span>
// </template>
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};