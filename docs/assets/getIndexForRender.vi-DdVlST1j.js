import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getIndexForRender - Tạo khóa cho Render`}),`
`,(0,c.jsx)(t.h1,{id:`getindexforrender`,children:(0,c.jsx)(t.code,{children:`getIndexForRender`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo `,(0,c.jsx)(t.code,{children:`key`}),` tổng hợp cho component từ tên, các chỉ số và id. Các định danh được nối bằng dấu chấm; CSS class được bỏ qua.`]}),`
`,(0,c.jsx)(t.h3,{id:`tham-số`,children:`Tham số:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — Tên hoặc thẻ của thành phần (phần cơ sở của key).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Các thuộc tính của thành phần (dùng để trích xuất `,(0,c.jsx)(t.code,{children:`index`}),` và `,(0,c.jsx)(t.code,{children:`id`}),`; `,(0,c.jsx)(t.code,{children:`class`}),` không ảnh hưởng đến key).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — Một chỉ số bên ngoài tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`trả-về`,children:`Trả về:`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — Khóa tổng hợp đã được tạo, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không thể tạo khóa.`]}),`
`,(0,c.jsx)(t.h3,{id:`ví-dụ-tạo-key`,children:`Ví dụ tạo key:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Chỉ có tên
getIndexForRender('li') 
// => 'li'

// 2. Tên + chỉ số bên ngoài
getIndexForRender('div', {}, 'row-1') 
// => 'div.row-1'

// 3. Tên + chỉ số từ props + id (bỏ qua class)
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => 'button.primary.submit-01'

// 4. Đầy đủ các thành phần (đối số bên ngoài + mọi thứ từ props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => 'span.arg-idx.p-idx.id-99'

// 5. Trường hợp trống
getIndexForRender(undefined)
// => undefined
`})}),`
`,(0,c.jsx)(t.h3,{id:`logic-lắp-ghép-key`,children:`Logic lắp ghép key`}),`
`,(0,c.jsx)(t.p,{children:`Key được lắp ghép theo chuỗi:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`name`})}),` (nếu `,(0,c.jsx)(t.code,{children:`name`}),` là chuỗi, không có dấu chấm ở đầu)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .index`}),` (nếu đối số `,(0,c.jsx)(t.code,{children:`index`}),` được truyền vào)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.index`}),` (nếu có trong thuộc tính và là một chuỗi)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.id`}),` (nếu có trong thuộc tính)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`CSS class và style không tham gia tạo key. Thay đổi giao diện phải giữ nguyên định danh node, focus và trạng thái component. Với các phần tử cùng cấp trong danh sách, truyền định danh ổn định khác nhau qua `,(0,c.jsx)(t.code,{children:`props.key`}),`, `,(0,c.jsx)(t.code,{children:`index`}),` hoặc `,(0,c.jsx)(t.code,{children:`props.id`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};