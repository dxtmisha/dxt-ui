import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectOrNone - Гарантированный возврат объекта`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectornone`,children:(0,c.jsx)(n.code,{children:`getObjectOrNone`})}),`
`,(0,c.jsxs)(n.p,{children:[`Простая утилита, которая проверяет, является ли переданное значение «настоящим» объектом (не `,(0,c.jsx)(n.code,{children:`null`}),`, не массивом, не примитивом), и возвращает его. Если переданный аргумент не объект, возвращается новый пустой объект `,(0,c.jsx)(n.code,{children:`{}`}),`. Функция полезна для безопасной инициализации или передачи параметров.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Любое значение, которое предполагается быть объектом.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T & Record<string, any>`}),` — Исходный объект, либо пустой объект `,(0,c.jsx)(n.code,{children:`{}`}),`, если исходное значение не прошло проверку.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Успешный возврат объекта
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Массив — не подходящий тип объекта, вернется {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Примитивы и null возвращают {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('строка')) // {}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};