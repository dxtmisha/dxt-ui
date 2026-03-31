import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isIntegerBetween - Проверка вхождения в целочисленный интервал`}),`
`,(0,c.jsx)(n.h1,{id:`isintegerbetween`,children:(0,c.jsx)(n.code,{children:`isIntegerBetween`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, находится ли заданное число в пределах определенного целочисленного интервала.`}),`
`,(0,c.jsxs)(n.p,{children:[`Интервал определяется путем округления в меньшую сторону базового значения (`,(0,c.jsx)(n.code,{children:`between`}),`). Функция вернет истину, если проверяемое число больше или равно нижней границе (целому числу), но строго меньше следующего целого числа.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Формула: `,(0,c.jsx)(n.code,{children:`floor(between) <= value < floor(between) + 1`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number`}),` — Проверяемое число.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`between: number`}),` — Базовое число, определяющее интервал после округления вниз.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если число находится в заданном целочисленном диапазоне.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Интервал [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};