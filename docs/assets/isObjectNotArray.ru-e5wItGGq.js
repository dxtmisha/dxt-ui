import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isObjectNotArray - Проверка на строгий объект`}),`
`,(0,c.jsx)(t.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(t.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет расширенную проверку значения, чтобы убедиться, что оно является классическим объектом `,(0,c.jsx)(t.code,{children:`{}`}),` (Record) и при этом `,(0,c.jsx)(t.strong,{children:`гарантированно не является массивом`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку функция базовая утилита `,(0,c.jsx)(t.code,{children:`isObject`}),` возвращает `,(0,c.jsx)(t.code,{children:`true`}),` даже для массивов (согласно специфике типов JavaScript), данная функция решает эту проблему, комбинируя оригинальную логику `,(0,c.jsx)(t.code,{children:`isObject(value)`}),` со строгой проверкой `,(0,c.jsx)(t.code,{children:`!Array.isArray(value)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),` исключительно для истинных объектов `,(0,c.jsx)(t.code,{children:`{ key: 'value' }`}),`. Вернет `,(0,c.jsx)(t.code,{children:`false`}),` для массивов `,(0,c.jsx)(t.code,{children:`[]`}),`, null, функций и всех примитивных типов данных. Выступает в качестве защитника типа (type guard), извлекая тип формы объекта и исключая возможные массивы или пустые значения (null/undefined).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Типичные сценарии, где функция отфильтрует "ненужные" объекты
console.log(isObjectNotArray([1, 2, 3])) // false (Защита от массивов работает!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};