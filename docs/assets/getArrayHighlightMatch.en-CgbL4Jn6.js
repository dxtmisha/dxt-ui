import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getArrayHighlightMatch - Structured highlight matches`}),`
`,(0,l.jsx)(n.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(n.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`A utility for splitting a string into an array of objects for highlighting matches. Each object contains the `,(0,l.jsx)(n.code,{children:`text`}),` and a boolean `,(0,l.jsx)(n.code,{children:`isMatch`}),` indicating if it matches the search query. This is useful for UI frameworks like Vue or React to render highlighted text without using `,(0,l.jsx)(n.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — The initial string to process.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string`}),` — The search string (supports space-separated multi-word search).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`{ text: string, isMatch: boolean }[]`}),` — An array of text segments with match status.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};