import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/toRefItem - Reactive Ref Normalization`}),`
`,(0,c.jsx)(t.h1,{id:`torefitem`,children:(0,c.jsx)(t.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility function that ensures a value is a reactive `,(0,c.jsx)(t.code,{children:`Ref`}),`. If the input is already a `,(0,c.jsx)(t.code,{children:`Ref`}),`, it is returned as is. If the input is an ordinary value, it is wrapped in a new `,(0,c.jsx)(t.code,{children:`Ref`}),`. This is useful for functions that expect a reactive reference as an argument.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: RefOrNormal<T>`}),` — A reactive variable (`,(0,c.jsx)(t.code,{children:`Ref`}),`) or an ordinary value.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Ref<T>`}),` — A reactive `,(0,c.jsx)(t.code,{children:`Ref`}),` containing the value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Returns original ref
const normalized2 = toRefItem(ordinaryValue) // Returns new ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};