import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/secondToTime - Преобразование секунд в строку времени`}),`
`,(0,c.jsx)(t.h1,{id:`secondtotime`,children:(0,c.jsx)(t.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует переданное количество секунд в отформатированную строку времени `,(0,c.jsx)(t.code,{children:`MM:SS`}),` (или `,(0,c.jsx)(t.code,{children:`HH:MM:SS`}),`, если включен параметр `,(0,c.jsx)(t.code,{children:`hasHour`}),`). Дробная часть секунд безопасно отсекается.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если значение секунд меньше или равно нулю, или оно не было передано, возвращается значение по умолчанию (`,(0,c.jsx)(t.code,{children:`00:00`}),` или `,(0,c.jsx)(t.code,{children:`00:00:00`}),` при `,(0,c.jsx)(t.code,{children:`hasHour = true`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number | string | undefined`}),` — Общее количество секунд (поддерживаются числа, числа с плавающей точкой и их строковые представления).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasHour?: boolean`}),` — Флаг принудительного включения формата с часами (`,(0,c.jsx)(t.code,{children:`HH:MM:SS`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированная строка времени (например, `,(0,c.jsx)(t.code,{children:`02:05`}),` или `,(0,c.jsx)(t.code,{children:`01:01:05`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime(65.4)) // '01:05' (дробная часть отсекается)
console.log(secondToTime(3665, true)) // '01:01:05'
console.log(secondToTime(125, true)) // '00:02:05'
console.log(secondToTime(0, true)) // '00:00:00'
console.log(secondToTime(undefined)) // '00:00'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};