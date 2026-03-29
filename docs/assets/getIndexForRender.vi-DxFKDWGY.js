import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/getIndexForRender - Tạo khóa cho Render`}),`
`,(0,c.jsx)(n.h1,{id:`getindexforrender`,children:(0,c.jsx)(n.code,{children:`getIndexForRender`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích dùng để tạo một `,(0,c.jsx)(n.code,{children:`key`}),` duy nhất cho thành phần. Key được hình thành theo phương thức `,(0,c.jsx)(n.strong,{children:`cộng dồn (additive)`}),`: tất cả các phần được xác định (bao gồm cả tên thành phần) được nối với nhau bằng dấu chấm.`]}),`
`,(0,c.jsx)(n.h3,{id:`tham-số`,children:`Tham số:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string | any`}),` — Tên hoặc thẻ của thành phần (phần cơ sở của key).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — Các thuộc tính của thành phần (dùng để trích xuất `,(0,c.jsx)(n.code,{children:`index`}),`, `,(0,c.jsx)(n.code,{children:`class`}),` và `,(0,c.jsx)(n.code,{children:`id`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index?: string`}),` — Một chỉ số bên ngoài tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`trả-về`,children:`Trả về:`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`string | undefined`}),` — Khóa tổng hợp đã được tạo, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không thể tạo khóa.`]}),`
`,(0,c.jsx)(n.h3,{id:`ví-dụ-tạo-key`,children:`Ví dụ tạo key:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Chỉ có tên
getIndexForRender('li') 
// => '.li'

// 2. Tên + chỉ số bên ngoài
getIndexForRender('div', {}, 'row-1') 
// => '.div.row-1'

// 3. Tên + chỉ số từ props + lớp + id
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => '.button.primary.btn-large.submit-01'

// 4. Đầy đủ các thành phần (đối số bên ngoài + mọi thứ từ props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => '.span.arg-idx.p-idx.text-red.id-99'

// 5. Trường hợp trống
getIndexForRender(undefined)
// => undefined
`})}),`
`,(0,c.jsx)(n.h3,{id:`logic-lắp-ghép-key`,children:`Logic lắp ghép key`}),`
`,(0,c.jsx)(n.p,{children:`Key được lắp ghép theo chuỗi:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`.name`})}),` (nếu `,(0,c.jsx)(n.code,{children:`name`}),` là một chuỗi)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`+ .index`}),` (nếu đối số `,(0,c.jsx)(n.code,{children:`index`}),` được truyền vào)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`+ .props.index`}),` (nếu có trong thuộc tính và là một chuỗi)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`+ .className`}),` (nếu có trong thuộc tính)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`+ .props.id`}),` (nếu có trong thuộc tính)`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};