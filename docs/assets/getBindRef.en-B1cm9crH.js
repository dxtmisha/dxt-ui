import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/getBindRef - Binding Generation (Reactive)`}),`
`,(0,c.jsx)(n.h1,{id:`getbindref`,children:(0,c.jsx)(n.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Reactive version of the `,(0,c.jsx)(n.a,{href:`../getBind/getBind.en.mdx`,children:(0,c.jsx)(n.code,{children:`getBind`})}),` function for generating properties for a subcomponent based on reactive or normal values. It helps in creating consistent bindings when passing props from a parent to a child component, especially when using Vue's reactive `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Input value. Can be a reactive ref or a normal object containing multiple properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Additional parameters or property names to be merged into the final binding object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — The property name to use for the primary value (defaults to `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R>`}),` — A reactive computed ref containing the merged properties object ready to be bound (e.g., via `,(0,c.jsx)(n.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Hello')
const extraProps = { placeholder: 'Type here...' }

// Generates a computed binding: { value: 'Hello', placeholder: 'Type here...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};