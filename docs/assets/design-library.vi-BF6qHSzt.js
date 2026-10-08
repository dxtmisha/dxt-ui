import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-library - Trình tạo điểm truy cập thư viện`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-library`}),` là một tiện ích CLI giúp tạo ra một điểm nhập thống nhất (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`) cho toàn bộ thư viện UI. Lệnh này sử dụng lớp `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` để quét các thư mục con chính và biên dịch động tất cả các xuất bản (exports) thành một giao diện công khai duy nhất.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điểm nhập thống nhất`}),`: Biên dịch nhiều thư mục thành một giao diện xuất bản duy nhất được tối ưu hóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý mô-đun thông minh`}),`: Tự động xử lý các xuất bản ký tự đại diện cho các tiện ích TypeScript và tạo các xuất bản có tên cho các thành phần Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ lọc thông minh`}),`: Loại trừ các tệp kiểm thử đơn vị và các tệp được đánh dấu bằng chỉ thị không xuất bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp phong cách toàn cục`}),`: Tự động kết hợp các kiểu dáng toàn cục vào tệp điểm nhập được tạo sinh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo thư viện phụ (Sub-library)`}),`: Tùy chọn tạo thêm tệp xuất bản (`,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),`) chứa các tiện ích, composables, lớp và kiểu dữ liệu mà không có thành phần Vue hoặc phong cách (styles).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình biên dịch điểm truy cập tự động hóa việc lắp ráp tất cả các xuất bản mô-đun:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Tập lệnh quét các thư mục con nguồn được chỉ định (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`) bằng các công cụ đọc thư mục đệ quy.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nó lọc bỏ các tệp kiểm thử đơn vị (chứa `,(0,c.jsx)(t.code,{children:`.test.`}),`) và các tệp chứa chỉ thị `,(0,c.jsx)(t.code,{children:`// export:none`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đối với mỗi tệp TypeScript hợp lệ (`,(0,c.jsx)(t.code,{children:`.ts`}),`), nó sẽ thêm một xuất bản ký tự đại diện tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đối với mỗi tệp Vue SFC (`,(0,c.jsx)(t.code,{children:`.vue`}),`), nó tạo ra một lệnh nhập và ánh xạ nó tới một xuất bản hằng số có tên để sử dụng một cách sạch sẽ.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nó kiểm tra sự tồn tại của `,(0,c.jsx)(t.code,{children:`style.scss`}),` hoặc `,(0,c.jsx)(t.code,{children:`style.css`}),` trong thư mục đầu vào cơ sở và thêm các câu lệnh nhập của chúng vào đầu tệp nếu tìm thấy (trừ khi cờ `,(0,c.jsx)(t.code,{children:`--no-style`}),` được chỉ định).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nó ghi mã đã biên dịch trực tiếp vào tệp `,(0,c.jsx)(t.code,{children:`src/library.ts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu tùy chọn `,(0,c.jsx)(t.code,{children:`--sub`}),` được chỉ định, nó sẽ tạo thêm tệp `,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),` loại bỏ thư mục `,(0,c.jsx)(t.code,{children:`components`}),` và phong cách, với đường dẫn xuất bản tương đối được điều chỉnh phù hợp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsx)(t.p,{children:`Không yêu cầu thiết lập phức tạp để chạy trình tạo điểm nhập thư viện. Tập lệnh tự động đọc cấu hình và xử lý các thư mục xuất bản được cài đặt sẵn.`}),`
`,(0,c.jsx)(t.h3,{id:`các-tùy-chọn-cli`,children:`Các tùy chọn CLI`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--no-style`}),`: Loại trừ các lệnh nhập kiểu dáng toàn cục khỏi thư viện được tạo sinh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--sub`}),` / `,(0,c.jsx)(t.code,{children:`--sub-library`}),`: Tạo thêm tệp điểm nhập thư viện phụ `,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),` không chứa thành phần hoặc phong cách.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.p,{children:`Tạo sinh tiêu chuẩn:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo sinh không bao gồm phong cách:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-library --no-style
`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo sinh kèm theo tệp thư viện phụ:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-library --sub
`})}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi thực thi thành công, công cụ sẽ tạo hoặc cập nhật các tệp sau trong gói:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/library.ts`}),`: Điểm nhập thống nhất chứa tất cả các lệnh nhập, xuất bản thành phần có tên và ký tự đại diện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),` `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, khi cờ `,(0,c.jsx)(t.code,{children:`--sub`}),` được bật)`]}),`: Điểm nhập thư viện phụ không có thành phần và phong cách, dành cho việc sử dụng logic nền tảng hoặc phi giao diện.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};