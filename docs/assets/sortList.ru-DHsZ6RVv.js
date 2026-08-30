import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/sortList - Мультиколоночная сортировка массива`}),`
`,(0,c.jsx)(t.h1,{id:`sortlist`,children:(0,c.jsx)(t.code,{children:`sortList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита для сортировки массива объектов или элементов по одному или нескольким путям свойств колонок, направлениям (`,(0,c.jsx)(t.code,{children:`'asc'`}),` или `,(0,c.jsx)(t.code,{children:`'desc'`}),`) или пользовательской функции сравнения. Выполняет локализованное сравнение строк с помощью `,(0,c.jsx)(t.code,{children:`Intl.Collator`}),` с параметрами числовой сортировки и нечувствительности к регистру, а также помещает значения `,(0,c.jsx)(t.code,{children:`null`}),` и `,(0,c.jsx)(t.code,{children:`undefined`}),` в конец отсортированного списка.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — Входной массив элементов для сортировки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sortColumns: SortColumnItem[]`}),` — Массив спецификаций сортировки колонок `,(0,c.jsx)(t.code,{children:`{ column: string, dir: SortDir }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`customSort?: SortFunction<T>`}),` — Необязательная пользовательская функция сравнения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T[]`}),` — Новый отсортированный массив элементов (или исходный массив, если `,(0,c.jsx)(t.code,{children:`sortColumns`}),` пуст или длина списка меньше 2).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sortList } from '@dxtmisha/functional-basic'

const users = [
  { id: 3, category: 'A', name: 'Чарли', age: 30 },
  { id: 1, category: 'B', name: 'Алиса', age: 25 },
  { id: 4, category: 'A', name: 'Алиса', age: 20 },
  { id: 2, category: 'B', name: 'Боб', age: 35 }
]

// Сортировка по категории по возрастанию, затем по возрасту по убыванию
const sorted = sortList(users, [
  { column: 'category', dir: 'asc' },
  { column: 'age', dir: 'desc' }
])

console.log(sorted.map(user => user.id)) // [3, 4, 2, 1]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};