import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Reactive"}),`
`,n.jsx(e.h1,{id:"реактивные-утилиты",children:"Реактивные утилиты"}),`
`,n.jsx(e.p,{children:"Набор функций для работы с реактивностью Vue.js."}),`
`,n.jsx(e.h2,{id:"computedasync",children:n.jsx(e.code,{children:"computedAsync"})}),`
`,n.jsx(e.p,{children:"Создаёт вычисляемое свойство Vue, которое может обрабатывать асинхронные геттеры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: (() => Promise<R>) | (() => R) | R"})," — асинхронная функция, синхронная функция или прямое значение для вычисления результата"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debugOptions?: DebuggerOptions"})," — опции отладки для реактивных вычислений (поддерживается библиотекой Vue.js)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computedAsync } from '@dxtmisha/functional'

// С асинхронной функцией
const userData = computedAsync(async () => {
  const response = await fetch('/api/user')
  return response.json()
})

// С синхронной функцией
const doubled = computedAsync(() => value.value * 2)

// С прямым значением
const staticValue = computedAsync('Hello World')

// С опциями отладки
const debugged = computedAsync(
  async () => await fetchData(),
  {
    onTrack: (e) => console.log('tracked:', e),
    onTrigger: (e) => console.log('triggered:', e)
  }
)
`})})]})}function p(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
