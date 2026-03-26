import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/strSplit - Splitting a string with limit support (PHP style)`}),`
`,(0,c.jsx)(n.h1,{id:`strsplit`,children:(0,c.jsx)(n.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Splits a string into an array of substrings using a specified separator. Unlike the standard `,(0,c.jsx)(n.code,{children:`String.prototype.split`}),`, when a limit is specified, the remainder of the string is preserved in the last element of the array (similar to the `,(0,c.jsx)(n.code,{children:`explode`}),` function in PHP).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number | string`}),` — The original value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — The separator.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — The maximum number of elements. If there are more elements than the limit, the last element will contain the entire remainder of the string.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string[]`}),` — An array of substrings.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Without limit
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// With limit 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// With a number as the value
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};