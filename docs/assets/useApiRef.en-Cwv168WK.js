import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{t as r}from"./mdx-react-shim-n552quEh.js";function i(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components},{Meta:r}=n;return r||o(`Meta`,!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useApiRef - API Requests`}),`
`,(0,s.jsx)(n.h1,{id:`useapiref`,children:(0,s.jsx)(n.code,{children:`useApiRef`})}),`
`,(0,s.jsx)(n.p,{children:`A composable for working with API requests in Vue components. Returns reactive data, state flags, and load management methods.`}),`
`,(0,s.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:`Lazy Initialization`}),`: Requests and dependency watchers are only initialized upon the first access to data (`,(0,s.jsx)(n.code,{children:`data`}),` or `,(0,s.jsx)(n.code,{children:`item`}),`). This allows declaring `,(0,s.jsx)(n.code,{children:`useApiRef`}),` without immediate network or CPU overhead.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:`Global Scope (Eternal)`}),`: If the `,(0,s.jsx)(n.code,{children:`unmounted`}),` parameter is set to `,(0,s.jsx)(n.code,{children:`false`}),`, reactivity is moved to `,(0,s.jsx)(n.code,{children:`EffectScopeGlobal`}),`. This ensures requests continue to update even after the component that created them is unmounted.`]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — endpoint path (can be a reactive `,(0,s.jsx)(n.code,{children:`Ref`}),`).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`options?: ApiOptions`}),` — request options (`,(0,s.jsx)(n.code,{children:`ApiFetch`}),` object or method name string).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`reactivity?: boolean`}),` — automatically re-run the request when `,(0,s.jsx)(n.code,{children:`path`}),`, `,(0,s.jsx)(n.code,{children:`options`}),`, or locale change. Default: `,(0,s.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — reactive execution condition. If `,(0,s.jsx)(n.code,{children:`false`}),` — the request is not made and data is cleared.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — response transformation function applied before saving to `,(0,s.jsx)(n.code,{children:`data`}),`. Receives the contract validation result as the second argument.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — function to validate the response data contract.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`unmounted?: boolean`}),` — if `,(0,s.jsx)(n.code,{children:`true`}),` (default), data is cleared and the watcher is stopped when the component unmounts. When `,(0,s.jsx)(n.code,{children:`false`}),`, `,(0,s.jsx)(n.code,{children:`EffectScopeGlobal`}),` is used for background persistence.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,s.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[`Returns (`,(0,s.jsx)(n.code,{children:`UseApiRef<R>`}),`):`]})}),`
`,(0,s.jsx)(n.p,{children:`Reactive states:`}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — A reference to the loaded data (Computed). Initiates `,(0,s.jsx)(n.strong,{children:`lazy initialization`}),` (request and watcher) on the first access.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — Direct reference to data (Ref). Also initiates lazy initialization upon access.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,s.jsx)(n.code,{children:`true`}),` if the response contract is valid (`,(0,s.jsx)(n.code,{children:`success`}),` status).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — the full contract validation result object.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — Returns `,(0,s.jsx)(n.code,{children:`true`}),` if data has never been requested yet or is in the process of fetching the first portion of data (`,(0,s.jsx)(n.code,{children:`data`}),` is still `,(0,s.jsx)(n.code,{children:`undefined`}),`).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Returns `,(0,s.jsx)(n.code,{children:`true`}),` if any network request (initial or subsequent `,(0,s.jsx)(n.code,{children:`reset`}),`) is currently in progress.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — A flag for an active data reading/processing process.`]}),`
`]}),`
`,(0,s.jsx)(n.p,{children:`Methods:`}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`isStarting(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(n.code,{children:`starting`}),` flag.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`isLoading(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(n.code,{children:`loading`}),` flag.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`isReading(): boolean`}),` — A synchronous method that returns the current value of the `,(0,s.jsx)(n.code,{children:`reading`}),` flag.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`getItem(): ApiData<R> | undefined`}),` — Method to get the current value of `,(0,s.jsx)(n.code,{children:`data`}),` without creating a reactive dependency.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — Method for explicit request and watcher initialization. Triggered automatically on first access to `,(0,s.jsx)(n.code,{children:`data`}),`. If `,(0,s.jsx)(n.code,{children:`awaitFetch`}),` is `,(0,s.jsx)(n.code,{children:`true`}),`, it waits for the first request to complete.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`reset(): Promise<void>`}),` — An asynchronous method to force re-run the request. Cancels the current active request (if any) and initiates a new one.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`stop(): void`}),` — Stops watching reactive dependencies and resets `,(0,s.jsx)(n.code,{children:`data`}),` to `,(0,s.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`abort(): void`}),` — Cancels the current HTTP request via the internal `,(0,s.jsx)(n.code,{children:`AbortController`}),`, while keeping already loaded data in `,(0,s.jsx)(n.code,{children:`data`}),`.`]}),`
`]}),`
`,(0,s.jsx)(n.h2,{id:`lazy-initialization`,children:`Lazy Initialization`}),`
`,(0,s.jsxs)(n.p,{children:[`Requests and watching mechanisms `,(0,s.jsx)(n.strong,{children:`are not started`}),` immediately when `,(0,s.jsx)(n.code,{children:`useApiRef`}),` is called. They are activated only when accessing `,(0,s.jsx)(n.code,{children:`data`}),`, `,(0,s.jsx)(n.code,{children:`item`}),`, or calling `,(0,s.jsx)(n.code,{children:`init()`}),`. This optimizes the performance of setup scripts.`]}),`
`,(0,s.jsx)(n.h2,{id:`global-conditions`,children:`Global Conditions`}),`
`,(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:`setApiRefGlobalConditions(conditions)`}),` — sets a global condition for all `,(0,s.jsx)(n.code,{children:`useApiRef`}),` instances. Only works on the first call.`]}),`
`,(0,s.jsx)(n.h2,{id:`ssr-and-initialization`,children:`SSR and Initialization`}),`
`,(0,s.jsxs)(n.p,{children:[`The `,(0,s.jsx)(n.code,{children:`init`}),` method is designed to manage the primary data loading process, which is critical for the correct operation of `,(0,s.jsx)(n.strong,{children:`Server Side Rendering (SSR)`}),` and ensuring fast interface rendering on the client.`]}),`
`,(0,s.jsx)(n.h3,{id:`mechanism-of-operation-hydration`,children:`Mechanism of Operation (Hydration)`}),`
`,(0,s.jsxs)(n.ol,{children:[`
`,(0,s.jsxs)(n.li,{children:[`
`,(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:`Server Side (SSR):`}),`
When the page is first opened, `,(0,s.jsx)(n.code,{children:`await init()`}),` should be called in `,(0,s.jsx)(n.code,{children:`async setup()`}),`. This forces the server to wait for the API response and render the component with ready-made data. The received data is automatically placed in the state cache, which is then passed to the client.`]}),`
`]}),`
`,(0,s.jsxs)(n.li,{children:[`
`,(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:`Client Side (Hydration):`}),`
When the browser "hydrates" the page, `,(0,s.jsx)(n.code,{children:`useApiRef`}),` first checks for data in the cache. If data is there (received from the server), it is immediately applied to `,(0,s.jsx)(n.code,{children:`data`}),`, avoiding a duplicate API request.`]}),`
`]}),`
`,(0,s.jsxs)(n.li,{children:[`
`,(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:`Dynamic Navigation (Client-side Nav):`}),`
If the user navigates to the page dynamically (without a page reload), the component renders immediately without waiting for `,(0,s.jsx)(n.code,{children:`init()`}),` to complete. This allows for instantly showing a `,(0,s.jsx)(n.strong,{children:`skeleton`}),` or loading indicator (`,(0,s.jsx)(n.code,{children:`loading`}),`) while data is being fetched in the background.`]}),`
`]}),`
`]}),`
`,(0,s.jsx)(n.h2,{id:`apioptions-object`,children:`ApiOptions Object`}),`
`,(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:`ApiOptions`}),` — can accept a string with the `,(0,s.jsx)(n.code,{children:`method`}),` name (e.g., `,(0,s.jsx)(n.code,{children:`'GET'`}),`) or an object of type `,(0,s.jsx)(n.code,{children:`ApiFetch`}),`. Fields of the `,(0,s.jsx)(n.code,{children:`ApiFetch`}),` object:`]}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`path?: string`}),` — path to the endpoint script relative to the base URL (e.g., `,(0,s.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`pathFull?: string`}),` — full URL of the request. If specified, ignores `,(0,s.jsx)(n.code,{children:`api`}),` and `,(0,s.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`api?: boolean`}),` — whether to add the base URL before `,(0,s.jsx)(n.code,{children:`path`}),`. Default: `,(0,s.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`method?: ApiMethod`}),` — HTTP method (`,(0,s.jsx)(n.code,{children:`'GET'`}),`, `,(0,s.jsx)(n.code,{children:`'POST'`}),`, `,(0,s.jsx)(n.code,{children:`'PUT'`}),`, `,(0,s.jsx)(n.code,{children:`'DELETE'`}),`). Default: `,(0,s.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — request body (for POST/PUT) or query parameters (for GET). Passed as JSON or `,(0,s.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — additional request headers. `,(0,s.jsx)(n.code,{children:`null`}),` — disable all headers.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`type?: string`}),` — `,(0,s.jsx)(n.code,{children:`Content-Type`}),` value. Default: `,(0,s.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`auth?: boolean`}),` — whether to add authentication headers.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`toData?: boolean`}),` — if `,(0,s.jsx)(n.code,{children:`true`}),`, automatically unwraps `,(0,s.jsx)(n.code,{children:`data`}),` from the `,(0,s.jsx)(n.code,{children:`{ data: ... }`}),` wrapper. Default: `,(0,s.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`hideError?: boolean`}),` — suppresses error output to `,(0,s.jsx)(n.code,{children:`console.error`}),` on failure. Default: `,(0,s.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — whether to run the global `,(0,s.jsx)(n.code,{children:`setPreparation`}),` hook before this request. Default: `,(0,s.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`globalEnd?: boolean`}),` — whether to run the global `,(0,s.jsx)(n.code,{children:`setEnd`}),` hook after the response. Default: `,(0,s.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — response handler instead of standard JSON reading.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`init?: RequestInit`}),` — additional options for native `,(0,s.jsx)(n.code,{children:`fetch()`}),` (CORS, cache mode, etc.).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`controller?: AbortController`}),` — controller for canceling the request.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:`retry?: number`}),` — number of retries on failure.`]}),`
`]}),`
`,(0,s.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s;e((()=>{s=n(),r()}))();export{a as default};