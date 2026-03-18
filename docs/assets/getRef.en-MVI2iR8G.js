import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Functions/getRef - Value Extraction"}),`
`,e.jsx(n.h1,{id:"getref",children:e.jsx(n.code,{children:"getRef"})}),`
`,e.jsxs(n.p,{children:["A utility function that extracts the underlying value from a reactive ",e.jsx(n.code,{children:"Ref"})," or returns the value itself if it is not reactive. This is useful for ensuring you are working with the raw data regardless of its reactivity state."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: RefOrNormal<T>"})," — A reactive variable (",e.jsx(n.code,{children:"Ref"}),") or an ordinary value."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T"})," — The unwrapped value of the ",e.jsx(n.code,{children:"Ref"})," or the input value itself."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
