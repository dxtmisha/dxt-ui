import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useApiAsyncRef - Async Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`useapiasyncref`,children:(0,c.jsx)(n.code,{children:`useApiAsyncRef`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` is an asynchronous wrapper over `,(0,c.jsx)(n.a,{href:`./useApiRef.en.mdx`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),` that performs immediate request initialization.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike the standard `,(0,c.jsx)(n.code,{children:`useApiRef`}),`, which is initialized "lazily" (on the first data access), this method calls `,(0,c.jsx)(n.code,{children:`init()`}),` immediately.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Immediate Initialization`}),` — triggers the request as soon as the composable is called.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronous Recovery`}),` — if the data is already in the cache, it is recovered synchronously before any asynchronous actions start.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Support`}),` — utilizes `,(0,c.jsx)(n.code,{children:`onServerPrefetch`}),` to ensure data availability before rendering.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(n.p,{children:[`The parameters are identical to `,(0,c.jsx)(n.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — the endpoint path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — request options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — whether to enable reactivity.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — request conditions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — data transformation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — contract validation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — removal from cache on unmount.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the `,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),` object. The structure of the `,(0,c.jsx)(n.code,{children:`UseApiRef`}),` object is identical to the return value of `,(0,c.jsx)(n.a,{href:`./useApiRef.en.mdx`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// initialization triggers immediately
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};