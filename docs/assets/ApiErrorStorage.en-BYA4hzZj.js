import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiErrorStorage - Error Management`}),`
`,(0,c.jsx)(n.h1,{id:`apierrorstorage-class`,children:`ApiErrorStorage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiErrorStorage`}),` class is a `,(0,c.jsx)(n.strong,{children:`Manager for handling and identifying API error states`}),`. It provides a centralized storage for API error criteria, allowing the system to identify specific errors by matching the response status, error code from the JSON body, request method, and URL.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Storage`}),` — aggregate all known API error patterns in one place for consistent processing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Pattern Matching`}),` — identify errors by HTTP status, custom error codes, request methods, or URL patterns (including RegExp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structured Transformation`}),` — transform raw network errors into structured application-level error items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Custom Validation`}),` — support for custom validation functions for complex error identification scenarios.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): this`}),` — Adds one or more error items or lists to the internal storage.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`identification`,children:`Identification`}),`
`,(0,c.jsx)(n.h4,{id:`find`,children:(0,c.jsx)(n.code,{children:`find`})}),`
`,(0,c.jsx)(n.p,{children:`Finds a matching error item in the storage by analyzing the response. It automatically attempts to extract the error code and message from the response body.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — The HTTP method used for the request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — The Fetch API response object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorStorageItem>`}),` — The matched error item or a generated error item if no match is found.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const errorItem = await errorStorage.find(ApiMethodItem.get, response);

if (errorItem.code === 'USER_NOT_FOUND') {
  // Handle specific error
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`apierrorstorageitem`,children:`ApiErrorStorageItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string | RegExp`}),` — URL string or regular expression to match the request URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — HTTP method required for the match.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Optional error code to match against the JSON body.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — Optional HTTP status code to match.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validation?: (response: Response) => boolean`}),` — Optional custom validation function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string | ((response?: Response) => string)`}),` — Optional error message or message factory.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};