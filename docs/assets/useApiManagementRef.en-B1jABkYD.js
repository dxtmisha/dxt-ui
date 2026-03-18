import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useApiManagementRef - API Management"}),`
`,e.jsx(n.h1,{id:"useapimanagementref",children:e.jsx(n.code,{children:"useApiManagementRef"})}),`
`,e.jsx(n.p,{children:"A powerful composable for comprehensive API request orchestration. It manages data fetching (GET), list formatting, client-side searching, and mutations (POST, PUT, DELETE) all within a single reactive interface."}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"propsGet: ApiManagementGet<Return, Type>"})," — configuration for the main GET request (path, reactivity, skeleton, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formattersOptions?: FormattersOptions"})," — optional reactive formatting rules (",e.jsx(n.code,{children:"useFormattersRef"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchOptions?: ApiManagementSearch<Item, Columns>"})," — optional client-side search configuration (",e.jsx(n.code,{children:"useSearchRef"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"postRequest?: ApiManagementRequest<Post>"})," — optional config for a POST creation request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"putRequest?: ApiManagementRequest<Put>"})," — optional config for a PUT update request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteRequest?: ApiManagementRequest<Delete>"})," — optional config for a DELETE removal request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: function"})," — a common callback to perform after any successful mutation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: ComputedRef"})," — the processed data array. ",e.jsx(n.strong,{children:"Supports Skeleton"}),": if data is not yet loaded and a ",e.jsx(n.code,{children:"skeleton()"})," is provided, it returns placeholders. Accounts for search filters and formatters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ComputedRef<ApiData<Return> | undefined>"})," — the raw reactive data from ",e.jsx(n.code,{children:"useApiRef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length: ComputedRef<number>"})," — current length of the ",e.jsx(n.code,{children:"list"})," (dynamically updates when searching)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthData: ComputedRef<number>"})," — original length of the data in ",e.jsx(n.code,{children:"data.value"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting: ComputedRef<boolean>"})," — ",e.jsx(n.code,{children:"true"})," if the request is still in its initial loading phase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading: Ref<boolean>"})," — flag indicating the data is currently being fetched/read from the server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — loading state of the main GET request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loadingSearch: Ref<boolean>"})," — loading state of the search operation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loadingPost / loadingPut / loadingDelete"})," — individual loading sub-states for each mutation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSearch: ComputedRef<boolean>"})," — whether a search query is currently active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — reactive search string (Proxy to the provided ",e.jsx(n.code,{children:"searchOptions.value"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>"})," — methods to execute mutations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset: () => Promise<void>"})," — forces a manual restart/refresh of the main GET request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort: () => void"})," — aborts the ongoing network request."]}),`
`]}),`
`,e.jsx(n.h2,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Return extends ApiManagementValue"})," — logic model for data returned by the API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormattersOptions extends FormattersOptionsList"})," — optional formatting rules."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Post / Put / Delete extends Record<string, any>"})," — data types for the respective mutation requests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Type extends ApiManagementValue = Return"})," — the original raw data type (before transformation)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Item extends ArrayToItem<Return>"})," — the type of a single item in the data list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]"})," — the item type after formatters are applied."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Columns extends SearchColumns<ItemFormatters>"})," — columns used for searching."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-work-with-it",children:"How to work with it"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useApiManagementRef"})," is the central hub for data management in CRUD interfaces. It combines network requests, local search, and formatting into a single automated cycle:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initialization and Lazy Loading"}),": The hook does not send the network request immediately. The GET request is queued only when your component first accesses the ",e.jsx(n.code,{children:"list"})," or ",e.jsx(n.code,{children:"data"})," property. This saves resources if the data is not always needed on the screen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Instant Response (Skeleton)"}),": If you provide a ",e.jsx(n.code,{children:"skeleton"})," function, the ",e.jsx(n.code,{children:"list"}),' property will immediately return an array of "placeholders" when loading starts. This allows you to render the table or list structure before the first byte of data arrives, eliminating UI "jumps".']}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Smart List (",e.jsx(n.code,{children:"list"}),")"]}),": This is the primary point of interaction. The ",e.jsx(n.code,{children:"list"})," property automatically switches between:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Skeleton data (during loading)."}),`
`,e.jsx(n.li,{children:"Search results (if a search query is entered)."}),`
`,e.jsxs(n.li,{children:["Formatted data (if ",e.jsx(n.code,{children:"formattersOptions"})," are configured)."]}),`
`,e.jsx(n.li,{children:"Raw data (if none of the above applies)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search and Format Synchronization"}),': Searching is performed on data that is already loaded and, if necessary, formatted. This ensures that a user can find "John Doe" even if the raw JSON data stores these in separate fields. Searching happens on the client side (Client-side), providing instant results.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mutation Cycle and Auto-Refresh"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When calling ",e.jsx(n.code,{children:"sendPost"}),", ",e.jsx(n.code,{children:"sendPut"}),", or ",e.jsx(n.code,{children:"sendDelete"})," methods, the hook tracks the response status."]}),`
`,e.jsxs(n.li,{children:["If the server returns success (verified via ",e.jsx(n.code,{children:"isApiSuccess"}),"), the hook ",e.jsx(n.strong,{children:"automatically"})," calls ",e.jsx(n.code,{children:"reset()"})," for the main GET request."]}),`
`,e.jsx(n.li,{children:"This triggers a data reload and updates the entire list. Thus, after deleting a row or adding a new one, your list always remains up to date without writing extra code."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parameter Reactivity"}),": If the ",e.jsx(n.code,{children:"path"})," or ",e.jsx(n.code,{children:"options"})," (in ",e.jsx(n.code,{children:"propsGet"}),") are reactive (Vue Ref) and you set ",e.jsx(n.code,{children:"reactivity: true"}),", the hook will watch for changes and automatically reload data when the URL or filtering parameters change."]}),`
`]}),`
`,e.jsx(n.h2,{id:"core-architecture",children:"Core Architecture"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useApiManagementRef"})," is an orchestrator hook designed to manage standard CRUD views (like data tables). By passing configurations, you get an all-in-one return object that manages loading spinners, searches, formats data for display, handles CRUD actions, and automatically refetches lists."]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"apimanagementgetreturn-type",children:e.jsx(n.code,{children:"ApiManagementGet<Return, Type>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string | Ref<string>"})," — API path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — request options (method, headers, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — whether to automatically refetch when ",e.jsx(n.code,{children:"path"})," or ",e.jsx(n.code,{children:"options"})," change."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: Ref<boolean>"})," — condition under which the request is executed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: Type) => ApiData<Return>"})," — function to transform data after fetching."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — whether to clear data after component unmount."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"skeleton?: () => Return"})," — function returning placeholder data during loading."]}),`
`]}),`
`,e.jsx(n.h3,{id:"apimanagementsearcht-k",children:e.jsx(n.code,{children:"ApiManagementSearch<T, K>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns: K"})," — list of columns for searching."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — reactive search string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — additional search settings."]}),`
`]}),`
`,e.jsx(n.h3,{id:"apimanagementrequestt-return",children:e.jsx(n.code,{children:"ApiManagementRequest<T, Return>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string | Ref<string>"})," — path for the mutation request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — callback after request execution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — data transformation before sending."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — whether to send data in the request body (under ",e.jsx(n.code,{children:"data"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — additional request options."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
