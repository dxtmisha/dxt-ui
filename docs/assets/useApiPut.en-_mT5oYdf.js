import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useApiPut - PUT Request Execution`}),`
`,(0,c.jsx)(n.h1,{id:`useapiput`,children:(0,c.jsx)(n.code,{children:`useApiPut`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns an object with a loading state and a `,(0,c.jsx)(n.code,{children:`send`}),` method for executing API `,(0,c.jsx)(n.code,{children:`PUT`}),` requests.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Path to the API endpoint (can be reactive).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Callback action to perform after the request completes successfully.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Function to transform the response data before it is returned or passed to the `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData: boolean = true`}),` — Whether to extract the `,(0,c.jsx)(n.code,{children:`data`}),` field from the response.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Additional request options (`,(0,c.jsx)(n.code,{children:`ApiFetch`}),` object parameter).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance to use for the request. Defaults to `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An object with the following properties:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Reactive loading state. It becomes `,(0,c.jsx)(n.code,{children:`true`}),` while the request is in progress and `,(0,c.jsx)(n.code,{children:`false`}),` after it completes or fails.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — An asynchronous method for sending the `,(0,c.jsx)(n.code,{children:`PUT`}),` request. It automatically manages the `,(0,c.jsx)(n.code,{children:`loading`}),` state, applies the transformation function to the response, executes the `,(0,c.jsx)(n.code,{children:`action`}),` callback on success, and safely handles errors by logging them to the console.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPut } from '@dxtmisha/functional'

const { loading, send } = useApiPut(
  '/api/update',
  (data) => console.log('Action complete:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleUpdate = async () => {
  const result = await send({ id: 1, name: 'New Name' })
  console.log('Final Result:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};