import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/computedAsync - Асинхронное вычисляемое свойство`}),`
`,(0,c.jsx)(n.h1,{id:`computedasync`,children:(0,c.jsx)(n.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры. В отличие от стандартного `,(0,c.jsx)(n.code,{children:`computed`}),` из Vue, `,(0,c.jsx)(n.code,{children:`computedAsync`}),` позволяет передавать асинхронные функции, синхронные функции или прямые значения — результат автоматически разворачивается и становится реактивным. Инициализация происходит лениво при первом обращении к свойству.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — Асинхронная функция, синхронная функция или прямое значение для вычисления результата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initialState?: R`}),` — Начальное значение результата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ignore?: R`}),` — Значение, которое должно быть проигнорировано (не будет установлено в результат).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`debugOptions?: DebuggerOptions`}),` — Опции отладки реактивных вычислений Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R | undefined>`}),` — Реактивное вычисляемое свойство с результатом выполнения геттера.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

// Начальное значение
const status = computedAsync(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// status.value будет 'offline' сразу, и 'online' через 1 секунду

// Асинхронный геттер
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Синхронный геттер
const label = computedAsync(() => 'Hello, World!')

// Прямое значение
const count = computedAsync(42)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};