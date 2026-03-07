import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/arrFill - Create an array filled with a value"}),`
`,e.jsx(n.h1,{id:"arrfill",children:e.jsx(n.code,{children:"arrFill"})}),`
`,e.jsx(n.p,{children:"Builds and returns an array of a specified size filled with identical values."}),`
`,e.jsx(n.p,{children:"This is useful for quickly creating placeholders (skeletons), initializing states, or default lists."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — value to fill the array with."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"count: number"})," — the number of elements in that array."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T[]"})," — an array filled with the specified value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { arrFill } from '@dxtmisha/functional-basic'

const array = arrFill('a', 3)
console.log(array) // ['a', 'a', 'a']
`})})]})}function u(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
