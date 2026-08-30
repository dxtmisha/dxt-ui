import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ApiStatus - API Status Management`}),`
`,(0,c.jsx)(t.h1,{id:`apistatus-class`,children:`ApiStatus Class`}),`
`,(0,c.jsx)(t.p,{children:`A class dedicated to tracking and managing the state of an API request. It securely holds the current HTTP status, error messages, and the parsed response body, allowing applications to react to real-time changes utilizing state abstractions.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiStatus`}),` is an `,(0,c.jsx)(t.strong,{children:`auxiliary class`}),`, designed for tracking request states. In most cases, it is recommended to interact with request status through the `,(0,c.jsx)(t.code,{children:`status`}),` property of the `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` result or the global `,(0,c.jsx)(t.code,{children:`Api`}),` execution flow.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Centralized State`}),` — holds everything related to the result of an API call: HTTP status, custom texts, raw response data, and generated messages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — setters return `,(0,c.jsx)(t.code,{children:`this`}),`, allowing multiple state changes to be chained elegantly.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Message Extraction`}),` — intelligently attempts to parse and pull human-readable `,(0,c.jsx)(t.code,{children:`message`}),` fields directly from structured server responses.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getResponse<T>(): T | undefined`}),` — Returns the raw data payload from the last successful request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMessage(): string`}),` — Returns the server message pulled from a successful response or a manually set message.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): ApiStatusItem | undefined`}),` — Returns the complete status data object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatus(): number | undefined`}),` — Returns the HTTP status code (e.g., `,(0,c.jsx)(t.code,{children:`200`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusText(): string | undefined`}),` — Returns the status text (e.g., `,(0,c.jsx)(t.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Returns the last status validation type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getError(): string | undefined`}),` — Returns the recorded error message.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(data: ApiStatusItem): this`}),` — Sets multiple status fields at once.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Sets the HTTP status code and text.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setError(error?: string): this`}),` — Records an error message string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastResponse(response?: any): this`}),` — Records a server response and automatically extracts `,(0,c.jsx)(t.code,{children:`message`}),` and `,(0,c.jsx)(t.code,{children:`status`}),` if present.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Sets the custom API status type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastMessage(message?: string): this`}),` — Explicitly records a message.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`apistatusitem`,children:(0,c.jsx)(t.code,{children:`ApiStatusItem`})}),`
`,(0,c.jsx)(t.p,{children:`A complete representation of a request status.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: number`}),` — HTTP status code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`statusText?: string`}),` — HTTP status text.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`error?: string`}),` — Error message.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastResponse?: any`}),` — Last response data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastStatus?: ApiStatusType`}),` — Last status type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastMessage?: string`}),` — Last message.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};