import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/addTagHighlightMatch - Highlight matches in a string`}),`
`,(0,l.jsx)(t.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(t.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`A utility for highlighting matches in a string by wrapping them in a `,(0,l.jsx)(t.code,{children:`<span>`}),` HTML tag with a specified class. It uses `,(0,l.jsx)(t.code,{children:`getSeparatingSearchExp`}),` to support multi-word search (space-separated).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — The initial string to process.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string | RegExp`}),` — The search string (one or more words separated by spaces) or a regular expression.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`className: string = 'sys-highlight-match'`}),` — The CSS class to be added to the `,(0,l.jsx)(t.code,{children:`<span>`}),` tag.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`shouldEscape: boolean = false`}),` — Whether to escape the string before adding highlighting.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — The string with HTML tags added for highlighting.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};