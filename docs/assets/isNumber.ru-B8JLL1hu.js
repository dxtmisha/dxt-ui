import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isNumber - Проверка на число`}),`
`,(0,c.jsx)(n.h1,{id:`isnumber`,children:(0,c.jsx)(n.code,{children:`isNumber`})}),`
`,(0,c.jsx)(n.p,{children:`Универсальная утилита для проверки, может ли переданное значение квалифицироваться как число.`}),`
`,(0,c.jsxs)(n.p,{children:[`Она корректно распознает как классический тип числа `,(0,c.jsx)(n.code,{children:`typeof value === 'number'`}),` (включая особые случаи, такие как `,(0,c.jsx)(n.code,{children:`NaN`}),` или отрицательные значения), так и строковые представления чисел, убедившись с помощью регулярного выражения `,(0,c.jsx)(n.code,{children:`regex`}),`, что переданная строка содержит корректный числовой формат (включая целые, отрицательные и дробные числа).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Любое тестируемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если объект данных относится к математическим числам либо если строка состоит только из цифр. В противном случае вернет `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Строка, содержащая только цифры)

console.log(isNumber('-50')) // true (Отрицательные числа поддерживаются)
console.log(isNumber('3.14')) // true (Дробные числа тоже)
console.log(isNumber('15a')) // false (Содержит букву)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};