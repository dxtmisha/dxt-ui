import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useApiManagementRef - API Management`}),`
`,(0,c.jsx)(n.h1,{id:`useapimanagementref`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`
`,(0,c.jsx)(n.p,{children:`A powerful composable for comprehensive API request orchestration. It manages data fetching (GET), list formatting, client-side searching, and mutations (POST, PUT, DELETE) all within a single reactive interface.`}),`
`,(0,c.jsx)(n.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — configuration for the main GET request (path, reactivity, skeleton, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`formattersOptions?: FormattersOptions`}),` — optional reactive formatting rules (`,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — optional client-side search configuration (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`postRequest?: ApiManagementRequest<Post>`}),` — optional config for a POST creation request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`putRequest?: ApiManagementRequest<Put>`}),` — optional config for a PUT update request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`deleteRequest?: ApiManagementRequest<Delete>`}),` — optional config for a DELETE removal request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: function`}),` — a common callback to perform after any successful mutation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if data matches `,(0,c.jsx)(n.code,{children:`typeData`}),` check.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: ComputedRef`}),` — the processed data array. `,(0,c.jsx)(n.strong,{children:`Supports Skeleton`}),`: if data is not yet loaded and a `,(0,c.jsx)(n.code,{children:`skeleton()`}),` is provided, it returns placeholders. Accounts for search filters and formatters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — the raw reactive data from `,(0,c.jsx)(n.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length: ComputedRef<number>`}),` — current length of the `,(0,c.jsx)(n.code,{children:`list`}),` (dynamically updates when searching).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthData: ComputedRef<number>`}),` — original length of the data in `,(0,c.jsx)(n.code,{children:`data.value`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the request is still in its initial loading phase.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — flag indicating the data is currently being fetched/read from the server.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — loading state of the main GET request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingSearch: Ref<boolean>`}),` — loading state of the search operation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingPost / loadingPut / loadingDelete`}),` — individual loading sub-states for each mutation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch: ComputedRef<boolean>`}),` — whether a search query is currently active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — reactive search string (Proxy to the provided `,(0,c.jsx)(n.code,{children:`searchOptions.value`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>`}),` — methods to execute mutations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset: () => Promise<void>`}),` — forces a manual restart/refresh of the main GET request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`abort: () => void`}),` — aborts the ongoing network request.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Return extends ApiManagementValue`}),` — logic model for data returned by the API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`FormattersOptions extends FormattersOptionsList`}),` — optional formatting rules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Post / Put / Delete extends Record<string, any>`}),` — data types for the respective mutation requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Type extends ApiManagementValue = Return`}),` — the original raw data type (before transformation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends ArrayToItem<Return>`}),` — the type of a single item in the data list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]`}),` — the item type after formatters are applied.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Columns extends SearchColumns<ItemFormatters>`}),` — columns used for searching.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-work-with-it`,children:`How to work with it`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` is the central hub for data management in CRUD interfaces. It combines network requests, local search, and formatting into a single automated cycle:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Initialization and Lazy Loading`}),`: The hook does not send the network request immediately. The GET request is queued only when your component first accesses the `,(0,c.jsx)(n.code,{children:`list`}),` or `,(0,c.jsx)(n.code,{children:`data`}),` property. This saves resources if the data is not always needed on the screen.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Instant Response (Skeleton)`}),`: If you provide a `,(0,c.jsx)(n.code,{children:`skeleton`}),` function, the `,(0,c.jsx)(n.code,{children:`list`}),` property will immediately return an array of "placeholders" when loading starts. This allows you to render the table or list structure before the first byte of data arrives, eliminating UI "jumps".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Smart List (`,(0,c.jsx)(n.code,{children:`list`}),`)`]}),`: This is the primary point of interaction. The `,(0,c.jsx)(n.code,{children:`list`}),` property automatically switches between:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Skeleton data (during loading).`}),`
`,(0,c.jsx)(n.li,{children:`Search results (if a search query is entered).`}),`
`,(0,c.jsxs)(n.li,{children:[`Formatted data (if `,(0,c.jsx)(n.code,{children:`formattersOptions`}),` are configured).`]}),`
`,(0,c.jsx)(n.li,{children:`Raw data (if none of the above applies).`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Search and Format Synchronization`}),`: Searching is performed on data that is already loaded and, if necessary, formatted. This ensures that a user can find "John Doe" even if the raw JSON data stores these in separate fields. Searching happens on the client side (Client-side), providing instant results.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mutation Cycle and Auto-Refresh`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`When calling `,(0,c.jsx)(n.code,{children:`sendPost`}),`, `,(0,c.jsx)(n.code,{children:`sendPut`}),`, or `,(0,c.jsx)(n.code,{children:`sendDelete`}),` methods, the hook tracks the response status.`]}),`
`,(0,c.jsxs)(n.li,{children:[`If the server returns success (verified via `,(0,c.jsx)(n.code,{children:`isApiSuccess`}),`), the hook `,(0,c.jsx)(n.strong,{children:`automatically`}),` calls `,(0,c.jsx)(n.code,{children:`reset()`}),` for the main GET request.`]}),`
`,(0,c.jsx)(n.li,{children:`This triggers a data reload and updates the entire list. Thus, after deleting a row or adding a new one, your list always remains up to date without writing extra code.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Parameter Reactivity`}),`: If the `,(0,c.jsx)(n.code,{children:`path`}),` or `,(0,c.jsx)(n.code,{children:`options`}),` (in `,(0,c.jsx)(n.code,{children:`propsGet`}),`) are reactive (Vue Ref) and you set `,(0,c.jsx)(n.code,{children:`reactivity: true`}),`, the hook will watch for changes and automatically reload data when the URL or filtering parameters change.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`core-architecture`,children:`Core Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` is an orchestrator hook designed to manage standard CRUD views (like data tables). By passing configurations, you get an all-in-one return object that manages loading spinners, searches, formats data for display, handles CRUD actions, and automatically refetches lists.`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`apimanagementgetreturn-type`,children:(0,c.jsx)(n.code,{children:`ApiManagementGet<Return, Type>`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string | Ref<string>`}),` — API path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — request options (method, headers, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — whether to automatically refetch when `,(0,c.jsx)(n.code,{children:`path`}),` or `,(0,c.jsx)(n.code,{children:`options`}),` change.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: Ref<boolean>`}),` — condition under which the request is executed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: Type) => ApiData<Return>`}),` — function to transform data after fetching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeData?: ((data: Return) => boolean) | any`}),` — data validation function or constructor (e.g., `,(0,c.jsx)(n.code,{children:`Array`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — whether to clear data after component unmount.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`skeleton?: () => Return`}),` — function returning placeholder data during loading.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apimanagementsearcht-k`,children:(0,c.jsx)(n.code,{children:`ApiManagementSearch<T, K>`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: K`}),` — list of columns for searching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — reactive search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — additional search settings.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apimanagementrequestt-return`,children:(0,c.jsx)(n.code,{children:`ApiManagementRequest<T, Return>`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string | Ref<string>`}),` — path for the mutation request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — callback after request execution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — data transformation before sending.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — whether to send data in the request body (under `,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — additional request options.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};