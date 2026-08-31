import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/executePromise - Выполнить Promise или функцию`}),`
`,(0,c.jsx)(t.h1,{id:`executepromise`,children:(0,c.jsx)(t.code,{children:`executePromise`})}),`
`,(0,c.jsx)(t.p,{children:`Надежная утилита для безопасного выполнения и ожидания результатов из различных источников. Она обрабатывает синхронные значения, промисы (Promises) и функции (как синхронные, так и асинхронные), гарантируя, что конечный результат всегда будет разрешен и возвращен в виде промиса.`}),`
`,(0,c.jsxs)(t.p,{children:[`Внутренне она использует `,(0,c.jsx)(t.code,{children:`executeFunction`}),` для вызова функций, а затем проверяет, является ли результат промисом, чтобы дождаться его завершения.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T`}),` — Источник для выполнения или разрешения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: any[]`}),` (опционально) — Аргументы, которые будут переданы в функцию, если `,(0,c.jsx)(t.code,{children:`callback`}),` является вызываемым.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — Промис, разрешающийся финальным вычисленным или предоставленным значением.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// 1. Ожидание асинхронной функции
const fetchData = async (id: number) => {
  return await fetch(\`/api/user/\${id}\`).then(res => res.json())
}
const user = await executePromise(fetchData, 123)

// 2. Обработка синхронной функции
const getName = () => 'Иван Иванов'
const name = await executePromise(getName) // возвращает Promise, разрешающийся в 'Иван Иванов'

// 3. Разрешение статического значения
const result = await executePromise('Мгновенные данные')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};