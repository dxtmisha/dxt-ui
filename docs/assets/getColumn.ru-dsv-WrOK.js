import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getColumn - Извлечение колонки данных"}),`
`,n.jsx(e.h1,{id:"getcolumn",children:n.jsx(e.code,{children:"getColumn"})}),`
`,n.jsxs(e.p,{children:["Утилита, которая проходит по массиву объектов и возвращает новый массив, состоящий только из значений указанного ключа (свойства) каждого объекта. По сути, это типизированный аналог ",n.jsx(e.code,{children:"Array.prototype.map(item => item[key])"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: ObjectOrArray<T>"})," — Массив (или объект, работающий как словарь), содержащий элементы типа ",n.jsx(e.code,{children:"T"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"column: K"})," — Ключ (имя свойства), значения которого нужно извлечь."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"(T[K] | undefined)[]"})," — Массив значений запрошенного свойства ",n.jsx(e.code,{children:"column"}),". Если свойство отсутствует у некоторых элементов, на их месте будет ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Анна', role: 'admin' },
  { id: 2, name: 'Иван', role: 'user' },
  { id: 3, name: 'Мария', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Анна', 'Иван', 'Мария']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function u(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{u as default};
