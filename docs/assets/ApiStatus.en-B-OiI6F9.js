import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiStatus - API Status Management`}),`
`,(0,c.jsx)(n.h1,{id:`apistatus-class`,children:`ApiStatus Class`}),`
`,(0,c.jsx)(n.p,{children:`A class dedicated to tracking and managing the state of an API request. It securely holds the current HTTP status, error messages, and the parsed response body, allowing applications to react to real-time changes utilizing state abstractions.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiStatus`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for tracking request states. In most cases, it is recommended to interact with request status through the `,(0,c.jsx)(n.code,{children:`status`}),` property of the `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` result or the global `,(0,c.jsx)(n.code,{children:`Api`}),` execution flow.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized State`}),` — holds everything related to the result of an API call: HTTP status, custom texts, raw response data, and generated messages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — setters return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing multiple state changes to be chained elegantly.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Message Extraction`}),` — intelligently attempts to parse and pull human-readable `,(0,c.jsx)(n.code,{children:`message`}),` fields directly from structured server responses.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse<T>(): T | undefined`}),` — Returns the raw data payload from the last successful request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string`}),` — Returns the server message pulled from a successful response or a manually set message.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiStatusItem | undefined`}),` — Returns the complete status data object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number | undefined`}),` — Returns the HTTP status code (e.g., `,(0,c.jsx)(n.code,{children:`200`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusText(): string | undefined`}),` — Returns the status text (e.g., `,(0,c.jsx)(n.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Returns the last status validation type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): string | undefined`}),` — Returns the recorded error message.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(data: ApiStatusItem): this`}),` — Sets multiple status fields at once.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Sets the HTTP status code and text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setError(error?: string): this`}),` — Records an error message string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastResponse(response?: any): this`}),` — Records a server response and automatically extracts `,(0,c.jsx)(n.code,{children:`message`}),` and `,(0,c.jsx)(n.code,{children:`status`}),` if present.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Sets the custom API status type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastMessage(message?: string): this`}),` — Explicitly records a message.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`apistatusitem`,children:(0,c.jsx)(n.code,{children:`ApiStatusItem`})}),`
`,(0,c.jsx)(n.p,{children:`A complete representation of a request status.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — HTTP status code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusText?: string`}),` — HTTP status text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`error?: string`}),` — Error message.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastResponse?: any`}),` — Last response data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastStatus?: ApiStatusType`}),` — Last status type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastMessage?: string`}),` — Last message.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};