import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional-basic/Classes/ApiDefault - Default API Request Data"}),`
`,e.jsx(t.h1,{id:"apidefault-class",children:"ApiDefault Class"}),`
`,e.jsxs(t.p,{children:["A class for managing default data for API requests. It allows setting base parameters that should be included in every request, supporting both standard objects and ",e.jsx(t.code,{children:"FormData"}),"."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Centralized Defaults"})," — define common parameters (like tokens or locale) once for all API calls."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Support for Multiple Formats"})," — works seamlessly with both plain JavaScript objects and ",e.jsx(t.code,{children:"FormData"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Intelligent Merging"})," — merges defaults with request-specific data, prioritizing the actual request data if keys overlap."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Easy Checks"})," — simple methods to check if any default data is currently set."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["To initialize the object, call the ",e.jsx(t.code,{children:"ApiDefault()"})," constructor."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { ApiDefault } from '@dxtmisha/functional'

// 1. Simple initialization
const apiDefault = new ApiDefault()

// 2. Setting default data
apiDefault.set({ lang: 'en', version: 'v1' })

// 3. Example usage with a request object
const requestData = { user_id: 5 }
const mergedRequest = apiDefault.request(requestData)
// Result: { lang: 'en', version: 'v1', user_id: 5 }

// 4. Example usage with FormData
const fd = new FormData()
fd.append('photo', fileBlob)
apiDefault.request(fd)
// Result: fd now contains 'lang' and 'version' if they were missing
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"is(): boolean"})," — Checks if any default data has been set."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"get(): ApiDefaultValue"})," — Returns the current default data."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Merges the stored default data into a provided request object or ",e.jsx(t.code,{children:"FormData"})," instance."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"set(request: ApiDefaultValue)"})," — Sets the default data object for requests."]}),`
`]})]})}function h(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
