import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/secondToTime - Преобразование секунд в строку времени`}),`
`,(0,c.jsx)(n.h1,{id:`secondtotime`,children:(0,c.jsx)(n.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(n.p,{children:[`Преобразует переданное количество секунд в строку формата времени `,(0,c.jsx)(n.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если значение секунд меньше или равно нулю, или оно не было передано, возвращается значение по умолчанию `,(0,c.jsx)(n.code,{children:`00:00`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`second: number | string | undefined`}),` — Общее количество секунд (поддерживаются числа и строковые представления чисел).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная строка с минутами и секундами (например, `,(0,c.jsx)(n.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};