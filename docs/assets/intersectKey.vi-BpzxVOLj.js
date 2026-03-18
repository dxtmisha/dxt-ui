import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/intersectKey - Giao thoa đối tượng theo khóa"}),`
`,n.jsx(t.h1,{id:"intersectkey",children:n.jsx(t.code,{children:"intersectKey"})}),`
`,n.jsxs(t.p,{children:["Phân tích hai đối tượng (hoặc cả mảng) và trả về một đối tượng mới chỉ chứa những thuộc tính từ đối tượng thứ nhất có khóa (key) cũng được tìm thấy bên trong đối tượng thứ hai. Các giá trị kết quả được lấy trực tiếp từ đối tượng nguồn ban đầu (",n.jsx(t.code,{children:"data"}),")."]}),`
`,n.jsx(t.p,{children:"Hàm này rất hiệu quả trong việc hỗ trợ lọc bỏ các trường dư thừa từ payload khi tra soát chéo với một cấu trúc object mẫu an toàn."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"data: T"})," — Đối tượng dữ liệu chính cung cấp các giá trị thật."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"comparison: C"})," — Đối tượng dùng để tham chiếu, các khóa của nó sẽ là tiêu chuẩn kiểm tra tồn tại."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"Record<KT & KC, T[KT]>"})," — Một đối tượng hoàn toàn mới chứa các khóa giao nhau. Nếu thiếu tham số hoặc các tham số không phải là kiểu cấu trúc đối tượng, hàm sẽ trả về một object rỗng ",n.jsx(t.code,{children:"{}"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Chỉ giữ lại những trường từ inputData mà xuất hiện trong allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function m(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{m as default};
