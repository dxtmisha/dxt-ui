import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/isFunction - Check if value is a function"}),`
`,n.jsx(e.h1,{id:"isfunction",children:n.jsx(e.code,{children:"isFunction"})}),`
`,n.jsx(e.p,{children:"Determines whether the provided value is an executable function (including arrow functions, asynchronous functions, and generator functions)."}),`
`,n.jsxs(e.p,{children:["The check operates primarily via the ",n.jsx(e.code,{children:"instanceof Function"})," operator, with a fallback safety check against ",n.jsx(e.code,{children:"typeof callback === 'function'"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: T"})," — The variable to be tested."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Yields ",n.jsx(e.code,{children:"true"})," when the argument is a valid function, returning ",n.jsx(e.code,{children:"false"})," otherwise. Functions as a dedicated TypeScript type guard narrowing the type specifically down to ",n.jsx(e.code,{children:"FunctionArgs<any, any>"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function h(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{h as default};
