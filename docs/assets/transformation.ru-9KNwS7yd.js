import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/transformation - Преобразование строки в тип данных`}),`
`,(0,c.jsx)(n.h1,{id:`transformation`,children:(0,c.jsx)(n.code,{children:`transformation`})}),`
`,(0,c.jsxs)(n.p,{children:[`Преобразует строковое значение в соответствующий ему тип данных (логический, числовой, объектный или `,(0,c.jsx)(n.code,{children:`null`}),`/`,(0,c.jsx)(n.code,{children:`undefined`}),`). Если включен флаг `,(0,c.jsx)(n.code,{children:`isFunction`}),`, проверяет наличие функции с таким именем в глобальном объекте `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Значение для преобразования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFunction: boolean`}),` — Флаг поиска функции в `,(0,c.jsx)(n.code,{children:`window`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`any`}),` — Преобразованное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};