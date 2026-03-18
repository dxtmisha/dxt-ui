import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/encodeAttribute - Encode characters for attributes"}),`
`,e.jsx(t.h1,{id:"encodeattribute",children:e.jsx(t.code,{children:"encodeAttribute"})}),`
`,e.jsxs(t.p,{children:["Encodes special characters in a string (",e.jsx(t.code,{children:"&"}),", ",e.jsx(t.code,{children:"<"}),", ",e.jsx(t.code,{children:">"}),", ",e.jsx(t.code,{children:'"'}),", ",e.jsx(t.code,{children:"'"}),") into their corresponding HTML entities (",e.jsx(t.code,{children:"&amp;"}),", ",e.jsx(t.code,{children:"&lt;"}),", ",e.jsx(t.code,{children:"&gt;"}),", ",e.jsx(t.code,{children:"&quot;"}),", ",e.jsx(t.code,{children:"&#39;"}),"). This is essential for safely inserting user or dynamic text into HTML attributes to prevent XSS attacks."]}),`
`,e.jsxs(t.p,{children:["Additionally, the function trims whitespace from the edges of the string using the ",e.jsx(t.code,{children:".trim()"})," method."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"text: string"})," — The string to encode."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"string"})," — The encoded string, trimmed of extra edge whitespace."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function x(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{x as default};
