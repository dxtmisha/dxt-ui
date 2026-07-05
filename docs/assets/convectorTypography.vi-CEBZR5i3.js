import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Functions/convectorTypography - Định dạng giá trị типографика (Typography)`}),`
`,(0,c.jsx)(n.h1,{id:`convectortypography`,children:(0,c.jsx)(n.code,{children:`convectorTypography`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm này chuẩn hóa các token thiết kế kiểu chữ (typography) bằng cách chuyển đổi các giá trị chuỗi đơn giản thành các cấu hình phông chữ cơ bản tiêu chuẩn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — phần tử thuộc tính token thiết kế cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — hàm trực tiếp thay đổi thuộc tính `,(0,c.jsx)(n.code,{children:`value`}),` của đối tượng `,(0,c.jsx)(n.code,{children:`item`}),` được truyền vào.`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem `,(0,c.jsx)(n.code,{children:`item.value`}),` có phải là một chuỗi hay không. Nếu có, nó bao bọc chuỗi bên trong một đối tượng khóa-giá trị dưới thuộc tính chủ đề `,(0,c.jsx)(n.code,{children:`basic`}),`: `,(0,c.jsx)(n.code,{children:`{ basic: item.value }`}),` để đảm bảo tính nhất quán với các cấu trúc kiểu chữ thích ứng phức tạp.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorTypography } from '@dxtmisha/scripts'

const item = { value: '16px/1.5 Inter' }
convectorTypography(item)

console.log(item.value) // { basic: "16px/1.5 Inter" }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};