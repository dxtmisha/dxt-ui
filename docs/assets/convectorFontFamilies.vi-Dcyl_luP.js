import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/convectorFontFamilies - Định dạng định nghĩa họ phông chữ`}),`
`,(0,c.jsx)(t.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(t.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm này chuyển đổi các chuỗi họ phông chữ thô thành danh sách phông chữ CSS tiêu chuẩn bằng cách thêm các phông chữ dự phòng hệ thống mặc định.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — phần tử thuộc tính token thiết kế cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — hàm trực tiếp thay đổi thuộc tính `,(0,c.jsx)(t.code,{children:`value`}),` của đối tượng `,(0,c.jsx)(t.code,{children:`item`}),` được truyền vào.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra xem `,(0,c.jsx)(t.code,{children:`item.value`}),` có phải là một chuỗi và không chứa các ký tự nội suy ngoặc nhọn `,(0,c.jsx)(t.code,{children:`{`}),` hoặc `,(0,c.jsx)(t.code,{children:`}`}),` hay không. Nếu cả hai điều kiện được đáp ứng, nó sẽ bao bọc giá trị trong dấu nháy đơn và thêm `,(0,c.jsx)(t.code,{children:`, sans-serif`}),` để đảm bảo dự phòng phông chữ trình duyệt tiêu chuẩn.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};