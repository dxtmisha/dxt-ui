import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/uint8ArrayToBase64 - Converting Uint8Array to Base64"}),`
`,n.jsx(e.h1,{id:"uint8arraytobase64",children:n.jsx(e.code,{children:"uint8ArrayToBase64"})}),`
`,n.jsxs(e.p,{children:["Converts a ",n.jsx(e.code,{children:"Uint8Array"})," of binary data into a Base64 encoded string. Supports both browser environments (via ",n.jsx(e.code,{children:"btoa"}),") and Node.js environments (via ",n.jsx(e.code,{children:"Buffer"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"bytes: Uint8Array"})," — The binary data."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"string"})," — The Base64 encoded string."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function x(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{x as default};
