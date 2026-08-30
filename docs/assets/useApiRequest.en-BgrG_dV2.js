import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useApiRequest - API Request Execution`}),`
`,(0,c.jsx)(t.h1,{id:`useapirequest`,children:(0,c.jsx)(t.code,{children:`useApiRequest`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns an object with a loading state and a `,(0,c.jsx)(t.code,{children:`send`}),` method for executing API requests. Accepts settings as a single `,(0,c.jsx)(t.code,{children:`UseApiRequestSetup`}),` object.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup: UseApiRequestSetup`}),` — Configuration setup object:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Path to the API endpoint (can be reactive).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method?: ApiMethodItem`}),` — HTTP method to use for the request. Defaults to `,(0,c.jsx)(t.code,{children:`ApiMethodItem.post`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Callback action to perform after the request completes successfully.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — Function to transform the response data before it is returned or passed to the `,(0,c.jsx)(t.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Request contract validation function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Response contract validation function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — Whether to extract the `,(0,c.jsx)(t.code,{children:`data`}),` field from the response. Defaults to `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — Additional request options (`,(0,c.jsx)(t.code,{children:`ApiFetch`}),` object parameter).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
An object with the following properties:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — Reactive loading state. It becomes `,(0,c.jsx)(t.code,{children:`true`}),` while the request is in progress and `,(0,c.jsx)(t.code,{children:`false`}),` after it completes or fails.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — An asynchronous method for sending the request. It automatically manages the `,(0,c.jsx)(t.code,{children:`loading`}),` state, validates the request and response contracts, applies the transformation function to the response, executes the `,(0,c.jsx)(t.code,{children:`action`}),` callback on success, and handles errors safely by logging them to the console.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`apioptions-object`,children:`ApiOptions Object`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiOptions`}),` — can accept a string with the `,(0,c.jsx)(t.code,{children:`method`}),` name (e.g., `,(0,c.jsx)(t.code,{children:`'GET'`}),`) or an object of type `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`. Fields of the `,(0,c.jsx)(t.code,{children:`ApiFetch`}),` object:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string`}),` — path to the endpoint script relative to the base URL (e.g., `,(0,c.jsx)(t.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathFull?: string`}),` — full URL of the request. If specified, ignores `,(0,c.jsx)(t.code,{children:`api`}),` and `,(0,c.jsx)(t.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: boolean`}),` — whether to add the base URL before `,(0,c.jsx)(t.code,{children:`path`}),`. Default: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method?: ApiMethod`}),` — HTTP method (`,(0,c.jsx)(t.code,{children:`'GET'`}),`, `,(0,c.jsx)(t.code,{children:`'POST'`}),`, `,(0,c.jsx)(t.code,{children:`'PUT'`}),`, `,(0,c.jsx)(t.code,{children:`'DELETE'`}),`). Default: `,(0,c.jsx)(t.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request?: FormData | Record<string, any> | string`}),` — request body (for POST/PUT) or query parameters (for GET). Passed as JSON or `,(0,c.jsx)(t.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`headers?: Record<string, string> | null`}),` — additional request headers. `,(0,c.jsx)(t.code,{children:`null`}),` — disable all headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: string`}),` — `,(0,c.jsx)(t.code,{children:`Content-Type`}),` value. Default: `,(0,c.jsx)(t.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`auth?: boolean`}),` — whether to add authentication headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, automatically unwraps `,(0,c.jsx)(t.code,{children:`data`}),` from the `,(0,c.jsx)(t.code,{children:`{ data: ... }`}),` wrapper. Default: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hideError?: boolean`}),` — suppresses error output to `,(0,c.jsx)(t.code,{children:`console.error`}),` on failure. Default: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`globalPreparation?: boolean`}),` — whether to run the global `,(0,c.jsx)(t.code,{children:`setPreparation`}),` hook before this request. Default: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`globalEnd?: boolean`}),` — whether to run the global `,(0,c.jsx)(t.code,{children:`setEnd`}),` hook after the response. Default: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — response handler instead of standard JSON reading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init?: RequestInit`}),` — additional options for native `,(0,c.jsx)(t.code,{children:`fetch()`}),` (CORS, cache mode, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`controller?: AbortController`}),` — controller for canceling the request.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiRequest } from '@dxtmisha/functional'
import { ApiMethodItem } from '@dxtmisha/functional-basic'

const { loading, send } = useApiRequest({
  path: '/api/submit',
  method: ApiMethodItem.post,
  action: (data) => console.log('Action complete:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateRequestContract: (req) => ({ success: true, ...req }),
  validateResponseContract: (res) => ({ success: true, ...res }),
  toData: true,
  options: { cache: false }
})

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Final Result:', result)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};