import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useApiPost - POST Request Execution`}),`
`,(0,c.jsx)(t.h1,{id:`useapipost`,children:(0,c.jsx)(t.code,{children:`useApiPost`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns an object with a loading state and a `,(0,c.jsx)(t.code,{children:`send`}),` method for executing API `,(0,c.jsx)(t.code,{children:`POST`}),` requests. It is a convenient wrapper over `,(0,c.jsx)(t.code,{children:`useApiRequest`}),` that pre-fills the `,(0,c.jsx)(t.code,{children:`POST`}),` method. Accepts settings as a single `,(0,c.jsx)(t.code,{children:`UseApiPostSetup`}),` object.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup: UseApiPostSetup`}),` — Configuration setup object:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Path to the API endpoint (can be reactive).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Callback after receiving and processing response data, regardless of success.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionSuccess?: (data: Return) => Promise<void> | void`}),` — Callback for a successful response, checked with `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void`}),` — Callback for an error response or validation failure. Transport errors pass `,(0,c.jsx)(t.code,{children:`(undefined, error)`}),`.`]}),`
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
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` while at least one `,(0,c.jsx)(t.code,{children:`send`}),` call is active, including validation and awaited callbacks. Parallel calls are supported; it becomes `,(0,c.jsx)(t.code,{children:`false`}),` after all calls finish.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Validates the request and response, applies transformation, and awaits `,(0,c.jsx)(t.code,{children:`action`}),` followed by the matching status callback when response data is returned. Request validation failures call only `,(0,c.jsx)(t.code,{children:`actionError`}),`; transport errors call `,(0,c.jsx)(t.code,{children:`actionError(undefined, error)`}),` and return `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost({
  path: '/api/submit',
  action: (data) => console.log('Action complete:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateRequestContract: (req) => ({ success: true, ...req }),
  toData: true,
  options: { cache: false }
})

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Final Result:', result)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};