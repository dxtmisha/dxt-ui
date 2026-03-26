import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/getRef - Value Extraction`}),`
`,(0,c.jsx)(n.h1,{id:`getref`,children:(0,c.jsx)(n.code,{children:`getRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A utility function that extracts the underlying value from a reactive `,(0,c.jsx)(n.code,{children:`Ref`}),` or returns the value itself if it is not reactive. This is useful for ensuring you are working with the raw data regardless of its reactivity state.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — A reactive variable (`,(0,c.jsx)(n.code,{children:`Ref`}),`) or an ordinary value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — The unwrapped value of the `,(0,c.jsx)(n.code,{children:`Ref`}),` or the input value itself.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};