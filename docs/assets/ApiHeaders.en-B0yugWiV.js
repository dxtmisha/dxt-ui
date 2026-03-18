import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/ApiHeaders - API Request Headers"}),`
`,e.jsx(n.h1,{id:"apiheaders-class",children:"ApiHeaders Class"}),`
`,e.jsxs(n.p,{children:["A class for managing and merging HTTP request headers. It handles default application-wide headers, custom headers for specific requests, and default ",e.jsx(n.code,{children:"Content-Type"})," assignment."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default Headers"})," — set global headers like ",e.jsx(n.code,{children:"Authorization"})," or ",e.jsx(n.code,{children:"X-App-Version"})," once."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Content-Type"})," — automatically manages the ",e.jsx(n.code,{children:"Content-Type"})," header (defaults to ",e.jsx(n.code,{children:"application/json;charset=UTF-8"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Merging"})," — merges multiple header sources without mutating the original objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"})," — ensures only valid objects are processed as headers."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"ApiHeaders()"})," constructor."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ApiHeaders } from '@dxtmisha/functional'

// 1. Simple initialization
const apiHeaders = new ApiHeaders()

// 2. Setting default headers
apiHeaders.set({ 'X-App-Platform': 'web' })

// 3. Getting headers for a request
const headers = apiHeaders.get({ 'Authorization': 'Bearer token123' })
// Result: { 'X-App-Platform': 'web', 'Authorization': 'Bearer token123', 'Content-Type': 'application/json;charset=UTF-8' }
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined"})," — Intersects default headers with custom ones and injects ",e.jsx(n.code,{children:"Content-Type"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(headers: Record<string, string>): this"})," — Sets or updates the default headers object."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
