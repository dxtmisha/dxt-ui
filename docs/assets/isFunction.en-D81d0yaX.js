import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isFunction - Check if value is a function`}),`
`,(0,c.jsx)(n.h1,{id:`isfunction`,children:(0,c.jsx)(n.code,{children:`isFunction`})}),`
`,(0,c.jsx)(n.p,{children:`Determines whether the provided value is an executable function (including arrow functions, asynchronous functions, and generator functions).`}),`
`,(0,c.jsxs)(n.p,{children:[`The check operates primarily via the `,(0,c.jsx)(n.code,{children:`instanceof Function`}),` operator, with a fallback safety check against `,(0,c.jsx)(n.code,{children:`typeof callback === 'function'`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T`}),` — The variable to be tested.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Yields `,(0,c.jsx)(n.code,{children:`true`}),` when the argument is a valid function, returning `,(0,c.jsx)(n.code,{children:`false`}),` otherwise. Functions as a dedicated TypeScript type guard narrowing the type specifically down to `,(0,c.jsx)(n.code,{children:`FunctionArgs<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};