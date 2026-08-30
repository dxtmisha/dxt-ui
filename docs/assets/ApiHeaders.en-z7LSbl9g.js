import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiHeaders - API Request Headers`}),`
`,(0,c.jsx)(t.h1,{id:`apiheaders-class`,children:`ApiHeaders Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A class for managing and merging HTTP request headers. It handles default application-wide headers, custom headers for specific requests, and default `,(0,c.jsx)(t.code,{children:`Content-Type`}),` assignment.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiHeaders`}),` is an `,(0,c.jsx)(t.strong,{children:`auxiliary class`}),`, designed for managing HTTP headers. In most cases, it is recommended to define global headers through the `,(0,c.jsx)(t.code,{children:`headers`}),` parameter in the global `,(0,c.jsx)(t.code,{children:`Api`}),` configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default Headers`}),` — set global headers like `,(0,c.jsx)(t.code,{children:`Authorization`}),` or `,(0,c.jsx)(t.code,{children:`X-App-Version`}),` once.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Content-Type`}),` — automatically manages the `,(0,c.jsx)(t.code,{children:`Content-Type`}),` header (defaults to `,(0,c.jsx)(t.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Merging`}),` — merges multiple header sources without mutating the original objects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Validation`}),` — ensures only valid objects are processed as headers.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Intersects default headers with custom ones and injects `,(0,c.jsx)(t.code,{children:`Content-Type`}),`. If the `,(0,c.jsx)(t.code,{children:`value`}),` parameter is `,(0,c.jsx)(t.code,{children:`null`}),`, headers are disabled.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Record<string, string> | null`}),` — Custom headers to merge with defaults.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | undefined | null`}),` — The `,(0,c.jsx)(t.code,{children:`Content-Type`}),` to set (defaults to `,(0,c.jsx)(t.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Record<string, string> | undefined`}),` — The merged headers object.`]}),`
`,(0,c.jsx)(t.h4,{id:`getbyrequest`,children:(0,c.jsx)(t.code,{children:`getByRequest`})}),`
`,(0,c.jsxs)(t.p,{children:[`A specialized version of `,(0,c.jsx)(t.code,{children:`get`}),` that adjusts headers based on the request type. Specifically, it ensures `,(0,c.jsx)(t.code,{children:`Content-Type`}),` is not manually set for `,(0,c.jsx)(t.code,{children:`FormData`}),` to allow correct boundary generation.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: ApiFetch['request']`}),` — The request payload (Object, FormData, or String).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Record<string, string> | null`}),` — Custom headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — The desired `,(0,c.jsx)(t.code,{children:`Content-Type`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Record<string, string> | undefined`}),` — The processed headers object.`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(headers: Record<string, string>): this`}),` — Sets or updates the default headers object.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`apiheadersvalue`,children:(0,c.jsx)(t.code,{children:`ApiHeadersValue`})}),`
`,(0,c.jsx)(t.p,{children:`A plain object representing HTTP headers.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key: string]: string`}),` — Key-value pairs where key is the header name and value is the header content.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};