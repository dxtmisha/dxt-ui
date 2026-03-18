import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Classes/ScrollbarWidthRef - Scrollbar Width Manager"}),`
`,e.jsx(t.h1,{id:"scrollbarwidthref-class",children:"ScrollbarWidthRef Class"}),`
`,e.jsx(t.p,{children:"A reactive utility class for determining and managing the browser's scrollbar width. It uses a detection mechanism and provides reactive properties to check if the scrollbar width has been calculated and whether it exists."}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Reactivity"})," — uses Vue ",e.jsx(t.code,{children:"ref"})," and ",e.jsx(t.code,{children:"computed"})," to provide scrollbar state."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Asynchronous Detection"})," — automatically calculates the width upon initialization via ",e.jsx(t.code,{children:"ScrollbarWidth.is()"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Lightweight"})," — minimal footprint, useful for layout calculations dependent on scrollbar presence."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["Creates a new ",e.jsx(t.code,{children:"ScrollbarWidthRef"})," instance. Upon creation, the class starts an asynchronous process to determine the browser's scrollbar width. The result is written to reactive properties as soon as it becomes available."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'
import { watch } from 'vue'

const scrollbar = new ScrollbarWidthRef()

// Watch for data readiness
watch(scrollbar.is, (isReady) => {
  if (isReady) {
    console.log('Scrollbar width determined:', scrollbar.item.value)
  }
})
`})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item: Ref<boolean | undefined>"})," — A reactive item containing the state of the scrollbar's presence. A value of ",e.jsx(t.code,{children:"true"})," means the scrollbar takes up space in the layout."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"is: ComputedRef<boolean>"})," — A computed property that checks if the scrollbar width calculation is complete."]}),`
`]})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as default};
