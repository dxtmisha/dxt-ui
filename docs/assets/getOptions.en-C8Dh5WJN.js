import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Functions/getOptions - Get request options"}),`
`,e.jsx(t.h1,{id:"getoptions",children:e.jsx(t.code,{children:"getOptions"})}),`
`,e.jsxs(t.p,{children:["Returns the request options. If the provided option is a string, it returns an object with the ",e.jsx(t.code,{children:"method"})," field equal to that string. If an object is passed, it returns the object itself. If no parameter is provided, it returns an empty object."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"options?: ApiOptions"})," — The request options or a string specifying the method."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"RefOrNormal<ApiFetch>"})," — Options for the ",e.jsx(t.code,{children:"ApiFetch"})," request."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function a(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{a as default};
