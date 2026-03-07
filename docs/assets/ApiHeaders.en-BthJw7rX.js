import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/ApiHeaders - API Request Headers"}),`
`,e.jsx(s.h1,{id:"apiheaders-class",children:"ApiHeaders Class"}),`
`,e.jsxs(s.p,{children:["A class for managing and merging HTTP request headers. It handles default application-wide headers, custom headers for specific requests, and default ",e.jsx(s.code,{children:"Content-Type"})," assignment."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default Headers"})," — set global headers like ",e.jsx(s.code,{children:"Authorization"})," or ",e.jsx(s.code,{children:"X-App-Version"})," once."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dynamic Content-Type"})," — automatically manages the ",e.jsx(s.code,{children:"Content-Type"})," header (defaults to ",e.jsx(s.code,{children:"application/json;charset=UTF-8"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Safe Merging"})," — merges multiple header sources without mutating the original objects."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Validation"})," — ensures only valid objects are processed as headers."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import { ApiHeaders } from '@dxtmisha/functional'

const apiHeaders = new ApiHeaders()
apiHeaders.set({ 'X-App-Platform': 'web' })
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined"})," — Intersects default headers with custom ones and injects ",e.jsx(s.code,{children:"Content-Type"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"set(headers: Record<string, string>): this"})," — Sets or updates the default headers object."]}),`
`]})]})}function p(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
