import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/capitalize - Делает первую букву строки заглавной`}),`
`,(0,c.jsx)(t.h1,{id:`capitalize`,children:(0,c.jsx)(t.code,{children:`capitalize`})}),`
`,(0,c.jsx)(t.p,{children:`Делает первую букву строки заглавной. Возвращает ту же строку, если она пуста. Функция устойчива к некорректным входным данным и безопасно обрабатывает не-строковые значения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T`}),` — Исходная строка для капитализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`locale: boolean | string = false`}),` — Если `,(0,c.jsx)(t.code,{children:`true`}),`, использует текущую глобальную локаль (через `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),`); если передана строка, использует её как явный код локали (например, `,(0,c.jsx)(t.code,{children:`'tr-TR'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Capitalize<T>`}),` — Строка с заглавной первой буквой.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { capitalize, Geo } from '@dxtmisha/functional-basic'

console.log(capitalize('hello')) // 'Hello'
console.log(capitalize('123'))   // '123'

// Капитализация с учетом глобальной локали через Geo
Geo.set('tr-TR')
console.log(capitalize('i', true)) // 'İ'

// Капитализация с явным указанием кода локали
console.log(capitalize('i', 'tr-TR')) // 'İ'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};