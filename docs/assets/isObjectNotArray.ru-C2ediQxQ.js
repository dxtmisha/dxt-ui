import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isObjectNotArray - Проверка на строгий объект`}),`
`,(0,c.jsx)(n.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(n.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет расширенную проверку значения, чтобы убедиться, что оно является классическим объектом `,(0,c.jsx)(n.code,{children:`{}`}),` (Record) и при этом `,(0,c.jsx)(n.strong,{children:`гарантированно не является массивом`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Поскольку функция базовая утилита `,(0,c.jsx)(n.code,{children:`isObject`}),` возвращает `,(0,c.jsx)(n.code,{children:`true`}),` даже для массивов (согласно специфике типов JavaScript), данная функция решает эту проблему, комбинируя оригинальную логику `,(0,c.jsx)(n.code,{children:`isObject(value)`}),` со строгой проверкой `,(0,c.jsx)(n.code,{children:`!Array.isArray(value)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),` исключительно для истинных объектов `,(0,c.jsx)(n.code,{children:`{ key: 'value' }`}),`. Вернет `,(0,c.jsx)(n.code,{children:`false`}),` для массивов `,(0,c.jsx)(n.code,{children:`[]`}),`, null, функций и всех примитивных типов данных. Выступает в качестве защитника типа (type guard), извлекая тип формы объекта и исключая возможные массивы или пустые значения (null/undefined).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Типичные сценарии, где функция отфильтрует "ненужные" объекты
console.log(isObjectNotArray([1, 2, 3])) // false (Защита от массивов работает!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};