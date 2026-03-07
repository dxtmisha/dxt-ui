import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/Api - Request Management"}),`
`,e.jsx(n.h1,{id:"api-class",children:"Api Class"}),`
`,e.jsx(n.p,{children:"A static wrapper class over the Fetch API for efficient network request operations. Provides advanced configuration capabilities, global status handling, response emulation, preparation hooks setup, and automatic data parsing."}),`
`,e.jsxs(n.p,{children:["It includes tight integration with dependency classes: ",e.jsx(n.code,{children:"ApiStatus"}),", ",e.jsx(n.code,{children:"ApiResponse"}),", ",e.jsx(n.code,{children:"ApiPreparation"}),", ",e.jsx(n.code,{children:"ApiDefault"}),", and ",e.jsx(n.code,{children:"ApiHeaders"}),"."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CRUD Methods"})," — convenient aliases ",e.jsx(n.code,{children:"get"}),", ",e.jsx(n.code,{children:"post"}),", ",e.jsx(n.code,{children:"put"}),", ",e.jsx(n.code,{children:"delete"})," for handling HTTP requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Configuration"})," — setting base URL, default headers, and parameters for all requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Hooks"})," — ability to set custom callback functions executed before (",e.jsx(n.code,{children:"setPreparation"}),") and after (",e.jsx(n.code,{children:"setEnd"}),") each request"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status Tracking"})," — access to the status and errors of the last request via ",e.jsx(n.code,{children:"ApiStatus"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Caching & Emulation"})," — managing mock responses and caching via ",e.jsx(n.code,{children:"ApiResponse"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Parsing"})," — converting the request body into JSON/FormData and automatically extracting data from JSON responses"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Geolocation"})," — automatic substitution of ",e.jsx(n.code,{children:"{locale}"}),", ",e.jsx(n.code,{children:"{country}"}),", ",e.jsx(n.code,{children:"{language}"})," placeholders into request paths"]}),`
`]}),`
`,e.jsx(n.h2,{id:"api-calling-methods",children:"API Calling Methods"}),`
`,e.jsx(n.h3,{id:"request",children:e.jsx(n.code,{children:"request"})}),`
`,e.jsxs(n.p,{children:["Core executor sequence method managing pure physical network fetch pipelines. Should a solitary string serve as param context, default ",e.jsx(n.code,{children:"GET"}),` assumptions trigger automatically.
In case of network failures (e.g., 500 status), the method explicitly throws an exception (`,e.jsx(n.code,{children:"throw e"}),"), allowing errors to be natively intercepted in ",e.jsx(n.code,{children:"try/catch"}),". If the server returns a JSON object, the system automatically injects a ",e.jsx(n.code,{children:"statusObject"})," field (instance of request status) to the returned payload."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathRequest: string | ApiFetch"})," — destination path matching format or root configuration structure object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<ApiData<T>>"})," — decoded endpoint structural response formatted interface (including ",e.jsx(n.code,{children:"data"}),", ",e.jsx(n.code,{children:"statusObject"}),", etc., when returning an object payload)."]}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Dispatches a basic query through HTTP ",e.jsx(n.code,{children:"GET"})," methodologies natively optimizing inputs payload onto string search parameters formats automatically."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — fetch execution configuration property mapping (",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"request"})," body, and so on)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"post",children:e.jsx(n.code,{children:"post"})}),`
`,e.jsxs(n.p,{children:["Transfers query packets across standard REST/GraphQL pipelines formatted onto the HTTP ",e.jsx(n.code,{children:"POST"})," specification."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — parameters interface structure container including URL pointing directives."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"put",children:e.jsx(n.code,{children:"put"})}),`
`,e.jsxs(n.p,{children:["Directs object modifications over target remote points using typical system environment HTTP ",e.jsx(n.code,{children:"PUT"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — query options mapped against backend routing."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"delete",children:e.jsx(n.code,{children:"delete"})}),`
`,e.jsxs(n.p,{children:["Forwards structural clearance/purge request using classic URL targeted HTTP ",e.jsx(n.code,{children:"DELETE"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — arguments package structure wrapper."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h2,{id:"instance-retrieval-methods",children:"Instance Retrieval Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLocalhost(): boolean"})," — Returns ",e.jsx(n.code,{children:"true"})," if the code is running on a local development server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStatus(): ApiStatus"})," — Returns the ",e.jsx(n.code,{children:"ApiStatus"})," manager for tracking the state, errors, and complete response object of the last network request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getResponse(): ApiResponse"})," — Returns the responses/emulation manager ",e.jsx(n.code,{children:"ApiResponse"})," for controlling mock-responses."]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,e.jsxs(n.p,{children:["Methods to configure the API (support chaining, returning the ",e.jsx(n.code,{children:"Api"})," class):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHeaders(headers: Record<string, string>): Api"})," — Applies universal headers injected automatically toward outbound fetch activities."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setRequestDefault(request: Record<string, any>): Api"})," — Forces parameters recursively sent to network traffic streams."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setUrl(url: string): Api"})," — Overwrites generic target URL configurations prefix points."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api"})," — Connects a custom hook function actively running just ",e.jsx(n.em,{children:"before"})," execution trigger occurs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api"})," — Sets the hook triggered exactly ",e.jsx(n.em,{children:"after"})," network response returns."]}),`
`]}),`
`,e.jsx(n.h2,{id:"request-preparation-methods",children:"Request Preparation Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getUrl(path: string, api?: boolean): string"})," — Generates the full target URL referencing the script, handling dynamic geography variables."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined"})," — Creates data to be passed into the request physical body."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string"})," — Forms query parameters specifically for HTTP arguments assigned into the URL directly used when sending ",e.jsx(n.code,{children:"GET"})," queries."]}),`
`]}),`
`,e.jsx(n.h2,{id:"apifetch-object",children:"ApiFetch Object"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ApiFetch"})," is the main configuration object passed to all request methods (",e.jsx(n.code,{children:"request"}),", ",e.jsx(n.code,{children:"get"}),", ",e.jsx(n.code,{children:"post"}),", ",e.jsx(n.code,{children:"put"}),", ",e.jsx(n.code,{children:"delete"}),"). All fields are optional:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — endpoint path relative to the base URL (e.g. ",e.jsx(n.code,{children:"'users/list'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathFull?: string"})," — full request URL. If provided, overrides ",e.jsx(n.code,{children:"api"})," and ",e.jsx(n.code,{children:"path"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"api?: boolean"})," — whether to prepend the base URL before ",e.jsx(n.code,{children:"path"}),". Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP method (",e.jsx(n.code,{children:"'GET'"}),", ",e.jsx(n.code,{children:"'POST'"}),", ",e.jsx(n.code,{children:"'PUT'"}),", ",e.jsx(n.code,{children:"'DELETE'"}),"). Default: ",e.jsx(n.code,{children:"'GET'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: FormData | Record<string, any> | string"})," — request body (for POST/PUT) or query parameters (for GET). Serialized as JSON or ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headers?: Record<string, string> | null"})," — additional request headers. Pass ",e.jsx(n.code,{children:"null"})," to disable all headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string"})," — ",e.jsx(n.code,{children:"Content-Type"})," header value. Default: ",e.jsx(n.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auth?: boolean"})," — include authentication headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", automatically unwraps ",e.jsx(n.code,{children:"data"})," from a ",e.jsx(n.code,{children:"{ data: ... }"})," wrapper. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hideError?: boolean"})," — suppresses ",e.jsx(n.code,{children:"console.error"})," output on failure. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalPreparation?: boolean"})," — whether to run the global ",e.jsx(n.code,{children:"setPreparation"})," hook before this request. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalEnd?: boolean"})," — whether to run the global ",e.jsx(n.code,{children:"setEnd"})," hook after the response. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — custom response processor instead of the default JSON reader."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init?: RequestInit"})," — additional options passed directly to native ",e.jsx(n.code,{children:"fetch()"})," (CORS, cache mode, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controller?: AbortController"})," — controller for canceling the request."]}),`
`]}),`
`,e.jsx(n.h2,{id:"request-cancellation-abortcontroller",children:"Request Cancellation (AbortController)"}),`
`,e.jsxs(n.p,{children:["The API supports out-of-the-box request cancellation. Pass an instance of ",e.jsx(n.code,{children:"AbortController"})," into the ",e.jsx(n.code,{children:"controller"})," field of the ",e.jsx(n.code,{children:"ApiFetch"})," configuration."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const controller = new AbortController()

// Dispatch the request
Api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Request was cancelled by the user')
  }
})

// Cancel the request later (e.g., when the component unmounts)
controller.abort()
`})}),`
`,e.jsx(n.h2,{id:"response-emulation-apiresponse",children:"Response Emulation (ApiResponse)"}),`
`,e.jsxs(n.p,{children:["The emulator manager ",e.jsx(n.code,{children:"ApiResponse"})," (accessible via ",e.jsx(n.code,{children:"Api.getResponse()"}),") allows configuring mock responses for specified paths. This is incredibly useful during frontend UI development without a completely ready backend API or for writing test fixtures."]}),`
`,e.jsx(n.h3,{id:"registering-mock-responses",children:"Registering Mock Responses"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"add"})," method accepts an ",e.jsx(n.code,{children:"ApiResponseItem"})," object or an array of such objects."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Key ",e.jsx(n.code,{children:"ApiResponseItem"})," fields:"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path"})," — String (exact match) or Regular Expression (",e.jsx(n.code,{children:"RegExp"}),") to intercept the request URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method"})," — HTTP method (",e.jsx(n.code,{children:"ApiMethodItem.get"}),", ",e.jsx(n.code,{children:"post"}),", etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request"})," — (Optional) Request body filter. You can use the special marker ",e.jsx(n.code,{children:"'*any'"})," to bypass payload validation and capture all requests to this path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response"})," — Static data object ",e.jsx(n.em,{children:"or"})," a dynamic factory function ",e.jsx(n.code,{children:"(request) => any"})," that generates a response based on the incoming request payload."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lag"})," — (Optional) Simulates network lag (",e.jsx(n.code,{children:"boolean"}),"), adding a random ",e.jsx(n.code,{children:"setTimeout"})," from 0 to 2000ms."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const responseManager = Api.getResponse()

