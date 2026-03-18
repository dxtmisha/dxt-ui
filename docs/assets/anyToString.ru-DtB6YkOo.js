import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(t){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/anyToString - Преобразование значения в строку"}),`
`,n.jsx(o.h1,{id:"anytostring",children:n.jsx(o.code,{children:"anyToString"})}),`
`,n.jsx(o.p,{children:"Утилита, которая безопасно приводит любые входящие данные к строковому типу."}),`
`,n.jsx(o.p,{children:"Это полезно при выводе данных в интерфейс, когда заранее неизвестен тип переменной (объект, массив, boolean или null)."}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Параметры:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"value: V"})," — Значения для преобразования."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Возвращает:"}),`
`,n.jsx(o.code,{children:"string"})," — Строковое представление переданного значения."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test'
console.log(anyToString([1, 2, 3])) // '1,2,3'
console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(null)) // ''
`})})]})}function x(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e(t)}export{x as default};
