import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/ApiResponse - API Request Emulation"}),`
`,e.jsx(n.h1,{id:"apiresponse-class",children:"ApiResponse Class"}),`
`,e.jsx(n.p,{children:"A manager class for intercepting, caching, and emulating API responses. It allows you to intercept outgoing API requests and return predefined mock data instead of triggering actual physical network traffic. Crucial during early UI development, automated unit testing, or offline development environments."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Request Interception"})," — matches outbound requests intelligently based on target route, HTTP method, and payload object."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Capabilities"})," — supports static predefined fallback objects or executes dynamic callback logic capable of interpreting request query context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Network Lag Simulation"})," — built-in system specifically tailored for simulating actual latency ping scenarios (randomized offset timers)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Developer Mode"})," — prints useful debug information in browser consoles showing which payload mapped directly to a specific fallback mock point."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Requires providing an actively running ",e.jsx(n.code,{children:"ApiDefault"})," environment manager structure constructor object for correctly extracting baseline payload dependencies."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

const apiDefault = new ApiDefault()
const apiResponse = new ApiResponse(apiDefault)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined"})," — Synchronously checks for a global matching cached mock request and returns its configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): (ApiResponseItem & Record<string, any>)[]"})," — Returns a flat list of all currently registered emulator mock configurations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"add(response: ApiResponseItem | ApiResponseItem[]): this"})," — Connects routing pathways and attaches fallback mock-response objects to the local registry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDevMode(devMode: boolean): this"})," — Sets the development output log mode on/off natively."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>"})," — Core engine loop validating configurations and executing matched routing latency mock responses recursively."]}),`
`]})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
