import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isString - Проверка на строку`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsx)(t.p,{children:`Базовая, но надежная утилита для проверки того, является ли переданное значение строкой.`}),`
`,(0,c.jsxs)(t.p,{children:[`Инструмент опирается на стандартную проверку `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),`, гарантируя, что значение относится к строковому примитиву. Это эффективно отфильтровывает все остальные типы данных: числа, булевы значения, объекты, массивы и значения типа null/undefined.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Любое значение, чей тип необходимо проверить.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если проверяемое значение — строка. Вернет `,(0,c.jsx)(t.code,{children:`false`}),` для любых других типов. Функция также служит защитником типа (type guard), явно сужая область переменной до типа `,(0,c.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Привет, мир!')) // true
console.log(isString('')) // true (пустая строка — это тоже строка)

// Отсеивание нерелевантных типов
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};