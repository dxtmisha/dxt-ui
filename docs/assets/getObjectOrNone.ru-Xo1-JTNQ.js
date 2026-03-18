import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/getObjectOrNone - Гарантированный возврат объекта"}),`
`,n.jsx(e.h1,{id:"getobjectornone",children:n.jsx(e.code,{children:"getObjectOrNone"})}),`
`,n.jsxs(e.p,{children:["Простая утилита, которая проверяет, является ли переданное значение «настоящим» объектом (не ",n.jsx(e.code,{children:"null"}),", не массивом, не примитивом), и возвращает его. Если переданный аргумент не объект, возвращается новый пустой объект ",n.jsx(e.code,{children:"{}"}),". Функция полезна для безопасной инициализации или передачи параметров."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Любое значение, которое предполагается быть объектом."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"T & Record<string, any>"})," — Исходный объект, либо пустой объект ",n.jsx(e.code,{children:"{}"}),", если исходное значение не прошло проверку."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Успешный возврат объекта
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Массив — не подходящий тип объекта, вернется {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Примитивы и null возвращают {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('строка')) // {}
`})})]})}function m(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{m as default};
