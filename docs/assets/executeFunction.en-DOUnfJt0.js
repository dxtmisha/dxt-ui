import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/executeFunction - Execute function or return value"}),`
`,e.jsx(n.h1,{id:"executefunction",children:e.jsx(n.code,{children:"executeFunction"})}),`
`,e.jsx(n.p,{children:"A utility that checks the provided argument. If the argument is a function, it executes the function and returns its result. Otherwise, it simply returns the provided argument as is."}),`
`,e.jsx(n.p,{children:"This is extremely useful for handling arguments that can flexibly be either a static value or a function that calculates the value on demand (such as lazy evaluation or dynamic defaults)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: T | FunctionArgs<any, T>"})," — A value of any type, or a function that returns a value of type ",e.jsx(n.code,{children:"T"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T"})," — The result of the function execution, or the raw value provided."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Passing a static value
console.log(executeFunction('Hello')) // 'Hello'

// Passing a function
const lazyValue = () => {
  return 'Loaded lazily'
}
console.log(executeFunction(lazyValue)) // 'Loaded lazily'
`})})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
