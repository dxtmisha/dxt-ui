import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/encodeAttribute - Encode characters for attributes`}),`
`,(0,c.jsx)(t.h1,{id:`encodeattribute`,children:(0,c.jsx)(t.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Encodes special characters in a string (`,(0,c.jsx)(t.code,{children:`&`}),`, `,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`"`}),`, `,(0,c.jsx)(t.code,{children:`'`}),`) into their corresponding HTML entities (`,(0,c.jsx)(t.code,{children:`&amp;`}),`, `,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&quot;`}),`, `,(0,c.jsx)(t.code,{children:`&#39;`}),`). This is essential for safely inserting dynamic values or user input into HTML attributes to prevent Cross-Site Scripting (XSS) and attribute breakout injection attacks.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tip:`}),` If you only need to escape basic HTML characters (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`) without altering quotes (for example, inside HTML `,(0,c.jsx)(t.code,{children:`<title>`}),` tags or element body text), use `,(0,c.jsx)(t.code,{children:`encodeLiteAttribute`}),` instead.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`key-features`,children:`Key Features:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive Attribute Safety`}),`: Encodes both double (`,(0,c.jsx)(t.code,{children:`"`}),`) and single (`,(0,c.jsx)(t.code,{children:`'`}),`) quotes, ampersand (`,(0,c.jsx)(t.code,{children:`&`}),`), and brackets (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`High Performance (Fast-Path)`}),`: Employs an instant pre-check before string replacement, returning the input immediately if no special characters are found.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Coercion & Null Safety`}),`: Safely handles strings, numbers (including `,(0,c.jsx)(t.code,{children:`0`}),` and negative values), `,(0,c.jsx)(t.code,{children:`null`}),`, and `,(0,c.jsx)(t.code,{children:`undefined`}),` without throwing runtime exceptions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Whitespace Preservation`}),`: Preserves spaces, tabs, and newlines exactly as entered without unsolicited trimming.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text?: string | number | null`}),` — The value to encode (string, number, or nullish value).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — The encoded string, or an empty string `,(0,c.jsx)(t.code,{children:`''`}),` if `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),` is provided.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

// 1. Preventing attribute breakout and XSS injections
const unsafeInput = '<script>alert("XSS")<\/script>'
const safeAttr = encodeAttribute(unsafeInput)
console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

// Safely interpolating into HTML attributes
const userInput = '"><img src=x onerror=alert(1)>'
const html = \`<input type="text" name="query" value="\${encodeAttribute(userInput)}">\`
// '<input type="text" name="query" value="&quot;&gt;&lt;img src=x onerror=alert(1)&gt;">'

// 2. Safe coercion of numbers and nullish values
encodeAttribute(0)         // '0'
encodeAttribute(123)       // '123'
encodeAttribute(null)      // ''
encodeAttribute(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};