import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/LibraryExport - Trình tạo xuất bản (Export)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryexport`,children:`Lớp LibraryExport`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` chịu trách nhiệm tổng hợp và tạo ra một tệp xuất bản (export) thống nhất cho thư viện. Nó quét các thư mục con được chỉ định để tìm các tệp TypeScript và Vue, tự động biên dịch tất cả các xuất bản thành một giao diện công khai duy nhất để đơn giản hóa việc nhập thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo xuất bản thống nhất`}),` — Tạo ra một điểm nhập công khai toàn diện cho tất cả các thành phần, composables, hàm và lớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện mô-đun thông minh`}),` — Tự động áp dụng các xuất bản ký tự đại diện tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`export *`}),`) cho các tiện ích TypeScript và tạo các xuất bản có tên cho các thành phần Vue SFC.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp phong cách`}),` — Tự động kiểm tra và tích hợp các bảng kiểu dáng CSS hoặc SCSS toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ lọc thông minh`}),` — Loại trừ các tệp kiểm thử đơn vị (`,(0,c.jsx)(n.code,{children:`.test.`}),`) và các mô-đun được đánh dấu bằng chỉ thị `,(0,c.jsx)(n.code,{children:`// export:none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo và thực thi trình tạo xuất bản thư viện bằng phương thức `,(0,c.jsx)(n.code,{children:`make`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thực-thi-cốt-lõi`,children:`Thực thi cốt lõi`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Kích hoạt quá trình biên dịch thư viện và tạo điểm truy cập. Lớp này quét tất cả các thư mục con được cấu hình, thu thập các tệp hợp lệ, lọc bỏ các mô-đun kiểm thử/không xuất bản, và ghi các câu lệnh nhập/xuất bản thống nhất vào tệp đích được chỉ định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Không yêu cầu tham số.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`}),` — Thay đổi tệp `,(0,c.jsx)(n.code,{children:`library.ts`}),` đích trên hệ thống tệp và ghi lại tiến trình vào bảng điều khiển (console).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`các-phương-thức-hỗ-trợ`,children:`Các phương thức hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(directory: string): string[]`}),` — Trả về các thành phần đường dẫn thư mục dựa trên `,(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` và tên thư mục được chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isExport(path: string | string[]): boolean`}),` — Đánh giá xem một đường dẫn tệp có phù hợp để xuất bản hay không bằng cách xác minh nó không phải là tệp kiểm thử và không khớp với `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDirectory(): LibraryFiles`}),` — Thu thập đệ quy tất cả các tệp có thể lập chỉ mục trong các thư mục xuất bản được cấu hình và tổng hợp chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string): string`}),` — Chuyển đổi ký tự đầu tiên của tên thư mục thành chữ hoa để tiêu chuẩn hóa các chú thích trong tệp được tạo sinh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFile(path: string | string[]): string`}),` — Đọc nội dung tệp tại đường dẫn đã cho từ hệ thống tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initFile(): string`}),` — Xây dựng nội dung thô của tệp thư viện đầu ra, bao gồm các lệnh nhập, thiết lập phong cách và các xuất bản ký tự đại diện/có tên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initStyles(): string`}),` — Tạo ra các lệnh nhập cho bảng kiểu dáng toàn cục (`,(0,c.jsx)(n.code,{children:`style.scss`}),` hoặc `,(0,c.jsx)(n.code,{children:`style.css`}),`) nếu chúng tồn tại trong thư mục gốc nguồn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phụ-thuộc-và-cấu-hình`,children:`Các phụ thuộc và cấu hình`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` tương tác với một số cấu hình toàn cục để thực hiện tạo sinh cấu trúc:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Chỉ định các thư mục hoạt động được quét đệ quy để tìm các xuất bản (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Thiết lập đường dẫn đầu ra đích của tệp thư viện đã biên dịch (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` — Xác định thư mục nguồn gốc chứa các mô-đun (`,(0,c.jsx)(n.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Giữ biểu thức chính quy khớp với chỉ thị không xuất bản (`,(0,c.jsx)(n.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};