import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isString - Проверка на строку`}),`
`,(0,c.jsx)(n.h1,{id:`isstring`,children:(0,c.jsx)(n.code,{children:`isString`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая, но надежная утилита для проверки того, является ли переданное значение строкой.`}),`
`,(0,c.jsxs)(n.p,{children:[`Инструмент опирается на стандартную проверку `,(0,c.jsx)(n.code,{children:`typeof value === 'string'`}),`, гарантируя, что значение относится к строковому примитиву. Это эффективно отфильтровывает все остальные типы данных: числа, булевы значения, объекты, массивы и значения типа null/undefined.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Любое значение, чей тип необходимо проверить.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если проверяемое значение — строка. Вернет `,(0,c.jsx)(n.code,{children:`false`}),` для любых других типов. Функция также служит защитником типа (type guard), явно сужая область переменной до типа `,(0,c.jsx)(n.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Привет, мир!')) // true
console.log(isString('')) // true (пустая строка — это тоже строка)

// Отсеивание нерелевантных типов
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};