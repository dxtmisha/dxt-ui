import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-build-functional - Xây Dựng Xuất Bản Chức Năng`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-functional`,children:`dxt-build-functional`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-build-functional`}),` tự động tổng hợp và xuất bản lại (re-export) toàn bộ các tiện ích phản hồi, lớp và composables từ gói `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` vào một tệp đầu vào hợp nhất `,(0,c.jsx)(n.code,{children:`functional.ts`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động Tạo Đầu Vào`}),`: Tự động thu thập và biên dịch danh sách xuất bản duy nhất cho tất cả các API chức năng phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sắp xếp Nghiêm ngặt`}),`: Sắp xếp các xuất bản lại theo thứ tự bảng chữ cái để duy trì tính nhất quán và ngăn ngừa xung đột mã (merge conflicts).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất bản lại An toàn Kiểu`}),`: Tự động chuyển tiếp các kiểu TypeScript (`,(0,c.jsx)(n.code,{children:`export type *`}),`) từ gói chức năng cốt lõi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải Gói`}),`: Tập lệnh nhập mô-đun cốt lõi `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập Khóa`}),`: Nó đọc tất cả các khóa được xuất động từ đối tượng mô-đun.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sắp xếp & Xây dựng`}),`: Nó sắp xếp các khóa theo bảng chữ cái và xây dựng chuỗi tạo mã cho mỗi thành viên được xuất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi Kết Quả`}),`: Tập lệnh nối các chuỗi lại và ghi tệp hoàn chỉnh vào đường dẫn thư viện đã cấu hình dưới tên `,(0,c.jsx)(n.code,{children:`functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Chạy công cụ xây dựng thông qua `,(0,c.jsx)(n.code,{children:`npx`}),` hoặc các tập lệnh npm workspace:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-build-functional
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};