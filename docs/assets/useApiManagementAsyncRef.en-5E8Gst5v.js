import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useApiManagementAsyncRef - Async API Management Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementasyncref`,children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`}),` is an asynchronous wrapper for `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),` that performs immediate request initialization.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike the standard `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, which initializes "lazily" (upon the first access to the list or data), this method calls `,(0,c.jsx)(t.code,{children:`initSsr()`}),` immediately upon creation. This makes it the ideal choice for use in SSR environments.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Immediate Initialization`}),` — starts the GET request initialization process as soon as the hook is called.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Support`}),` — ensures data is loaded on the server before the page is sent to the client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Full Management Functionality`}),` — retains all features of `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, including formatters, search, and mutations.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.p,{children:[`Parameters are identical to `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — main GET request settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — formatting rules.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — search settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest / putRequest / deleteRequest`}),` — mutation settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: any) => Promise<void> | void`}),` — a common callback to perform after any successful mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — API instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(t.p,{children:[`Returns an API management object. The return object structure is identical to `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if data matches `,(0,c.jsx)(t.code,{children:`typeData`}),` check.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the response data matches the defined contract.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — detailed result of the contract validation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — processed data array with support for Skeleton, formatters, and search.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — raw reactive data from `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — current error object if the request failed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — current length of the `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting / loading / reading`}),` — request status flags.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch / loadingPost / loadingPut / loadingDelete`}),` — loading states for search and mutations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch / search`}),` — search status and reactive search string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete`}),` — mutation execution methods.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset / abort`}),` — control methods.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiManagementAsyncRef } from '@dxtmisha/functional'

// Initialization (and SSR pre-fetching) starts immediately
const { list, loading } = useApiManagementAsyncRef(
  { 
    path: 'api/products',
    skeleton: () => Array(3).fill({ id: 0, title: 'Loading...' })
  }
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};