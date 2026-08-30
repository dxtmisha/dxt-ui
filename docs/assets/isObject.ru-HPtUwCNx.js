import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isObject - Проверка на объект`}),`
`,(0,c.jsx)(t.h1,{id:`isobject`,children:(0,c.jsx)(t.code,{children:`isObject`})}),`
`,(0,c.jsx)(t.p,{children:`Базовая утилита, предназначенная для быстрой и безопасной проверки того, является ли значение истинно объектом.`}),`
`,(0,c.jsxs)(t.p,{children:[`В JavaScript определение типов работает с нюансами: оператор `,(0,c.jsx)(t.code,{children:`typeof null`}),` возвращает строку `,(0,c.jsx)(t.code,{children:`'object'`}),`, что зачастую ведет к скрытым ошибкам. Эта функция обходит эту проблему, предварительно проверяя значение на truthiness (`,(0,c.jsx)(t.code,{children:`Boolean(value)`}),`), чтобы навсегда отсечь `,(0,c.jsx)(t.code,{children:`null`}),` и другие ложные идентификаторы, после чего проводит строгую проверку типа. Обратите внимание, что массивы (`,(0,c.jsx)(t.code,{children:`[]`}),`) в JavaScript также являются объектами и поэтому дадут результат `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, когда значение является экземпляром объекта (в том числе массивом). Вернет `,(0,c.jsx)(t.code,{children:`false`}),` для любых примитивов, `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),` и функций. Выступает в качестве защитника типа (type guard), сужая тип до `,(0,c.jsx)(t.code,{children:`Record<any, any>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Массивы в JS - это технически объекты!)

// Строгая проверка исключает сюрпризы JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};