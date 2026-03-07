import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/writeClipboardData - Ghi văn bản vào bộ nhớ tạm (clipboard)"}),`
`,n.jsx(i.h1,{id:"writeclipboarddata",children:n.jsx(i.code,{children:"writeClipboardData"})}),`
`,n.jsxs(i.p,{children:["Ghi một chuỗi văn bản vào bộ nhớ tạm của người dùng. Hàm sử dụng ",n.jsx(i.code,{children:"navigator.clipboard API"})," hiện đại và sẽ chuyển sang sử dụng ",n.jsx(i.code,{children:"document.execCommand"})," nếu API trên không khả dụng."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"text: string"})," — Văn bản cần ghi."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"Promise<void>"})," — Một promise sẽ hoàn thành sau khi ghi thành công."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Văn bản đã sao chép')
`})})]})}function m(t={}){const{wrapper:i}={...e(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
