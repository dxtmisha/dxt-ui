import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/Global - Global Data"}),`
`,n.jsx(e.h1,{id:"global-class",children:"Global Class"}),`
`,n.jsxs(e.p,{children:["A static class for storing and retrieving application-wide global data. Data is written ",n.jsx(e.strong,{children:"once"})," during initialization and is thereafter available as read-only. Used to pass server-side configuration or data to the client-side application."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"One-time initialization"})," — The ",n.jsx(e.code,{children:"add"})," method only works on the first call; subsequent calls are ignored."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Deep copy"})," — Data is copied via ",n.jsx(e.code,{children:"copyObjectLite"}),", isolating it from external mutations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No state management"})," — Intended purely for static configuration."]}),`
`]}),`
`,n.jsx(e.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

// Set once (e.g., on application load)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application',
  featureFlags: { darkMode: true }
})

// Subsequent calls are ignored
Global.add({ apiUrl: 'https://other.com' }) // Has no effect
`})}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"add(data: Record<string, any>): void"})," — Saves the global data. Only works ",n.jsx(e.strong,{children:"on the first call"}),". Subsequent calls are silently ignored."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get<R>(name: string): R"})," — Returns the value for a given key from the stored global data."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"retrieving-data",children:"Retrieving Data"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,n.jsx(e.h3,{id:"initialization-on-app-start",children:"Initialization on App Start"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.ts (executed once before mounting the app)
Global.add(window.__SERVER_DATA__ ?? {})

// Anywhere else in the code
const serverId = Global.get('serverId')
`})})]})}function p(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(i,{...a})}):i(a)}export{p as default};
