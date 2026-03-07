import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/ApiDefault - Default API Request Data"}),`
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
`,e.jsx(t.p,{children:"Normally, this class is used internally by an API management system, but it can be used independently."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { ApiDefault } from '@dxtmisha/functional'

const apiDefault = new ApiDefault()
apiDefault.set({ lang: 'en', version: 'v1' })

if (apiDefault.is()) {
  console.log('Defaults are ready')
}

// With Object
const merged = apiDefault.request({ user_id: 5 })
// Result: { lang: 'en', version: 'v1', user_id: 5 }

// With FormData
const fd = new FormData()
fd.append('file', myFile)
apiDefault.request(fd)
// Result: fd now also contains 'lang' and 'version' if they weren't already there
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"is(): boolean"})," — Checks if any default data has been set."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"get(): ApiDefaultValue"})," — Returns the current default data."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Merges the stored default data into a provided request object or ",e.jsx(t.code,{children:"FormData"})," instance."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"set(request: ApiDefaultValue)"})," — Sets the default data object for requests."]}),`
`]})]})}function h(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
