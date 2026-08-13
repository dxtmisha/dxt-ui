import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/initScrollbarOffset - Tạo biến căn lề kích thước thanh cuộn`}),`
`,(0,c.jsx)(t.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(t.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích bất đồng bộ giúp tính toán và đo chính xác chiều rộng mặc định cho thanh cuộn (scrollbar) từ trình duyệt hệ thống; ngay sau đó tự động lưu kết quả này (quy theo đơn vị pixels) thông qua một biến CSS toàn cục `,(0,c.jsx)(t.code,{children:`--sys-scrollbar-offset`}),` và đính lên phía trên thẻ gốc `,(0,c.jsx)(t.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Con số thiết thực từ độ rộng phần cuốn này được chứng minh là thiết yếu cực độ tại các cấu thành như thẻ modal pop-up, lớp lót chặn che màn hình, hỗ trợ giảm hẳn đi triệu chứng cấu trúc trang giật bắn không mong muốn.`}),`
`,(0,c.jsxs)(t.p,{children:[`Chức năng chính phối hợp trực tiếp kèm thư viện class rẽ hướng `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),` phụ đính bên cấu trúc hệ điều hành gói functional.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Luồng bất đồng bộ kích thích trả biến `,(0,c.jsx)(t.code,{children:`Promise<void>`}),` ghi nhớ điểm đổi CSS bên thẻ nền DOM layout.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Phát lệnh định vị ngay trong lúc khởi tạo dữ liệu khởi động app
await initScrollbarOffset()

// Gọi CSS sau này tuỳ biến:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};