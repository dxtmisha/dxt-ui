import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(n){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/toCamelCaseFirst - Преобразование строки в CamelCase с заглавной буквы"}),`
`,e.jsx(s.h1,{id:"tocamelcasefirst",children:e.jsx(s.code,{children:"toCamelCaseFirst"})}),`
`,e.jsxs(s.p,{children:["Преобразует текстовую строку в формат ",e.jsx(s.code,{children:"CamelCase"})," (PascalCase), где первая буква строки всегда является заглавной. Внутри использует ",e.jsx(s.code,{children:"toCamelCase"})," для обработки разделителей и спецсимволов."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: string"})," — Исходная строка для преобразования."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Возвращает:"}),`
`,e.jsx(s.code,{children:"string"})," — Строка в формате ",e.jsx(s.code,{children:"CamelCase"})," с заглавной первой буквой."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { toCamelCaseFirst } from '@dxtmisha/functional-basic'

console.log(toCamelCaseFirst('hello world')) // 'HelloWorld'
console.log(toCamelCaseFirst('user-name')) // 'UserName'
`})})]})}function x(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
