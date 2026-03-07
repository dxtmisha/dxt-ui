import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function n(t){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/ApiStatus - API Status Management"}),`
`,e.jsx(s.h1,{id:"apistatus-class",children:"ApiStatus Class"}),`
`,e.jsx(s.p,{children:"A class dedicated to tracking and managing the state of an API request. It securely holds the current HTTP status, error messages, and the parsed response body, allowing applications to react to real-time changes utilizing state abstractions."}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Centralized State"})," — holds everything related to the result of an API call: HTTP status, custom texts, raw response data, and generated messages."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chainable API"})," — setters return ",e.jsx(s.code,{children:"this"}),", allowing multiple state changes to be chained elegantly."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic Message Extraction"})," — intelligently attempts to parse and pull human-readable ",e.jsx(s.code,{children:"message"})," fields directly from structured server responses."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import { ApiStatus } from '@dxtmisha/functional'

const apiStatus = new ApiStatus()
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"value-retrieval-methods",children:"Value Retrieval Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(): ApiStatusItem"})," — Returns the complete status data object of the last response."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getStatus(): number | undefined"})," — Returns the HTTP status code (e.g., ",e.jsx(s.code,{children:"200"}),", ",e.jsx(s.code,{children:"404"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getStatusText(): string | undefined"})," — Returns the status text message string (e.g., ",e.jsx(s.code,{children:'"OK"'}),", ",e.jsx(s.code,{children:'"Not Found"'}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getStatusType(): ApiStatusType | undefined"})," — Returns the last status validation type."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getError(): string | undefined"})," — Returns the explicitly recorded error message."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getResponse<T>(): T | undefined"})," — Returns the raw data payload from the last successful request."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getMessage(): string"})," — Returns the server message pulled from a successful response."]}),`
`]}),`
`,e.jsx(s.h3,{id:"value-setting-methods",children:"Value Setting Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"set(data: ApiStatusItem): this"})," — Sets multiple status fields at once."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setStatus(status?: number, statusText?: string): this"})," — Sets the HTTP status code and an optional text explanation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setError(error?: string): this"})," — Records an error message string when a request fails or is rejected."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setLastResponse(response?: any): this"})," — Records a server response completely and optionally updates related statuses (like extraction of ",e.jsx(s.code,{children:".message"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setLastStatus(status?: ApiStatusType): this"})," — Sets the final custom API status type."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"setLastMessage(message?: string): this"})," — Forcibly overrides or explicitly records a message."]}),`
`]})]})}function u(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{u as default};
