import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getLength - Длина или размер значения`}),`
`,(0,c.jsx)(n.h1,{id:`getlength`,children:(0,c.jsx)(n.code,{children:`getLength`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает длину или размер различных типов данных, включая массивы, объекты, Map, Set и строки. Если значение равно null, undefined или имеет неподдерживаемый тип (например, число или булево), возвращает `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Входное значение для измерения.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`number`}),` — Длина или размер переданного значения.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getLength } from '@dxtmisha/functional-basic'

console.log(getLength('привет')) // 6
console.log(getLength([1, 2, 3])) // 3
console.log(getLength({ a: 1, b: 2 })) // 2

const map = new Map([['key', 'value']])
console.log(getLength(map)) // 1

const set = new Set([1, 2, 2])
console.log(getLength(set)) // 2

console.log(getLength(null)) // 0
console.log(getLength(123)) // 0
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};