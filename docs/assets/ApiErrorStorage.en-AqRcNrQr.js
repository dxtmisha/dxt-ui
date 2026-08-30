import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiErrorStorage - Error Management`}),`
`,(0,c.jsx)(t.h1,{id:`apierrorstorage-class`,children:`ApiErrorStorage Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ApiErrorStorage`}),` class is a `,(0,c.jsx)(t.strong,{children:`Manager for handling and identifying API error states`}),`. It provides a centralized storage for API error criteria, allowing the system to identify specific errors by matching the response status, error code from the JSON body, request method, and URL.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Centralized Storage`}),` — aggregate all known API error patterns in one place for consistent processing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pattern Matching`}),` — identify errors by HTTP status, custom error codes, request methods, or URL patterns (including RegExp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Structured Transformation`}),` — transform raw network errors into structured application-level error items.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom Validation`}),` — support for custom validation functions for complex error identification scenarios.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): this`}),` — Adds one or more error items or lists to the internal storage.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`identification`,children:`Identification`}),`
`,(0,c.jsx)(t.h4,{id:`find`,children:(0,c.jsx)(t.code,{children:`find`})}),`
`,(0,c.jsx)(t.p,{children:`Finds a matching error item in the storage by analyzing the response. It automatically attempts to extract the error code and message from the response body.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — The HTTP method used for the request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: Response`}),` — The Fetch API response object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiErrorStorageItem>`}),` — The matched error item or a generated error item if no match is found.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const errorItem = await errorStorage.find(ApiMethodItem.get, response);

if (errorItem.code === 'USER_NOT_FOUND') {
  // Handle specific error
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`apierrorstorageitem`,children:`ApiErrorStorageItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url: string | RegExp`}),` — URL string or regular expression to match the request URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — HTTP method required for the match.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string`}),` — Optional error code to match against the JSON body.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: number`}),` — Optional HTTP status code to match.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validation?: (response: Response) => boolean`}),` — Optional custom validation function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message?: string | ((response?: Response) => string)`}),` — Optional error message or message factory.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};