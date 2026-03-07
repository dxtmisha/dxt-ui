import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/toNumberByMax - Converting to a number with a maximum limit"}),`
`,e.jsx(n.h1,{id:"tonumberbymax",children:e.jsx(n.code,{children:"toNumberByMax"})}),`
`,e.jsxs(n.p,{children:["Converts the input value to a number and, if it exceeds the specified maximum, returns a string with a ",e.jsx(n.code,{children:"+"})," symbol at the end. Optionally performs localized formatting of the result."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string | number"})," — The input value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max?: string | number"})," — The maximum allowed value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formatting?: boolean"})," — Flag to enable formatting via ",e.jsx(n.code,{children:"GeoIntl"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"language?: string"})," — Language code for formatting (e.g., ",e.jsx(n.code,{children:"'en-US'"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string | number"})," — A formatted string (e.g., ",e.jsx(n.code,{children:"'99+'"}),") or a number."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'en-US')) // '500+'
`})})]})}function x(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{x as default};
