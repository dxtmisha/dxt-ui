import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getOnlyText - Extraction of letters, numbers and spaces from a string`}),`
`,(0,c.jsx)(n.h1,{id:`getonlytext`,children:(0,c.jsx)(n.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(n.p,{children:`A utility that extracts only letters, numbers, and spaces from any given input, removing punctuation, special characters, and other symbols.`}),`
`,(0,c.jsx)(n.p,{children:`This is useful for cleaning up user input or preparing text for simplified processing where only alphanumeric content and basic spacing are required.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: any`}),` — The value to process.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A string containing only the characters that are letters, numbers, or spaces.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Price: $100.00')) // 'Price 10000'
console.log(getOnlyText('Text with symbols: #@!%')) // 'Text with symbols'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};