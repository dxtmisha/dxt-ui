import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useApiPost - POST Request Execution`}),`
`,(0,c.jsx)(n.h1,{id:`useapipost`,children:(0,c.jsx)(n.code,{children:`useApiPost`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns an object with a loading state and a `,(0,c.jsx)(n.code,{children:`send`}),` method for executing API `,(0,c.jsx)(n.code,{children:`POST`}),` requests. It is a convenient wrapper over `,(0,c.jsx)(n.code,{children:`useApiRequest`}),` that pre-fills the `,(0,c.jsx)(n.code,{children:`POST`}),` method. Accepts settings as a single `,(0,c.jsx)(n.code,{children:`UseApiPostSetup`}),` object.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setup: UseApiPostSetup`}),` — Configuration setup object:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Path to the API endpoint (can be reactive).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Callback action to perform after the request completes successfully.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Function to transform the response data before it is returned or passed to the `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Request contract validation function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Response contract validation function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — Whether to extract the `,(0,c.jsx)(n.code,{children:`data`}),` field from the response. Defaults to `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Additional request options (`,(0,c.jsx)(n.code,{children:`ApiFetch`}),` object parameter).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An object with the following properties:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Reactive loading state. It becomes `,(0,c.jsx)(n.code,{children:`true`}),` while the request is in progress and `,(0,c.jsx)(n.code,{children:`false`}),` after it completes or fails.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — An asynchronous method for sending the `,(0,c.jsx)(n.code,{children:`POST`}),` request. It automatically manages the `,(0,c.jsx)(n.code,{children:`loading`}),` state, validates the request and response contracts, applies the transformation function to the response, executes the `,(0,c.jsx)(n.code,{children:`action`}),` callback on success, and safely handles errors by logging them to the console.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};