import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryAiPrompt - AI Prompt Consolidator`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryaiprompt`,children:`Lớp LibraryAiPrompt`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),` là một tiện ích dành cho nhà phát triển được thiết kế để quét các thư mục một cách đệ quy, thu thập các mô tả markdown, thông số kỹ thuật, các tệp TypeScript và tham chiếu ảnh chụp màn hình, sau đó đóng gói chúng thành một tệp prompt ngữ cảnh duy nhất dành cho các Mô hình Ngôn ngữ Lớn (LLMs).`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp Prompt Tự động`}),` — hợp nhất các hướng dẫn lập trình toàn cục, tiêu chuẩn triển khai thành phần Vue SFC và hướng dẫn cụ thể của từng mô-đun.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trình quét Thư mục Đệ quy`}),` — tự động quét qua các không gian làm việc và thư mục con của thành phần để trích xuất các cấu hình prompt đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng Bố cục theo Thứ tự`}),` — tổ chức các phần với tiêu đề phân cấp rõ ràng, phân chia mã nguồn, kiểu dữ liệu và mô tả kiến trúc một cách logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu chuẩn Quy tắc Ưu tiên cao`}),` — phân tích tệp hướng dẫn chuyên dụng để đưa các quy tắc ghi đè lên vị trí đầu tiên với mức độ ưu tiên cao nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp Hệ thống Tệp`}),` — sử dụng lớp `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` để tải tài nguyên và xuất tệp prompt đã hoàn thành đến thư mục chỉ định.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),` có thể được khởi tạo với một mảng tùy chọn chứa các đường dẫn thư mục bổ sung cần quét.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirs: string[]`}),` — (Tùy chọn) Danh sách đường dẫn thư mục bổ sung cần quét.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiPrompt } from '@dxtmisha/scripts'

const consolidator = new LibraryAiPrompt(['custom/path/to/modules'])
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thực-thi`,children:`Thực thi`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Phương thức điều phối cốt lõi giúp kích hoạt quét thư mục, định dạng quy tắc tiêu đề, đóng gói các prompt mô-đun tìm thấy, nối thêm các hướng dẫn ưu tiên cao và ghi kết quả hợp nhất ra tệp.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`consolidator.make()
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`api-quét-được-bảo-vệ-protected`,children:`API quét được Bảo vệ (Protected)`}),`
`,(0,c.jsx)(t.h4,{id:`getlist`,children:(0,c.jsx)(t.code,{children:`getList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Quét đệ quy qua các thư mục cho đến giới hạn độ sâu chỉ định, bỏ qua các tệp ẩn và trả về danh sách các đối tượng `,(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),` thu thập được.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirs: string[]`}),` — (Mặc định: biến `,(0,c.jsx)(t.code,{children:`dirs`}),` nội bộ) Các thư mục đích cần quét.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string[]`}),` — Các phân đoạn đường dẫn tích lũy hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — (Mặc định: `,(0,c.jsx)(t.code,{children:`4`}),`) Giới hạn độ sâu quét đệ quy để tránh vòng lặp vô hạn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`LibraryAiPromptItem[]`})]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`phương-thức-trợ-giúp-được-bảo-vệ-protected`,children:`Phương thức Trợ giúp được Bảo vệ (Protected)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFileOnDirs(dirs: string[]): boolean`}),` — Phương thức trợ giúp kiểm tra xem có đường dẫn nào trong danh sách là tệp trực tiếp hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInstruction(): string | undefined`}),` — Định dạng và trả về các hướng dẫn ưu tiên cao nếu tệp tương ứng tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVuePrompt(): string`}),` — Đọc và định dạng hướng dẫn tiêu chuẩn tạo Vue SFC.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getGlobalPrompt(): string`}),` — Đọc và định dạng hướng dẫn mã nguồn sạch toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(prompts: string[]): this`}),` — Lưu các chuỗi prompt đã tổng hợp vào tệp đích.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};