import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiHydration - API Data Hydration`}),`
`,(0,c.jsx)(t.h1,{id:`apihydration-class`,children:`ApiHydration Class`}),`
`,(0,c.jsx)(t.p,{children:`A class for collecting API data for hydration on the client side during SSR (Server-Side Rendering). It allows the server to capture API responses during the initial render and pass them to the client, preventing redundant network requests when the application initializes in the browser.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiHydration`}),` is an `,(0,c.jsx)(t.strong,{children:`auxiliary class`}),`, designed for SSR data management. In most cases, it is recommended to interact with hydration through the global `,(0,c.jsx)(t.code,{children:`Api`}),` object using methods like `,(0,c.jsx)(t.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Optimization`}),` — reduces the number of requests after the page loads by reusing server-side data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Capture`}),` — automatically collects successful API responses marked for global use.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`HTML Embedding`}),` — generates a safe `,(0,c.jsx)(t.code,{children:`<script>`}),` tag with JSON-serialized data for embedding in the document.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Client Synchronization`}),` — allows `,(0,c.jsx)(t.code,{children:`ApiResponse`}),` to load hydrated data automatically on the client side.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`toclient`,children:(0,c.jsx)(t.code,{children:`toClient`})}),`
`,(0,c.jsxs)(t.p,{children:[`Saves the API response for client-side hydration. This method only executes on the server and only for requests where `,(0,c.jsx)(t.code,{children:`global`}),` is set to true.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — The API request configuration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: T`}),` — The data payload to be hydrated on the client.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`tostring`,children:(0,c.jsx)(t.code,{children:`toString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns a string representation of the captured hydration data, wrapped in a safe `,(0,c.jsx)(t.code,{children:`<script>`}),` tag with a unique ID.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — The formatted HTML script tag.`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initResponse(response: ApiResponse): void`}),` — Initializes the `,(0,c.jsx)(t.code,{children:`ApiResponse`}),` instance with hydration data if running in a DOM environment.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`apihydrationlist`,children:(0,c.jsx)(t.code,{children:`ApiHydrationList`})}),`
`,(0,c.jsx)(t.p,{children:`A list of captured API responses for hydration.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — The API endpoint path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — The HTTP method used.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: any`}),` — The request payload.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: any`}),` — The server response data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`global?: boolean`}),` — Global usage flag.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`guide-hydration-mechanics`,children:`Guide: Hydration Mechanics`}),`
`,(0,c.jsx)(t.p,{children:`The following rules and conditions define how the hydration system captures and transfers data between the server and the browser:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Flag`}),` — only requests where the `,(0,c.jsx)(t.code,{children:`global`}),` property is set to `,(0,c.jsx)(t.code,{children:`true`}),` in the configuration are captured for hydration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Handling`}),` — the `,(0,c.jsx)(t.code,{children:`global`}),` flag is automatically set to `,(0,c.jsx)(t.code,{children:`true`}),` for all `,(0,c.jsx)(t.code,{children:`GET`}),` requests. Other methods require explicit manual enabling.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Server Execution`}),` — data capture occurs exclusively on the server side (where `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` is false).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};