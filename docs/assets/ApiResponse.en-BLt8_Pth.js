import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ApiResponse - API Request Emulation`}),`
`,(0,c.jsx)(n.h1,{id:`apiresponse-class`,children:`ApiResponse Class`}),`
`,(0,c.jsx)(n.p,{children:`A manager class for intercepting, caching, and emulating API responses. It allows you to intercept outgoing API requests and return predefined mock data instead of triggering actual physical network traffic. Crucial during early UI development, automated unit testing, or offline development environments.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Request Interception`}),` — matches outbound requests intelligently based on target route, HTTP method, and payload object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Capabilities`}),` — supports static predefined fallback objects or executes dynamic callback logic capable of interpreting request query context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Network Lag Simulation`}),` — built-in system specifically tailored for simulating actual latency ping scenarios (randomized offset timers).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Developer Mode`}),` — prints useful debug information in browser consoles showing which payload mapped directly to a specific fallback mock point.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ApiResponse(requestDefault)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault: ApiDefault`}),` — an instance for processing default request parameters.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

// 1. Initialize dependencies
const apiDefault = new ApiDefault()

// 2. Create emulator instance
const apiResponse = new ApiResponse(apiDefault)

// 3. Adding a mock response
apiResponse.add({
  path: 'user/get',
  method: 'get',
  response: { id: 1, name: 'Admin' }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Synchronously checks for a global matching cached mock request and returns its configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Returns a flat list of all currently registered emulator mock configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Connects routing pathways and attaches fallback mock-response objects to the local registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDevMode(devMode: boolean): this`}),` — Sets the development output log mode on/off natively.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>`}),` — Core engine loop validating configurations and executing matched routing latency mock responses recursively.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};