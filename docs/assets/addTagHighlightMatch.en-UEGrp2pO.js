import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/addTagHighlightMatch - Highlight matches in a string`}),`
`,(0,l.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`A utility for highlighting matches in a string by wrapping them in a `,(0,l.jsx)(n.code,{children:`<span>`}),` HTML tag with a specified class. It uses `,(0,l.jsx)(n.code,{children:`getSeparatingSearchExp`}),` to support multi-word search (space-separated).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — The initial string to process.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string | RegExp`}),` — The search string (one or more words separated by spaces) or a regular expression.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — The CSS class to be added to the `,(0,l.jsx)(n.code,{children:`<span>`}),` tag.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`shouldEscape: boolean = false`}),` — Whether to escape the string before adding highlighting.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — The string with HTML tags added for highlighting.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Highlight a single word
addTagHighlightMatch('Hello world', 'hello')
// '<span class="sys-highlight-match">Hello</span> world'

// Highlight multiple words (OR logic)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Custom class
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'

// With escaping
addTagHighlightMatch('<b>bold</b>', 'bold', 'sys-highlight-match', true)
// '&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;'
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};