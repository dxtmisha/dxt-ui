import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiError - Error Utility (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`apierror-class`,children:`ApiError Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiError`}),` class is a `,(0,c.jsx)(n.strong,{children:`Primary Utility (Static)`}),` for managing API error storage and identifying failures. It provides a centralized, singleton-based interface for registering error patterns and transforming raw network responses into structured `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` objects.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Interface`}),` — manage error criteria and analyze responses without manual instantiation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR-Safe Singleton`}),` — utilizes `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` to maintain isolated error storage across different requests during server-side rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Pattern Registration`}),` — simple API for adding individual error patterns or bulk lists for global error identification.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`storage-management`,children:`Storage Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStorage(): ApiErrorStorage`}),` — Retrieves the internal singleton instance of the error storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Adds one or more error patterns to the global storage.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`analysis`,children:`Analysis`}),`
`,(0,c.jsx)(n.h4,{id:`getitem`,children:(0,c.jsx)(n.code,{children:`getItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Analyzes a raw Fetch response and creates a structured `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` instance. This is the primary method for processing API failures.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — The HTTP method of the request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: Response`}),` — The raw Fetch response object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiErrorItem>`}),` — A structured error object containing analyzed details.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Handle network error
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};