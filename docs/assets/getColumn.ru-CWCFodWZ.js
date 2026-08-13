import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getColumn - Извлечение колонки данных`}),`
`,(0,c.jsx)(t.h1,{id:`getcolumn`,children:(0,c.jsx)(t.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, которая проходит по массиву объектов и возвращает новый массив, состоящий только из значений указанного ключа (свойства) каждого объекта. По сути, это типизированный аналог `,(0,c.jsx)(t.code,{children:`Array.prototype.map(item => item[key])`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectOrArray<T>`}),` — Массив (или объект, работающий как словарь), содержащий элементы типа `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`column: K`}),` — Ключ (имя свойства), значения которого нужно извлечь.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`(T[K] | undefined)[]`}),` — Массив значений запрошенного свойства `,(0,c.jsx)(t.code,{children:`column`}),`. Если свойство отсутствует у некоторых элементов, на их месте будет `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Анна', role: 'admin' },
  { id: 2, name: 'Иван', role: 'user' },
  { id: 3, name: 'Мария', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Анна', 'Иван', 'Мария']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};