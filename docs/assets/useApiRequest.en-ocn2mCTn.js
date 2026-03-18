import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useApiRequest - API Request Execution"}),`
`,e.jsx(n.h1,{id:"useapirequest",children:e.jsx(n.code,{children:"useApiRequest"})}),`
`,e.jsxs(n.p,{children:["Returns an object with a loading state and a ",e.jsx(n.code,{children:"send"})," method for executing API requests."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — Path to the API endpoint (can be reactive)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method: ApiMethodItem = ApiMethodItem.post"})," — HTTP method to use for the request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Callback action to perform after the request completes successfully."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — Function to transform the response data before it is returned or passed to the ",e.jsx(n.code,{children:"action"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData: boolean = true"})," — Whether to extract the ",e.jsx(n.code,{children:"data"})," field from the response."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — Additional request options (",e.jsx(n.code,{children:"ApiFetch"})," object parameter)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
An object with the following properties:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — Reactive loading state. It becomes ",e.jsx(n.code,{children:"true"})," while the request is in progress and ",e.jsx(n.code,{children:"false"})," after it completes or fails."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — An asynchronous method for sending the request. It automatically manages the ",e.jsx(n.code,{children:"loading"})," state, applies the transformation function to the response, executes the ",e.jsx(n.code,{children:"action"})," callback on success, and handles errors safely by logging them to the console."]}),`
`]}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useApiRequest } from '@dxtmisha/functional'
import { ApiMethodItem } from '@dxtmisha/functional-basic'

const { loading, send } = useApiRequest(
  '/api/submit',
  ApiMethodItem.post,
  (data) => console.log('Action complete:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Final Result:', result)
}
`})})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
