import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"@dxtmisha/en/functional-basic/Functions/isApiSuccess - Check if API response is successful"}),`
`,s.jsx(e.h1,{id:"isapisuccess",children:s.jsx(e.code,{children:"isApiSuccess"})}),`
`,s.jsx(e.p,{children:"Checks if the API response is successful."}),`
`,s.jsx(e.p,{children:"The check is performed according to the following rules:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"If the data is an array, it is considered a success."}),`
`,s.jsxs(e.li,{children:["If the data is an object, the success is determined by the ",s.jsx(e.code,{children:"status === 'success'"})," or ",s.jsx(e.code,{children:"success === true"})," fields."]}),`
`,s.jsxs(e.li,{children:["If the ",s.jsx(e.code,{children:"statusObject"})," field is present, the success is determined by the HTTP status code (starts with 2)."]}),`
`,s.jsx(e.li,{children:"If none of the fields are present, the success is determined by the global API status."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Parameters:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"data: ApiData<T>"})," — API response data."]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Returns:"}),`
`,s.jsx(e.code,{children:"boolean"})," — ",s.jsx(e.code,{children:"true"})," if the response is successful, otherwise ",s.jsx(e.code,{children:"false"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function a(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(c,{...n})}):c(n)}export{a as default};
