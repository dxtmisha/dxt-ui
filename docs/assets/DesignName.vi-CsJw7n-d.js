import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignName`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designname`,children:`Lớp DesignName`}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích đặt tên BEM cho thành phần thiết kế. Hàm khởi tạo lấy hai phần đầu của `,(0,c.jsx)(t.code,{children:`design.component`}),`, chuẩn hóa từng phần và lưu tên thiết kế cùng tên lớp thành phần.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tên được lưu`}),` — trạng thái độc lập cho từng đối tượng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiện ích BEM`}),` — biến thể dùng `,(0,c.jsx)(t.code,{children:`--`}),`, phần tử dùng `,(0,c.jsx)(t.code,{children:`__`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biến CSS`}),` — thuộc tính hệ thống chứa phần `,(0,c.jsx)(t.code,{children:`-sys-`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(name: string)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên thành phần có tiền tố thiết kế, như d1.button.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phần tên có thể chứa số và `,(0,c.jsx)(t.code,{children:`undefined`}),`. Phép nối giữ `,(0,c.jsx)(t.code,{children:`0`}),`, chuyển `,(0,c.jsx)(t.code,{children:`undefined`}),` thành phần rỗng và giữ hậu tố phân cách khi không có phần tên. Mỗi phần nguồn dùng `,(0,c.jsx)(t.code,{children:`toCamelCase`}),`; ví dụ `,(0,c.jsx)(t.code,{children:`d1.buttonGroup`}),` trở thành `,(0,c.jsx)(t.code,{children:`d1-buttonGroup`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignName } from '@dxtmisha/functional'

const naming = /*#__PURE__*/ new DesignName('d1.buttonGroup')
naming.getName() // 'd1-buttonGroup'
naming.getStatusClass('size', 0) // 'd1-buttonGroup--size--0'
naming.getSubClass('label') // 'd1-buttonGroup__label'
naming.getStyle('width') // '--d1-buttonGroup-sys-width'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tên-cơ-sở`,children:`Tên cơ sở`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Trả về phần tên đầu tiên đã chuẩn hóa.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Trả về tên lớp thành phần đã chuẩn hóa.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`bem-và-biến-css`,children:`BEM và biến CSS`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStatusClass(...names: (string | number | undefined)[]): string`}),` — Nối các phần biến thể bằng `,(0,c.jsx)(t.code,{children:`--`}),` sau tên thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSubClass(...names: (string | number | undefined)[]): string`}),` — Nối các phần phần tử bằng `,(0,c.jsx)(t.code,{children:`__`}),` sau tên thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStyle(...names: (string | number | undefined)[]): string`}),` — Tạo tên biến CSS với tiền tố `,(0,c.jsx)(t.code,{children:`--`}),` và không gian tên `,(0,c.jsx)(t.code,{children:`-sys-`}),`.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};