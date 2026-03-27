import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/initScrollbarOffset - Tạo biến căn lề kích thước thanh cuộn`}),`
`,(0,c.jsx)(n.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(n.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích bất đồng bộ giúp tính toán và đo chính xác chiều rộng mặc định cho thanh cuộn (scrollbar) từ trình duyệt hệ thống; ngay sau đó tự động lưu kết quả này (quy theo đơn vị pixels) thông qua một biến CSS toàn cục `,(0,c.jsx)(n.code,{children:`--sys-scrollbar-offset`}),` và đính lên phía trên thẻ gốc `,(0,c.jsx)(n.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Con số thiết thực từ độ rộng phần cuốn này được chứng minh là thiết yếu cực độ tại các cấu thành như thẻ modal pop-up, lớp lót chặn che màn hình, hỗ trợ giảm hẳn đi triệu chứng cấu trúc trang giật bắn không mong muốn.`}),`
`,(0,c.jsxs)(n.p,{children:[`Chức năng chính phối hợp trực tiếp kèm thư viện class rẽ hướng `,(0,c.jsx)(n.code,{children:`ScrollbarWidth`}),` phụ đính bên cấu trúc hệ điều hành gói functional.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Luồng bất đồng bộ kích thích trả biến `,(0,c.jsx)(n.code,{children:`Promise<void>`}),` ghi nhớ điểm đổi CSS bên thẻ nền DOM layout.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Phát lệnh định vị ngay trong lúc khởi tạo dữ liệu khởi động app
await initScrollbarOffset()

// Gọi CSS sau này tuỳ biến:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};