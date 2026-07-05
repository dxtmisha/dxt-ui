import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-library - Trình tạo điểm truy cập thư viện`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-library`}),` là một tiện ích CLI giúp tạo ra một điểm nhập thống nhất (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`) cho toàn bộ thư viện UI. Lệnh này sử dụng lớp `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` để quét các thư mục con chính và biên dịch động tất cả các xuất bản (exports) thành một giao diện công khai duy nhất.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điểm nhập thống nhất`}),`: Biên dịch nhiều thư mục thành một giao diện xuất bản duy nhất được tối ưu hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý mô-đun thông minh`}),`: Tự động xử lý các xuất bản ký tự đại diện cho các tiện ích TypeScript và tạo các xuất bản có tên cho các thành phần Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ lọc thông minh`}),`: Loại trừ các tệp kiểm thử đơn vị và các tệp được đánh dấu bằng chỉ thị không xuất bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp phong cách toàn cục`}),`: Tự động kết hợp các kiểu dáng toàn cục vào tệp điểm nhập được tạo sinh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình biên dịch điểm truy cập tự động hóa việc lắp ráp tất cả các xuất bản mô-đun:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Tập lệnh quét các thư mục con nguồn được chỉ định (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`) bằng các công cụ đọc thư mục đệ quy.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nó lọc bỏ các tệp kiểm thử đơn vị (chứa `,(0,c.jsx)(n.code,{children:`.test.`}),`) và các tệp chứa chỉ thị `,(0,c.jsx)(n.code,{children:`// export:none`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Đối với mỗi tệp TypeScript hợp lệ (`,(0,c.jsx)(n.code,{children:`.ts`}),`), nó sẽ thêm một xuất bản ký tự đại diện tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Đối với mỗi tệp Vue SFC (`,(0,c.jsx)(n.code,{children:`.vue`}),`), nó tạo ra một lệnh nhập và ánh xạ nó tới một xuất bản hằng số có tên để sử dụng một cách sạch sẽ.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nó kiểm tra sự tồn tại của `,(0,c.jsx)(n.code,{children:`style.scss`}),` hoặc `,(0,c.jsx)(n.code,{children:`style.css`}),` trong thư mục đầu vào cơ sở và thêm các câu lệnh nhập của chúng vào đầu tệp nếu tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nó ghi mã đã biên dịch trực tiếp vào tệp `,(0,c.jsx)(n.code,{children:`src/library.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsx)(n.p,{children:`Không yêu cầu thiết lập phức tạp để chạy trình tạo điểm nhập thư viện. Tập lệnh tự động đọc cấu hình và xử lý các thư mục xuất bản được cài đặt sẵn.`}),`
`,(0,c.jsx)(n.p,{children:`Để thực thi quy trình tạo sinh, hãy chạy:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(n.p,{children:`Sau khi thực thi thành công, công cụ sẽ tạo hoặc cập nhật tệp sau trong gói:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`src/library.ts`}),`: Điểm nhập thống nhất chứa tất cả các lệnh nhập, xuất bản thành phần có tên và ký tự đại diện.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};