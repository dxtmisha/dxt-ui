import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useApiManagementRef - API Management`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementref`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`
`,(0,c.jsx)(t.p,{children:`A powerful composable for comprehensive API request orchestration. It manages data fetching (GET), list formatting, client-side searching, and mutations (POST, PUT, DELETE) all within a single reactive interface.`}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — configuration for the main GET request (path, reactivity, skeleton, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — optional reactive formatting rules (`,(0,c.jsx)(t.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — optional client-side search configuration (`,(0,c.jsx)(t.code,{children:`useSearchRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest?: ApiManagementRequest<Post>`}),` — optional config for a POST creation request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`putRequest?: ApiManagementRequest<Put>`}),` — optional config for a PUT update request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`deleteRequest?: ApiManagementRequest<Delete>`}),` — optional config for a DELETE removal request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: function`}),` — a common callback to perform after any successful mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if data matches `,(0,c.jsx)(t.code,{children:`typeData`}),` check.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the response data matches the defined contract.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — detailed result of the contract validation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — the processed data array. `,(0,c.jsx)(t.strong,{children:`Supports Skeleton`}),`: if data is not yet loaded and a `,(0,c.jsx)(t.code,{children:`skeleton()`}),` is provided, it returns placeholders. Accounts for search filters and formatters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — the raw reactive data from `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — current error object if the request failed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — current length of the `,(0,c.jsx)(t.code,{children:`list`}),` (dynamically updates when searching).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthData: ComputedRef<number>`}),` — original length of the data in `,(0,c.jsx)(t.code,{children:`data.value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the request is still in its initial loading phase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — flag indicating the data is currently being fetched/read from the server.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — loading state of the main GET request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch: Ref<boolean>`}),` — loading state of the search operation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingPost / loadingPut / loadingDelete`}),` — individual loading sub-states for each mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — whether a search query is currently active.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — reactive search string (Proxy to the provided `,(0,c.jsx)(t.code,{children:`searchOptions.value`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>`}),` — methods to execute mutations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init: () => void`}),` — method for explicit manual initialization of request and observation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initSsr: () => void`}),` — method for server-side initialization (SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset: () => Promise<void>`}),` — forces a manual restart/refresh of the main GET request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`abort: () => void`}),` — aborts the ongoing network request.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`async-version`,children:`Async Version`}),`
`,(0,c.jsxs)(t.p,{children:[`For cases where immediate (non-lazy) initialization is required (e.g., for SSR), use `,(0,c.jsx)(t.a,{href:`./useApiManagementAsyncRef.en.mdx`,children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})})}),`. It automatically calls `,(0,c.jsx)(t.code,{children:`initSsr()`}),` upon creation.`]}),`
`,(0,c.jsx)(t.h2,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Return extends ApiManagementValue`}),` — logic model for data returned by the API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FormattersOptions extends FormattersOptionsList`}),` — optional formatting rules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Post / Put / Delete extends Record<string, any>`}),` — data types for the respective mutation requests.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Type extends ApiManagementValue = Return`}),` — the original raw data type (before transformation).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Item extends ArrayToItem<Return>`}),` — the type of a single item in the data list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]`}),` — the item type after formatters are applied.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Columns extends SearchColumns<ItemFormatters>`}),` — columns used for searching.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-work-with-it`,children:`How to work with it`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` is the central hub for data management in CRUD interfaces. It combines network requests, local search, and formatting into a single automated cycle:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Initialization and Lazy Loading`}),`: The hook does not send the network request immediately. The GET request is queued only when your component first accesses the `,(0,c.jsx)(t.code,{children:`list`}),` or `,(0,c.jsx)(t.code,{children:`data`}),` property. This saves resources if the data is not always needed on the screen.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instant Response (Skeleton)`}),`: If you provide a `,(0,c.jsx)(t.code,{children:`skeleton`}),` function, the `,(0,c.jsx)(t.code,{children:`list`}),` property will immediately return an array of "placeholders" when loading starts. This allows you to render the table or list structure before the first byte of data arrives, eliminating UI "jumps".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Smart List (`,(0,c.jsx)(t.code,{children:`list`}),`)`]}),`: This is the primary point of interaction. The `,(0,c.jsx)(t.code,{children:`list`}),` property automatically switches between:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Skeleton data (during loading).`}),`
`,(0,c.jsx)(t.li,{children:`Search results (if a search query is entered).`}),`
`,(0,c.jsxs)(t.li,{children:[`Formatted data (if `,(0,c.jsx)(t.code,{children:`formattersOptions`}),` are configured).`]}),`
`,(0,c.jsx)(t.li,{children:`Raw data (if none of the above applies).`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Search and Format Synchronization`}),`: Searching is performed on data that is already loaded and, if necessary, formatted. This ensures that a user can find "John Doe" even if the raw JSON data stores these in separate fields. Searching happens on the client side (Client-side), providing instant results.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mutation Cycle and Auto-Refresh`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`When calling `,(0,c.jsx)(t.code,{children:`sendPost`}),`, `,(0,c.jsx)(t.code,{children:`sendPut`}),`, or `,(0,c.jsx)(t.code,{children:`sendDelete`}),` methods, the hook tracks the response status.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the server returns success (verified via `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`), the hook `,(0,c.jsx)(t.strong,{children:`automatically`}),` calls `,(0,c.jsx)(t.code,{children:`reset()`}),` for the main GET request.`]}),`
`,(0,c.jsx)(t.li,{children:`This triggers a data reload and updates the entire list. Thus, after deleting a row or adding a new one, your list always remains up to date without writing extra code.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameter Reactivity`}),`: If the `,(0,c.jsx)(t.code,{children:`path`}),` or `,(0,c.jsx)(t.code,{children:`options`}),` (in `,(0,c.jsx)(t.code,{children:`propsGet`}),`) are reactive (Vue Ref) and you set `,(0,c.jsx)(t.code,{children:`reactivity: true`}),`, the hook will watch for changes and automatically reload data when the URL or filtering parameters change.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ssr-and-initialization`,children:`SSR and Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To ensure correct operation of `,(0,c.jsx)(t.strong,{children:`Server Side Rendering (SSR)`}),`, it is recommended to use the asynchronous version `,(0,c.jsx)(t.a,{href:`./useApiManagementAsyncRef.en.mdx`,children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})})}),`. It automatically initializes the GET request for pre-fetching on the server.`]}),`
`,(0,c.jsxs)(t.p,{children:[`If you are using the standard `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, you can manually include it in the SSR cycle by calling `,(0,c.jsx)(t.code,{children:`initSsr()`}),` in the component's `,(0,c.jsx)(t.code,{children:`setup()`}),`. This ensures that the data will be loaded on the server side.`]}),`
`,(0,c.jsx)(t.h2,{id:`core-architecture`,children:`Core Architecture`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` is an orchestrator hook designed to manage standard CRUD views (like data tables). By passing configurations, you get an all-in-one return object that manages loading spinners, searches, formats data for display, handles CRUD actions, and automatically refetches lists.`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementgetreturn-type`,children:(0,c.jsx)(t.code,{children:`ApiManagementGet<Return, Type>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — API path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — request options (method, headers, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactivity?: boolean`}),` — whether to automatically refetch when `,(0,c.jsx)(t.code,{children:`path`}),` or `,(0,c.jsx)(t.code,{children:`options`}),` change.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: Ref<boolean>`}),` — condition under which the request is executed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>`}),` — function to transform data after fetching.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: Type) => ApiDataValidation`}),` — function to validate the response data contract.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: ((data: Return) => boolean) | any`}),` — data validation function or constructor (e.g., `,(0,c.jsx)(t.code,{children:`Array`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unmounted?: boolean`}),` — whether to clear data after component unmount.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`skeleton?: () => Return`}),` — function returning placeholder data during loading.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementsearcht-k`,children:(0,c.jsx)(t.code,{children:`ApiManagementSearch<T, K>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns: K`}),` — list of columns for searching.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — reactive search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — additional search settings.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementrequestt-return`,children:(0,c.jsx)(t.code,{children:`ApiManagementRequest<T, Return>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — path for the mutation request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — callback after request execution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — data transformation before sending.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — request contract validation function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — response contract validation function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — whether to wrap the payload in a 'data' property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — additional request options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const searchVal = ref('')

const { 
  list, 
  loading, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  // 1. GET Request
  { path: 'api/users', skeleton: () => [{ id: 0, name: 'Loading...' }] },
  // 2. Formatters
  {  price: { type: FormattersType.currency } },
  // 3. Search
  { columns: ['name'], value: searchVal },
  // 4. POST
  { path: 'api/users/create' },
  // 5. PUT (not used)
  undefined,
  // 6. DELETE
  { path: 'api/users/delete' }
)

// To create a user:
// await sendPost({ data: { name: 'New User' } })
// This will automatically run request.reset() and fetch latest users!
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};