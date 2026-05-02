import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiDataReturn - API Response Data Processing`}),`
`,(0,c.jsx)(n.h1,{id:`apidatareturn-class`,children:`ApiDataReturn Class`}),`
`,(0,c.jsx)(n.p,{children:`A class for handling and processing data received from an API request. It transforms raw response data into a structured format, extracts metadata, and maps content according to the requested configuration.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDataReturn`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for handling and formatting API response data. In most cases, it is recommended to interact with results through the response returned by `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` methods or the global `,(0,c.jsx)(n.code,{children:`Api`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Parsing`}),` — intelligently parses JSON responses or returns raw text based on Content-Type headers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Normalization`}),` — ensures that the returned object follows a consistent structure, even if the server response varies.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Metadata Extraction`}),` — automatically extracts common fields like `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`code`}),`, and `,(0,c.jsx)(n.code,{children:`message`}),` from the root of the response and merges them into the data object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Configuration`}),` — supports custom processing logic via `,(0,c.jsx)(n.code,{children:`queryReturn`}),` and controls whether to unwrap the `,(0,c.jsx)(n.code,{children:`data`}),` field using `,(0,c.jsx)(n.code,{children:`toData`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async init(): Promise<this>`}),` — Initializes the class by reading and parsing data from the response object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiData<T>`}),` — Returns the processed and formatted data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAndStatus(status: ApiStatus): ApiData<T>`}),` — Returns the processed data injected with a `,(0,c.jsx)(n.code,{children:`statusObject`}),` from the provided status instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): ApiData<T> | undefined`}),` — Returns the raw, unformatted data as initially read from the response.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`internal-logic-protected`,children:`Internal Logic (Protected)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readData<T>(): Promise<ApiData<T>>`}),` — Low-level method that reads the response body and parses it as JSON or text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initData(): ApiData<T>`}),` — Formats the raw data according to configuration, handling property unwrapping.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initItem(data: Record<string, any>): ApiData<T>`}),` — Merges metadata fields from the response root into the main data object.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};