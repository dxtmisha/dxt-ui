import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/executePromise - Выполнение Promise или функции"}),`
`,e.jsx(n.h1,{id:"executepromise",children:e.jsx(n.code,{children:"executePromise"})}),`
`,e.jsx(n.p,{children:"Утилита, которая безопасно выполняет функцию и/или дожидается разрешения асинхронного результата (Promise)."}),`
`,e.jsxs(n.p,{children:["Внутри используется функция ",e.jsx(n.code,{children:"executeFunction"}),". Если передан аргумент в виде функции возвращающей промис, ",e.jsx(n.code,{children:"executePromise"})," выполнит эту функцию и дождётся выполнения ",e.jsx(n.code,{children:"Promise"}),". Если будет передано синхронное значение или обычная функция, возвращающая синхронное значение, утилита сразу вернёт этот результат."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — Значение, ",e.jsx(n.code,{children:"Promise"})," или функция, способная вернуть ",e.jsx(n.code,{children:"Promise"})," или обычное значение."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"Promise<T>"})," — Промис, разрешающийся в переданное или вычисленное значение."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executePromise } from '@dxtmisha/functional-basic'

// С асинхронной функцией
const fetchData = async () => {
  return await fetch('/api/data').then(res => res.json())
}
const result1 = await executePromise(fetchData)

// С обычной функцией
const staticData = () => 'Синхронные данные'
const result2 = await executePromise(staticData)

// Со статическим значением
const result3 = await executePromise('Данные')
`})})]})}function m(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{m as default};
