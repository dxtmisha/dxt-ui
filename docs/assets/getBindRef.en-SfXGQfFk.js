import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/getBindRef - Binding Generation (Reactive)"}),`
`,e.jsx(n.h1,{id:"getbindref",children:e.jsx(n.code,{children:"getBindRef"})}),`
`,e.jsxs(n.p,{children:["Reactive version of the ",e.jsx(n.a,{href:"../getBind/getBind.en.mdx",children:e.jsx(n.code,{children:"getBind"})})," function for generating properties for a subcomponent based on reactive or normal values. It helps in creating consistent bindings when passing props from a parent to a child component, especially when using Vue's reactive ",e.jsx(n.code,{children:"Ref"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<T | R> | undefined"})," — Input value. Can be a reactive ref or a normal object containing multiple properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameExtra: RefOrNormal<ItemList> | string = {}"})," — Additional parameters or property names to be merged into the final binding object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string = 'value'"})," — The property name to use for the primary value (defaults to ",e.jsx(n.code,{children:"'value'"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ComputedRef<R>"})," — A reactive computed ref containing the merged properties object ready to be bound (e.g., via ",e.jsx(n.code,{children:"v-bind"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Hello')
const extraProps = { placeholder: 'Type here...' }

// Generates a computed binding: { value: 'Hello', placeholder: 'Type here...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function m(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{m as default};
