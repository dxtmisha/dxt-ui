import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getObjectNoUndefined - Loại bỏ các thuộc tính có giá trị ngoại lệ`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(t.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo và trả về một đối tượng mới bao gồm các thuộc tính từ đối tượng hoặc mảng gốc có giá trị `,(0,c.jsx)(t.strong,{children:`không bằng`}),` giá trị ngoại lệ (so sánh nghiệm ngặt tuyệt đối). Theo mặc định, giá trị ngoại lệ là `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Hàm này thường được dùng để dọn dẹp dữ liệu trước khi gửi tới máy chủ hoặc để chuẩn hóa các đối tượng. Khi bạn truyền vào một mảng, các chỉ số của mảng sẽ được chuyển dạng thành khóa (key) kiểu chuỗi trong kết quả trả về.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — Đối tượng hoặc mảng nguồn (nơi `,(0,c.jsx)(t.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`exception: any`}),` — Giá trị sẽ khiến thuộc tính mang nó bị loại bỏ. Mặc định là `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Một đối tượng mới đã được dọn dẹp các thuộc tính chứa giá trị đã bị loại trừ.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};