import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useApiPut - PUT Request Execution"}),`
`,e.jsx(n.h1,{id:"useapiput",children:e.jsx(n.code,{children:"useApiPut"})}),`
`,e.jsxs(n.p,{children:["Returns an object with a loading state and a ",e.jsx(n.code,{children:"send"})," method for executing API ",e.jsx(n.code,{children:"PUT"})," requests."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: RefOrNormal<string | undefined>"})," — Path to the API endpoint (can be reactive)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — Callback action to perform after the request completes successfully."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — Function to transform the response data before it is returned or passed to the ",e.jsx(n.code,{children:"action"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData: boolean = true"})," — Whether to extract the ",e.jsx(n.code,{children:"data"})," field from the response."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — Additional request options (",e.jsx(n.code,{children:"ApiFetch"})," object parameter)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
An object with the following properties:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"})," — Reactive loading state (",e.jsx(n.code,{children:"true"})," while waiting for the response)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"send(request?: Request): Promise<Return | undefined>"})," — Asynchronous method to send the request. Handles loading state toggling, applies transformation, executes your ",e.jsx(n.code,{children:"action"})," callback, and safely catches errors."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useApiPut } from '@dxtmisha/functional'

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
`})})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
