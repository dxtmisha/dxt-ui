import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/sortList - Multi-column array sorting`}),`
`,(0,c.jsx)(t.h1,{id:`sortlist`,children:(0,c.jsx)(t.code,{children:`sortList`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that sorts an array of objects or items by one or more column property paths, directions (`,(0,c.jsx)(t.code,{children:`'asc'`}),` or `,(0,c.jsx)(t.code,{children:`'desc'`}),`), or a custom comparison function. It performs locale-aware string comparisons using `,(0,c.jsx)(t.code,{children:`Intl.Collator`}),` with numeric and case-insensitive sensitivity options, and places `,(0,c.jsx)(t.code,{children:`null`}),` or `,(0,c.jsx)(t.code,{children:`undefined`}),` values at the end of sorted lists.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — Input array of items to sort.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sortColumns: SortColumnItem[]`}),` — Array of column sorting specifications `,(0,c.jsx)(t.code,{children:`{ column: string, dir: SortDir }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`customSort?: SortFunction<T>`}),` — Optional custom comparison function.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T[]`}),` — A new sorted array of items (or the original array if `,(0,c.jsx)(t.code,{children:`sortColumns`}),` is empty or list length is less than 2).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sortList } from '@dxtmisha/functional-basic'

const users = [
  { id: 3, category: 'A', name: 'Charlie', age: 30 },
  { id: 1, category: 'B', name: 'Alice', age: 25 },
  { id: 4, category: 'A', name: 'Alice', age: 20 },
  { id: 2, category: 'B', name: 'Bob', age: 35 }
]

// Sort by category ascending, then age descending
const sorted = sortList(users, [
  { column: 'category', dir: 'asc' },
  { column: 'age', dir: 'desc' }
])

console.log(sorted.map(user => user.id)) // [3, 4, 2, 1]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};