import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getOnlyText - Extraction of letters, numbers and spaces from a string`}),`
`,(0,c.jsx)(t.h1,{id:`getonlytext`,children:(0,c.jsx)(t.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(t.p,{children:`A utility that extracts only letters, numbers, and spaces from any given input, removing punctuation, special characters, and other symbols.`}),`
`,(0,c.jsx)(t.p,{children:`This is useful for cleaning up user input or preparing text for simplified processing where only alphanumeric content and basic spacing are required.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: any`}),` — The value to process.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — A string containing only the characters that are letters, numbers, or spaces.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Price: $100.00')) // 'Price 10000'
console.log(getOnlyText('Text with symbols: #@!%')) // 'Text with symbols'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};