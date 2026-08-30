import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/transformation - Transforming a string into a data type`}),`
`,(0,c.jsx)(t.h1,{id:`transformation`,children:(0,c.jsx)(t.code,{children:`transformation`})}),`
`,(0,c.jsxs)(t.p,{children:[`Transforms a string value into its corresponding data type (boolean, numeric, object, or `,(0,c.jsx)(t.code,{children:`null`}),`/`,(0,c.jsx)(t.code,{children:`undefined`}),`). If the `,(0,c.jsx)(t.code,{children:`isFunction`}),` flag is enabled, it checks for a function with that name in the global `,(0,c.jsx)(t.code,{children:`window`}),` object.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — The value to transform.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFunction: boolean`}),` — Flag to search for a function in `,(0,c.jsx)(t.code,{children:`window`}),` (defaults to `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`any`}),` — The transformed value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};