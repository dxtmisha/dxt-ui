import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToNone - Bộ dọn dẹp Token trống`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestonone`,children:`Lớp PropertiesToNone`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToNone`}),` dọn dẹp cây cấu hình thiết kế bằng cách loại bỏ các cấu hình trống và không sử dụng, từ đó tối ưu hóa bộ nhớ và kích thước đầu ra. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cắt tỉa nút dư thừa`}),` — Xác định các nút thuộc tính và biến chứa các giá trị đối tượng trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Báo cáo bảng điều khiển`}),` — Ghi nhật ký chi tiết cảnh báo về các đường dẫn trống đã bị xóa vào terminal để nhà phát triển kiểm tra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu cây thuộc tính đã được làm sạch vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`900-none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToNone, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToNone(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm và xóa các mục trống dưới các nhánh biến và thuộc tính.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};