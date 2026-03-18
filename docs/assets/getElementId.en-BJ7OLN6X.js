import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getElementId - Get or assign element ID"}),`
`,e.jsx(n.h1,{id:"getelementid",children:e.jsx(n.code,{children:"getElementId"})}),`
`,e.jsxs(n.p,{children:["Returns the ",e.jsx(n.code,{children:"id"})," of a specified DOM element. If the element exists but does not have an ",e.jsx(n.code,{children:"id"})," attribute, the function will automatically generate a unique identifier, assign it to the element, and return it."]}),`
`,e.jsxs(n.p,{children:["Additionally, the function allows appending a CSS selector to the returned string, so you can immediately use the result as a compound selector (e.g., ",e.jsx(n.code,{children:'"#id-123456 .child-class"'}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — A DOM element or selector from which to obtain the ID."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selector?: string"})," — An optional string that will be appended to the returned ID (like pseudo-classes or descendant selectors)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — The element's ID string, or a newly generated ID string if the element is not found."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementId } from '@dxtmisha/functional-basic'

// Element has no ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // For example: 'id-123456'
console.log(div.id) // 'id-123456' (assigned automatically)

// Using an additional selector
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-123456 > span.active'
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
