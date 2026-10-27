import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getObjectByKeys - Object by key list`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(t.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates and returns a new object containing only the own properties (`,(0,c.jsx)(t.code,{children:`hasKey`}),`) corresponding to the specified keys from the source object. Prototype pollution keys (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), non-existent properties, and properties whose value is strictly equal to `,(0,c.jsx)(t.code,{children:`undefined`}),` are ignored during copying.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — The source object containing the initial data (where `,(0,c.jsx)(t.code,{children:`T extends Record<string, unknown>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keys: K[]`}),` — An array of keys to extract from the source object (where `,(0,c.jsx)(t.code,{children:`K extends keyof T`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Pick<T, K>`}),` — A new object containing only the selected own properties whose values are not `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined values are skipped
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};