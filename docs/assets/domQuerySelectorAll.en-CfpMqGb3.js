import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/domQuerySelectorAll - Select DOM elements"}),`
`,e.jsx(n.h1,{id:"domqueryselectorall",children:e.jsx(n.code,{children:"domQuerySelectorAll"})}),`
`,e.jsxs(n.p,{children:["Finds and returns a list of all HTML elements that match the specified CSS selectors. The returned result is a static (non-live) ",e.jsx(n.code,{children:"NodeList"}),"."]}),`
`,e.jsxs(n.p,{children:["The function checks for the presence of a browser (DOM) environment via ",e.jsx(n.code,{children:"isDomRuntime()"}),". If executed on the server or in an environment without a DOM, it returns ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — A string containing one or more selectors to search for."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"NodeListOf<E> | undefined"})," — A collection of matching elements (which could be an empty list if no matches are found), or ",e.jsx(n.code,{children:"undefined"})," if the DOM is unavailable."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Find all elements with a specific class
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
