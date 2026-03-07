import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(h){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/initScrollbarOffset - Tạo biến căn lề kích thước thanh cuộn"}),`
`,n.jsx(t.h1,{id:"initscrollbaroffset",children:n.jsx(t.code,{children:"initScrollbarOffset"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích bất đồng bộ giúp tính toán và đo chính xác chiều rộng mặc định cho thanh cuộn (scrollbar) từ trình duyệt hệ thống; ngay sau đó tự động lưu kết quả này (quy theo đơn vị pixels) thông qua một biến CSS toàn cục ",n.jsx(t.code,{children:"--sys-scrollbar-offset"})," và đính lên phía trên thẻ gốc ",n.jsx(t.code,{children:"<body>"}),"."]}),`
`,n.jsx(t.p,{children:"Con số thiết thực từ độ rộng phần cuốn này được chứng minh là thiết yếu cực độ tại các cấu thành như thẻ modal pop-up, lớp lót chặn che màn hình, hỗ trợ giảm hẳn đi triệu chứng cấu trúc trang giật bắn không mong muốn."}),`
`,n.jsxs(t.p,{children:["Chức năng chính phối hợp trực tiếp kèm thư viện class rẽ hướng ",n.jsx(t.code,{children:"ScrollbarWidth"})," phụ đính bên cấu trúc hệ điều hành gói functional."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Tham số:"}),`
Kiến trúc này hoạt động hoàn toàn độc lập và không chứa những thuộc tính tuỳ chỉnh nào cả.`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
Luồng bất đồng bộ kích thích trả biến `,n.jsx(t.code,{children:"Promise<void>"})," ghi nhớ điểm đổi CSS bên thẻ nền DOM layout."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Phát lệnh định vị ngay trong lúc khởi tạo dữ liệu khởi động app
await initScrollbarOffset()

// Gọi CSS sau này tuỳ biến:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function p(h={}){const{wrapper:t}={...i(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(c,{...h})}):c(h)}export{p as default};
