import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/toRefItem - Reactive Ref Normalization"}),`
`,e.jsx(n.h1,{id:"torefitem",children:e.jsx(n.code,{children:"toRefItem"})}),`
`,e.jsxs(n.p,{children:["A utility function that ensures a value is a reactive ",e.jsx(n.code,{children:"Ref"}),". If the input is already a ",e.jsx(n.code,{children:"Ref"}),", it is returned as is. If the input is an ordinary value, it is wrapped in a new ",e.jsx(n.code,{children:"Ref"}),". This is useful for functions that expect a reactive reference as an argument."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: RefOrNormal<T>"})," — A reactive variable (",e.jsx(n.code,{children:"Ref"}),") or an ordinary value."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Ref<T>"})," — A reactive ",e.jsx(n.code,{children:"Ref"})," containing the value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Returns original ref
const normalized2 = toRefItem(ordinaryValue) // Returns new ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
