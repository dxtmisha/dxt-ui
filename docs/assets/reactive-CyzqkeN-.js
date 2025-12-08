import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/en/Reactive"}),`
`,n.jsx(e.h1,{id:"reactive-utilities",children:"Reactive Utilities"}),`
`,n.jsx(e.p,{children:"A set of functions for working with Vue.js reactivity."}),`
`,n.jsx(e.h2,{id:"computedasync",children:n.jsx(e.code,{children:"computedAsync"})}),`
`,n.jsx(e.p,{children:"Creates a Vue computed property that can handle asynchronous getters."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: (() => Promise<R>) | (() => R) | R"})," — asynchronous function, synchronous function, or direct value to compute the result"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debugOptions?: DebuggerOptions"})," — debug options for reactive computations (supported by Vue.js library)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computedAsync } from '@dxtmisha/functional'

// With asynchronous function
const userData = computedAsync(async () => {
  const response = await fetch('/api/user')
  return response.json()
})

// With synchronous function
const doubled = computedAsync(() => value.value * 2)

// With direct value
const staticValue = computedAsync('Hello World')

// With debug options
const debugged = computedAsync(
  async () => await fetchData(),
  {
    onTrack: (e) => console.log('tracked:', e),
    onTrigger: (e) => console.log('triggered:', e)
  }
)
`})})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};
