import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-types - Trình tạo Định nghĩa Kiểu cho AI`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-types`,children:`dxt-types`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-types`}),` biên dịch, làm sạch và nén các tệp khai báo TypeScript (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`) thành các định nghĩa kiểu được tối ưu hóa cho AI. Nó lọc bỏ các chi tiết triển khai nội bộ và sử dụng AI để tạo hướng dẫn cho nhà phát triển.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý Khai báo`}),`: Thu thập đệ quy các tệp `,(0,c.jsx)(n.code,{children:`.d.ts`}),` từ các thư mục đầu ra của quá trình biên dịch (ví dụ: `,(0,c.jsx)(n.code,{children:`dist/`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc Đóng gói`}),`: Tự động loại bỏ các thành viên private, protected và các thành viên không được xuất để chỉ giữ lại giao diện API công khai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa AI`}),`: Sử dụng mô hình AI để làm sạch các bình luận và tạo ra một tệp `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` nhỏ gọn, tiết kiệm mã thông báo (token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Hướng dẫn Phát triển`}),`: Tự động nhắc AI dự thảo một bản tóm tắt có cấu trúc về các tính năng thư viện và lưu vào tệp `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét Khai báo`}),`: Tập lệnh duyệt qua thư mục bản dựng đích để tìm các tệp khai báo `,(0,c.jsx)(n.code,{children:`.d.ts`}),`, bỏ qua các tệp thành phần Vue và tệp wiki.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất Mã`}),`: Kết hợp tất cả các tệp phù hợp thành một văn bản duy nhất trong bộ nhớ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm sạch bằng AI`}),`: Gửi văn bản tới AI để loại bỏ các bình luận/nhập (imports) nội bộ, lọc bỏ các chi tiết private và nén mã nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ Kiểu`}),`: Lưu danh sách kiểu đã được làm sạch vào tệp `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` cùng với các hướng dẫn về xuất bản gói.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Tài liệu Hướng dẫn`}),`: Yêu cầu AI tạo một bản tóm tắt kỹ thuật của thư viện và ghi vào tệp `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Chạy trình biên dịch kiểu thông qua `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-types [build_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`build_dir`}),` (Tùy chọn): Thư mục để quét. Mặc định là `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};