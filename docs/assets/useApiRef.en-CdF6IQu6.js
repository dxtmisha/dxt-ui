import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{Meta:r}=t;return r||o(`Meta`,!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useApiRef - API Requests`}),`
`,(0,s.jsx)(t.h1,{id:`useapiref`,children:(0,s.jsx)(t.code,{children:`useApiRef`})}),`
`,(0,s.jsx)(t.p,{children:`A composable for working with API requests in Vue components. Returns reactive data, state flags, and load management methods.`}),`
`,(0,s.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:`Lazy Initialization`}),`: Requests and dependency watchers are only initialized upon the first access to data (`,(0,s.jsx)(t.code,{children:`data`}),` or `,(0,s.jsx)(t.code,{children:`item`}),`). This allows declaring `,(0,s.jsx)(t.code,{children:`useApiRef`}),` without immediate network or CPU overhead.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:`Global Scope (Eternal)`}),`: If the `,(0,s.jsx)(t.code,{children:`unmounted`}),` parameter is set to `,(0,s.jsx)(t.code,{children:`false`}),`, reactivity is moved to `,(0,s.jsx)(t.code,{children:`EffectScopeGlobal`}),`. This ensures requests continue to update even after the component that created them is unmounted.`]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — endpoint path (can be a reactive `,(0,s.jsx)(t.code,{children:`Ref`}),`).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`options?: ApiOptions`}),` — request options (`,(0,s.jsx)(t.code,{children:`ApiFetch`}),` object or method name string).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`reactivity?: boolean`}),` — automatically re-run the request when `,(0,s.jsx)(t.code,{children:`path`}),`, `,(0,s.jsx)(t.code,{children:`options`}),`, or locale change. Default: `,(0,s.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`conditions?: RefType<boolean>`}),` — reactive execution condition. If `,(0,s.jsx)(t.code,{children:`false`}),` — the request is not made and data is cleared.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — response transformation function applied before saving to `,(0,s.jsx)(t.code,{children:`data`}),`. Receives the contract validation result as the second argument.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — function to validate the response data contract.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`unmounted?: boolean`}),` — if `,(0,s.jsx)(t.code,{children:`true`}),` (default), data is cleared and the watcher is stopped when the component unmounts. When `,(0,s.jsx)(t.code,{children:`false`}),`, `,(0,s.jsx)(t.code,{children:`EffectScopeGlobal`}),` is used for background persistence.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,s.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:[`Returns (`,(0,s.jsx)(t.code,{children:`UseApiRef<R>`}),`):`]})}),`
`,(0,s.jsx)(t.p,{children:`Reactive states:`}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — A reference to the loaded data (Computed). Initiates `,(0,s.jsx)(t.strong,{children:`lazy initialization`}),` (request and watcher) on the first access.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — Direct reference to data (Ref). Also initiates lazy initialization upon access.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,s.jsx)(t.code,{children:`true`}),` if the response contract is valid (`,(0,s.jsx)(t.code,{children:`success`}),` status).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — the full contract validation result object.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — current error object if the request failed.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — Returns `,(0,s.jsx)(t.code,{children:`true`}),` if data has never been requested yet or is in the process of fetching the first portion of data (`,(0,s.jsx)(t.code,{children:`data`}),` is still `,(0,s.jsx)(t.code,{children:`undefined`}),`).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — Returns `,(0,s.jsx)(t.code,{children:`true`}),` if any network request (initial or subsequent `,(0,s.jsx)(t.code,{children:`reset`}),`) is currently in progress.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — A flag for an active data reading/processing process.`]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:`Methods:`}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`isStarting(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(t.code,{children:`starting`}),` flag.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`isLoading(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(t.code,{children:`loading`}),` flag.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`isReading(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(t.code,{children:`reading`}),` flag.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`getItem(): ApiData<R> | undefined`}),` — Method to get the current value of `,(0,s.jsx)(t.code,{children:`data`}),` without creating a reactive dependency.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — Method for explicit request and watcher initialization. Triggered automatically on first access to `,(0,s.jsx)(t.code,{children:`data`}),`. If `,(0,s.jsx)(t.code,{children:`awaitFetch`}),` is `,(0,s.jsx)(t.code,{children:`true`}),`, it waits for the first request to complete.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`initSsr(): void`}),` — Method for server-side initialization. Uses `,(0,s.jsx)(t.code,{children:`onServerPrefetch`}),` to fetch data during SSR.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`reset(): Promise<void>`}),` — An asynchronous method to force re-run the request. Cancels the current active request (if any) and initiates a new one.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`stop(): void`}),` — Stops watching reactive dependencies and resets `,(0,s.jsx)(t.code,{children:`data`}),` to `,(0,s.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`abort(): void`}),` — Cancels the current HTTP request via the internal `,(0,s.jsx)(t.code,{children:`AbortController`}),`, while keeping already loaded data in `,(0,s.jsx)(t.code,{children:`data`}),`.`]}),`
`]}),`
`,(0,s.jsx)(t.h2,{id:`lazy-initialization`,children:`Lazy Initialization`}),`
`,(0,s.jsxs)(t.p,{children:[`Requests and watching mechanisms `,(0,s.jsx)(t.strong,{children:`are not started`}),` immediately when `,(0,s.jsx)(t.code,{children:`useApiRef`}),` is called. They are activated only when accessing `,(0,s.jsx)(t.code,{children:`data`}),`, `,(0,s.jsx)(t.code,{children:`item`}),`, or calling `,(0,s.jsx)(t.code,{children:`init()`}),`. This optimizes the performance of setup scripts.`]}),`
`,(0,s.jsx)(t.h2,{id:`global-conditions`,children:`Global Conditions`}),`
`,(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:`setApiRefGlobalConditions(conditions)`}),` — sets a global condition for all `,(0,s.jsx)(t.code,{children:`useApiRef`}),` instances. Only works on the first call.`]}),`
`,(0,s.jsx)(t.h2,{id:`ssr-server-side-rendering`,children:`SSR (Server-Side Rendering)`}),`
`,(0,s.jsxs)(t.p,{children:[`To ensure correct operation on the server side (SSR), the `,(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:`initSsr()`})}),` method must be used.`]}),`
`,(0,s.jsxs)(t.h3,{id:`the-initssr-method`,children:[`The `,(0,s.jsx)(t.code,{children:`initSsr()`}),` Method`]}),`
`,(0,s.jsxs)(t.p,{children:[`When called in a component's `,(0,s.jsx)(t.code,{children:`setup()`}),`, it ensures that data is loaded on the server before page rendering and applied instantly on the client.`]}),`
`,(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:`language-typescript`,children:`const { data, initSsr } = useApiRef('path/to/api')

// Call this for SSR support
initSsr()
`})}),`
`,(0,s.jsxs)(t.h3,{id:`automation-via-asyncref`,children:[`Automation via `,(0,s.jsx)(t.code,{children:`AsyncRef`})]}),`
`,(0,s.jsxs)(t.p,{children:[`To avoid calling `,(0,s.jsx)(t.code,{children:`initSsr()`}),` manually, you can use the asynchronous version — `,(0,s.jsx)(t.a,{href:`./useApiAsyncRef.en.mdx`,children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:`useApiAsyncRef`})})}),`. It automatically calls `,(0,s.jsx)(t.code,{children:`initSsr()`}),` upon creation.`]}),`
`,(0,s.jsx)(t.h2,{id:`apioptions-object`,children:`ApiOptions Object`}),`
`,(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:`ApiOptions`}),` — can accept a string with the `,(0,s.jsx)(t.code,{children:`method`}),` name (e.g., `,(0,s.jsx)(t.code,{children:`'GET'`}),`) or an object of type `,(0,s.jsx)(t.code,{children:`ApiFetch`}),`. Fields of the `,(0,s.jsx)(t.code,{children:`ApiFetch`}),` object:`]}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`path?: string`}),` — path to the endpoint script relative to the base URL (e.g., `,(0,s.jsx)(t.code,{children:`'users/list'`}),`).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`pathFull?: string`}),` — full URL of the request. If specified, ignores `,(0,s.jsx)(t.code,{children:`api`}),` and `,(0,s.jsx)(t.code,{children:`path`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`api?: boolean`}),` — whether to add the base URL before `,(0,s.jsx)(t.code,{children:`path`}),`. Default: `,(0,s.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`method?: ApiMethod`}),` — HTTP method (`,(0,s.jsx)(t.code,{children:`'GET'`}),`, `,(0,s.jsx)(t.code,{children:`'POST'`}),`, `,(0,s.jsx)(t.code,{children:`'PUT'`}),`, `,(0,s.jsx)(t.code,{children:`'DELETE'`}),`). Default: `,(0,s.jsx)(t.code,{children:`'GET'`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`request?: FormData | Record<string, any> | string`}),` — request body (for POST/PUT) or query parameters (for GET). Passed as JSON or `,(0,s.jsx)(t.code,{children:`FormData`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`headers?: Record<string, string> | null`}),` — additional request headers. `,(0,s.jsx)(t.code,{children:`null`}),` — disable all headers.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`type?: string`}),` — `,(0,s.jsx)(t.code,{children:`Content-Type`}),` value. Default: `,(0,s.jsx)(t.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`auth?: boolean`}),` — whether to add authentication headers.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`toData?: boolean`}),` — if `,(0,s.jsx)(t.code,{children:`true`}),`, automatically unwraps `,(0,s.jsx)(t.code,{children:`data`}),` from the `,(0,s.jsx)(t.code,{children:`{ data: ... }`}),` wrapper. Default: `,(0,s.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`hideError?: boolean`}),` — suppresses error output to `,(0,s.jsx)(t.code,{children:`console.error`}),` on failure. Default: `,(0,s.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`globalPreparation?: boolean`}),` — whether to run the global `,(0,s.jsx)(t.code,{children:`setPreparation`}),` hook before this request. Default: `,(0,s.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`globalEnd?: boolean`}),` — whether to run the global `,(0,s.jsx)(t.code,{children:`setEnd`}),` hook after the response. Default: `,(0,s.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — response handler instead of standard JSON reading.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`init?: RequestInit`}),` — additional options for native `,(0,s.jsx)(t.code,{children:`fetch()`}),` (CORS, cache mode, etc.).`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`controller?: AbortController`}),` — controller for canceling the request.`]}),`
`,(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:`retry?: number`}),` — number of retries on failure.`]}),`
`]}),`
`,(0,s.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s;function c(){return(c=e((()=>{s=r(),t()})))()}c();export{a as default};