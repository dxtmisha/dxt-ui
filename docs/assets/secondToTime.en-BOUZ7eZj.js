import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/secondToTime - Convert seconds to a time string"}),`
`,e.jsx(n.h1,{id:"secondtotime",children:e.jsx(n.code,{children:"secondToTime"})}),`
`,e.jsxs(n.p,{children:["Converts a given number of seconds into a time format string ",e.jsx(n.code,{children:"MM:SS"}),"."]}),`
`,e.jsxs(n.p,{children:["If the value of seconds is less than or equal to zero, or is not provided, the default value ",e.jsx(n.code,{children:"00:00"})," is returned."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"second: number | string | undefined"})," — The total number of seconds (both numbers and string representations of numbers are supported)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A formatted string with minutes and seconds (e.g., ",e.jsx(n.code,{children:"12:34"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function h(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{h as default};
