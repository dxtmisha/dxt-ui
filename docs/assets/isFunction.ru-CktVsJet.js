import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isFunction - Проверка на функцию`}),`
`,(0,c.jsx)(n.h1,{id:`isfunction`,children:(0,c.jsx)(n.code,{children:`isFunction`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет, является ли переданное значение исполняемой функцией (включая стрелочные, асинхронные функции и функции-генераторы).`}),`
`,(0,c.jsxs)(n.p,{children:[`Проверка осуществляется с использованием оператора `,(0,c.jsx)(n.code,{children:`instanceof Function`}),`, а также запасной проверки `,(0,c.jsx)(n.code,{children:`typeof callback === 'function'`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T`}),` — Значение для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если аргумент является функцией, и `,(0,c.jsx)(n.code,{children:`false`}),` в противном случае. Также работает как защитник типа (type guard), сужая тип до `,(0,c.jsx)(n.code,{children:`FunctionArgs<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};