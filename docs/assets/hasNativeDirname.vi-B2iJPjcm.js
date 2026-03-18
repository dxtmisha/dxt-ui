import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/scripts/Functions/hasNativeDirname - Kiểm tra tính khả dụng của __dirname"}),`
`,n.jsx(e.h1,{id:"hasnativedirname",children:n.jsx(e.code,{children:"hasNativeDirname"})}),`
`,n.jsxs(e.p,{children:["Hàm kiểm tra xem biến toàn cục ",n.jsx(e.code,{children:"__dirname"})," có sẵn trong môi trường hiện tại hay không."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu ",n.jsx(e.code,{children:"__dirname"})," được xác định, ngược lại là ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(e.p,{children:["Hàm sử dụng ",n.jsx(e.code,{children:"typeof __dirname !== 'undefined'"})," để xác định xem môi trường có hỗ trợ việc xác định tên thư mục gốc hay không (thường là môi trường CommonJS)."]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Môi trường hỗ trợ __dirname gốc')
}
`})})]})}function x(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{x as default};
