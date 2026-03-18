import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getCurrentDate - Get current date"}),`
`,e.jsx(t.h1,{id:"getcurrentdate",children:e.jsx(t.code,{children:"getCurrentDate"})}),`
`,e.jsxs(t.p,{children:["Returns the current date in the specified format. The function is a wrapper around the ",e.jsx(t.code,{children:"Datetime"})," class and allows you to quickly get a formatted string of the current time."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"format: GeoDate"})," — type of date format for output (default ",e.jsx(t.code,{children:"'datetime'"}),"). Supports values: ",e.jsx(t.code,{children:"'date'"}),", ",e.jsx(t.code,{children:"'time'"}),", ",e.jsx(t.code,{children:"'datetime'"}),", ",e.jsx(t.code,{children:"'full'"}),", and others."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
Current date as a string.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Standard format (datetime)
const now = getCurrentDate()
// Result: "2024-03-15 14:30"

// Date only
const date = getCurrentDate('date')
// Result: "2024-03-15"
`})})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as default};
