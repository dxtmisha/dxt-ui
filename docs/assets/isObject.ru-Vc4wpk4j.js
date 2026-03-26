import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isObject - Проверка на объект`}),`
`,(0,c.jsx)(n.h1,{id:`isobject`,children:(0,c.jsx)(n.code,{children:`isObject`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая утилита, предназначенная для быстрой и безопасной проверки того, является ли значение истинно объектом.`}),`
`,(0,c.jsxs)(n.p,{children:[`В JavaScript определение типов работает с нюансами: оператор `,(0,c.jsx)(n.code,{children:`typeof null`}),` возвращает строку `,(0,c.jsx)(n.code,{children:`'object'`}),`, что зачастую ведет к скрытым ошибкам. Эта функция обходит эту проблему, предварительно проверяя значение на truthiness (`,(0,c.jsx)(n.code,{children:`Boolean(value)`}),`), чтобы навсегда отсечь `,(0,c.jsx)(n.code,{children:`null`}),` и другие ложные идентификаторы, после чего проводит строгую проверку типа. Обратите внимание, что массивы (`,(0,c.jsx)(n.code,{children:`[]`}),`) в JavaScript также являются объектами и поэтому дадут результат `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, когда значение является экземпляром объекта (в том числе массивом). Вернет `,(0,c.jsx)(n.code,{children:`false`}),` для любых примитивов, `,(0,c.jsx)(n.code,{children:`null`}),`, `,(0,c.jsx)(n.code,{children:`undefined`}),` и функций. Выступает в качестве защитника типа (type guard), сужая тип до `,(0,c.jsx)(n.code,{children:`Record<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Массивы в JS - это технически объекты!)

// Строгая проверка исключает сюрпризы JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};