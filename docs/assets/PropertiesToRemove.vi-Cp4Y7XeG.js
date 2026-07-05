import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToRemove - Bộ dọn dẹp thuộc tính được chỉ định xóa`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoremove`,children:`Lớp PropertiesToRemove`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToRemove`}),` loại bỏ các nút và thuộc tính khỏi cây token thiết kế được đánh dấu rõ ràng bằng chỉ thị `,(0,c.jsx)(n.code,{children:`remove`}),`. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cắt tỉa thuộc tính mục tiêu`}),` — Xác định và xóa các thuộc tính được cắm cờ `,(0,c.jsx)(n.code,{children:`PropertyKey.remove`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cảnh báo nhà phát triển`}),` — Ghi nhật ký cảnh báo chứa các đường dẫn của phần tử bị xóa ra bảng điều khiển terminal để theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu bản đồ cấu hình đã cập nhật vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`007-02-remove`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToRemove, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRemove(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để quét cây, xóa các nút thuộc tính phù hợp khỏi các đối tượng giá trị cha của chúng, và ghi nhật ký cảnh báo.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};