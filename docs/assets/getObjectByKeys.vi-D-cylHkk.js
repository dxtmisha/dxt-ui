import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/getObjectByKeys - Lấy object theo danh sách khóa"}),`
`,n.jsx(e.h1,{id:"getobjectbykeys",children:n.jsx(e.code,{children:"getObjectByKeys"})}),`
`,n.jsxs(e.p,{children:["Tạo và trả về một đối tượng mới chỉ bao gồm các thuộc tính có khóa tương ứng nằm trong danh sách truyền vào. Các thuộc tính không tồn tại trong đối tượng gốc hoặc có giá trị bằng ",n.jsx(e.code,{children:"undefined"})," sẽ bị bỏ qua khi sao chép."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — Đối tượng nguồn chứa dữ liệu ban đầu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keys: string[]"})," — Mảng các chuỗi đại diện cho khóa cần trích xuất."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"Record<string, any>"})," — Một đối tượng mới chỉ chứa các thuộc tính đã được chọn. Các giá trị ",n.jsx(e.code,{children:"undefined"})," sẽ không được thêm vào kết quả trả về."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // giá trị undefined sẽ bị bỏ qua
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function g(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{g as default};
