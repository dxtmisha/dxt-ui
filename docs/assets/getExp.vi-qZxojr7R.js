import{j as c}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return c.jsxs(c.Fragment,{children:[c.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/getExp - Tạo cấu trúc RegExp với chuỗi đã đánh dấu (escaped)"}),`
`,c.jsx(n.h1,{id:"getexp",children:c.jsx(n.code,{children:"getExp"})}),`
`,c.jsxs(n.p,{children:["Tiện ích này tạo ra một đối tượng ",c.jsx(n.code,{children:"RegExp"}),' từ một chuỗi mẫu bằng cách thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy bên trong chuỗi đó (chẳng hạn như ',c.jsx(n.code,{children:"."})," ",c.jsx(n.code,{children:"*"})," ",c.jsx(n.code,{children:"+"})," ",c.jsx(n.code,{children:"?"})," ",c.jsx(n.code,{children:"^"})," ",c.jsx(n.code,{children:"$"})," ",c.jsx(n.code,{children:"{"})," ",c.jsx(n.code,{children:"}"})," ",c.jsx(n.code,{children:"("})," ",c.jsx(n.code,{children:")"})," ",c.jsx(n.code,{children:"|"})," ",c.jsx(n.code,{children:"["})," ",c.jsx(n.code,{children:"]"})," ",c.jsx(n.code,{children:"\\"}),")."]}),`
`,c.jsxs(n.p,{children:["Điều này rất cần thiết khi chuỗi tìm kiếm đến từ người dùng hoặc chứa các ký tự có thể phá vỡ một biểu thức chính quy. Hàm cho phép bạn chỉ định các cờ (flags) cho ",c.jsx(n.code,{children:"RegExp"}),' cũng như một chuỗi mẫu nơi đoạn văn bản đã "escape" sẽ thay thế token ',c.jsx(n.code,{children:":value"}),"."]}),`
`,c.jsx(n.p,{children:c.jsx(n.strong,{children:"Tham số:"})}),`
`,c.jsxs(n.ul,{children:[`
`,c.jsxs(n.li,{children:[c.jsx(n.code,{children:"value: string"})," — Chuỗi đích cần escape."]}),`
`,c.jsxs(n.li,{children:[c.jsx(n.code,{children:"flags?: string"})," — (tuỳ chọn) Các cờ cấu hình (ví dụ: ",c.jsx(n.code,{children:"'ig'"}),"). Mặc định là ",c.jsx(n.code,{children:"'ig'"})," (không phân biệt chữ hoa/thường và tìm toàn cục)."]}),`
`,c.jsxs(n.li,{children:[c.jsx(n.code,{children:"pattern?: string"})," — (tuỳ chọn) Chuỗi mẫu biểu thức chính quy. Mặc định chỉ là ",c.jsx(n.code,{children:"':value'"}),"."]}),`
`]}),`
`,c.jsxs(n.p,{children:[c.jsx(n.strong,{children:"Trả về:"}),`
`,c.jsx(n.code,{children:"RegExp"})," — Đối tượng biểu thức chính quy."]}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-typescript",children:`import { getExp } from '@dxtmisha/functional-basic'

// Tìm kiếm cơ bản
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dấu chấm đã được escape)

// Tìm kiếm với cờ và chuỗi mẫu tuỳ chỉnh (ví dụ: "bắt đầu bằng")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function u(e={}){const{wrapper:n}={...i(),...e.components};return n?c.jsx(n,{...e,children:c.jsx(h,{...e})}):h(e)}export{u as default};
