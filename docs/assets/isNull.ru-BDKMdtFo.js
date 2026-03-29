import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isNull - Проверка на null или undefined`}),`
`,(0,c.jsx)(n.h1,{id:`isnull`,children:(0,c.jsx)(n.code,{children:`isNull`})}),`
`,(0,c.jsxs)(n.p,{children:[`Конкретная и строгая проверка значения на соответствие исключительно `,(0,c.jsx)(n.code,{children:`null`}),` или `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от обычной проверки `,(0,c.jsx)(n.code,{children:`!value`}),` (где строка `,(0,c.jsx)(n.code,{children:`''`}),`, число `,(0,c.jsx)(n.code,{children:`0`}),` и булево `,(0,c.jsx)(n.code,{children:`false`}),` также приведут к прохождению условия), эта функция отфильтрует все ложные (falsy) значения и оставит только те, которые фактически не определены.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Любое проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если переменная равна `,(0,c.jsx)(n.code,{children:`null`}),` либо `,(0,c.jsx)(n.code,{children:`undefined`}),`. Функция также выступает как type guard TypeScript, сужающий тип переменной до `,(0,c.jsx)(n.code,{children:`Undefined`}),` (`,(0,c.jsx)(n.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Другие falsy значения возвращают false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};