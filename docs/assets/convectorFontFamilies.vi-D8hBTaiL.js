import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Functions/convectorFontFamilies - Định dạng định nghĩa họ phông chữ`}),`
`,(0,c.jsx)(n.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(n.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm này chuyển đổi các chuỗi họ phông chữ thô thành danh sách phông chữ CSS tiêu chuẩn bằng cách thêm các phông chữ dự phòng hệ thống mặc định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — phần tử thuộc tính token thiết kế cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — hàm trực tiếp thay đổi thuộc tính `,(0,c.jsx)(n.code,{children:`value`}),` của đối tượng `,(0,c.jsx)(n.code,{children:`item`}),` được truyền vào.`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem `,(0,c.jsx)(n.code,{children:`item.value`}),` có phải là một chuỗi và không chứa các ký tự nội suy ngoặc nhọn `,(0,c.jsx)(n.code,{children:`{`}),` hoặc `,(0,c.jsx)(n.code,{children:`}`}),` hay không. Nếu cả hai điều kiện được đáp ứng, nó sẽ bao bọc giá trị trong dấu nháy đơn và thêm `,(0,c.jsx)(n.code,{children:`, sans-serif`}),` để đảm bảo dự phòng phông chữ trình duyệt tiêu chuẩn.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};