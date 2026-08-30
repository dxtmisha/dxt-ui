import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getObjectNoUndefined - Remove properties with an exception value`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(t.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates and returns a new object containing only the properties from the source object or array whose values are `,(0,c.jsx)(t.strong,{children:`not strictly equal`}),` to the exception value. By default, the exception value is `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`This function is useful for cleaning up data before sending it to a server or for object normalization. When an array is passed, its indices will be converted into string keys in the resulting object.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — The source object or array (where `,(0,c.jsx)(t.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`exception: any`}),` — The value used as criteria for removal. Defaults to `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — A new object devoid of properties containing the specified exception value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

const user = {
  name: 'John',
  age: 25,
  description: undefined, // Will be removed automatically (by default)
  status: 'guest'
}

console.log(getObjectNoUndefined(user)) 
// { name: 'John', age: 25, status: 'guest' }

// Remove all properties mapped to the value 'guest'
console.log(getObjectNoUndefined(user, 'guest'))
// { name: 'John', age: 25, description: undefined }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};