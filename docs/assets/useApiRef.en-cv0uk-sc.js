import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useApiRef - API Requests"}),`
`,e.jsx(n.h1,{id:"useapiref",children:e.jsx(n.code,{children:"useApiRef"})}),`
`,e.jsx(n.p,{children:"A composable for working with API requests in Vue components. Returns reactive data, state flags, and load management methods."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lazy Initialization"}),": Requests and dependency watchers are only initialized upon the first access to data (",e.jsx(n.code,{children:"data"})," or ",e.jsx(n.code,{children:"item"}),"). This allows declaring ",e.jsx(n.code,{children:"useApiRef"})," without immediate network or CPU overhead."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Scope (Eternal)"}),": If the ",e.jsx(n.code,{children:"unmounted"})," parameter is set to ",e.jsx(n.code,{children:"false"}),", reactivity is moved to ",e.jsx(n.code,{children:"EffectScopeGlobal"}),". This ensures requests continue to update even after the component that created them is unmounted."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — endpoint path (can be a reactive ",e.jsx(n.code,{children:"Ref"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — request options (",e.jsx(n.code,{children:"ApiFetch"})," object or method name string)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — automatically re-run the request when ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"options"}),", or locale change. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: RefType<boolean>"})," — reactive execution condition. If ",e.jsx(n.code,{children:"false"})," — the request is not made and data is cleared."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => ApiData<R>"})," — response transformation function applied before saving to ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — if ",e.jsx(n.code,{children:"true"})," (default), data is cleared and the watcher is stopped when the component unmounts. When ",e.jsx(n.code,{children:"false"}),", ",e.jsx(n.code,{children:"EffectScopeGlobal"})," is used for background persistence."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Returns (",e.jsx(n.code,{children:"UseApiRef<R>"}),"):"]})}),`
`,e.jsx(n.p,{children:"Reactive states:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ComputedRef<ApiData<R> | undefined>"})," — A reference to the loaded data (Computed). Initiates ",e.jsx(n.strong,{children:"lazy initialization"})," (request and watcher) on the first access."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: Ref<ApiData<R> | undefined>"})," — Direct reference to data (Ref). Also initiates lazy initialization upon access."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting: ComputedRef<boolean>"})," — Returns ",e.jsx(n.code,{children:"true"})," if data has never been requested yet or is in the process of fetching the first portion of data (",e.jsx(n.code,{children:"data"})," is still ",e.jsx(n.code,{children:"undefined"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — Returns ",e.jsx(n.code,{children:"true"})," if any network request (initial or subsequent ",e.jsx(n.code,{children:"reset"}),") is currently in progress."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading: Ref<boolean>"})," — A flag for an active data reading/processing process."]}),`
`]}),`
`,e.jsx(n.p,{children:"Methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isStarting(): boolean"})," — A synchronous method that returns the current value of the ",e.jsx(n.code,{children:"starting"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLoading(): boolean"})," — A synchronous method that returns the current value of the ",e.jsx(n.code,{children:"loading"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isReading(): boolean"})," — A synchronous method that returns the current value of the ",e.jsx(n.code,{children:"reading"})," flag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): ApiData<R> | undefined"})," — Method to get the current value of ",e.jsx(n.code,{children:"data"})," without creating a reactive dependency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): void"})," — Method for explicit request and watcher initialization. Triggered automatically on first access to ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): Promise<void>"})," — An asynchronous method to force re-run the request. Cancels the current active request (if any) and initiates a new one."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): void"})," — Stops watching reactive dependencies and resets ",e.jsx(n.code,{children:"data"})," to ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort(): void"})," — Cancels the current HTTP request via the internal ",e.jsx(n.code,{children:"AbortController"}),", while keeping already loaded data in ",e.jsx(n.code,{children:"data"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"lazy-initialization",children:"Lazy Initialization"}),`
`,e.jsxs(n.p,{children:["Requests and watching mechanisms ",e.jsx(n.strong,{children:"are not started"})," immediately when ",e.jsx(n.code,{children:"useApiRef"})," is called. They are activated only when accessing ",e.jsx(n.code,{children:"data"}),", ",e.jsx(n.code,{children:"item"}),", or calling ",e.jsx(n.code,{children:"init()"}),". This optimizes the performance of setup scripts."]}),`
`,e.jsx(n.h2,{id:"global-conditions",children:"Global Conditions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"setApiRefGlobalConditions(conditions)"})," — sets a global condition for all ",e.jsx(n.code,{children:"useApiRef"})," instances. Only works on the first call."]}),`
`,e.jsx(n.h2,{id:"apioptions-object",children:"ApiOptions Object"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ApiOptions"})," — can accept a string with the ",e.jsx(n.code,{children:"method"})," name (e.g., ",e.jsx(n.code,{children:"'GET'"}),") or an object of type ",e.jsx(n.code,{children:"ApiFetch"}),". Fields of the ",e.jsx(n.code,{children:"ApiFetch"})," object:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — path to the endpoint script relative to the base URL (e.g., ",e.jsx(n.code,{children:"'users/list'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathFull?: string"})," — full URL of the request. If specified, ignores ",e.jsx(n.code,{children:"api"})," and ",e.jsx(n.code,{children:"path"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"api?: boolean"})," — whether to add the base URL before ",e.jsx(n.code,{children:"path"}),". Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP method (",e.jsx(n.code,{children:"'GET'"}),", ",e.jsx(n.code,{children:"'POST'"}),", ",e.jsx(n.code,{children:"'PUT'"}),", ",e.jsx(n.code,{children:"'DELETE'"}),"). Default: ",e.jsx(n.code,{children:"'GET'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: FormData | Record<string, any> | string"})," — request body (for POST/PUT) or query parameters (for GET). Passed as JSON or ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headers?: Record<string, string> | null"})," — additional request headers. ",e.jsx(n.code,{children:"null"})," — disable all headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string"})," — ",e.jsx(n.code,{children:"Content-Type"})," value. Default: ",e.jsx(n.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auth?: boolean"})," — whether to add authentication headers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", automatically unwraps ",e.jsx(n.code,{children:"data"})," from the ",e.jsx(n.code,{children:"{ data: ... }"})," wrapper. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hideError?: boolean"})," — suppresses error output to ",e.jsx(n.code,{children:"console.error"})," on failure. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalPreparation?: boolean"})," — whether to run the global ",e.jsx(n.code,{children:"setPreparation"})," hook before this request. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalEnd?: boolean"})," — whether to run the global ",e.jsx(n.code,{children:"setEnd"})," hook after the response. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — response handler instead of standard JSON reading."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init?: RequestInit"})," — additional options for native ",e.jsx(n.code,{children:"fetch()"})," (CORS, cache mode, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controller?: AbortController"})," — controller for canceling the request."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useApiRef, setApiRefGlobalConditions } from '@dxtmisha/functional'

const userId = ref('123')
const isAuthenticated = ref(true)

// Global condition (all requests only run if authenticated)
setApiRefGlobalConditions(isAuthenticated)

const {
  data: user,
  starting,
  loading,
  reading,
  getItem,
  reset,
  stop,
  abort
} = useApiRef(
  () => \`users/\${userId.value}\`,
  { method: 'GET' },
  true // Reactively re-run on userId change
)

// Check state without reactivity
console.log(getItem()) // undefined before first access to data

// Force reload
await reset()

// Cancel request (without clearing data)
abort()

// Stop watching (clears data)
stop()
`})})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
