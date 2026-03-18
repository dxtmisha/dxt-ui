import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(s){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/toCamelCaseFirst - Converting a string to CamelCase with a capital letter"}),`
`,e.jsx(t.h1,{id:"tocamelcasefirst",children:e.jsx(t.code,{children:"toCamelCaseFirst"})}),`
`,e.jsxs(t.p,{children:["Converts a text string to ",e.jsx(t.code,{children:"CamelCase"})," format (PascalCase), where the first letter of the string is always capitalized. Internally uses ",e.jsx(t.code,{children:"toCamelCase"})," to handle delimiters and special characters."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: string"})," — The original string to convert."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"string"})," — The string in ",e.jsx(t.code,{children:"CamelCase"})," format with the first letter capitalized."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { toCamelCaseFirst } from '@dxtmisha/functional-basic'

console.log(toCamelCaseFirst('hello world')) // 'HelloWorld'
console.log(toCamelCaseFirst('user-name')) // 'UserName'
`})})]})}function h(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{h as default};
