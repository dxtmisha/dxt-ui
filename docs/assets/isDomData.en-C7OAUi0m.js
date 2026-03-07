import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/isDomData - Check environment for Data URL"}),`
`,e.jsx(n.h1,{id:"isdomdata",children:e.jsx(n.code,{children:"isDomData"})}),`
`,e.jsxs(n.p,{children:["A straightforward utility that verifies whether the current execution context operates within a location (",e.jsx(n.code,{children:"location.href"}),") prefixed by the ",e.jsx(n.code,{children:"data:"})," schema constraint. This proves highly useful for isolating environments running inline scripts via data-URIs or rendering distinct sandboxes (like specific ",e.jsx(n.code,{children:"iframes"}),")."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"}),`
This function does not accept any arguments.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Returns ",e.jsx(n.code,{children:"true"})," if the global document's URL originates from ",e.jsx(n.code,{children:"data:"}),", yielding ",e.jsx(n.code,{children:"false"})," in any other scenario."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isDomData } from '@dxtmisha/functional-basic'

// Executing code natively on 'https://example.com'
console.log(isDomData()) // false

// Executing script bundled inside a 'data:text/html,...' instance
console.log(isDomData()) // true
`})})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
