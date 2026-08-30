import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryAiPromptItem - AI Prompt Aggregator Item`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryaipromptitem`,children:`Lớp LibraryAiPromptItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` đại diện cho một khối ngữ cảnh của gói hoặc mô-đun riêng lẻ trong quy trình tạo prompt cho AI. Lớp này quản lý việc phát hiện, đọc, ghi nhớ đệm và định dạng các tài nguyên riêng biệt của mô-đun (như mô tả, siêu dữ liệu, kiểu dữ liệu TypeScript và danh sách ảnh chụp màn hình UI) thành một phần ngữ cảnh có cấu trúc chặt chẽ.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hiện Ngữ cảnh Mô-đun`}),` — tự động kiểm tra sự tồn tại của các tệp mô tả, siêu dữ liệu, kiểu dữ liệu và ảnh chụp màn hình bên trong thư mục con của mô-đun.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích Manifest của Gói`}),` — tải và phân tích tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của mô-đun để trích xuất tên dự án chính thức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đóng gói Nội dung có Cấu trúc`}),` — hợp nhất các tệp phát hiện được thành một đầu ra markdown gọn gàng mô tả chi tiết vị trí, mục đích, kiểu dữ liệu và tài nguyên hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa Đường dẫn Linh hoạt`}),` — chuyển đổi các đường dẫn tương đối trong các tệp hướng dẫn thô thành các đường dẫn tuyệt đối tương ứng trong dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ghi nhớ đệm Tài nguyên Thông minh`}),` — lưu cache nội dung của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` trong bộ nhớ của đối tượng để tránh việc đọc đĩa lặp lại không cần thiết.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` được khởi tạo bằng một mảng chứa các phân đoạn đường dẫn trỏ đến thư mục của mô-đun đích.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string[]`}),` — Các phân đoạn đường dẫn thư mục mô-đun (ví dụ: `,(0,c.jsx)(t.code,{children:`['packages', 'scripts']`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiPromptItem } from '@dxtmisha/scripts'

const item = new LibraryAiPromptItem(['packages', 'scripts'])
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thực-thi`,children:`Thực thi`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Phương thức điều phối cốt lõi: kiểm tra trạng thái của từng loại tài nguyên (mô tả, thông tin, kiểu dữ liệu, ảnh chụp màn hình), tổng hợp tất cả các tệp hiện có và định dạng chúng thành một khối markdown thống nhất cho mô-đun.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const promptBlock = item.make()
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`phương-thức-kiểm-tra-trạng-thái`,children:`Phương thức Kiểm tra Trạng thái`}),`
`,(0,c.jsxs)(t.p,{children:[`Tất cả các phương thức kiểm tra trạng thái đều trả về kiểu dữ liệu `,(0,c.jsx)(t.code,{children:`boolean`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isPrompt()`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tồn tại `,(0,c.jsx)(t.em,{children:`bất kỳ`}),` tài nguyên nào của mô-đun (như mô tả, thông tin, kiểu dữ liệu hoặc ảnh chụp màn hình).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDescription()`}),` — Xác minh xem tệp `,(0,c.jsx)(t.code,{children:`description.txt`}),` có tồn tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isInfo()`}),` — Xác minh xem tệp `,(0,c.jsx)(t.code,{children:`info.txt`}),` có tồn tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTypes()`}),` — Xác minh xem tệp `,(0,c.jsx)(t.code,{children:`ai-types.txt`}),` có tồn tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isScreenshot()`}),` — Kiểm tra sự tồn tại của thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDeveloper()`}),` — Kiểm tra sự tồn tại của tệp `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMcp()`}),` — Kiểm tra sự tồn tại của tài nguyên máy chủ MCP.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`phương-thức-trợ-giúp-công-khai--bảo-vệ-protected`,children:`Phương thức Trợ giúp Công khai & Bảo vệ (Protected)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getProjectName(): string`}),` — Đọc tên dự án từ tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDir(): string[]`}),` — Trả về mảng phân đoạn đường dẫn thư mục của mô-đun.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMcp(): Record<string, any>[] | undefined`}),` — Đọc và trả về cấu hình tài nguyên máy chủ MCP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(dirFile: string): string[]`}),` — Trả về mảng phân đoạn đường dẫn đầy đủ cho tệp được chỉ định trong thư mục mô-đun.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathString(): string`}),` — Trả về chuỗi đường dẫn mô-đun được liên kết bằng dấu gạch chéo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPackageJson(): Record<string, any>`}),` — Đọc và lưu trữ cache nội dung tệp `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readFile(dirFile: string): string`}),` — Đọc nội dung tệp được chỉ định, cập nhật các tham chiếu đường dẫn tương thích với cấu trúc tuyệt đối của dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string | undefined`}),` — Định dạng phần mô tả mô-đun nếu tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInfo(): string | undefined`}),` — Định dạng phần tổng quan cốt lõi mô-đun nếu tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypes(): string | undefined`}),` — Định dạng các liên kết định nghĩa kiểu dữ liệu của mô-đun nếu tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getScreenshot(): string | undefined`}),` — Định dạng các liên kết tài nguyên hình ảnh và danh sách ảnh chụp màn hình nếu tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getScreenshotList(): string[] | undefined`}),` — Trả về danh sách tên tệp hình ảnh trong thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};