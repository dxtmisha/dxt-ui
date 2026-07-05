import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToState - Bộ chuyển đổi bộ chọn bổ trợ trạng thái`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestostate`,children:`Lớp PropertiesToState`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToState`}),` xử lý các trạng thái token thiết kế (kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.state`}),`) và chuyển đổi tên của chúng thành các bộ chọn bổ trợ (modifier selectors) SCSS (như `,(0,c.jsx)(n.code,{children:`&--state`}),` hoặc `,(0,c.jsx)(n.code,{children:`&.parent--state`}),`). Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp bộ chọn trạng thái`}),` — Tạo ra các định dạng bộ sửa đổi lớp SCSS (`,(0,c.jsx)(n.code,{children:`&--modifier`}),`) đại diện cho các trạng thái trực quan của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết trạng thái lồng nhau`}),` — Đánh giá hệ phân cấp cha để lồng các trạng thái con một cách rõ ràng trong phạm vi các bộ sửa đổi lồng nhau (ví dụ: `,(0,c.jsx)(n.code,{children:`&.parent--modifier`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các bộ chọn trạng thái vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`032-state`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToState, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToState(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm tất cả các biến thuộc kiểu `,(0,c.jsx)(n.code,{children:`state`}),` và viết lại bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Định dạng tên bộ sửa đổi, thêm định dạng bộ sửa đổi BEM (`,(0,c.jsx)(n.code,{children:`&--`}),` hoặc `,(0,c.jsx)(n.code,{children:`&.parent--`}),`) dựa trên cấu hình cấp cao nhất và các tổ tiên đường dẫn.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};