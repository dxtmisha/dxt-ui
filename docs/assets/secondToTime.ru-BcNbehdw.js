import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/secondToTime - Преобразование секунд в строку времени`}),`
`,(0,c.jsx)(t.h1,{id:`secondtotime`,children:(0,c.jsx)(t.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует переданное количество секунд в строку формата времени `,(0,c.jsx)(t.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если значение секунд меньше или равно нулю, или оно не было передано, возвращается значение по умолчанию `,(0,c.jsx)(t.code,{children:`00:00`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number | string | undefined`}),` — Общее количество секунд (поддерживаются числа и строковые представления чисел).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированная строка с минутами и секундами (например, `,(0,c.jsx)(t.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};