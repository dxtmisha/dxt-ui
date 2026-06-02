import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiErrorItem - Error Instance`}),`
`,(0,c.jsx)(n.h1,{id:`apierroritem-class`,children:`ApiErrorItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` class is a `,(0,c.jsx)(n.strong,{children:`data wrapper for API error responses`}),`. It encapsulates the request context (method, response) and the identified error criteria from the storage, providing a unified interface for extracting error details.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Encapsulation`}),` — stores the complete context of an API failure, including the raw Fetch `,(0,c.jsx)(n.code,{children:`Response`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Extraction`}),` — provides consistent access to error codes and messages regardless of whether they came from the response body or pre-defined storage criteria.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Messaging`}),` — resolves error messages using static strings or dynamic factory functions based on the response.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`accessors`,children:`Accessors`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMethod(): ApiMethodItem`}),` — Returns the HTTP method used for the request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): Response`}),` — Returns the raw Fetch response object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): ApiErrorStorageItem`}),` — Returns the identified error criteria from storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number`}),` — Returns the HTTP status code.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data-extraction`,children:`Data Extraction`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string | undefined`}),` — Retrieves the error code from the storage criteria.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string | undefined`}),` — Resolves the error message (checks storage criteria or falls back to response defaults).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`architecture`,children:`Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` is typically created by the `,(0,c.jsx)(n.code,{children:`ApiError.getItem()`}),` factory. It serves as the final product of the error analysis phase, ready to be consumed by UI components or logging services.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};