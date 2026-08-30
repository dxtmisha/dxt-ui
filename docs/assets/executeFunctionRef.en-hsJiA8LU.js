import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/executeFunctionRef - Function & Ref Resolver`}),`
`,(0,c.jsx)(t.h1,{id:`executefunctionref`,children:(0,c.jsx)(t.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function that executes the argument if it is a function, and unwraps the resulting Vue `,(0,c.jsx)(t.code,{children:`Ref`}),` if it is reactive. If the argument is a reactive `,(0,c.jsx)(t.code,{children:`Ref`}),` or an ordinary value, it unwraps or returns it directly. This is useful for resolving values that might be static, reactive, or dynamically returned from a getter function.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormalOrFunction<T>`}),` — A reactive reference (`,(0,c.jsx)(t.code,{children:`Ref`}),`), a plain value, or a function returning them.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T`}),` — The fully resolved and unwrapped value.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};