import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/replaceTemplate - Substituting values into a template string"}),`
`,e.jsx(n.h1,{id:"replacetemplate",children:e.jsx(n.code,{children:"replaceTemplate"})}),`
`,e.jsxs(n.p,{children:["Searches the original string for markers in the form ",e.jsx(n.code,{children:"[pattern]"})," and replaces them with corresponding values from the provided object. If the marker's value is a function, it is automatically called, and its result is substituted into the string."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The template string containing markers (e.g., ",e.jsx(n.code,{children:"[name]"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaces: Record<string, string | FunctionReturn<string>>"})," — An object containing replacement data, where the key is the marker name inside brackets, and the value is a string or a function returning a string."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — A new string with the substituted values."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Hello, [name]! Your balance: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // The function is evaluated during substitution
}

console.log(replaceTemplate(template, data)) 
// 'Hello, John! Your balance: $100.'
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
