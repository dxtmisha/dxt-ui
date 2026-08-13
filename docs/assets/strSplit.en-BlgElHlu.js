import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/strSplit - Splitting a string with limit support (PHP style)`}),`
`,(0,c.jsx)(t.h1,{id:`strsplit`,children:(0,c.jsx)(t.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Splits a string into an array of substrings using a specified separator. Unlike the standard `,(0,c.jsx)(t.code,{children:`String.prototype.split`}),`, when a limit is specified, the remainder of the string is preserved in the last element of the array (similar to the `,(0,c.jsx)(t.code,{children:`explode`}),` function in PHP).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number | string`}),` — The original value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator: string`}),` — The separator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — The maximum number of elements. If there are more elements than the limit, the last element will contain the entire remainder of the string.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string[]`}),` — An array of substrings.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Without limit
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// With limit 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// With a number as the value
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};