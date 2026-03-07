import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/toPercent - Calculating percentage from a value"}),`
`,e.jsx(n.h1,{id:"topercent",children:e.jsx(n.code,{children:"toPercent"})}),`
`,e.jsx(n.p,{children:"Calculates the proportion of the current value relative to the maximum. Returns a number in the range from 0 to 1."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxValue: number"})," — The maximum possible value (100%)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — The current value."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The result as a decimal fraction (e.g., ",e.jsx(n.code,{children:"0.5"})," for 50%)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toPercent } from '@dxtmisha/functional-basic'

console.log(toPercent(200, 100)) // 0.5
console.log(toPercent(100, 25)) // 0.25
`})})]})}function d(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{d as default};
