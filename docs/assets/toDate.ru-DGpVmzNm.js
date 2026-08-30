import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/toDate - Преобразование значения в объект Date`}),`
`,(0,c.jsx)(t.h1,{id:`todate`,children:(0,c.jsx)(t.code,{children:`toDate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует входное значение (дату, число или строку) в объект `,(0,c.jsx)(t.code,{children:`Date`}),`. Поддерживает различные строковые форматы, включая ISO-подобные строки без разделителей, а также автоматическую подстановку часового пояса.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T`}),` — Входное значение (объект `,(0,c.jsx)(t.code,{children:`Date`}),`, метка времени в миллисекундах или строка даты).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Date`}),` — Полученный объект даты. Если значение не передано или равно `,(0,c.jsx)(t.code,{children:`null`}),`, возвращается текущая дата.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};