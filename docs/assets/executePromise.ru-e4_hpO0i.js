import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/executePromise - Выполнить Promise или функцию`}),`
`,(0,c.jsx)(n.h1,{id:`executepromise`,children:(0,c.jsx)(n.code,{children:`executePromise`})}),`
`,(0,c.jsx)(n.p,{children:`Надежная утилита для безопасного выполнения и ожидания результатов из различных источников. Она обрабатывает синхронные значения, промисы (Promises) и функции (как синхронные, так и асинхронные), гарантируя, что конечный результат всегда будет разрешен и возвращен в виде промиса.`}),`
`,(0,c.jsxs)(n.p,{children:[`Внутренне она использует `,(0,c.jsx)(n.code,{children:`executeFunction`}),` для вызова функций, а затем проверяет, является ли результат промисом, чтобы дождаться его завершения.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T`}),` — Источник для выполнения или разрешения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: any[]`}),` (опционально) — Аргументы, которые будут переданы в функцию, если `,(0,c.jsx)(n.code,{children:`callback`}),` является вызываемым.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — Промис, разрешающийся финальным вычисленным или предоставленным значением.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};