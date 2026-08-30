import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/convectorTypography - Định dạng giá trị типографика (Typography)`}),`
`,(0,c.jsx)(t.h1,{id:`convectortypography`,children:(0,c.jsx)(t.code,{children:`convectorTypography`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm này chuẩn hóa các token thiết kế kiểu chữ (typography) bằng cách chuyển đổi các giá trị chuỗi đơn giản thành các cấu hình phông chữ cơ bản tiêu chuẩn.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — phần tử thuộc tính token thiết kế cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — hàm trực tiếp thay đổi thuộc tính `,(0,c.jsx)(t.code,{children:`value`}),` của đối tượng `,(0,c.jsx)(t.code,{children:`item`}),` được truyền vào.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra xem `,(0,c.jsx)(t.code,{children:`item.value`}),` có phải là một chuỗi hay không. Nếu có, nó bao bọc chuỗi bên trong một đối tượng khóa-giá trị dưới thuộc tính chủ đề `,(0,c.jsx)(t.code,{children:`basic`}),`: `,(0,c.jsx)(t.code,{children:`{ basic: item.value }`}),` để đảm bảo tính nhất quán với các cấu trúc kiểu chữ thích ứng phức tạp.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorTypography } from '@dxtmisha/scripts'

const item = { value: '16px/1.5 Inter' }
convectorTypography(item)

console.log(item.value) // { basic: "16px/1.5 Inter" }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};