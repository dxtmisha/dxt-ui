import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-types - Trình tạo Định nghĩa Kiểu cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-types`,children:`dxt-types`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-types`}),` biên dịch, làm sạch và nén các tệp khai báo TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) thành các định nghĩa kiểu được tối ưu hóa cho AI. Nó lọc bỏ các chi tiết triển khai nội bộ và sử dụng AI để tạo hướng dẫn cho nhà phát triển.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý Khai báo`}),`: Thu thập đệ quy các tệp `,(0,c.jsx)(t.code,{children:`.d.ts`}),` từ các thư mục đầu ra của quá trình biên dịch (ví dụ: `,(0,c.jsx)(t.code,{children:`dist/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc Đóng gói`}),`: Tự động loại bỏ các thành viên private, protected và các thành viên không được xuất để chỉ giữ lại giao diện API công khai.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tối ưu hóa AI`}),`: Sử dụng mô hình AI để làm sạch các bình luận và tạo ra một tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` nhỏ gọn, tiết kiệm mã thông báo (token).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo Hướng dẫn Phát triển`}),`: Tự động nhắc AI dự thảo một bản tóm tắt có cấu trúc về các tính năng thư viện và lưu vào tệp `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quét Khai báo`}),`: Tập lệnh duyệt qua thư mục bản dựng đích để tìm các tệp khai báo `,(0,c.jsx)(t.code,{children:`.d.ts`}),`, bỏ qua các tệp thành phần Vue và tệp wiki.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất Mã`}),`: Kết hợp tất cả các tệp phù hợp thành một văn bản duy nhất trong bộ nhớ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Làm sạch bằng AI`}),`: Gửi văn bản tới AI để loại bỏ các bình luận/nhập (imports) nội bộ, lọc bỏ các chi tiết private và nén mã nguồn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ Kiểu`}),`: Lưu danh sách kiểu đã được làm sạch vào tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` cùng với các hướng dẫn về xuất bản gói.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo Tài liệu Hướng dẫn`}),`: Yêu cầu AI tạo một bản tóm tắt kỹ thuật của thư viện và ghi vào tệp `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy trình biên dịch kiểu thông qua `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`) (Tùy chọn): Thư mục đầu vào chứa các tệp prompt. Mặc định là `,(0,c.jsx)(t.code,{children:`ai-resources`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`) (Tùy chọn): Thư mục đầu vào chứa các tệp khai báo. Mặc định là thư mục biên dịch tạm thời (`,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dist`}),` (Tùy chọn): Thư mục đầu ra chứa các tệp JavaScript đã biên dịch. Mặc định là `,(0,c.jsx)(t.code,{children:`dist`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy `,(0,c.jsx)(t.code,{children:`npx dxt-types --help`}),` để in ra danh sách đầy đủ các tùy chọn khả dụng.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};