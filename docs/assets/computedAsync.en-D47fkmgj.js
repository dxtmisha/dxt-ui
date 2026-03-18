import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional/Functions/computedAsync - Async computed property"}),`
`,e.jsx(n.h1,{id:"computedasync",children:e.jsx(n.code,{children:"computedAsync"})}),`
`,e.jsxs(n.p,{children:["Creates a computed property that can handle asynchronous getters. Unlike Vue's standard ",e.jsx(n.code,{children:"computed"}),", ",e.jsx(n.code,{children:"computedAsync"})," accepts async functions, synchronous functions, or raw values — the result is automatically resolved and exposed as a reactive computed ref. Initialization is lazy and occurs upon first access to the property."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getter: (() => Promise<R>) | (() => R) | R"})," — An async function, synchronous function, or raw value to compute the result from."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ignore?: R"})," — A value to be ignored (will not be set as the result)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"debugOptions?: DebuggerOptions"})," — Options used for debugging reactive computations, supported by Vue.js."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ComputedRef<R | undefined>"})," — A reactive computed ref containing the resolved result of the getter."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { computedAsync } from '@dxtmisha/functional'

// Async getter
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Sync getter
const label = computedAsync(() => 'Hello, World!')

// Raw value
const count = computedAsync(42)
`})})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