// Enable developer mode (prints mock request logs and intercepted requests into the console)
responseManager.setDevMode(true)

// Example 1: Static response for a GET request
responseManager.add({
  path: 'users/profile', // can be a string or RegExp
  method: 'GET',
  response: { id: 1, name: 'Admin', role: 'superuser' },
  lag: true // Add artificial lag to simulate real network ping
})

// Example 2: Dynamic response with a factory curve (useful for pagination or search simulation)
responseManager.add({
  path: /users\\/search/, // intercepting using RegExp
  method: 'GET',
  // The function receives the original payload object passed via request
  response: (request) => {
    return [
        { id: 1, name: \`Results for: \${request.query}\` }
    ]
  }
})

// Example 3: Intercept POST request regardless of body payload
responseManager.add({
  path: 'users/create',
  method: 'POST',
  request: '*any', // the *any marker bypasses request payload checking altogether
  response: { success: true, message: 'User created successfully (MOCK)' }
})

// Usage in code (no real network stream is opened, mock resolves instantly or after simulated lag)
const profile = await Api.get({ path: 'users/profile' })
`})}),`
`,e.jsx(n.h3,{id:"mock-prioritization-and-fallback",children:"Mock Prioritization and Fallback"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The emulator intercepts requests ",e.jsx(n.strong,{children:"before"})," the actual ",e.jsx(n.code,{children:"fetch"})," call is made."]}),`
`,e.jsxs(n.li,{children:["If the emulator finds no matching registered mock (due to ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"method"}),", or ",e.jsx(n.code,{children:"request"})," mismatch), the ",e.jsx(n.code,{children:"Api"})," class automatically falls back to executing a real physical network request to the remote server."]}),`
`,e.jsxs(n.li,{children:["You can conditionally disable a specific mock by providing a callback to the ",e.jsx(n.code,{children:"disable: () => true"})," field. The ",e.jsx(n.code,{children:"add"})," engine will ignore it."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// API Configuration
Api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Preparation interceptor hook
Api.setPreparation(async (apiFetch) => {
    console.log('Initializing request to:', apiFetch.path)
})

// Standard GET fetch behavior with error handling
try {
  const data = await Api.get({ path: 'users' })
  // Extracting inline status payload gracefully:
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Network transport error while pulling users:', e)
}

// Extended POST behavior capable of abort termination
const abortCtrl = new AbortController()
try {
  const newUser = await Api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Request safely aborted!')
}

// Abort when needed
// abortCtrl.abort()
`})})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{p as default};
