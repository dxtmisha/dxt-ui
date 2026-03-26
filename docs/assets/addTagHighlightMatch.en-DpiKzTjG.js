import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/addTagHighlightMatch - Highlight matches in a string`}),`
`,(0,c.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,c.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility for highlighting matches in a string by wrapping them in a `,(0,c.jsx)(n.code,{children:`<span>`}),` HTML tag with a specified class. It uses `,(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`}),` to support multi-word search (space-separated).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — The initial string to process.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search?: string`}),` — The search string (one or more words separated by spaces).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — The CSS class to be added to the `,(0,c.jsx)(n.code,{children:`<span>`}),` tag.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The string with HTML tags added for highlighting.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Highlight a single word
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Highlight multiple words (OR logic)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Custom class
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};