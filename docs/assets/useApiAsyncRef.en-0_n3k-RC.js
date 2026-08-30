import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useApiAsyncRef - Async Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`useapiasyncref`,children:(0,c.jsx)(t.code,{children:`useApiAsyncRef`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiAsyncRef`}),` is an asynchronous wrapper over `,(0,c.jsx)(t.a,{href:`./useApiRef.en.mdx`,children:(0,c.jsx)(t.code,{children:`useApiRef`})}),` that performs immediate request initialization.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike the standard `,(0,c.jsx)(t.code,{children:`useApiRef`}),`, which is initialized "lazily" (on the first data access), this method calls `,(0,c.jsx)(t.code,{children:`initSsr()`}),` immediately.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Immediate Initialization`}),` — triggers the request as soon as the composable is called.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Support`}),` — ensures data availability before rendering on the server.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.p,{children:[`The parameters are identical to `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — the endpoint path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — request options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactivity?: boolean`}),` — whether to enable reactivity.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: RefType<boolean>`}),` — request conditions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — data transformation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — contract validation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — storage of response error contracts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unmounted?: boolean`}),` — removal from cache on unmount.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — API instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the `,(0,c.jsx)(t.code,{children:`UseApiRef<R>`}),` object:`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Reactive states:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — reactive data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — reactive item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — current error object if the request failed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the response contract is valid.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — detailed contract validation result.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — count of elements in the list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — flag for initial loading phase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — current loading status.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — flag for active data processing.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Methods:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStarting(): boolean`}),`, `,(0,c.jsx)(t.code,{children:`isLoading(): boolean`}),`, `,(0,c.jsx)(t.code,{children:`isReading(): boolean`}),` — status check methods.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): ApiData<R> | undefined`}),` — get current data value without reactivity.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — manual initialization.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initSsr(): void`}),` — SSR initialization.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): Promise<void>`}),` — force re-run the request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): void`}),` — stop observation and clear data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`abort(): void`}),` — cancel the current HTTP request.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// initialization triggers immediately
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};