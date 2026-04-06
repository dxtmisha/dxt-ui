import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectNoUndefined - Loại bỏ các thuộc tính có giá trị ngoại lệ`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(n.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo và trả về một đối tượng mới bao gồm các thuộc tính từ đối tượng hoặc mảng gốc có giá trị `,(0,c.jsx)(n.strong,{children:`không bằng`}),` giá trị ngoại lệ (so sánh nghiệm ngặt tuyệt đối). Theo mặc định, giá trị ngoại lệ là `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Hàm này thường được dùng để dọn dẹp dữ liệu trước khi gửi tới máy chủ hoặc để chuẩn hóa các đối tượng. Khi bạn truyền vào một mảng, các chỉ số của mảng sẽ được chuyển dạng thành khóa (key) kiểu chuỗi trong kết quả trả về.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — Đối tượng hoặc mảng nguồn (nơi `,(0,c.jsx)(n.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exception: any`}),` — Giá trị sẽ khiến thuộc tính mang nó bị loại bỏ. Mặc định là `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Một đối tượng mới đã được dọn dẹp các thuộc tính chứa giá trị đã bị loại trừ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};