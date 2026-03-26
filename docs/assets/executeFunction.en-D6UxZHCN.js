import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/executeFunction - Execute function or return value`}),`
`,(0,c.jsx)(n.h1,{id:`executefunction`,children:(0,c.jsx)(n.code,{children:`executeFunction`})}),`
`,(0,c.jsx)(n.p,{children:`A utility that checks the provided argument. If the argument is a function, it executes the function and returns its result. Otherwise, it simply returns the provided argument as is.`}),`
`,(0,c.jsx)(n.p,{children:`This is extremely useful for handling arguments that can flexibly be either a static value or a function that calculates the value on demand (such as lazy evaluation or dynamic defaults).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T | FunctionArgs<any, T>`}),` — A value of any type, or a function that returns a value of type `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — The result of the function execution, or the raw value provided.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Passing a static value
console.log(executeFunction('Hello')) // 'Hello'

// Passing a function
const lazyValue = () => {
  return 'Loaded lazily'
}
console.log(executeFunction(lazyValue)) // 'Loaded lazily'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};