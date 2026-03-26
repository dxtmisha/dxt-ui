import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getColumn - Извлечение колонки данных`}),`
`,(0,c.jsx)(n.h1,{id:`getcolumn`,children:(0,c.jsx)(n.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, которая проходит по массиву объектов и возвращает новый массив, состоящий только из значений указанного ключа (свойства) каждого объекта. По сути, это типизированный аналог `,(0,c.jsx)(n.code,{children:`Array.prototype.map(item => item[key])`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectOrArray<T>`}),` — Массив (или объект, работающий как словарь), содержащий элементы типа `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`column: K`}),` — Ключ (имя свойства), значения которого нужно извлечь.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`(T[K] | undefined)[]`}),` — Массив значений запрошенного свойства `,(0,c.jsx)(n.code,{children:`column`}),`. Если свойство отсутствует у некоторых элементов, на их месте будет `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Анна', role: 'admin' },
  { id: 2, name: 'Иван', role: 'user' },
  { id: 3, name: 'Мария', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Анна', 'Иван', 'Мария']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};