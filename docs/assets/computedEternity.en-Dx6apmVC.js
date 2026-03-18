import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Functions/computedEternity - Persistent computed property"}),`
`,e.jsx(t.h1,{id:"computedeternity",children:e.jsx(t.code,{children:"computedEternity"})}),`
`,e.jsx(t.p,{children:"Creates a computed property that is computed on demand and cached. The value is updated automatically when dependencies change, but only if it has been accessed at least once. The watcher remains active throughout the application's lifecycle. This is particularly useful for properties that should persist globally after the first access."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getter: () => Promise<T> | T"})," — A function that returns the value to be computed (can be synchronous or asynchronous)."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"CustomRef<T>"})," — A reactive custom ref containing the resolved result of the getter."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { computedEternity } from '@dxtmisha/functional'

// Async getter - will only be called when 'data.value' is first accessed
const data = computedEternity(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Sync getter
const i = ref(0)
const double = computedEternity(() => i.value * 2)

console.log(double.value) // 0
i.value = 5
// double.value will be 10 on next access
`})})]})}function p(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
