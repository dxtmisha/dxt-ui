import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/isDomRuntime - Check for browser runtime"}),`
`,e.jsx(n.h1,{id:"isdomruntime",children:e.jsx(n.code,{children:"isDomRuntime"})}),`
`,e.jsx(n.p,{children:"Determines whether the current code is being executed within a browser environment."}),`
`,e.jsxs(n.p,{children:["This check asserts the availability of the global ",e.jsx(n.code,{children:"window"})," object alongside its ",e.jsx(n.code,{children:"window.document"})," property. Utilizing this utility is a standard approach to guarantee that DOM-specific API invocations (like scroll adjustments, event listeners, or element querying) will not trigger crash errors during Server-Side Rendering (SSR) phases or within isolated Node.js environments."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"}),`
This functionality operates without requiring any defined parameters.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Returns ",e.jsx(n.code,{children:"true"})," if the code runs in the browser (where ",e.jsx(n.code,{children:"window"})," and ",e.jsx(n.code,{children:"document"})," are present). It produces ",e.jsx(n.code,{children:"false"})," if executed on the server side (such as Node.js instances or static generation builds)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Safely interface with window.localStorage or the DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Manage server-side (SSR) routing and data logic
  console.log('Rendering on server...')
}
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
