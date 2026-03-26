import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isApiSuccess - Check if API response is successful`}),`
`,(0,c.jsx)(n.h1,{id:`isapisuccess`,children:(0,c.jsx)(n.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if the API response is successful.`}),`
`,(0,c.jsx)(n.p,{children:`The check is performed according to the following rules:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`If the data is an array, it is considered a success.`}),`
`,(0,c.jsxs)(n.li,{children:[`If the data is an object, the success is determined by the `,(0,c.jsx)(n.code,{children:`status === 'success'`}),` or `,(0,c.jsx)(n.code,{children:`success === true`}),` fields.`]}),`
`,(0,c.jsxs)(n.li,{children:[`If the `,(0,c.jsx)(n.code,{children:`statusObject`}),` field is present, the success is determined by the HTTP status code (starts with 2).`]}),`
`,(0,c.jsx)(n.li,{children:`If none of the fields are present, the success is determined by the global API status.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ApiData<T>`}),` — API response data.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the response is successful, otherwise `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};