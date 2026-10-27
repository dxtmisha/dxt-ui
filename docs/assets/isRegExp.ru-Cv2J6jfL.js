import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isRegExp - Проверка на регулярное выражение`}),`
`,(0,c.jsx)(t.h1,{id:`isregexp`,children:(0,c.jsx)(t.code,{children:`isRegExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли переданное значение объектом регулярного выражения (`,(0,c.jsx)(t.code,{children:`RegExp`}),`), включая межконтекстные экземпляры (из `,(0,c.jsx)(t.code,{children:`iframe`}),`, Web Workers или отдельных контекстов `,(0,c.jsx)(t.code,{children:`node:vm`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция объединяет стандартную проверку `,(0,c.jsx)(t.code,{children:`value instanceof RegExp`}),` и проверку тега прототипа `,(0,c.jsx)(t.code,{children:`Object.prototype.toString.call(value) === '[object RegExp]'`}),`. Это гарантирует корректную работу в архитектурах с изолированными контекстами (таких как UI плагинов Figma или модульные микрофронтенды), где `,(0,c.jsx)(t.code,{children:`instanceof`}),` возвращает `,(0,c.jsx)(t.code,{children:`false`}),` из-за различия прототипов глобальных объектов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: unknown`}),` — Проверяемое значение любого типа.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`value is RegExp`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если переданное значение является объектом регулярного выражения, иначе `,(0,c.jsx)(t.code,{children:`false`}),`. Выступает в роли защитника типа (type guard) TypeScript, автоматически сужая тип переменной до `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isRegExp } from '@dxtmisha/functional-basic'

// Регулярные выражения
console.log(isRegExp(/^[a-z]+$/i)) // true
console.log(isRegExp(new RegExp('test'))) // true

// Межконтекстные регулярные выражения (например, из iframe)
console.log(isRegExp(iframeWindow.RegExp('foo'))) // true

// Не являющиеся регулярными выражениями типы
console.log(isRegExp('/^[a-z]+$/')) // false (это строка, а не RegExp)
console.log(isRegExp({ source: 'test', flags: 'i' })) // false
console.log(isRegExp(null)) // false
console.log(isRegExp(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};