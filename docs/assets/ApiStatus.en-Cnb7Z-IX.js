import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ApiStatus - API Status Management`}),`
`,(0,c.jsx)(n.h1,{id:`apistatus-class`,children:`ApiStatus Class`}),`
`,(0,c.jsx)(n.p,{children:`A class dedicated to tracking and managing the state of an API request. It securely holds the current HTTP status, error messages, and the parsed response body, allowing applications to react to real-time changes utilizing state abstractions.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized State`}),` — holds everything related to the result of an API call: HTTP status, custom texts, raw response data, and generated messages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — setters return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing multiple state changes to be chained elegantly.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Message Extraction`}),` — intelligently attempts to parse and pull human-readable `,(0,c.jsx)(n.code,{children:`message`}),` fields directly from structured server responses.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ApiStatus()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiStatus } from '@dxtmisha/functional'

// 1. Simple initialization
const apiStatus = new ApiStatus()

// 2. Setting response status
apiStatus.setStatus(200, 'OK')

// 3. Setting response data and automatic message extraction
apiStatus.setLastResponse({
  status: 'success',
  message: 'Data retrieved successfully',
  data: { id: 1 }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`value-retrieval-methods`,children:`Value Retrieval Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiStatusItem`}),` — Returns the complete status data object of the last response.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number | undefined`}),` — Returns the HTTP status code (e.g., `,(0,c.jsx)(n.code,{children:`200`}),`, `,(0,c.jsx)(n.code,{children:`404`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusText(): string | undefined`}),` — Returns the status text message string (e.g., `,(0,c.jsx)(n.code,{children:`"OK"`}),`, `,(0,c.jsx)(n.code,{children:`"Not Found"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Returns the last status validation type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): string | undefined`}),` — Returns the explicitly recorded error message.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse<T>(): T | undefined`}),` — Returns the raw data payload from the last successful request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string`}),` — Returns the server message pulled from a successful response.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`value-setting-methods`,children:`Value Setting Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(data: ApiStatusItem): this`}),` — Sets multiple status fields at once.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Sets the HTTP status code and an optional text explanation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setError(error?: string): this`}),` — Records an error message string when a request fails or is rejected.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastResponse(response?: any): this`}),` — Records a server response completely and optionally updates related statuses (like extraction of `,(0,c.jsx)(n.code,{children:`.message`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Sets the final custom API status type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastMessage(message?: string): this`}),` — Forcibly overrides or explicitly records a message.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};