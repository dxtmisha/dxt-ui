import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional/Functions/computedAsync - Асинхронное вычисляемое свойство"}),`
`,n.jsx(e.h1,{id:"computedasync",children:n.jsx(e.code,{children:"computedAsync"})}),`
`,n.jsxs(e.p,{children:["Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры. В отличие от стандартного ",n.jsx(e.code,{children:"computed"})," из Vue, ",n.jsx(e.code,{children:"computedAsync"})," позволяет передавать асинхронные функции, синхронные функции или прямые значения — результат автоматически разворачивается и становится реактивным. Инициализация происходит лениво при первом обращении к свойству."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: (() => Promise<R>) | (() => R) | R"})," — Асинхронная функция, синхронная функция или прямое значение для вычисления результата."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ignore?: R"})," — Значение, которое должно быть проигнорировано (не будет установлено в результат)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debugOptions?: DebuggerOptions"})," — Опции отладки реактивных вычислений Vue.js."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"ComputedRef<R | undefined>"})," — Реактивное вычисляемое свойство с результатом выполнения геттера."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { computedAsync } from '@dxtmisha/functional'

// Асинхронный геттер
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Синхронный геттер
const label = computedAsync(() => 'Hello, World!')

// Прямое значение
const count = computedAsync(42)
`})})]})}function m(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{m as default};
