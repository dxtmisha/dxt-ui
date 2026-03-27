import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectByKeys - Lấy object theo danh sách khóa`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(n.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo và trả về một đối tượng mới chỉ bao gồm các thuộc tính có khóa tương ứng nằm trong danh sách truyền vào. Các thuộc tính không tồn tại trong đối tượng gốc hoặc có giá trị bằng `,(0,c.jsx)(n.code,{children:`undefined`}),` sẽ bị bỏ qua khi sao chép.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: Record<string, any>`}),` — Đối tượng nguồn chứa dữ liệu ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keys: string[]`}),` — Mảng các chuỗi đại diện cho khóa cần trích xuất.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, any>`}),` — Một đối tượng mới chỉ chứa các thuộc tính đã được chọn. Các giá trị `,(0,c.jsx)(n.code,{children:`undefined`}),` sẽ không được thêm vào kết quả trả về.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // giá trị undefined sẽ bị bỏ qua
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};