import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/executeFunction - Execute function or return value`}),`
`,(0,c.jsx)(n.h1,{id:`executefunction`,children:(0,c.jsx)(n.code,{children:`executeFunction`})}),`
`,(0,c.jsxs)(n.p,{children:[`A flexible utility designed to handle arguments that can be either a static value or a function. If the provided argument is a function, `,(0,c.jsx)(n.code,{children:`executeFunction`}),` invokes it with the specified arguments and returns the result. Otherwise, it returns the argument itself.`]}),`
`,(0,c.jsx)(n.p,{children:`This pattern is highly effective for implementing lazy evaluation, dynamic default values, or configuration properties that can be either fixed or computed.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T | ((...args: any[]) => T)`}),` — The value to process. Can be a literal value or a function returning type `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: any[]`}),` (optional) — Arguments to pass to the function if `,(0,c.jsx)(n.code,{children:`callback`}),` is callable.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — The result of the function execution or the raw value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// 1. Static value handling
console.log(executeFunction('Hello')) // 'Hello'

// 2. Dynamic execution
const getLabel = (prefix: string) => \`\${prefix}: Dynamic Label\`
console.log(executeFunction(getLabel, 'Admin')) // 'Admin: Dynamic Label'

// 3. Conditional logic in caller
const value = Math.random() > 0.5 ? 'Static' : () => 'Computed'
console.log(executeFunction(value)) // either 'Static' or 'Computed'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};