import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToComponent - Bộ chuyển đổi thuộc tính Component`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestocomponent`,children:`Lớp PropertiesToComponent`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToComponent`}),` chuyển đổi các thẻ cấu hình thiết kế (tokens) được chỉ định làm không gian tên của thành phần (component) hoặc chủ đề (theme) thành tên thuộc tính thành phần chuẩn hóa. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết phạm vi không gian tên`}),` — Xác định các token kiểu `,(0,c.jsx)(t.code,{children:`PropertyType.component`}),` hoặc `,(0,c.jsx)(t.code,{children:`PropertyType.theme`}),` và định dạng tên của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đặt tên theo cấp bậc`}),` — Tự động thêm tiền tố không gian tên cha vào tên thành phần để ngăn ngừa xung đột tên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu đầu ra thuộc tính thành phần vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`028-component`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToComponent, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToComponent(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để xử lý các nút biến thành phần và chủ đề.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Giải quyết tên duy nhất của một thành phần, kết hợp các đường dẫn cha trừ khi thuộc tính `,(0,c.jsx)(t.code,{children:`fullName`}),` được bật.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};