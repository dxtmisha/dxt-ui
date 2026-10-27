import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isApiSuccess - Check if API response is successful`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the API response is successful.`}),`
`,(0,c.jsx)(t.p,{children:`The check is performed according to the following strict priority rules:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If the data is an array, it is considered a success (`,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the data is null, undefined, or not an object, it returns `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit Failure Priority:`}),` If explicit failure indicators are present (`,(0,c.jsx)(t.code,{children:`success === false`}),`, `,(0,c.jsx)(t.code,{children:`status === 'error'`}),`, `,(0,c.jsx)(t.code,{children:`status === 'warning'`}),`, or `,(0,c.jsx)(t.code,{children:`errorObject`}),`), the function returns `,(0,c.jsx)(t.code,{children:`false`}),` (even if the HTTP status is 200).`]}),`
`,(0,c.jsxs)(t.li,{children:[`If explicit success indicators are present (`,(0,c.jsx)(t.code,{children:`status === 'success'`}),` or `,(0,c.jsx)(t.code,{children:`success === true`}),`), it returns `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the `,(0,c.jsx)(t.code,{children:`statusObject`}),` field is present, success is determined by the HTTP status code (2xx range: 200 to 299).`]}),`
`,(0,c.jsxs)(t.li,{children:[`If none of the status fields are present, success is determined by the global API status (`,(0,c.jsx)(t.code,{children:`Api.getStatus().getStatus()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: ApiData<T>`}),` — API response data (object or array).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the response is successful, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

// Arrays and explicit success
console.log(isApiSuccess([])) // true
console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true

// Successful HTTP 2xx status in statusObject
console.log(isApiSuccess({ statusObject: { status: 200 } })) // true

// Failure priority over HTTP 200 status
console.log(isApiSuccess({ success: false, statusObject: { status: 200 } })) // false
console.log(isApiSuccess({ status: 'error', statusObject: { status: 200 } })) // false

// Invalid / empty values
console.log(isApiSuccess(null)) // false
console.log(isApiSuccess(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};