import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/encodeAttribute - Encode characters for attributes`}),`
`,(0,c.jsx)(n.h1,{id:`encodeattribute`,children:(0,c.jsx)(n.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(n.p,{children:[`Encodes special characters in a string (`,(0,c.jsx)(n.code,{children:`&`}),`, `,(0,c.jsx)(n.code,{children:`<`}),`, `,(0,c.jsx)(n.code,{children:`>`}),`, `,(0,c.jsx)(n.code,{children:`"`}),`, `,(0,c.jsx)(n.code,{children:`'`}),`) into their corresponding HTML entities (`,(0,c.jsx)(n.code,{children:`&amp;`}),`, `,(0,c.jsx)(n.code,{children:`&lt;`}),`, `,(0,c.jsx)(n.code,{children:`&gt;`}),`, `,(0,c.jsx)(n.code,{children:`&quot;`}),`, `,(0,c.jsx)(n.code,{children:`&#39;`}),`). This is essential for safely inserting user or dynamic text into HTML attributes to prevent XSS attacks.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Additionally, the function trims whitespace from the edges of the string using the `,(0,c.jsx)(n.code,{children:`.trim()`}),` method.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — The string to encode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The encoded string, trimmed of extra edge whitespace.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};