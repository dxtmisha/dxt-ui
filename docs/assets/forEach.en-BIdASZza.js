import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/forEach - Iterate over an object or array"}),`
`,e.jsx(n.h1,{id:"foreach",children:e.jsx(n.code,{children:"forEach"})}),`
`,e.jsx(n.p,{children:"The function performs the specified function once for each element in the object. And returns an array with the results of executing the function."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: D"})," — object for iteration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — a function to execute for each element in the array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"saveUndefined?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", the function returns an array including ",e.jsx(n.code,{children:"undefined"})," values (filtered by default)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"R[]"})," — an array with the results of executing the function."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Undefined values are filtered by default
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// With saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as default};
