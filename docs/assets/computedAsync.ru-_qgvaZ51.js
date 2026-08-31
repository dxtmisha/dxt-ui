import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/computedAsync - Асинхронное вычисляемое свойство`}),`
`,(0,c.jsx)(t.h1,{id:`computedasync`,children:(0,c.jsx)(t.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры. В отличие от стандартного `,(0,c.jsx)(t.code,{children:`computed`}),` из Vue, `,(0,c.jsx)(t.code,{children:`computedAsync`}),` позволяет передавать асинхронные функции, синхронные функции или прямые значения — результат автоматически разворачивается и становится реактивным. Инициализация происходит лениво при первом обращении к свойству.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — Асинхронная функция, синхронная функция или прямое значение для вычисления результата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: R`}),` — Начальное значение результата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignore?: R`}),` — Значение, которое должно быть проигнорировано (не будет установлено в результат).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`debugOptions?: DebuggerOptions`}),` — Опции отладки реактивных вычислений Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R | undefined>`}),` — Реактивное вычисляемое свойство с результатом выполнения геттера.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};