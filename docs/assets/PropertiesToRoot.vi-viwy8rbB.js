import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToRoot - Bộ chuyển đổi phạm vi bộ chọn CSS Root`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoroot`,children:`Lớp PropertiesToRoot`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToRoot`}),` chuyển đổi các token thiết kế biểu thị hành vi phạm vi gốc CSS (sử dụng định danh `,(0,c.jsx)(n.code,{children:`PropertyType.root`}),`) thành bộ chọn tham chiếu cha. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp bộ chọn gốc`}),` — Thêm tham chiếu bộ chọn cha `,(0,c.jsx)(n.code,{children:`&`}),` vào tên token thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bối cảnh phạm vi`}),` — Liên kết các biến với vỏ bọc vùng chứa chính của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính gốc đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`038-root`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToRoot, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRoot(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để lấy tất cả các biến thuộc kiểu `,(0,c.jsx)(n.code,{children:`root`}),` và định dạng bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(design: string, component: string, name: string): string`}),` — Kết hợp các tham chiếu bố cục thiết kế và tên thành phần, trả về biểu thức bộ chọn có định dạng như `,(0,c.jsx)(n.code,{children:`[resolved-link] &`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};