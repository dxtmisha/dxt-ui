import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToAnimate - Bộ chuyển đổi thuộc tính hoạt ảnh`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoanimate`,children:`Lớp PropertiesToAnimate`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),` là một bộ chuyển đổi cụ thể được thiết kế để xử lý các cấu hình hoạt ảnh. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` và ánh xạ các khung hình (frames) cũng như các khung hình chính (keyframes) thành các cấu trúc chuẩn hóa, có thể lưu vào bộ nhớ đệm.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận diện khung hình`}),` — Tự động phát hiện các thuộc tính thuộc kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.animate`}),` và ánh xạ các khung hình chính bên dưới của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt tên theo cấp bậc`}),` — Kết hợp các phân đoạn đường dẫn cha để tạo ra tên mô tả, duy nhất cho các phần tử hoạt ảnh con.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Xuất các thuộc tính đã xử lý ra tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`044-animate`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`PropertiesToAnimate`}),` với một tập hợp `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),`, sau đó gọi phương thức thực thi:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAnimate, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToAnimate(items)
transformer.to() // Chạy init() và ghi vào bộ nhớ đệm
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để giải quyết các nhóm khung hình chính hoạt ảnh và viết lại thuộc tính của khung hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Tạo một tên duy nhất phân tách bằng dấu gạch ngang từ các tổ tiên đường dẫn nếu thuộc tính `,(0,c.jsx)(n.code,{children:`fullName`}),` không được đặt trên phần tử.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};