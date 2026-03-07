import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/toPercentBy100 - Converting a value to percentages (0 to 100)"}),`
`,e.jsx(n.h1,{id:"topercentby100",children:e.jsx(n.code,{children:"toPercentBy100"})}),`
`,e.jsx(n.p,{children:"Calculates the percentage of the current number relative to the maximum in a standard format (0 to 100)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxValue: number"})," — The maximum possible value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — The current value."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The numeric percentage value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toPercentBy100 } from '@dxtmisha/functional-basic'

console.log(toPercentBy100(200, 100)) // 50
console.log(toPercentBy100(1000, 10)) // 1
`})})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default};
