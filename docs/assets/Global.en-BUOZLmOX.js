import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/Global - Global Data"}),`
`,e.jsx(n.h1,{id:"global-class",children:"Global Class"}),`
`,e.jsxs(n.p,{children:["A static utility class for storing and retrieving application-wide global data. Data is written ",e.jsx(n.strong,{children:"once"})," during initialization and is thereafter available as read-only. Used to pass server-side configuration or data to the client-side application."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One-time initialization"})," — The ",e.jsx(n.code,{children:"add"})," method only works on the first call; subsequent calls are ignored."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deep copy"})," — Data is copied via ",e.jsx(n.code,{children:"copyObjectLite"}),", isolating it from external mutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No state management"})," — Intended purely for static configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Access"})," — all methods are static, eliminating the need for instantiation (",e.jsx(n.code,{children:"new Global()"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.p,{children:"Since the class is static, its methods can be called directly."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

// Set once (e.g., on application load)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Retrieve value by key
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"add(data: Record<string, any>): void"})," — Saves the global data. Only works ",e.jsx(n.strong,{children:"on the first call"}),". Subsequent calls are silently ignored."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get<R>(name: string): R"})," — Returns the value for a given key from the stored global data."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"retrieving-data",children:"Retrieving Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,e.jsx(n.h3,{id:"initialization-on-app-start",children:"Initialization on App Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// main.ts (executed once before mounting the app)
Global.add(window.__SERVER_DATA__ ?? {})

// Anywhere else in the code
const serverId = Global.get('serverId')
`})})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{p as default};
