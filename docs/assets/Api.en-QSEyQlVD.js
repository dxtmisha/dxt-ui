import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Api - Request Management (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`api-class`,children:`Api Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class is a `,(0,c.jsx)(n.strong,{children:`Primary Class (Static)`}),` and serves as the main entry point for managing HTTP requests. It is a static wrapper around a globally managed `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`, providing a clean, singleton-based interface for standard network operations.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Interface`}),` — perform standard HTTP operations (`,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, etc.) without manual instantiation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Lifecycle Hooks`}),` — configure request preparation and analysis once for the entire application.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Isolation`}),` — utilizes `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` to manage individual instance isolation during server-side rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Simplified Setup`}),` — provides a unified `,(0,c.jsx)(n.code,{children:`setConfig`}),` method to apply multiple configuration layers at once.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.p,{children:`Methods for performing physical network requests.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Core executor; accepts a path string or configuration object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Sends a GET request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Sends a POST request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Sends a PUT request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`patch<T>(request: ApiFetch): Promise<T>`}),` — Sends a PATCH request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Sends a DELETE request.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Checks if the current environment is a local development server.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): void`}),` — Changes the base API URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): void`}),` — Sets default request headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): void`}),` — Sets default request body data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback): void`}),` — Registers a hook to run before every enabled request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback): void`}),` — Registers a hook to run after every enabled response.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimeout(timeout: number): void`}),` — Changes the global request timeout.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOrigin(origin: string): void`}),` — Changes the origin (protocol and domain) for the base URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config?: ApiConfig): void`}),` — Applies a complete configuration object.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Accesses the status manager for the last request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Accesses the response/emulation manager.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydration(): ApiHydration`}),` — Accesses the hydration manager.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydrationScript(): string`}),` — Returns the script block for SSR-to-client hydration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOrigin(): string`}),` — Returns the base origin URL combined with the API path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Returns the fully resolved URL with `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` placeholder substitution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request, method?): string | FormData | undefined`}),` — Prepares the request body.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Prepares the query string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiInstance`}),` — Returns the underlying `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`apiconfig`,children:`ApiConfig`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`urlRoot: string`}),` — the base URL for the API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`origin: string`}),` — protocol and domain for the base URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers: Record<string, string>`}),` — default request headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault: Record<string, any>`}),` — default request data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation: (apiFetch: ApiFetch) => Promise<void>`}),` — entry hook.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — exit hook.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout: number`}),` — global timeout in milliseconds.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`proxy-architecture`,children:`Proxy Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Api`}),` class operates as a `,(0,c.jsx)(n.strong,{children:`Static Proxy`}),`. All method calls are redirected to an internal `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`instance-management`,children:`Instance Management`}),`
`,(0,c.jsxs)(n.p,{children:[`The internal manager is stored in `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` using a unique key (`,(0,c.jsx)(n.code,{children:`__dxt_api_instance__`}),`). This architecture solves two major problems:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thread Safety in SSR`}),`: During server-side rendering, `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` ensures that each incoming request has its own isolated API configuration and state, preventing data leaks between users.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singleton Simplicity on Client`}),`: On the client side, it behaves as a true singleton, allowing you to configure the API in your entry point and use it anywhere without passing instances.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`delegation`,children:`Delegation`}),`
`,(0,c.jsxs)(n.p,{children:[`While `,(0,c.jsx)(n.code,{children:`Api`}),` is the preferred interface for standard application logic, the core logic (retries, hydration logic, jitter) resides within `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. For advanced scenarios involving multiple base URLs or different header sets simultaneously, you may instantiate `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` directly.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};