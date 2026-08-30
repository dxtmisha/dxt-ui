import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isApiSuccess - Check if API response is successful`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the API response is successful.`}),`
`,(0,c.jsx)(t.p,{children:`The check is performed according to the following rules:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`If the data is an array, it is considered a success.`}),`
`,(0,c.jsxs)(t.li,{children:[`If the data is an object, the success is determined by the `,(0,c.jsx)(t.code,{children:`status === 'success'`}),` or `,(0,c.jsx)(t.code,{children:`success === true`}),` fields.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the `,(0,c.jsx)(t.code,{children:`statusObject`}),` field is present, the success is determined by the HTTP status code (starts with 2).`]}),`
`,(0,c.jsx)(t.li,{children:`If none of the fields are present, the success is determined by the global API status.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ApiData<T>`}),` — API response data.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the response is successful, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};