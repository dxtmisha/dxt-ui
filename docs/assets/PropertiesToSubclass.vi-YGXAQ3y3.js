import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToSubclass - Bộ chuyển đổi bộ chọn lớp con BEM`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestosubclass`,children:`Lớp PropertiesToSubclass`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToSubclass`}),` chuyển đổi các token thiết kế biểu thị các lớp con (subclasses) (kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.subclass`}),`) thành các bộ chọn lớp phần tử BEM lồng nhau (như `,(0,c.jsx)(n.code,{children:`&__subclass`}),`). Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp bộ chọn BEM`}),` — Chuyển đổi các nút token lớp con thành các bộ chọn phần tử lồng trong cha SCSS (`,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện cấp bậc`}),` — Kiểm tra các cấp cha để đảm bảo các lớp BEM được lồng chính xác theo cấu trúc thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu ánh xạ bộ chọn lớp con vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`036-subclass`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSubclass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSubclass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm tất cả các biến thuộc kiểu `,(0,c.jsx)(n.code,{children:`subclass`}),` và viết lại bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isParentState(parents: PropertyItemsItem['parents']): boolean`}),` — Xác định xem tổ tiên trực tiếp trong đường dẫn có khớp với vỏ bọc bố cục trạng thái/bộ sửa đổi hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Giải quyết bộ chọn lớp con, thêm định dạng BEM (`,(0,c.jsx)(n.code,{children:`&__`}),` hoặc `,(0,c.jsx)(n.code,{children:`& .`}),`) dựa trên cấu hình cấp cao nhất và các đường dẫn cha.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};