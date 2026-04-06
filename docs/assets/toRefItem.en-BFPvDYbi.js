import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Functions/toRefItem - Reactive Ref Normalization`}),`
`,(0,c.jsx)(n.h1,{id:`torefitem`,children:(0,c.jsx)(n.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility function that ensures a value is a reactive `,(0,c.jsx)(n.code,{children:`Ref`}),`. If the input is already a `,(0,c.jsx)(n.code,{children:`Ref`}),`, it is returned as is. If the input is an ordinary value, it is wrapped in a new `,(0,c.jsx)(n.code,{children:`Ref`}),`. This is useful for functions that expect a reactive reference as an argument.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — A reactive variable (`,(0,c.jsx)(n.code,{children:`Ref`}),`) or an ordinary value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Ref<T>`}),` — A reactive `,(0,c.jsx)(n.code,{children:`Ref`}),` containing the value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Returns original ref
const normalized2 = toRefItem(ordinaryValue) // Returns new ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};