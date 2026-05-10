import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Composables/useApiManagementAsyncRef - Async API Management Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`useapimanagementasyncref`,children:(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),` is an asynchronous wrapper for `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),` that performs immediate request initialization.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike the standard `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, which initializes "lazily" (upon the first access to the list or data), this method calls `,(0,c.jsx)(n.code,{children:`initSsr()`}),` immediately upon creation. This makes it the ideal choice for use in SSR environments.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Immediate Initialization`}),` — starts the GET request initialization process as soon as the hook is called.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Support`}),` — ensures data is loaded on the server before the page is sent to the client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Full Management Functionality`}),` — retains all features of `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, including formatters, search, and mutations.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(n.p,{children:[`Parameters are identical to `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — main GET request settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`formattersOptions?: FormattersOptions`}),` — formatting rules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — search settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`postRequest / putRequest / deleteRequest`}),` — mutation settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: function`}),` — callback after mutation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — API instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(n.p,{children:[`Returns an API management object. The return object structure is identical to `,(0,c.jsx)(n.a,{href:`./useApiManagementRef.en.mdx`,children:(0,c.jsx)(n.code,{children:`useApiManagementRef`})}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiManagementAsyncRef } from '@dxtmisha/functional'

// Initialization (and SSR pre-fetching) starts immediately
const { list, loading } = useApiManagementAsyncRef(
  { 
    path: 'api/products',
    skeleton: () => Array(3).fill({ id: 0, title: 'Loading...' })
  }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};