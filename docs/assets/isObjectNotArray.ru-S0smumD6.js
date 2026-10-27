import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isObjectNotArray - Проверка на строгий объект`}),`
`,(0,c.jsx)(t.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(t.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли переданное значение объектом (Record) и при этом `,(0,c.jsx)(t.strong,{children:`не является массивом`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку базовая утилита `,(0,c.jsx)(t.code,{children:`isObject`}),` возвращает `,(0,c.jsx)(t.code,{children:`true`}),` даже для массивов (согласно специфике `,(0,c.jsx)(t.code,{children:`typeof`}),` в JavaScript), `,(0,c.jsx)(t.code,{children:`isObjectNotArray`}),` комбинирует проверку `,(0,c.jsx)(t.code,{children:`isObject(value)`}),` с `,(0,c.jsx)(t.code,{children:`!isArray(value)`}),` для строгого исключения массивов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),` исключительно для не-null объектов, не являющихся массивами (например, `,(0,c.jsx)(t.code,{children:`{ key: 'value' }`}),`), и `,(0,c.jsx)(t.code,{children:`false`}),` для массивов `,(0,c.jsx)(t.code,{children:`[]`}),`, `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, функций и всех примитивных типов данных. Выступает в качестве защитника типа (type guard) в TypeScript, сужая `,(0,c.jsx)(t.code,{children:`T`}),` до `,(0,c.jsx)(t.code,{children:`ObjectItem`}),` и исключая массивы, `,(0,c.jsx)(t.code,{children:`undefined`}),` и `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Успешная валидация объекта
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Значения, которые не проходят проверку
console.log(isObjectNotArray([1, 2, 3])) // false (массивы исключаются)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};