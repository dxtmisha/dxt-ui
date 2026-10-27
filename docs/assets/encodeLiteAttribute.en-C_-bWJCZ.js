import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/encodeLiteAttribute - Encode basic HTML characters`}),`
`,(0,c.jsx)(t.h1,{id:`encodeliteattribute`,children:(0,c.jsx)(t.code,{children:`encodeLiteAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Encodes basic HTML special characters in a string (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`) into their corresponding HTML entities (`,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&amp;`}),`) while preserving quotes (`,(0,c.jsx)(t.code,{children:`"`}),` and `,(0,c.jsx)(t.code,{children:`'`}),`). Commonly used for HTML title tags and light text formatting.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` This function intentionally does NOT encode quotes (`,(0,c.jsx)(t.code,{children:`"`}),` and `,(0,c.jsx)(t.code,{children:`'`}),`). For encoding untrusted user input inside HTML attributes, use `,(0,c.jsx)(t.code,{children:`encodeAttribute`}),` instead to prevent attribute injection vulnerabilities.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — The string to encode.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The encoded string.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeLiteAttribute } from '@dxtmisha/functional-basic'

const input = 'Title "Hello & <World>"'
const encoded = encodeLiteAttribute(input)

console.log(encoded)
// 'Title "Hello &amp; &lt;World&gt;"'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};