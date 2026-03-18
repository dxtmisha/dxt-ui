import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/forEach - Iterate over an object or array"}),`
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
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.p,{children:"The function is a universal tool for iterating over various data structures and collecting results into an array."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Support"})," — works with ",e.jsx(n.code,{children:"Array"}),", ",e.jsx(n.code,{children:"Map"}),", and standard ",e.jsx(n.code,{children:"Object"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Result Collection"})," — unlike the standard ",e.jsx(n.code,{children:"forEach"}),", this function collects the values returned from the ",e.jsx(n.code,{children:"callback"})," into a new array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Undefined Filtering"})," — by default, all ",e.jsx(n.code,{children:"undefined"})," values (e.g., if the callback returned nothing for an element) are filtered out of the resulting array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"saveUndefined Parameter"})," — if ",e.jsx(n.code,{children:"true"})," is passed as the third argument, the array will preserve all results, including ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Undefined values are filtered by default
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// With saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
