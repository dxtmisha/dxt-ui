import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/toCamelCase - Converting a string to camelCase"}),`
`,e.jsx(n.h1,{id:"tocamelcase",children:e.jsx(n.code,{children:"toCamelCase"})}),`
`,e.jsxs(n.p,{children:["Converts a text string to ",e.jsx(n.code,{children:"camelCase"})," format. The function removes special characters, replaces spaces with dashes, converts letters after dashes to uppercase, and ensures that the first letter of the entire string is lowercase."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The original string to convert."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — The string in ",e.jsx(n.code,{children:"camelCase"})," format."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toCamelCase } from '@dxtmisha/functional-basic'

console.log(toCamelCase('Hello World')) // 'helloWorld'
console.log(toCamelCase('user-profile-data')) // 'userProfileData'
console.log(toCamelCase('Some_Special@String')) // 'someSpecialString'
`})})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
