import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/toCamelCase - Преобразование строки в camelCase"}),`
`,e.jsx(n.h1,{id:"tocamelcase",children:e.jsx(n.code,{children:"toCamelCase"})}),`
`,e.jsxs(n.p,{children:["Преобразует текстовую строку в формат ",e.jsx(n.code,{children:"camelCase"}),". Функция удаляет спецсимволы, заменяет пробелы на дефисы, приводит буквы после дефисов к верхнему регистру и гарантирует, что первая буква всей строки будет строчной."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Исходная строка для преобразования."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — Строка в формате ",e.jsx(n.code,{children:"camelCase"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toCamelCase } from '@dxtmisha/functional-basic'

console.log(toCamelCase('Hello World')) // 'helloWorld'
console.log(toCamelCase('user-profile-data')) // 'userProfileData'
console.log(toCamelCase('Some_Special@String')) // 'someSpecialString'
`})})]})}function x(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{x as default};
