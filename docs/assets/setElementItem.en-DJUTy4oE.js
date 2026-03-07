import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(n){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/setElementItem - Modifying an element value by key"}),`
`,e.jsx(t.h1,{id:"setelementitem",children:e.jsx(t.code,{children:"setElementItem"})}),`
`,e.jsx(t.p,{children:"Modifies the property or attribute value of a DOM element identified by a selector or passed directly. If the property is an object, it performs a merge with the new data."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"element: ElementOrString<E>"})," — The target element, ",e.jsx(t.code,{children:"window"})," object, or CSS selector."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index: K"})," — The property key or attribute name."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: V | Record<string, V>"})," — The new value or an object for merging."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"E | undefined"})," — The modified element, or ",e.jsx(t.code,{children:"undefined"})," if not found."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Modifying text content
setElementItem('#my-div', 'textContent', 'New text')

// Merging styles
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Setting an attribute (if the property does not exist on the object)
setElementItem('input', 'placeholder', 'Enter data...')
`})})]})}function h(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
