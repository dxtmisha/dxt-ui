import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToComponent - Bộ chuyển đổi thuộc tính Component`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestocomponent`,children:`Lớp PropertiesToComponent`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToComponent`}),` chuyển đổi các thẻ cấu hình thiết kế (tokens) được chỉ định làm không gian tên của thành phần (component) hoặc chủ đề (theme) thành tên thuộc tính thành phần chuẩn hóa. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết phạm vi không gian tên`}),` — Xác định các token kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.component`}),` hoặc `,(0,c.jsx)(n.code,{children:`PropertyType.theme`}),` và định dạng tên của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt tên theo cấp bậc`}),` — Tự động thêm tiền tố không gian tên cha vào tên thành phần để ngăn ngừa xung đột tên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu đầu ra thuộc tính thành phần vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`028-component`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToComponent, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToComponent(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để xử lý các nút biến thành phần và chủ đề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Giải quyết tên duy nhất của một thành phần, kết hợp các đường dẫn cha trừ khi thuộc tính `,(0,c.jsx)(n.code,{children:`fullName`}),` được bật.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};