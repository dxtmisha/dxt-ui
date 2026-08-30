import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToRoot - Bộ chuyển đổi phạm vi bộ chọn CSS Root`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoroot`,children:`Lớp PropertiesToRoot`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToRoot`}),` chuyển đổi các token thiết kế biểu thị hành vi phạm vi gốc CSS (sử dụng định danh `,(0,c.jsx)(t.code,{children:`PropertyType.root`}),`) thành bộ chọn tham chiếu cha. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp bộ chọn gốc`}),` — Thêm tham chiếu bộ chọn cha `,(0,c.jsx)(t.code,{children:`&`}),` vào tên token thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bối cảnh phạm vi`}),` — Liên kết các biến với vỏ bọc vùng chứa chính của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính gốc đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`038-root`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToRoot, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRoot(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để lấy tất cả các biến thuộc kiểu `,(0,c.jsx)(t.code,{children:`root`}),` và định dạng bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(design: string, component: string, name: string): string`}),` — Kết hợp các tham chiếu bố cục thiết kế và tên thành phần, trả về biểu thức bộ chọn có định dạng như `,(0,c.jsx)(t.code,{children:`[resolved-link] &`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};