import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/escapeExp - Экранирование специальных символов RegExp"}),`
`,e.jsx(n.h1,{id:"escapeexp",children:e.jsx(n.code,{children:"escapeExp"})}),`
`,e.jsxs(n.p,{children:["Утилита, экранирующая все специальные символы регулярных выражений в строке (",e.jsx(n.code,{children:"."})," ",e.jsx(n.code,{children:"*"})," ",e.jsx(n.code,{children:"+"})," ",e.jsx(n.code,{children:"?"})," ",e.jsx(n.code,{children:"^"})," ",e.jsx(n.code,{children:"$"})," ",e.jsx(n.code,{children:"{"})," ",e.jsx(n.code,{children:"}"})," ",e.jsx(n.code,{children:"("})," ",e.jsx(n.code,{children:")"})," ",e.jsx(n.code,{children:"|"})," ",e.jsx(n.code,{children:"["})," ",e.jsx(n.code,{children:"]"})," ",e.jsx(n.code,{children:"\\"})," ",e.jsx(n.code,{children:"/"}),"), чтобы её можно было безопасно использовать внутри ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.p,{children:"Используется, когда строка поступает от пользователя или из внешнего источника и может содержать символы, имеющие специальное значение в регулярных выражениях."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Строка, которую нужно экранировать."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — Строка с экранированными специальными символами, безопасная для использования в ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Экранирование символов
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Безопасное использование в RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function h(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{h as default};
