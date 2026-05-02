import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/intersectKey - Giao thoa đối tượng theo khóa`}),`
`,(0,c.jsx)(n.h1,{id:`intersectkey`,children:(0,c.jsx)(n.code,{children:`intersectKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phân tích hai đối tượng (hoặc cả mảng) và trả về một đối tượng mới chỉ chứa những thuộc tính từ đối tượng thứ nhất có khóa (key) cũng được tìm thấy bên trong đối tượng thứ hai. Các giá trị kết quả được lấy trực tiếp từ đối tượng nguồn ban đầu (`,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:`Hàm này rất hiệu quả trong việc hỗ trợ lọc bỏ các trường dư thừa từ payload khi tra soát chéo với một cấu trúc object mẫu an toàn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — Đối tượng dữ liệu chính cung cấp các giá trị thật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison: C`}),` — Đối tượng dùng để tham chiếu, các khóa của nó sẽ là tiêu chuẩn kiểm tra tồn tại.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Record<KT & KC, T[KT]>`}),` — Một đối tượng hoàn toàn mới chứa các khóa giao nhau. Nếu thiếu tham số hoặc các tham số không phải là kiểu cấu trúc đối tượng, hàm sẽ trả về một object rỗng `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Chỉ giữ lại những trường từ inputData mà xuất hiện trong allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};