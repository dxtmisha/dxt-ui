import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Functions/setRef - Value Update"}),`
`,e.jsx(n.h1,{id:"setref",children:e.jsx(n.code,{children:"setRef"})}),`
`,e.jsxs(n.p,{children:["A utility function that updates the value of a reactive ",e.jsx(n.code,{children:"Ref"}),". It includes a built-in check to ensure that the update only occurs if the new value is different from the current one, preventing unnecessary reactivity triggers."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: Ref<T>"})," — The reactive ",e.jsx(n.code,{children:"Ref"})," element to be updated."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — The new value to assign to the ",e.jsx(n.code,{children:"Ref"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Updates the value to 'loading'
setRef(status, 'loading')

// This call will be ignored because the value is already 'loading'
setRef(status, 'loading')
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
