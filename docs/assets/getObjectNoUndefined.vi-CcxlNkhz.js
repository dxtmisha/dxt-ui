import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/getObjectNoUndefined - Loại bỏ các thuộc tính có giá trị ngoại lệ"}),`
`,n.jsx(e.h1,{id:"getobjectnoundefined",children:n.jsx(e.code,{children:"getObjectNoUndefined"})}),`
`,n.jsxs(e.p,{children:["Tạo và trả về một đối tượng mới bao gồm các thuộc tính từ đối tượng hoặc mảng gốc có giá trị ",n.jsx(e.strong,{children:"không bằng"})," giá trị ngoại lệ (so sánh nghiệm ngặt tuyệt đối). Theo mặc định, giá trị ngoại lệ là ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:"Hàm này thường được dùng để dọn dẹp dữ liệu trước khi gửi tới máy chủ hoặc để chuẩn hóa các đối tượng. Khi bạn truyền vào một mảng, các chỉ số của mảng sẽ được chuyển dạng thành khóa (key) kiểu chuỗi trong kết quả trả về."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T"})," — Đối tượng hoặc mảng nguồn (nơi ",n.jsx(e.code,{children:"T extends Record<string | number, any>"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"exception: any"})," — Giá trị sẽ khiến thuộc tính mang nó bị loại bỏ. Mặc định là ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"T"})," — Một đối tượng mới đã được dọn dẹp các thuộc tính chứa giá trị đã bị loại trừ."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

const user = {
  name: 'John',
  age: 25,
  description: undefined, // Sẽ tự động bị xóa (mặc định)
  status: 'guest'
}

console.log(getObjectNoUndefined(user)) 
// { name: 'John', age: 25, status: 'guest' }

// Xóa tất cả các thuộc tính có giá trị bằng 'guest'
console.log(getObjectNoUndefined(user, 'guest'))
// { name: 'John', age: 25, description: undefined }
`})})]})}function u(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{u as default};
