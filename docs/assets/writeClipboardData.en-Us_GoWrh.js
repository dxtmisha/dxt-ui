import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function n(r){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/writeClipboardData - Writing text to the clipboard"}),`
`,e.jsx(t.h1,{id:"writeclipboarddata",children:e.jsx(t.code,{children:"writeClipboardData"})}),`
`,e.jsxs(t.p,{children:["Writes a text string to the user's clipboard. It uses the modern ",e.jsx(t.code,{children:"navigator.clipboard API"}),", falling back to ",e.jsx(t.code,{children:"document.execCommand"})," if the former is unavailable."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"text: string"})," — The text to write."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"Promise<void>"})," — A promise that resolves after a successful write."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Copied text')
`})})]})}function p(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{p as default};
