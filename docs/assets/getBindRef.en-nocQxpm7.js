import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/getBindRef - Binding Generation (Reactive)`}),`
`,(0,c.jsx)(t.h1,{id:`getbindref`,children:(0,c.jsx)(t.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive version of the `,(0,c.jsx)(t.a,{href:`../getBind/getBind.en.mdx`,children:(0,c.jsx)(t.code,{children:`getBind`})}),` function for generating properties for a subcomponent based on reactive or normal values. It helps in creating consistent bindings when passing props from a parent to a child component, especially when using Vue's reactive `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Input value. Can be a reactive ref or a normal object containing multiple properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Additional parameters or property names to be merged into the final binding object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — The property name to use for the primary value (defaults to `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R>`}),` — A reactive computed ref containing the merged properties object ready to be bound (e.g., via `,(0,c.jsx)(t.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Hello')
const extraProps = { placeholder: 'Type here...' }

// Generates a computed binding: { value: 'Hello', placeholder: 'Type here...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};