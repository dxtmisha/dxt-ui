import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiInstance - Request Management`}),`
`,(0,c.jsx)(n.h1,{id:`apiinstance-class`,children:`ApiInstance Class`}),`
`,(0,c.jsx)(n.p,{children:`A class operating over the Fetch API for efficient network request operations. Provides advanced configuration capabilities, global status handling, response emulation, preparation hooks setup, and automatic data parsing.`}),`
`,(0,c.jsxs)(n.p,{children:[`It includes tight integration with dependency classes: `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`, `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`, `,(0,c.jsx)(n.code,{children:`ApiPreparation`}),`, `,(0,c.jsx)(n.code,{children:`ApiDefault`}),`, and `,(0,c.jsx)(n.code,{children:`ApiHeaders`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD Methods`}),` — convenient aliases `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),` for handling HTTP requests`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Configuration`}),` — setting base URL, default headers, and parameters for all requests`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Hooks`}),` — ability to set custom callback functions executed before (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`) and after (`,(0,c.jsx)(n.code,{children:`setEnd`}),`) each request`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Status Tracking`}),` — access to the status and errors of the last request via `,(0,c.jsx)(n.code,{children:`ApiStatus`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration`}),` — transferring data from server to client (SSR) for instant rendering`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching`}),` — saving responses in internal or external storage via `,(0,c.jsx)(n.code,{children:`ApiCache`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Response Emulation`}),` — flexible management of mock data via `,(0,c.jsx)(n.code,{children:`ApiResponse`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Parsing`}),` — converting the request body into JSON/FormData and automatically extracting data from JSON responses`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Geolocation`}),` — automatic substitution of `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` placeholders into request paths`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` can be configured during initialization with custom dependency classes or specific instances.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string`}),` — base path for all requests (default: `,(0,c.jsx)(n.code,{children:`'/api/'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ApiInstanceOptions`}),` — configuration object for dependency injection.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiinstanceoptions`,children:(0,c.jsx)(n.code,{children:`ApiInstanceOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headersClass?: typeof ApiHeaders`}),` — class for managing headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefaultClass?: typeof ApiDefault`}),` — class for global request parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusClass?: typeof ApiStatus`}),` — class for tracking request status.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseClass?: typeof ApiResponse`}),` — class for response emulation and caching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparationClass?: typeof ApiPreparation`}),` — class for lifecycle hook management.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingClass?: LoadingInstance`}),` — instance of the loading indicator manager (defaults to `,(0,c.jsx)(n.code,{children:`Loading.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenterClass?: ErrorCenterInstance`}),` — instance of the error center for triggering events (defaults to `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydrationClass?: typeof ApiHydration`}),` — class for SSR hydration management.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.h4,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Core executor sequence method managing pure physical network fetch pipelines. Should a solitary string serve as param context, default `,(0,c.jsx)(n.code,{children:`GET`}),` assumptions trigger automatically.
In case of network failures (e.g., 500 status), the method explicitly throws an exception (`,(0,c.jsx)(n.code,{children:`throw e`}),`), allowing errors to be natively intercepted in `,(0,c.jsx)(n.code,{children:`try/catch`}),`. If the server returns a JSON object, the system automatically injects a `,(0,c.jsx)(n.code,{children:`statusObject`}),` field (instance of request status) to the returned payload.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathRequest: string | ApiFetch`}),` — destination path matching format or root configuration structure object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),` — decoded endpoint structural response formatted interface (including `,(0,c.jsx)(n.code,{children:`data`}),`, `,(0,c.jsx)(n.code,{children:`statusObject`}),`, etc., when returning an object payload).`]}),`
`,(0,c.jsx)(n.h3,{id:`shorthand`,children:`Shorthand`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(request: ApiFetch): Promise<T>`}),` — Dispatches a basic query through HTTP `,(0,c.jsx)(n.code,{children:`GET`}),` methodologies natively optimizing inputs payload onto string search parameters formats automatically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post(request: ApiFetch): Promise<T>`}),` — Transfers query packets across standard REST/GraphQL pipelines formatted onto the HTTP `,(0,c.jsx)(n.code,{children:`POST`}),` specification.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put(request: ApiFetch): Promise<T>`}),` — Directs object modifications over target remote points using typical system environment HTTP `,(0,c.jsx)(n.code,{children:`PUT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`patch(request: ApiFetch): Promise<T>`}),` — Initiates partial resource updates using the standard HTTP `,(0,c.jsx)(n.code,{children:`PATCH`}),` method.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete(request: ApiFetch): Promise<T>`}),` — Forwards structural clearance/purge request using classic URL targeted HTTP `,(0,c.jsx)(n.code,{children:`DELETE`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the code is running on a local development server.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Returns the `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` manager for tracking the state, errors, and complete response object of the last network request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Returns the responses/emulation manager `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` for controlling mock-responses.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.p,{children:[`Methods to configure the API (support chaining, returning the `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` object):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): this`}),` — Applies universal headers injected automatically toward outbound fetch activities.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): this`}),` — Forces parameters recursively sent to network traffic streams.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): this`}),` — Overwrites generic target URL configurations prefix points.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Connects a custom hook function actively running just `,(0,c.jsx)(n.em,{children:`before`}),` execution trigger occurs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Sets the hook triggered exactly `,(0,c.jsx)(n.em,{children:`after`}),` network response returns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOrigin(origin: string): this`}),` — Sets the origin (protocol and domain) for the base URL.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Generates the full target URL referencing the script, handling `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` placeholder substitution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOrigin(): string`}),` — Returns the base origin URL combined with the API path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined`}),` — Creates data to be passed into the request physical body.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string`}),` — Forms query parameters specifically for HTTP arguments assigned into the URL directly used when sending `,(0,c.jsx)(n.code,{children:`GET`}),` queries.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydration(): ApiHydration`}),` — Returns the hydration manager.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHydrationScript(): string`}),` — Returns a string representation of the hydration data for the client.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`apifetch-object`,children:`ApiFetch Object`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiFetch`}),` is the main configuration object passed to all request methods (`,(0,c.jsx)(n.code,{children:`request`}),`, `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),`). All fields are optional:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — endpoint path relative to the base URL (e.g. `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — full request URL. If provided, overrides `,(0,c.jsx)(n.code,{children:`api`}),` and `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — whether to prepend the base URL before `,(0,c.jsx)(n.code,{children:`path`}),`. Default: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — HTTP method (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'PATCH'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). Default: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — request body (for POST/PUT/PATCH) or query parameters (for GET). Serialized as JSON or `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — additional request headers. Pass `,(0,c.jsx)(n.code,{children:`null`}),` to disable all headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — `,(0,c.jsx)(n.code,{children:`Content-Type`}),` header value. Default: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — include authentication headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, automatically unwraps `,(0,c.jsx)(n.code,{children:`data`}),` from a `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),` wrapper. Default: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`global?: boolean`}),` — use global response cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`devMode?: boolean`}),` — enable development logging.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — suppresses `,(0,c.jsx)(n.code,{children:`console.error`}),` output on failure. Default: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — whether to run the global `,(0,c.jsx)(n.code,{children:`setPreparation`}),` hook before this request. Default: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — whether to run the global `,(0,c.jsx)(n.code,{children:`setEnd`}),` hook after the response. Default: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — custom response processor instead of the default JSON reader.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — additional options passed directly to native `,(0,c.jsx)(n.code,{children:`fetch()`}),` (CORS, cache mode, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout?: number`}),` — request timeout in milliseconds. Default: `,(0,c.jsx)(n.code,{children:`16000`}),`ms (only used if `,(0,c.jsx)(n.code,{children:`controller`}),` is not provided).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — controller for canceling the request. If provided, timeout is ignored.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retry?: number`}),` — number of retries on failure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retryDelay?: number`}),` — base delay between retries in milliseconds. Default: `,(0,c.jsx)(n.code,{children:`64`}),`ms. Jitter is used to prevent thundering herd problems.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`endResetLimit?: number`}),` — limit for recursive retries via `,(0,c.jsx)(n.code,{children:`setEnd`}),` with `,(0,c.jsx)(n.code,{children:`reset: true`}),`. Default: `,(0,c.jsx)(n.code,{children:`8`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`response-data-structure`,children:`Response Data Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`Requests return a `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`apidatat`,children:(0,c.jsx)(n.code,{children:`ApiData<T>`})}),`
`,(0,c.jsx)(n.p,{children:`The structure of the returned data depends on the type of response:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Array`}),`: If the response is an array, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` acts as `,(0,c.jsx)(n.code,{children:`T[]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Object`}),`: If the response is an object, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` includes fields from `,(0,c.jsx)(n.code,{children:`T`}),` and the standard wrapper `,(0,c.jsx)(n.code,{children:`ApiDataItem<T>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apidataitemt`,children:(0,c.jsx)(n.code,{children:`ApiDataItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`The object response contains the following fields:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: T`}),` — primary payload if the response was wrapped.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`success?: boolean`}),` — success flag.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: ApiStatusType`}),` — status type (`,(0,c.jsx)(n.code,{children:`'success'`}),`, `,(0,c.jsx)(n.code,{children:`'error'`}),`, `,(0,c.jsx)(n.code,{children:`'warning'`}),`, `,(0,c.jsx)(n.code,{children:`'info'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — response message or error description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusObject?: ApiStatusItem`}),` — technical information about the request:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — HTTP status code (e.g., 200, 404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusText?: string`}),` — HTTP status text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`error?: string`}),` — internal error message if the request failed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastResponse?: any`}),` — data from the last response before parsing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastStatus?: ApiStatusType`}),` — status of the last request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastMessage?: string`}),` — message from the last request.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`request-cancellation-abortcontroller`,children:`Request Cancellation (AbortController)`}),`
`,(0,c.jsxs)(n.p,{children:[`The API supports out-of-the-box request cancellation. Pass an instance of `,(0,c.jsx)(n.code,{children:`AbortController`}),` into the `,(0,c.jsx)(n.code,{children:`controller`}),` field of the `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` configuration.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const controller = new AbortController()

// Dispatch the request
api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Request was cancelled by the user')
  }
})

// Cancel the request later (e.g., when the component unmounts)
controller.abort()
`})}),`
`,(0,c.jsx)(n.h2,{id:`lifecycle-hooks`,children:`Lifecycle Hooks`}),`
`,(0,c.jsx)(n.p,{children:`Hooks allow you to inject global logic that will automatically execute for every network request. This is a powerful tool for tasks such as:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Dynamically adding authorization tokens.`}),`
`,(0,c.jsx)(n.li,{children:`Centralized logging of network activity.`}),`
`,(0,c.jsx)(n.li,{children:`Automatically refreshing expired tokens (Refresh Token).`}),`
`,(0,c.jsx)(n.li,{children:`Global user notification of errors.`}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`request-preparation-setpreparation`,children:[`Request Preparation (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`setPreparation`}),` method sets a callback function that is called immediately before a request is sent to the server (before the native `,(0,c.jsx)(n.code,{children:`fetch`}),` is executed).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Execution Order`}),`: If multiple requests are started simultaneously, the class ensures that the preparation hook is executed `,(0,c.jsx)(n.strong,{children:`sequentially`}),`. All subsequent requests will wait for the current hook to finish in wait mode (with a 160ms polling interval). This prevents conflicts, such as when multiple concurrent requests attempt to refresh a token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Parameters`}),`: Receives the `,(0,c.jsx)(n.code,{children:`apiFetch`}),` object, which contains all current request settings. You can modify this object (e.g., adding headers or modifying the request body).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Returns`}),`: `,(0,c.jsx)(n.code,{children:`Promise<void>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setPreparation(async (apiFetch) => {
  // Example: adding a dynamic header
  if (apiFetch.auth) {
    const token = await authStore.getToken()
    apiFetch.headers = {
      ...apiFetch.headers,
      'Authorization': \`Bearer \${token}\`
    }
  }
  
  console.log(\`[API] Preparing request: \${apiFetch.method} \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsxs)(n.h3,{id:`request-completion-setend`,children:[`Request Completion (`,(0,c.jsx)(n.code,{children:`setEnd`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`setEnd`}),` method sets a callback function that is called after receiving a response from the server, but before the data is passed to the calling code.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query: Response`}),` — the native Fetch API response object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — the parameters object with which the request was performed.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiPreparationEnd>`}),`. The result object can contain the following fields:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset?: boolean`}),` — if set to `,(0,c.jsx)(n.code,{children:`true`}),`, the library will abort the current chain and `,(0,c.jsx)(n.strong,{children:`execute the request again`}),` (recursively) after a jittered delay (see `,(0,c.jsx)(n.code,{children:`retryDelay`}),`). The entire process of preparation and execution will be restarted. This is used for automatic handling of refreshed access rights. This recursion is limited by `,(0,c.jsx)(n.code,{children:`endResetLimit`}),` (default: 8).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: any`}),` — allows you to override the data returned by the API method. If this field is specified, the standard response reading mechanism (JSON/text) will be ignored.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setEnd(async (response, apiFetch) => {
  // Example: automatic Refresh Token update
  if (response.status === 401) {
    const isSuccess = await authStore.refresh()
    
    if (isSuccess) {
      // Retry the request with the new token
      return { reset: true }
    }
  }

  // Example: global error notification
  if (response.status >= 500) {
    notification.error('Service is temporarily unavailable')
  }

  return {}
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`disabling-hooks-for-a-specific-request`,children:`Disabling Hooks for a Specific Request`}),`
`,(0,c.jsxs)(n.p,{children:[`You can selectively disable global hooks in the `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` object:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation: false`}),` — skip the `,(0,c.jsx)(n.code,{children:`setPreparation`}),` hook execution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd: false`}),` — skip the `,(0,c.jsx)(n.code,{children:`setEnd`}),` hook execution.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hydration`,children:`Hydration`}),`
`,(0,c.jsx)(n.p,{children:`Hydration is a mechanism for transferring data obtained during Server-Side Rendering (SSR) to the client side. This avoids re-executing the same network requests immediately after the page loads in the browser, which significantly speeds up rendering and reduces server load.`}),`
`,(0,c.jsx)(n.h3,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Server-side (SSR):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`All executed requests (usually `,(0,c.jsx)(n.code,{children:`GET`}),` methods with `,(0,c.jsx)(n.code,{children:`global: true`}),`) are automatically saved in the hydration list.`]}),`
`,(0,c.jsxs)(n.li,{children:[`After the page is formed, you need to call `,(0,c.jsx)(n.code,{children:`api.getHydrationScript()`}),` and insert the resulting string into the HTML template (usually at the end of the `,(0,c.jsx)(n.code,{children:`<body>`}),` tag).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Client-side (Browser):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`When an `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` is created, it automatically looks for the hydration script on the page.`]}),`
`,(0,c.jsx)(n.li,{children:`Found data is loaded into the system and substituted for the first call of similar requests.`}),`
`,(0,c.jsx)(n.li,{children:`Thus, the client code receives data instantly without waiting for a network response.`}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`usage-example-ssr`,children:`Usage Example (SSR)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// On the server
const api = new ApiInstance();
await api.get({ path: 'settings' });

// In the page template (e.g., at the end of body)
// The method returns a string: <script id="__ui:api:hydration:id__" type="application/json">[...]<\/script>
const hydrationScript = api.getHydrationScript();
`})}),`
`,(0,c.jsx)(n.h2,{id:`caching`,children:`Caching`}),`
`,(0,c.jsxs)(n.p,{children:[`The library provides a built-in mechanism for caching responses, allowing you to save request results in memory or in external storage (e.g., `,(0,c.jsx)(n.code,{children:`LocalStorage`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`key-features-1`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Time to Live (TTL)`}),` — for each request, you can specify the cache validity time in seconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`External Storage`}),` — ability to integrate with any asynchronous data storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Cleanup`}),` — old data is removed from memory when limits are exceeded.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`setting-up-external-storage`,children:`Setting up External Storage`}),`
`,(0,c.jsxs)(n.p,{children:[`By default, the cache works only in RAM and is reset when the page is reloaded. To save data long-term, you need to initialize `,(0,c.jsx)(n.code,{children:`ApiCache`}),` with your own listeners (for example, using `,(0,c.jsx)(n.code,{children:`LocalStorage`}),` or `,(0,c.jsx)(n.code,{children:`IndexedDB`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiCache, DataStorage } from '@dxtmisha/functional';

// Example of initialization using LocalStorage via DataStorage wrapper
ApiCache.init(
  async (key) => DataStorage.get(key),
  async (key, value) => {
    DataStorage.set(key, value);
    return true;
  },
  async (key) => {
    DataStorage.remove(key);
    return true;
  }
);
`})}),`
`,(0,c.jsx)(n.h3,{id:`usage-in-requests`,children:`Usage in Requests`}),`
`,(0,c.jsxs)(n.p,{children:[`To enable caching, just pass the time in seconds in the `,(0,c.jsx)(n.code,{children:`cache`}),` field of the `,(0,c.jsx)(n.code,{children:`ApiFetch`}),` object:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Cache response for 1 hour (3600 seconds)
const data = await api.get({
  path: 'catalog/list',
  cache: 3600
});
`})}),`
`,(0,c.jsx)(n.p,{children:`If the data is in the cache and its lifetime has not expired, the library will return it instantly without performing a real request to the server.`}),`
`,(0,c.jsx)(n.h2,{id:`response-emulation`,children:`Response Emulation`}),`
`,(0,c.jsxs)(n.p,{children:[`The emulator manager `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` (accessible via `,(0,c.jsx)(n.code,{children:`api.getResponse()`}),`) allows configuring mock responses for specified paths. This is incredibly useful during frontend UI development without a completely ready backend API or for writing test fixtures.`]}),`
`,(0,c.jsx)(n.h3,{id:`registering-mock-responses`,children:`Registering Mock Responses`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`add`}),` method accepts an `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),` object or an array of such objects.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Key `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),` fields:`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path`}),` — String (exact match) or Regular Expression (`,(0,c.jsx)(n.code,{children:`RegExp`}),`) to intercept the request URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method`}),` — HTTP method (`,(0,c.jsx)(n.code,{children:`ApiMethodItem.get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`patch`}),`, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request`}),` — (Optional) Request body filter. You can use the special marker `,(0,c.jsx)(n.code,{children:`'*any'`}),` to bypass payload validation and capture all requests to this path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response`}),` — Static data object `,(0,c.jsx)(n.em,{children:`or`}),` a dynamic factory function `,(0,c.jsx)(n.code,{children:`(request) => any`}),` that generates a response based on the incoming request payload.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disable`}),` — (Optional) Disable this mock (boolean or callback).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isForGlobal`}),` — (Optional) Mark as global mock.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lag`}),` — (Optional) Simulates network lag (`,(0,c.jsx)(n.code,{children:`boolean`}),`), adding a random `,(0,c.jsx)(n.code,{children:`setTimeout`}),` from 0 to 2000ms.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = api.getResponse()

// Enable developer mode (prints mock request logs and intercepted requests into the console)
responseManager.setDevMode(true)

// Example 1: Static response for a GET request
responseManager.add({
  path: 'users/profile', // can be a string or RegExp
  method: 'GET',
  response: { id: 1, name: 'Admin', role: 'superuser' },
  lag: true // Add artificial lag to simulate real network ping
})

// Example 2: Dynamic response with a factory curve (useful for pagination or search simulation)
responseManager.add({
  path: /users\\/search/, // intercepting using RegExp
  method: 'GET',
  // The function receives the original payload object passed via request
  response: (request) => {
    return [
        { id: 1, name: \`Results for: \${request.query}\` }
    ]
  }
})

// Example 3: Intercept POST request regardless of body payload
responseManager.add({
  path: 'users/create',
  method: 'POST',
  request: '*any', // the *any marker bypasses request payload checking altogether
  response: { success: true, message: 'User created successfully (MOCK)' }
})

// Usage in code (no real network stream is opened, mock resolves instantly or after simulated lag)
const profile = await api.get({ path: 'users/profile' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`mock-prioritization-and-fallback`,children:`Mock Prioritization and Fallback`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`The emulator intercepts requests `,(0,c.jsx)(n.strong,{children:`before`}),` the actual `,(0,c.jsx)(n.code,{children:`fetch`}),` call is made.`]}),`
`,(0,c.jsxs)(n.li,{children:[`If the emulator finds no matching registered mock (due to `,(0,c.jsx)(n.code,{children:`path`}),`, `,(0,c.jsx)(n.code,{children:`method`}),`, or `,(0,c.jsx)(n.code,{children:`request`}),` mismatch), the class automatically falls back to executing a real physical network request to the remote server.`]}),`
`,(0,c.jsxs)(n.li,{children:[`You can conditionally disable a specific mock by providing a callback to the `,(0,c.jsx)(n.code,{children:`disable: () => true`}),` field. The `,(0,c.jsx)(n.code,{children:`add`}),` engine will ignore it.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional'

const api = new ApiInstance()

// API Configuration
api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Preparation interceptor hook
api.setPreparation(async (apiFetch) => {
    console.log('Initializing request to:', apiFetch.path)
})

// Standard GET fetch behavior with error handling
try {
  const data = await api.get({ path: 'users' })
  // Extracting inline status payload gracefully:
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Network transport error while pulling users:', e)
}

// Extended POST behavior capable of abort termination
const abortCtrl = new AbortController()
try {
  const newUser = await api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Request safely aborted!')
}

// Abort when needed
// abortCtrl.abort()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};