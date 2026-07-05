import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Functions/executeFunctionRef - Function & Ref Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`executefunctionref`,children:(0,c.jsx)(n.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility function that executes the argument if it is a function, and unwraps the resulting Vue `,(0,c.jsx)(n.code,{children:`Ref`}),` if it is reactive. If the argument is a reactive `,(0,c.jsx)(n.code,{children:`Ref`}),` or an ordinary value, it unwraps or returns it directly. This is useful for resolving values that might be static, reactive, or dynamically returned from a getter function.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: RefOrNormalOrFunction<T>`}),` — A reactive reference (`,(0,c.jsx)(n.code,{children:`Ref`}),`), a plain value, or a function returning them.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — The fully resolved and unwrapped value.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};