import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getObjectNoUndefined - Remove properties with an exception value`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(n.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates and returns a new object containing only the properties from the source object or array whose values are `,(0,c.jsx)(n.strong,{children:`not strictly equal`}),` to the exception value. By default, the exception value is `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`This function is useful for cleaning up data before sending it to a server or for object normalization. When an array is passed, its indices will be converted into string keys in the resulting object.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — The source object or array (where `,(0,c.jsx)(n.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exception: any`}),` — The value used as criteria for removal. Defaults to `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — A new object devoid of properties containing the specified exception value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};