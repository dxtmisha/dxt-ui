import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiResponse - API Request Emulation`}),`
`,(0,c.jsx)(t.h1,{id:`apiresponse-class`,children:`ApiResponse Class`}),`
`,(0,c.jsx)(t.p,{children:`A manager class for intercepting, caching, and emulating API responses. It allows you to intercept outgoing API requests and return predefined mock data instead of triggering actual physical network traffic.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiResponse`}),` is an `,(0,c.jsx)(t.strong,{children:`auxiliary class`}),`, designed for API emulation and mocking. In most cases, it is recommended to register mock responses through the `,(0,c.jsx)(t.code,{children:`response`}),` parameter in the global `,(0,c.jsx)(t.code,{children:`Api`}),` configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Request Interception`}),` — matches outbound requests intelligently based on target route, HTTP method, and payload object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Capabilities`}),` — supports static predefined fallback objects or executes dynamic callback logic capable of interpreting request query context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Network Lag Simulation`}),` — built-in system specifically tailored for simulating actual latency ping scenarios (randomized offset timers).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Developer Mode`}),` — prints useful debug information in browser consoles showing which payload mapped directly to a specific fallback mock point.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(t.code,{children:`ApiResponse(requestDefault)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`requestDefault: ApiDefault`}),` — default request class used for configuration and storage.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiResponse } from '@dxtmisha/functional-basic'

const apiResponse = new ApiResponse(myApiDefault)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`emulator`,children:(0,c.jsx)(t.code,{children:`emulator`})}),`
`,(0,c.jsx)(t.p,{children:`Core engine loop that validates request configurations and executes matched routing latency mock responses. This method only runs in DOM environments.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — The properties of the request to emulate.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T | undefined>`}),` — The emulated response data.`]}),`
`,(0,c.jsx)(t.h4,{id:`emulatorasync`,children:(0,c.jsx)(t.code,{children:`emulatorAsync`})}),`
`,(0,c.jsx)(t.p,{children:`Synchronous version of the emulator. It returns the mock response immediately without any delay or loading state. This method only runs in DOM environments.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — The properties of the request to emulate.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — The emulated response data.`]}),`
`,(0,c.jsx)(t.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(path: string, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Synchronously checks for a matching cached mock request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Returns a list of all registered emulator configurations.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Adds mock response objects to the local registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDevMode(devMode: boolean): this`}),` — Toggles the development debug log mode.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`apiresponseitem`,children:(0,c.jsx)(t.code,{children:`ApiResponseItem`})}),`
`,(0,c.jsx)(t.p,{children:`An object defining a mock response configuration.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string | RegExp`}),` — The matching URL path or pattern.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethod`}),` — The HTTP method (GET, POST, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: any | ((request?: any) => any)`}),` — The mock data or a function returning it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request?: ApiFetch['request'] | '*any'`}),` — Optional request payload to match against.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lag?: boolean`}),` — Whether to simulate network latency.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disable?: any`}),` — Condition to disable the mock (boolean or function).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isForGlobal?: boolean`}),` — Mark as global mock (hidden from getList).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`guide-api-emulation`,children:`Guide: API Emulation`}),`
`,(0,c.jsx)(t.p,{children:`The following rules and conditions define how the emulation system intercepts and mocks network requests:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mock Registration`}),` — responses added via `,(0,c.jsx)(t.code,{children:`add()`}),` take precedence and are checked before any real network call is initiated.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Matching Criteria`}),` — a mock is triggered only if the path (string or RegExp), HTTP method, and request body all match the configuration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Body Wildcards`}),` — using `,(0,c.jsx)(t.code,{children:`*any`}),` as the request value allows the mock to match any payload, bypassing deep object comparison.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Data`}),` — the `,(0,c.jsx)(t.code,{children:`response`}),` property can be a function, allowing you to generate dynamic mock data based on the incoming request parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Latency Simulation`}),` — setting `,(0,c.jsx)(t.code,{children:`lag: true`}),` adds a random delay (0-2000ms) and triggers the common loading state (`,(0,c.jsx)(t.code,{children:`d-response-loading`}),` class on body).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Match Persistence`}),` — by default, an emulator configuration matches only once unless `,(0,c.jsx)(t.code,{children:`devMode`}),` is enabled, preventing duplicate mock triggers for the same state.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};