import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getColumn - Extract a data column`}),`
`,(0,c.jsx)(n.h1,{id:`getcolumn`,children:(0,c.jsx)(n.code,{children:`getColumn`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility that iterates over an array of objects and returns a new array consisting only of the values from a specific key (property) of each object. Essentially, this is a strongly-typed equivalent of `,(0,c.jsx)(n.code,{children:`Array.prototype.map(item => item[key])`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectOrArray<T>`}),` — An array (or a dictionary object) containing items of type `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`column: K`}),` — The key (property name) whose values you wish to extract.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`(T[K] | undefined)[]`}),` — An array containing the values of the requested `,(0,c.jsx)(n.code,{children:`column`}),`. If the property is missing in some items, `,(0,c.jsx)(n.code,{children:`undefined`}),` will be present in those positions.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};