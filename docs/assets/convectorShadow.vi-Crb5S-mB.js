import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Functions/convectorShadow - Chuyển đổi cấu trúc bóng sang giá trị bóng CSS`}),`
`,(0,c.jsx)(n.h1,{id:`convectorshadow`,children:(0,c.jsx)(n.code,{children:`convectorShadow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này chuyển đổi các cấu hình bóng (shadow) thô hoặc các mảng cấu hình bóng thành các giá trị chuỗi `,(0,c.jsx)(n.code,{children:`box-shadow`}),` CSS.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — phần tử thuộc tính token thiết kế cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — hàm trực tiếp thay đổi thuộc tính `,(0,c.jsx)(n.code,{children:`value`}),` của đối tượng `,(0,c.jsx)(n.code,{children:`item`}),` được truyền vào.`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem `,(0,c.jsx)(n.code,{children:`item.value`}),` có phải là một đối tượng hay không. Nếu có, nó duyệt qua các cấu hình bóng (chuyển đổi đối tượng đơn lẻ thành mảng nếu cần). Đối với mỗi cấu hình bóng:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Ánh xạ kiểu `,(0,c.jsx)(n.code,{children:`innerShadow`}),` thành `,(0,c.jsx)(n.code,{children:`inset`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Phân tích các kích thước độ dời (`,(0,c.jsx)(n.code,{children:`x`}),`, `,(0,c.jsx)(n.code,{children:`y`}),`, `,(0,c.jsx)(n.code,{children:`blur`}),`, `,(0,c.jsx)(n.code,{children:`spread`}),`), thêm hậu tố `,(0,c.jsx)(n.code,{children:`px`}),` cho các chuỗi thuần số.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu tham số màu chứa một ngoặc nhọn nội suy `,(0,c.jsx)(n.code,{children:`{`}),`, nó bao bọc màu trong định dạng `,(0,c.jsx)(n.code,{children:`@ui.toCustomVarRgb(...)`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Kết hợp tất cả các phần đã phân tích bằng dấu cách và kết hợp nhiều khai báo bóng bằng dấu phẩy.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorShadow } from '@dxtmisha/scripts'

const item = {
  value: {
    type: 'innerShadow',
    color: '{sys.color.primary}',
    x: '0',
    y: '4',
    blur: '10',
    spread: '2'
  }
}
convectorShadow(item)

console.log(item.value) // "inset 0px 4px 10px 2px @ui.toCustomVarRgb({sys.color.primary})"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};