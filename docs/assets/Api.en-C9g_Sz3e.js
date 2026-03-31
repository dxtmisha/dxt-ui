import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/Api - Request Management`}),`
`,(0,c.jsx)(n.h1,{id:`api-class`,children:`Api Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`Api`}),` is a static wrapper class around the `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` instance for efficient network request operations.`]}),`
`,(0,c.jsxs)(n.p,{children:[`All methods of the `,(0,c.jsx)(n.code,{children:`Api`}),` class are automatically delegated to an internal global `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` object. This allows you to work with HTTP requests without the need to manually instantiate objects:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

// These calls interact with the same global instance under the hood
Api.setUrl('https://api.example.com/v1/')
Api.setHeaders({ 'Authorization': 'Bearer token123' })

const data = await Api.get({ path: 'users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`instance-access`,children:`Instance Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiInstance`}),` — Returns the internal `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` object used by all static method delegations.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`information-methods`,children:`Information Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the code is running on a local development server.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Returns the `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` manager for tracking the state and errors of the last request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Returns the responses/emulation manager `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Returns the full URL for the request. Dynamic placeholders `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` are automatically replaced.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?, method?): string | FormData | undefined`}),` — Returns data for the request body.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Returns the query string for GET method requests.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-methods`,children:`Configuration Methods`}),`
`,(0,c.jsxs)(n.p,{children:[`All configuration methods return the `,(0,c.jsx)(n.code,{children:`Api`}),` class itself for chaining:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): Api`}),` — Sets the base URL for all requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): Api`}),` — Sets default headers for all requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): Api`}),` — Sets default request data merged into every request body.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback): Api`}),` — Sets a callback function executed before each request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback): Api`}),` — Sets a callback function executed after each request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config?: ApiConfig): Api`}),` — Applies a full configuration object at once (`,(0,c.jsx)(n.code,{children:`urlRoot`}),`, `,(0,c.jsx)(n.code,{children:`headers`}),`, `,(0,c.jsx)(n.code,{children:`requestDefault`}),`, `,(0,c.jsx)(n.code,{children:`preparation`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`request-methods`,children:`Request Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Core request executor. Accepts a string path or an `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` configuration object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Sends an HTTP GET request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Sends an HTTP POST request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Sends an HTTP PUT request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Sends an HTTP DELETE request.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setconfig`,children:`setConfig`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`setConfig`}),` method allows applying multiple configuration options at once using an `,(0,c.jsx)(n.code,{children:`ApiConfig`}),` object:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

Api.setConfig({
  urlRoot: 'https://api.example.com/v1/',
  headers: { 'Authorization': 'Bearer token123' },
  requestDefault: { source: 'webapp' },
  preparation: async (apiFetch) => {
    console.log('Preparing:', apiFetch.path)
  },
  end: async (response, apiFetch) => {
    if (response.status === 401) {
      return { reset: true }
    }
    return {}
  }
})
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Important:`}),` The exhaustive details on `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` options, lifecycle hooks, response emulation, and response data structure are documented in the core `,(0,c.jsx)(n.strong,{children:`ApiInstance`}),` documentation.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};