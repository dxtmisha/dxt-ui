import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-types-save - Lưu Định nghĩa Kiểu cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-types-save`,children:`dxt-types-save`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-types-save`}),` biên dịch và lưu các định nghĩa kiểu TypeScript được tối ưu hóa cho AI từ danh sách các tệp đã xử lý trước đó mà không cần gọi lại các mô hình AI. Nó tạo ra các định nghĩa kiểu nhanh chóng, kiểm tra xem hướng dẫn cho nhà phát triển đã tồn tại chưa và biên dịch tài nguyên máy chủ MCP.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu Ngoại Tuyến Nhanh Chóng`}),`: Kết hợp các khai báo đã xử lý từ thư mục `,(0,c.jsx)(t.code,{children:`ai-types-list`}),` mà không tốn mã thông báo (token) hoặc gửi yêu cầu mạng tới API AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự Động Kiểm Tra Mô Tả`}),`: Kiểm tra xem tệp `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` đã tồn tại chưa và chỉ tạo khi còn thiếu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biên Dịch Tài Nguyên MCP`}),`: Chuẩn bị tài nguyên và siêu dữ liệu giao thức MCP (Model Context Protocol).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đọc Danh Sách Đã Xử Lý`}),`: Quét thư mục `,(0,c.jsx)(t.code,{children:`ai-types-list`}),` để lấy các định nghĩa kiểu đã chuẩn bị sẵn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tập Hợp `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),`: Ghép nối và lưu tài liệu tham khảo kiểu TypeScript hoàn chỉnh được tối ưu hóa cho AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đảm Bảo Mô Tả`}),`: Xác minh rằng tài liệu tóm tắt trong `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` đã có mặt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo Cấu Hình MCP`}),`: Biên dịch tài nguyên MCP thông qua `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy trình lưu kiểu thông qua `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`) (Tùy chọn): Thư mục đầu vào chứa các tệp prompt. Mặc định là `,(0,c.jsx)(t.code,{children:`ai-resources`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`) (Tùy chọn): Thư mục đầu vào chứa các tệp khai báo. Mặc định là thư mục biên dịch tạm thời (`,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dist`}),` (Tùy chọn): Thư mục đầu ra chứa các tệp JavaScript đã biên dịch. Mặc định là `,(0,c.jsx)(t.code,{children:`dist`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy `,(0,c.jsx)(t.code,{children:`npx dxt-types-save --help`}),` để in ra danh sách đầy đủ các tùy chọn khả dụng.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};