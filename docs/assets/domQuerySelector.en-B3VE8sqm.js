import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/domQuerySelector - Select a DOM element"}),`
`,e.jsx(n.h1,{id:"domqueryselector",children:e.jsx(n.code,{children:"domQuerySelector"})}),`
`,e.jsx(n.p,{children:"Finds and returns the first HTML element that matches the specified CSS selector."}),`
`,e.jsxs(n.p,{children:["The function checks for the presence of a browser (DOM) environment using ",e.jsx(n.code,{children:"isDomRuntime()"}),". If the code is executing on the server (SSR) or the DOM is not available, the function safely returns ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — A string containing one or more CSS selectors to match against."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"E | undefined"})," — The first matched element, or ",e.jsx(n.code,{children:"undefined"})," if no matches are found or the DOM is unavailable."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Find by class
const btn = domQuerySelector('.submit-button')

// Find by ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Submit'
}
`})})]})}function m(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
