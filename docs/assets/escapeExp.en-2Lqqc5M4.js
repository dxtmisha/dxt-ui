import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/escapeExp - Escape special RegExp characters"}),`
`,e.jsx(n.h1,{id:"escapeexp",children:e.jsx(n.code,{children:"escapeExp"})}),`
`,e.jsxs(n.p,{children:["A utility that escapes all special regular expression characters in a string (",e.jsx(n.code,{children:"."})," ",e.jsx(n.code,{children:"*"})," ",e.jsx(n.code,{children:"+"})," ",e.jsx(n.code,{children:"?"})," ",e.jsx(n.code,{children:"^"})," ",e.jsx(n.code,{children:"$"})," ",e.jsx(n.code,{children:"{"})," ",e.jsx(n.code,{children:"}"})," ",e.jsx(n.code,{children:"("})," ",e.jsx(n.code,{children:")"})," ",e.jsx(n.code,{children:"|"})," ",e.jsx(n.code,{children:"["})," ",e.jsx(n.code,{children:"]"})," ",e.jsx(n.code,{children:"\\"})," ",e.jsx(n.code,{children:"/"}),"), so it can be safely used inside a ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.p,{children:"Useful when a string comes from user input or an external source and may contain characters that have special meaning in regular expressions."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The string to escape."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A string with all special regex characters escaped, safe to use inside a ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Escaping characters
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Safe usage inside RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{p as default};
