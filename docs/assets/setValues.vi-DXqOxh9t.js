import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/setValues - Quản lý danh sách các giá trị đã chọn`}),`
`,(0,c.jsx)(t.h1,{id:`setvalues`,children:(0,c.jsx)(t.code,{children:`setValues`})}),`
`,(0,c.jsx)(t.p,{children:`Xử lý việc cập nhật các giá trị đã chọn dựa trên chế độ lựa chọn (đơn hoặc đa). Cho phép thêm, xóa hoặc thay thế các giá trị với sự hỗ trợ của các ràng buộc về số lượng phần tử tối đa.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[] | undefined`}),` — Các giá trị hiện đang được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — Giá trị mới cần xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options`}),` — Một đối tượng chứa các thiết lập:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple: boolean`}),` — Chế độ đa lựa chọn (mặc định là `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxlength: number`}),` — Số lượng phần tử tối đa cho chế độ đa lựa chọn (mặc định là `,(0,c.jsx)(t.code,{children:`0`}),` — không giới hạn).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alwaysChange: boolean`}),` — Cờ ép buộc thay thế giá trị (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`notEmpty: boolean`}),` — Ngăn không cho danh sách bị xóa sạch hoàn toàn (mặc định là `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T | T[] | undefined`}),` — Trạng thái mới của các giá trị đã chọn.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Lựa chọn đơn
console.log(setValues(1, 2, {})) // 2

// Đa lựa chọn (bật/tắt)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (xóa giá trị đang tồn tại)
list = setValues(list, 3, { multiple: true }) // [1, 3] (thêm giá trị mới)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};