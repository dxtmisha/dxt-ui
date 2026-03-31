import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/setValues - Quản lý danh sách các giá trị đã chọn`}),`
`,(0,c.jsx)(n.h1,{id:`setvalues`,children:(0,c.jsx)(n.code,{children:`setValues`})}),`
`,(0,c.jsx)(n.p,{children:`Xử lý việc cập nhật các giá trị đã chọn dựa trên chế độ lựa chọn (đơn hoặc đa). Cho phép thêm, xóa hoặc thay thế các giá trị với sự hỗ trợ của các ràng buộc về số lượng phần tử tối đa.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[] | undefined`}),` — Các giá trị hiện đang được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Giá trị mới cần xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options`}),` — Một đối tượng chứa các thiết lập:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`multiple: boolean`}),` — Chế độ đa lựa chọn (mặc định là `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxlength: number`}),` — Số lượng phần tử tối đa cho chế độ đa lựa chọn (mặc định là `,(0,c.jsx)(n.code,{children:`0`}),` — không giới hạn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`alwaysChange: boolean`}),` — Cờ ép buộc thay thế giá trị (mặc định là `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notEmpty: boolean`}),` — Ngăn không cho danh sách bị xóa sạch hoàn toàn (mặc định là `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T | T[] | undefined`}),` — Trạng thái mới của các giá trị đã chọn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setValues } from '@dxtmisha/functional-basic'

// Lựa chọn đơn
console.log(setValues(1, 2, {})) // 2

// Đa lựa chọn (bật/tắt)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (xóa giá trị đang tồn tại)
list = setValues(list, 3, { multiple: true }) // [1, 3] (thêm giá trị mới)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};