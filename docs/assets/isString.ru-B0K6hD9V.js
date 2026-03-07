import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/isString - Проверка на строку"}),`
`,n.jsx(e.h1,{id:"isstring",children:n.jsx(e.code,{children:"isString"})}),`
`,n.jsx(e.p,{children:"Базовая, но надежная утилита для проверки того, является ли переданное значение строкой."}),`
`,n.jsxs(e.p,{children:["Инструмент опирается на стандартную проверку ",n.jsx(e.code,{children:"typeof value === 'string'"}),", гарантируя, что значение относится к строковому примитиву. Это эффективно отфильтровывает все остальные типы данных: числа, булевы значения, объекты, массивы и значения типа null/undefined."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Любое значение, чей тип необходимо проверить."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Вернет ",n.jsx(e.code,{children:"true"}),", если проверяемое значение — строка. Вернет ",n.jsx(e.code,{children:"false"})," для любых других типов. Функция также служит защитником типа (type guard), явно сужая область переменной до типа ",n.jsx(e.code,{children:"string"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Привет, мир!')) // true
console.log(isString('')) // true (пустая строка — это тоже строка)

// Отсеивание нерелевантных типов
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function h(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{h as default};
