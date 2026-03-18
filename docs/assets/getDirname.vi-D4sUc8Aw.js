import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/scripts/Functions/getDirname - Lấy tên thư mục hiện tại"}),`
`,n.jsx(t.h1,{id:"getdirname",children:n.jsx(t.code,{children:"getDirname"})}),`
`,n.jsx(t.p,{children:"Hàm trả về tên của thư mục hiện tại, xử lý cả môi trường CommonJS và ESM."}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — tên thư mục hiện tại."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm kiểm tra xem môi trường có hỗ trợ ",n.jsx(t.code,{children:"__dirname"})," gốc hay không (sử dụng ",n.jsx(t.code,{children:"hasNativeDirname"}),"). Nếu có, nó sẽ trả về ",n.jsx(t.code,{children:"__dirname"}),". Nếu không, nó sẽ lấy tên thư mục từ ",n.jsx(t.code,{children:"import.meta.url"}),"."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function x(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{x as default};
