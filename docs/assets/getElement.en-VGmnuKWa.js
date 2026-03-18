import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getElement - Retrieve an HTML Element"}),`
`,e.jsx(n.h1,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsxs(n.p,{children:["Returns an ",e.jsx(n.code,{children:"Element"})," (HTML node) from the document. The utility accepts a CSS selector string, a ",e.jsx(n.code,{children:"Window"})," object, or an existing ",e.jsx(n.code,{children:"Element"}),", and returns the corresponding DOM node if executed in a browser environment. In non-DOM environments (e.g., SSR), it returns ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — A CSS selector (e.g., ",e.jsx(n.code,{children:"'.btn'"}),"), the ",e.jsx(n.code,{children:"Window"})," object, or an existing ",e.jsx(n.code,{children:"Element"})," node."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"R | undefined"})," — The found or provided DOM node, or ",e.jsx(n.code,{children:"document.body"})," if ",e.jsx(n.code,{children:"Window"})," was passed. Returns ",e.jsx(n.code,{children:"undefined"})," if the element is not found or the DOM is unavailable."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElement } from '@dxtmisha/functional-basic'

// Search by selector
const btn = getElement('.submit-btn')

// Passing an existing element
const sameBtn = getElement(btn)

// Passing Window will return document.body
const body = getElement(window)
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
