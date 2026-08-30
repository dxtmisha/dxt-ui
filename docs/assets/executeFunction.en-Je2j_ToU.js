import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/executeFunction - Execute function or return value`}),`
`,(0,c.jsx)(t.h1,{id:`executefunction`,children:(0,c.jsx)(t.code,{children:`executeFunction`})}),`
`,(0,c.jsxs)(t.p,{children:[`A flexible utility designed to handle arguments that can be either a static value or a function. If the provided argument is a function, `,(0,c.jsx)(t.code,{children:`executeFunction`}),` invokes it with the specified arguments and returns the result. Otherwise, it returns the argument itself.`]}),`
`,(0,c.jsx)(t.p,{children:`This pattern is highly effective for implementing lazy evaluation, dynamic default values, or configuration properties that can be either fixed or computed.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: T | ((...args: any[]) => T)`}),` — The value to process. Can be a literal value or a function returning type `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: any[]`}),` (optional) — Arguments to pass to the function if `,(0,c.jsx)(t.code,{children:`callback`}),` is callable.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — The result of the function execution or the raw value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// 1. Static value handling
console.log(executeFunction('Hello')) // 'Hello'

// 2. Dynamic execution
const getLabel = (prefix: string) => \`\${prefix}: Dynamic Label\`
console.log(executeFunction(getLabel, 'Admin')) // 'Admin: Dynamic Label'

// 3. Conditional logic in caller
const value = Math.random() > 0.5 ? 'Static' : () => 'Computed'
console.log(executeFunction(value)) // either 'Static' or 'Computed'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};