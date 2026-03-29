import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/anyToString - Преобразование значения в строку`}),`
`,(0,c.jsx)(n.h1,{id:`anytostring`,children:(0,c.jsx)(n.code,{children:`anyToString`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая безопасно приводит любые входящие данные к строковому типу.`}),`
`,(0,c.jsx)(n.p,{children:`Это полезно при выводе данных в интерфейс, когда заранее неизвестен тип переменной (объект, массив, boolean или null).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V`}),` — Значения для преобразования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArrayString: boolean`}),` (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`) — Если `,(0,c.jsx)(n.code,{children:`true`}),`, массивы примитивов будут объединены через запятую. Если `,(0,c.jsx)(n.code,{children:`false`}),`, они будут преобразованы в строку JSON.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строковое представление переданного значения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test' (trimmed)
console.log(anyToString([1, 2, 3])) // '1,2,3' (isArrayString = true)
console.log(anyToString([1, 2, 3], false)) // '[1,2,3]' (isArrayString = false)

console.log(anyToString([[1], [2]])) // '[[1],[2]]' (вложенные массивы превращаются в JSON)
console.log(anyToString([{ a: 1 }, 2])) // '[{"a":1},2]' (массивы с объектами превращаются в JSON)

console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(123)) // '123'
console.log(anyToString(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};