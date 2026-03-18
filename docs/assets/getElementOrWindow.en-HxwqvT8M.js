import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/getElementOrWindow - Retrieve Element or Window"}),`
`,e.jsx(n.h1,{id:"getelementorwindow",children:e.jsx(n.code,{children:"getElementOrWindow"})}),`
`,e.jsxs(n.p,{children:["This utility is similar to ",e.jsx(n.code,{children:"getElement"}),", but with one significant difference: if the global ",e.jsx(n.code,{children:"window"})," object is passed as an argument, the function returns it exactly. ",e.jsx(n.code,{children:"getElement"})," in the same scenario would return ",e.jsx(n.code,{children:"document.body"}),"."]}),`
`,e.jsxs(n.p,{children:["If a string or another element is passed, the function behaves exactly like the standard ",e.jsx(n.code,{children:"getElement"})," utility."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — A selector to search for, an ",e.jsx(n.code,{children:"Element"})," node, or the ",e.jsx(n.code,{children:"Window"})," object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"E | undefined"})," — The located element, the originally passed element, the ",e.jsx(n.code,{children:"window"})," object (if it was passed), or ",e.jsx(n.code,{children:"undefined"})," if nothing matched."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Passing Window returns Window (by contrast, getElement would return document.body)
const win = getElementOrWindow(window)

// Normal search by selector
const btn = getElementOrWindow('.submit-btn')
`})})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
