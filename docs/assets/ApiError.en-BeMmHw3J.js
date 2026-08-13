import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiError - Error Utility (Static)`}),`
`,(0,c.jsx)(t.h1,{id:`apierror-class`,children:`ApiError Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ApiError`}),` class is a `,(0,c.jsx)(t.strong,{children:`Primary Utility (Static)`}),` for managing API error storage and identifying failures. It provides a centralized, singleton-based interface for registering error patterns and transforming raw network responses into structured `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` objects.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Interface`}),` — manage error criteria and analyze responses without manual instantiation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR-Safe Singleton`}),` — utilizes `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` to maintain isolated error storage across different requests during server-side rendering.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pattern Registration`}),` — simple API for adding individual error patterns or bulk lists for global error identification.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`storage-management`,children:`Storage Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStorage(): ApiErrorStorage`}),` — Retrieves the internal singleton instance of the error storage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Adds one or more error patterns to the global storage.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`analysis`,children:`Analysis`}),`
`,(0,c.jsx)(t.h4,{id:`getitem`,children:(0,c.jsx)(t.code,{children:`getItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Analyzes a raw Fetch response and creates a structured `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),` instance. This is the primary method for processing API failures.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — The HTTP method of the request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: Response`}),` — The raw Fetch response object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiErrorItem>`}),` — A structured error object containing analyzed details.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Handle network error
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};