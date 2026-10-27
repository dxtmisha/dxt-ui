import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isString - Проверка на строку`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли переданное значение строкой (`,(0,c.jsx)(t.code,{children:`string`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Опирается на стандартную проверку `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),`, гарантируя, что значение относится к строковому примитиву, и отфильтровывает числа, булевы значения, объекты, массивы, `,(0,c.jsx)(t.code,{children:`null`}),` и `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Входное значение для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`value is Extract<T, string>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если `,(0,c.jsx)(t.code,{children:`value`}),` является строкой, иначе `,(0,c.jsx)(t.code,{children:`false`}),`. Выступает в качестве защитника типа (type guard) в TypeScript, сужая `,(0,c.jsx)(t.code,{children:`T`}),` до `,(0,c.jsx)(t.code,{children:`Extract<T, string>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Привет, мир!')) // true
console.log(isString('')) // true (пустая строка — это тоже строка)

// Отсеивание других типов
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};