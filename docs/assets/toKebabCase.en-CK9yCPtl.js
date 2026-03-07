import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/toKebabCase - Converting a string to kebab-case"}),`
`,e.jsx(n.h1,{id:"tokebabcase",children:e.jsx(n.code,{children:"toKebabCase"})}),`
`,e.jsxs(n.p,{children:["Converts a text string to ",e.jsx(n.code,{children:"kebab-case"})," format. The function converts all letters to lowercase and replaces spaces, special characters, and case transitions (CamelCase) with dashes."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The original string to convert."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — The string in ",e.jsx(n.code,{children:"kebab-case"})," format."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toKebabCase } from '@dxtmisha/functional-basic'

console.log(toKebabCase('Hello World')) // 'hello-world'
console.log(toKebabCase('userProfileData')) // 'user-profile-data'
console.log(toKebabCase('Some_Special@String')) // 'some-special-string'
`})})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
