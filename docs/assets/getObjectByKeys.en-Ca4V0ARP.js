import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getObjectByKeys - Object by key list`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(t.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates and returns a new object containing only the properties corresponding to the specified keys from the source object. Properties that do not exist or have a value strictly equal to `,(0,c.jsx)(t.code,{children:`undefined`}),` are ignored during copying.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: Record<string, any>`}),` — The source object containing the initial data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keys: string[]`}),` — An array of string keys to extract from the source.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, any>`}),` — A new object containing only the successfully extracted properties. If a property is `,(0,c.jsx)(t.code,{children:`undefined`}),` in the source, it will not be included in the result.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined values are skipped
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};