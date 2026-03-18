import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/toKebabCase - Преобразование строки в kebab-case"}),`
`,e.jsx(n.h1,{id:"tokebabcase",children:e.jsx(n.code,{children:"toKebabCase"})}),`
`,e.jsxs(n.p,{children:["Преобразует текстовую строку в формат ",e.jsx(n.code,{children:"kebab-case"}),". Функция приводит все буквы к нижнему регистру и заменяет пробелы, спецсимволы и переходы между регистрами (CamelCase) на дефисы."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Исходная строка для преобразования."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — Строка в формате ",e.jsx(n.code,{children:"kebab-case"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toKebabCase } from '@dxtmisha/functional-basic'

console.log(toKebabCase('Hello World')) // 'hello-world'
console.log(toKebabCase('userProfileData')) // 'user-profile-data'
console.log(toKebabCase('Some_Special@String')) // 'some-special-string'
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{h as default};
