import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryExport - Trình tạo xuất bản (Export)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryexport`,children:`Lớp LibraryExport`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` chịu trách nhiệm tổng hợp và tạo ra các tệp xuất bản (export) thống nhất cho thư viện. Nó quét các thư mục con được chỉ định để tìm các tệp TypeScript và Vue, tự động biên dịch tất cả các xuất bản thành một giao diện công khai duy nhất để đơn giản hóa việc nhập thư viện. Lớp này cũng hỗ trợ tạo tệp xuất bản thư viện phụ gọn nhẹ mà không bao gồm thành phần hoặc phong cách.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo xuất bản thống nhất`}),` — Tạo ra một điểm nhập công khai toàn diện cho tất cả các thành phần, composables, hàm và lớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hiện mô-đun thông minh`}),` — Tự động áp dụng các xuất bản ký tự đại diện tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`export *`}),`) cho các tiện ích TypeScript và tạo các xuất bản có tên cho các thành phần Vue SFC.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp phong cách`}),` — Tự động kiểm tra và tích hợp các bảng kiểu dáng CSS hoặc SCSS toàn cục với tùy chọn loại trừ khi cần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ thư viện phụ`}),` — Tạo ra một điểm nhập thứ hai không có thành phần và phong cách (`,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),`) phục vụ cho các trường hợp chỉ cần logic hoặc môi trường headless.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ lọc thông minh`}),` — Loại trừ các tệp kiểm thử đơn vị (`,(0,c.jsx)(t.code,{children:`.test.`}),`) và các mô-đun được đánh dấu bằng chỉ thị `,(0,c.jsx)(t.code,{children:`// export:none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo và thực thi trình tạo xuất bản thư viện bằng phương thức `,(0,c.jsx)(t.code,{children:`make`}),`. Bạn có thể cấu hình xem có đưa kiểu dáng vào hay không và có tạo tệp thư viện phụ hay không:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

// Xuất bản tiêu chuẩn (có kiểu dáng, chỉ thư viện chính)
const generator = new LibraryExport()
generator.make()

// Xuất bản không bao gồm kiểu dáng
const noStyleGenerator = new LibraryExport(false)
noStyleGenerator.make()

// Xuất bản cả thư viện chính và thư viện phụ
const fullGenerator = new LibraryExport(true, true)
fullGenerator.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`tham-số-constructor`,children:`Tham số Constructor`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style: boolean = true`}),` — Có đưa bảng kiểu dáng toàn cục vào thư viện xuất bản hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sub: boolean = false`}),` — Có tạo tệp thư viện phụ bổ sung (`,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),`) không chứa thành phần và kiểu dáng hay không.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thực-thi-cốt-lõi`,children:`Thực thi cốt lõi`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kích hoạt quá trình biên dịch thư viện và tạo điểm truy cập. Lớp này quét tất cả các thư mục con được cấu hình, thu thập các tệp hợp lệ, lọc bỏ các mô-đun kiểm thử/không xuất bản, và ghi các câu lệnh nhập/xuất bản thống nhất vào `,(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT`}),` (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`). Khi tính năng tạo thư viện phụ được bật (`,(0,c.jsx)(t.code,{children:`isSub() === true`}),`), nó sẽ biên dịch và ghi thêm vào `,(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT_SUB`}),` (`,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Không yêu cầu tham số.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Ghi các tệp đích trên hệ thống tệp và ghi lại tiến trình vào bảng điều khiển (console).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport(true, true).make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-phương-thức-hỗ-trợ`,children:`Các phương thức hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(directory: string): string[]`}),` — Trả về các thành phần đường dẫn thư mục dựa trên `,(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` và tên thư mục được chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isExport(path: string | string[]): boolean`}),` — Đánh giá xem một đường dẫn tệp có phù hợp để xuất bản hay không bằng cách xác minh nó không phải là tệp kiểm thử và không khớp với `,(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStyle(): boolean`}),` — Kiểm tra xem có nên đưa kiểu dáng vào tệp xuất bản hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSub(): boolean`}),` — Kiểm tra xem có nên tạo tệp xuất bản thư viện phụ hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDirectory(): LibraryFiles`}),` — Thu thập đệ quy tất cả các tệp có thể lập chỉ mục trong các thư mục xuất bản được cấu hình và tổng hợp chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string): string`}),` — Chuyển đổi ký tự đầu tiên của tên thư mục thành chữ hoa để tiêu chuẩn hóa các chú thích trong tệp được tạo sinh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFile(path: string | string[]): string`}),` — Đọc nội dung tệp tại đường dẫn đã cho từ hệ thống tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initFile(isSub?: boolean): string`}),` — Xây dựng nội dung thô của tệp thư viện đầu ra, bao gồm các lệnh nhập, thiết lập phong cách và các xuất bản ký tự đại diện/có tên. Khi `,(0,c.jsx)(t.code,{children:`isSub`}),` là `,(0,c.jsx)(t.code,{children:`true`}),`, thành phần và kiểu dáng sẽ bị loại trừ và các đường dẫn tương đối được điều chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initStyles(): string`}),` — Tạo ra các lệnh nhập cho bảng kiểu dáng toàn cục (`,(0,c.jsx)(t.code,{children:`style.scss`}),` hoặc `,(0,c.jsx)(t.code,{children:`style.css`}),`) nếu chúng tồn tại trong thư mục gốc nguồn và `,(0,c.jsx)(t.code,{children:`isStyle()`}),` trả về `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phụ-thuộc-và-cấu-hình`,children:`Các phụ thuộc và cấu hình`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` tương tác với một số cấu hình toàn cục để thực hiện tạo sinh cấu trúc:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Chỉ định các thư mục hoạt động được quét đệ quy để tìm các xuất bản (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Thiết lập đường dẫn đầu ra đích của tệp thư viện đã biên dịch (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT_SUB`}),` — Thiết lập đường dẫn đầu ra đích của tệp thư viện phụ đã biên dịch (`,(0,c.jsx)(t.code,{children:`src/library/_library.ts`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_LIBRARY`}),` — Đường dẫn thư mục nơi lưu trữ các tệp đã tạo của thư viện (`,(0,c.jsx)(t.code,{children:`src/library`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` — Xác định thư mục nguồn gốc chứa các mô-đun (`,(0,c.jsx)(t.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Giữ biểu thức chính quy khớp với chỉ thị không xuất bản (`,(0,c.jsx)(t.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};