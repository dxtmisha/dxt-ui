import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/UrlItem - URL Management`}),`
`,(0,c.jsx)(n.h1,{id:`urlitem-class`,children:`UrlItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`UrlItem`}),` class is an `,(0,c.jsx)(n.strong,{children:`Isomorphic Utility Class`}),` for parsing, managing, and updating URLs in both client-side (DOM) and server-side (SSR) environments. It encapsulates the standard standard `,(0,c.jsx)(n.code,{children:`URL`}),` object, providing clean read-only property getters and helper methods for query parameter manipulation.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Isomorphic Support`}),` — automatically resolves relative URLs based on the runtime context (window.location in the browser, localhost in server-side rendering).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Request Isolation in SSR`}),` — provides a `,(0,c.jsx)(n.code,{children:`getInstance()`}),` method backed by `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` to keep URL contexts isolated within each request thread.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Query Parameter Helpers`}),` — provides clean, chainable methods to check, retrieve, set, or delete query parameters without manual search string formatting.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`accessors`,children:`Accessors`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get href(): string`}),` — Returns the full URL string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get protocol(): string`}),` — Returns the protocol including the trailing colon.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get username(): string`}),` — Returns the username.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get password(): string`}),` — Returns the password.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get host(): string`}),` — Returns the host (hostname and port).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hostname(): string`}),` — Returns the hostname (excluding port).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get port(): string`}),` — Returns the port.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get pathname(): string`}),` — Returns the path name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get search(): string`}),` — Returns the query search string including the leading question mark.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get searchParams(): URLSearchParams`}),` — Returns the standard `,(0,c.jsx)(n.code,{children:`URLSearchParams`}),` object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hash(): string`}),` — Returns the hash string including the leading hash sign.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get origin(): string`}),` — Returns the origin of the URL (readonly).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParam(name: string): string | undefined`}),` — Returns the value of a query parameter, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if not found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParams(): Record<string, any>`}),` — Returns all query parameters as an object with transformed types.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hasParam(name: string): boolean`}),` — Checks if the specified query parameter exists.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(url?: string | URL): this`}),` — Updates the URL value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParam(name: string, value: string): this`}),` — Sets the value of a query parameter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParams(params: Record<string, any>): this`}),` — Replaces all query parameters with the specified object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`deleteParam(name: string): this`}),` — Deletes a query parameter.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance(): UrlItem`}),` — Returns a request-isolated instance of UrlItem.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Converts the Url instance to its string representation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toJSON(): string`}),` — Converts the Url instance to JSON string representation.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ssr-architecture`,children:`SSR Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`UrlItem`}),` class provides request-isolated instance management via `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`instance-management`,children:`Instance Management`}),`
`,(0,c.jsxs)(n.p,{children:[`By calling `,(0,c.jsx)(n.code,{children:`UrlItem.getInstance()`}),`, the class retrieves or initializes an instance stored in `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` under a unique key (`,(0,c.jsx)(n.code,{children:`__ui:url-item__`}),`). This architecture solves two major problems:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thread Safety in SSR`}),`: During server-side rendering, multiple server requests run concurrently. `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` ensures that each request has its own isolated `,(0,c.jsx)(n.code,{children:`UrlItem`}),` configuration, preventing search query leakage between user sessions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singleton Simplicity on Client`}),`: On the client side, it behaves as a true singleton, allowing components to read and update URL parameters globally.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};