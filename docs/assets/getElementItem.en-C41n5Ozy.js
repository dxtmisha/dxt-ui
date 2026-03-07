import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/getElementItem - Retrieve element property value"}),`
`,e.jsx(n.h1,{id:"getelementitem",children:e.jsx(n.code,{children:"getElementItem"})}),`
`,e.jsxs(n.p,{children:["Returns the value of a specific property from an HTML element (e.g., ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"className"}),", or any custom property if it's defined as a key on the element type). The utility uses ",e.jsx(n.code,{children:"getElement"})," to find the node, and if the element is not found or lacks the specified property, it returns ",e.jsx(n.code,{children:"defaultValue"})," (which defaults to ",e.jsx(n.code,{children:"undefined"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — A selector string or an existing DOM element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — The property name (key) of the element whose value is required."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: D"})," — A fallback value returned if the property is not found."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T[K] | D | undefined"})," — The value of the requested property or the ",e.jsx(n.code,{children:"defaultValue"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementItem } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'

// Getting the ID
const elementId = getElementItem(input, 'id') 
console.log(elementId) // 'my-input'

// If the property is missing and we provide a fallback
const testValue = getElementItem('.non-existent', 'id', 'fallback-id')
console.log(testValue) // 'fallback-id'
`})})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
