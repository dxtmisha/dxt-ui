import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/getExp - Create a RegExp with escaped string"}),`
`,e.jsx(n.h1,{id:"getexp",children:e.jsx(n.code,{children:"getExp"})}),`
`,e.jsxs(n.p,{children:["A utility that creates a ",e.jsx(n.code,{children:"RegExp"})," object from a template string by first escaping all special regular expression characters within it (such as ",e.jsx(n.code,{children:"."})," ",e.jsx(n.code,{children:"*"})," ",e.jsx(n.code,{children:"+"})," ",e.jsx(n.code,{children:"?"})," ",e.jsx(n.code,{children:"^"})," ",e.jsx(n.code,{children:"$"})," ",e.jsx(n.code,{children:"{"})," ",e.jsx(n.code,{children:"}"})," ",e.jsx(n.code,{children:"("})," ",e.jsx(n.code,{children:")"})," ",e.jsx(n.code,{children:"|"})," ",e.jsx(n.code,{children:"["})," ",e.jsx(n.code,{children:"]"})," ",e.jsx(n.code,{children:"\\"}),")."]}),`
`,e.jsxs(n.p,{children:["This is essential when the search string comes from user input or contains characters that could break a regular expression. The function allows you to specify the regex flags and a pattern string where the escaped text will replace the ",e.jsx(n.code,{children:":value"})," token."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The target string to be escaped and matched."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flags?: string"})," — (optional) Regular expression flags (e.g., ",e.jsx(n.code,{children:"'ig'"}),"). Defaults to ",e.jsx(n.code,{children:"'ig'"})," (case-insensitive and global search)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pattern?: string"})," — (optional) The regular expression template string. Defaults to just ",e.jsx(n.code,{children:"':value'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"RegExp"})," — The constructed regular expression object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getExp } from '@dxtmisha/functional-basic'

// Basic search
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dot is escaped)

// Search with a custom flag and pattern (e.g., "starts with")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
