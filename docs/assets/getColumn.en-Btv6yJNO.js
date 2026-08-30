import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getColumn - Extract a data column`}),`
`,(0,c.jsx)(t.h1,{id:`getcolumn`,children:(0,c.jsx)(t.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that iterates over an array of objects and returns a new array consisting only of the values from a specific key (property) of each object. Essentially, this is a strongly-typed equivalent of `,(0,c.jsx)(t.code,{children:`Array.prototype.map(item => item[key])`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectOrArray<T>`}),` — An array (or a dictionary object) containing items of type `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`column: K`}),` — The key (property name) whose values you wish to extract.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`(T[K] | undefined)[]`}),` — An array containing the values of the requested `,(0,c.jsx)(t.code,{children:`column`}),`. If the property is missing in some items, `,(0,c.jsx)(t.code,{children:`undefined`}),` will be present in those positions.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};