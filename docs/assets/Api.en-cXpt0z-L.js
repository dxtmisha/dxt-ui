import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/Api - Request Management"}),`
`,e.jsx(s.h1,{id:"api-class",children:"Api Class"}),`
`,e.jsx(s.p,{children:"A static wrapper class over the Fetch API for efficient network request operations. Provides advanced configuration capabilities, global status handling, response emulation, preparation hooks setup, and automatic data parsing."}),`
`,e.jsxs(s.p,{children:["It includes tight integration with dependency classes: ",e.jsx(s.code,{children:"ApiStatus"}),", ",e.jsx(s.code,{children:"ApiResponse"}),", ",e.jsx(s.code,{children:"ApiPreparation"}),", ",e.jsx(s.code,{children:"ApiDefault"}),", and ",e.jsx(s.code,{children:"ApiHeaders"}),"."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CRUD Methods"})," — convenient aliases ",e.jsx(s.code,{children:"get"}),", ",e.jsx(s.code,{children:"post"}),", ",e.jsx(s.code,{children:"put"}),", ",e.jsx(s.code,{children:"delete"})," for handling HTTP requests"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Global Configuration"})," — setting base URL, default headers, and parameters for all requests"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Lifecycle Hooks"})," — ability to set custom callback functions executed before (",e.jsx(s.code,{children:"setPreparation"}),") and after (",e.jsx(s.code,{children:"setEnd"}),") each request"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Status Tracking"})," — access to the status and errors of the last request via ",e.jsx(s.code,{children:"ApiStatus"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Caching & Emulation"})," — managing mock responses and caching via ",e.jsx(s.code,{children:"ApiResponse"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic Parsing"})," — converting the request body into JSON/FormData and automatically extracting data from JSON responses"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Geolocation"})," — automatic substitution of ",e.jsx(s.code,{children:"{locale}"}),", ",e.jsx(s.code,{children:"{country}"}),", ",e.jsx(s.code,{children:"{language}"})," placeholders into request paths"]}),`
`]}),`
`,e.jsx(s.h2,{id:"api-calling-methods",children:"API Calling Methods"}),`
`,e.jsx(s.h3,{id:"request",children:e.jsx(s.code,{children:"request"})}),`
`,e.jsxs(s.p,{children:["Core executor sequence method managing pure physical network fetch pipelines. Should a solitary string serve as param context, default ",e.jsx(s.code,{children:"GET"}),` assumptions trigger automatically.
In case of network failures (e.g., 500 status), the method explicitly throws an exception (`,e.jsx(s.code,{children:"throw e"}),"), allowing errors to be natively intercepted in ",e.jsx(s.code,{children:"try/catch"}),". If the server returns a JSON object, the system automatically injects a ",e.jsx(s.code,{children:"statusObject"})," field (instance of request status) to the returned payload."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pathRequest: string | ApiFetch"})," — destination path matching format or root configuration structure object."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"Promise<ApiData<T>>"})," — decoded endpoint structural response formatted interface (including ",e.jsx(s.code,{children:"data"}),", ",e.jsx(s.code,{children:"statusObject"}),", etc., when returning an object payload)."]}),`
`,e.jsx(s.h3,{id:"get",children:e.jsx(s.code,{children:"get"})}),`
`,e.jsxs(s.p,{children:["Dispatches a basic query through HTTP ",e.jsx(s.code,{children:"GET"})," methodologies natively optimizing inputs payload onto string search parameters formats automatically."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request: ApiFetch"})," — fetch execution configuration property mapping (",e.jsx(s.code,{children:"path"}),", ",e.jsx(s.code,{children:"request"})," body, and so on)."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"Promise<T>"})]}),`
`,e.jsx(s.h3,{id:"post",children:e.jsx(s.code,{children:"post"})}),`
`,e.jsxs(s.p,{children:["Transfers query packets across standard REST/GraphQL pipelines formatted onto the HTTP ",e.jsx(s.code,{children:"POST"})," specification."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request: ApiFetch"})," — parameters interface structure container including URL pointing directives."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"Promise<T>"})]}),`
`,e.jsx(s.h3,{id:"put",children:e.jsx(s.code,{children:"put"})}),`
`,e.jsxs(s.p,{children:["Directs object modifications over target remote points using typical system environment HTTP ",e.jsx(s.code,{children:"PUT"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request: ApiFetch"})," — query options mapped against backend routing."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"Promise<T>"})]}),`
`,e.jsx(s.h3,{id:"delete",children:e.jsx(s.code,{children:"delete"})}),`
`,e.jsxs(s.p,{children:["Forwards structural clearance/purge request using classic URL targeted HTTP ",e.jsx(s.code,{children:"DELETE"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request: ApiFetch"})," — arguments package structure wrapper."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"Promise<T>"})]}),`
`,e.jsx(s.h2,{id:"instance-retrieval-methods",children:"Instance Retrieval Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isLocalhost(): boolean"})," — Returns ",e.jsx(s.code,{children:"true"})," if the code is running on a local development server."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getStatus(): ApiStatus"})," — Returns the ",e.jsx(s.code,{children:"ApiStatus"})," manager for tracking the state, errors, and complete response object of the last network request."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getResponse(): ApiResponse"})," — Returns the responses/emulation manager ",e.jsx(s.code,{children:"ApiResponse"})," for controlling mock-responses."]}),`
`]}),`
`,e.jsx(s.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,e.jsxs(s.p,{children:["Methods to configure the API (support chaining, returning the ",e.jsx(s.code,{children:"Api"})," class):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setHeaders(headers: Record<string, string>): Api"})," — Applies universal headers injected automatically toward outbound fetch activities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setRequestDefault(request: Record<string, any>): Api"})," — Forces parameters recursively sent to network traffic streams."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setUrl(url: string): Api"})," — Overwrites generic target URL configurations prefix points."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api"})," — Connects a custom hook function actively running just ",e.jsx(s.em,{children:"before"})," execution trigger occurs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api"})," — Sets the hook triggered exactly ",e.jsx(s.em,{children:"after"})," network response returns."]}),`
`]}),`
`,e.jsx(s.h2,{id:"request-preparation-methods",children:"Request Preparation Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getUrl(path: string, api?: boolean): string"})," — Generates the full target URL referencing the script, handling dynamic geography variables."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined"})," — Creates data to be passed into the request physical body."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string"})," — Forms query parameters specifically for HTTP arguments assigned into the URL directly used when sending ",e.jsx(s.code,{children:"GET"})," queries."]}),`
`]}),`
`,e.jsx(s.h2,{id:"apifetch-object",children:"ApiFetch Object"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ApiFetch"})," is the main configuration object passed to all request methods (",e.jsx(s.code,{children:"request"}),", ",e.jsx(s.code,{children:"get"}),", ",e.jsx(s.code,{children:"post"}),", ",e.jsx(s.code,{children:"put"}),", ",e.jsx(s.code,{children:"delete"}),"). All fields are optional:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"path?: string"})," — endpoint path relative to the base URL (e.g. ",e.jsx(s.code,{children:"'users/list'"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pathFull?: string"})," — full request URL. If provided, overrides ",e.jsx(s.code,{children:"api"})," and ",e.jsx(s.code,{children:"path"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"api?: boolean"})," — whether to prepend the base URL before ",e.jsx(s.code,{children:"path"}),". Default: ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"method?: ApiMethod"})," — HTTP method (",e.jsx(s.code,{children:"'GET'"}),", ",e.jsx(s.code,{children:"'POST'"}),", ",e.jsx(s.code,{children:"'PUT'"}),", ",e.jsx(s.code,{children:"'DELETE'"}),"). Default: ",e.jsx(s.code,{children:"'GET'"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request?: FormData | Record<string, any> | string"})," — request body (for POST/PUT) or query parameters (for GET). Serialized as JSON or ",e.jsx(s.code,{children:"FormData"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"headers?: Record<string, string> | null"})," — additional request headers. Pass ",e.jsx(s.code,{children:"null"})," to disable all headers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type?: string"})," — ",e.jsx(s.code,{children:"Content-Type"})," header value. Default: ",e.jsx(s.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"auth?: boolean"})," — include authentication headers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toData?: boolean"})," — if ",e.jsx(s.code,{children:"true"}),", automatically unwraps ",e.jsx(s.code,{children:"data"})," from a ",e.jsx(s.code,{children:"{ data: ... }"})," wrapper. Default: ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"global?: boolean"})," — use global response cache."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"devMode?: boolean"})," — enable development logging."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"hideError?: boolean"})," — suppresses ",e.jsx(s.code,{children:"console.error"})," output on failure. Default: ",e.jsx(s.code,{children:"false"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"globalPreparation?: boolean"})," — whether to run the global ",e.jsx(s.code,{children:"setPreparation"})," hook before this request. Default: ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"globalEnd?: boolean"})," — whether to run the global ",e.jsx(s.code,{children:"setEnd"})," hook after the response. Default: ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — custom response processor instead of the default JSON reader."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"init?: RequestInit"})," — additional options passed directly to native ",e.jsx(s.code,{children:"fetch()"})," (CORS, cache mode, etc.)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"controller?: AbortController"})," — controller for canceling the request."]}),`
`]}),`
`,e.jsx(s.h2,{id:"response-data-structure",children:"Response Data Structure"}),`
`,e.jsxs(s.p,{children:["Requests return a ",e.jsx(s.code,{children:"Promise<ApiData<T>>"}),"."]}),`
`,e.jsx(s.h3,{id:"apidatat",children:e.jsx(s.code,{children:"ApiData<T>"})}),`
`,e.jsx(s.p,{children:"The structure of the returned data depends on the type of response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Array"}),": If the response is an array, ",e.jsx(s.code,{children:"ApiData<T>"})," acts as ",e.jsx(s.code,{children:"T[]"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Object"}),": If the response is an object, ",e.jsx(s.code,{children:"ApiData<T>"})," includes fields from ",e.jsx(s.code,{children:"T"})," and the standard wrapper ",e.jsx(s.code,{children:"ApiDataItem<T>"}),"."]}),`
`]}),`
`,e.jsx(s.h3,{id:"apidataitemt",children:e.jsx(s.code,{children:"ApiDataItem<T>"})}),`
`,e.jsx(s.p,{children:"The object response contains the following fields:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"data?: T"})," — primary payload if the response was wrapped."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"success?: boolean"})," — success flag."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"status?: ApiStatusType"})," — status type (",e.jsx(s.code,{children:"'success'"}),", ",e.jsx(s.code,{children:"'error'"}),", ",e.jsx(s.code,{children:"'warning'"}),", ",e.jsx(s.code,{children:"'info'"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"message?: string"})," — response message or error description."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"statusObject?: ApiStatusItem"})," — technical information about the request:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"status?: number"})," — HTTP status code (e.g., 200, 404)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"statusText?: string"})," — HTTP status text."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"error?: string"})," — internal error message if the request failed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lastResponse?: any"})," — data from the last response before parsing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lastStatus?: ApiStatusType"})," — status of the last request."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lastMessage?: string"})," — message from the last request."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"request-cancellation-abortcontroller",children:"Request Cancellation (AbortController)"}),`
`,e.jsxs(s.p,{children:["The API supports out-of-the-box request cancellation. Pass an instance of ",e.jsx(s.code,{children:"AbortController"})," into the ",e.jsx(s.code,{children:"controller"})," field of the ",e.jsx(s.code,{children:"ApiFetch"})," configuration."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const controller = new AbortController()

// Dispatch the request
Api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Request was cancelled by the user')
  }
})

// Cancel the request later (e.g., when the component unmounts)
controller.abort()
`})}),`
`,e.jsx(s.h2,{id:"response-emulation-apiresponse",children:"Response Emulation (ApiResponse)"}),`
`,e.jsxs(s.p,{children:["The emulator manager ",e.jsx(s.code,{children:"ApiResponse"})," (accessible via ",e.jsx(s.code,{children:"Api.getResponse()"}),") allows configuring mock responses for specified paths. This is incredibly useful during frontend UI development without a completely ready backend API or for writing test fixtures."]}),`
`,e.jsx(s.h3,{id:"registering-mock-responses",children:"Registering Mock Responses"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"add"})," method accepts an ",e.jsx(s.code,{children:"ApiResponseItem"})," object or an array of such objects."]}),`
`,e.jsx(s.p,{children:e.jsxs(s.strong,{children:["Key ",e.jsx(s.code,{children:"ApiResponseItem"})," fields:"]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"path"})," — String (exact match) or Regular Expression (",e.jsx(s.code,{children:"RegExp"}),") to intercept the request URL."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"method"})," — HTTP method (",e.jsx(s.code,{children:"ApiMethodItem.get"}),", ",e.jsx(s.code,{children:"post"}),", etc.)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"request"})," — (Optional) Request body filter. You can use the special marker ",e.jsx(s.code,{children:"'*any'"})," to bypass payload validation and capture all requests to this path."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"response"})," — Static data object ",e.jsx(s.em,{children:"or"})," a dynamic factory function ",e.jsx(s.code,{children:"(request) => any"})," that generates a response based on the incoming request payload."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"disable"})," — (Optional) Disable this mock (boolean or callback)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isForGlobal"})," — (Optional) Mark as global mock."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lag"})," — (Optional) Simulates network lag (",e.jsx(s.code,{children:"boolean"}),"), adding a random ",e.jsx(s.code,{children:"setTimeout"})," from 0 to 2000ms."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const responseManager = Api.getResponse()

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
`,e.jsx(s.h3,{id:"mock-prioritization-and-fallback",children:"Mock Prioritization and Fallback"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The emulator intercepts requests ",e.jsx(s.strong,{children:"before"})," the actual ",e.jsx(s.code,{children:"fetch"})," call is made."]}),`
`,e.jsxs(s.li,{children:["If the emulator finds no matching registered mock (due to ",e.jsx(s.code,{children:"path"}),", ",e.jsx(s.code,{children:"method"}),", or ",e.jsx(s.code,{children:"request"})," mismatch), the ",e.jsx(s.code,{children:"Api"})," class automatically falls back to executing a real physical network request to the remote server."]}),`
`,e.jsxs(s.li,{children:["You can conditionally disable a specific mock by providing a callback to the ",e.jsx(s.code,{children:"disable: () => true"})," field. The ",e.jsx(s.code,{children:"add"})," engine will ignore it."]}),`
`]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

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
`})})]})}function p(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as default};
