import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isFunction - Проверка на функцию`}),`
`,(0,c.jsx)(t.h1,{id:`isfunction`,children:(0,c.jsx)(t.code,{children:`isFunction`})}),`
`,(0,c.jsx)(t.p,{children:`Определяет, является ли переданное значение исполняемой функцией (включая стрелочные, асинхронные функции и функции-генераторы).`}),`
`,(0,c.jsxs)(t.p,{children:[`Проверка осуществляется с использованием оператора `,(0,c.jsx)(t.code,{children:`instanceof Function`}),`, а также запасной проверки `,(0,c.jsx)(t.code,{children:`typeof callback === 'function'`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: T`}),` — Значение для проверки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если аргумент является функцией, и `,(0,c.jsx)(t.code,{children:`false`}),` в противном случае. Также работает как защитник типа (type guard), сужая тип до `,(0,c.jsx)(t.code,{children:`FunctionArgs<any, any>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};