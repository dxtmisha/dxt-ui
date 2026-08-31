import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isNumber - Проверка на число`}),`
`,(0,c.jsx)(t.h1,{id:`isnumber`,children:(0,c.jsx)(t.code,{children:`isNumber`})}),`
`,(0,c.jsx)(t.p,{children:`Универсальная утилита для проверки, может ли переданное значение квалифицироваться как число.`}),`
`,(0,c.jsxs)(t.p,{children:[`Она корректно распознает как классический тип числа `,(0,c.jsx)(t.code,{children:`typeof value === 'number'`}),` (включая особые случаи, такие как `,(0,c.jsx)(t.code,{children:`NaN`}),` или отрицательные значения), так и строковые представления чисел, убедившись с помощью регулярного выражения `,(0,c.jsx)(t.code,{children:`regex`}),`, что переданная строка содержит корректный числовой формат (включая целые, отрицательные и дробные числа).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — Любое тестируемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если объект данных относится к математическим числам либо если строка состоит только из цифр. В противном случае вернет `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Строка, содержащая только цифры)

console.log(isNumber('-50')) // true (Отрицательные числа поддерживаются)
console.log(isNumber('3.14')) // true (Дробные числа тоже)
console.log(isNumber('15a')) // false (Содержит букву)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};