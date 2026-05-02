import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiStatus - Quản lý trạng thái API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apistatus`,children:`Lớp ApiStatus`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp chuyên dụng để theo dõi và quản lý trạng thái của một yêu cầu API. Nó lưu trữ an toàn trạng thái HTTP hiện tại, thông điệp lỗi và nội dung phản hồi đã được phân tích cú pháp, cho phép các ứng dụng phản ứng với những thay đổi trong thời gian thực bằng cách sử dụng các trừu tượng trạng thái.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiStatus`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để theo dõi trạng thái yêu cầu. Trong hầu hết các trường hợp, bạn nên tương tác với trạng thái yêu cầu thông qua thuộc tính `,(0,c.jsx)(n.code,{children:`status`}),` của kết quả `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` hoặc luồng thực thi `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái tập trung`}),` — lưu giữ mọi thứ liên quan đến kết quả của một cuộc gọi API: trạng thái HTTP, văn bản tùy chỉnh, dữ liệu phản hồi thô và các thông điệp được tạo ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — các phương thức thiết lập (setters) trả về `,(0,c.jsx)(n.code,{children:`this`}),`, cho phép xâu chuỗi nhiều thay đổi trạng thái một cách thanh lịch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động trích xuất thông điệp`}),` — cố gắng phân tích và lấy các trường `,(0,c.jsx)(n.code,{children:`message`}),` có thể đọc được trực tiếp từ các phản hồi có cấu trúc của máy chủ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse<T>(): T | undefined`}),` — Trả về dữ liệu thô từ yêu cầu thành công cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string`}),` — Trả về thông điệp máy chủ được lấy từ phản hồi thành công hoặc thông điệp được thiết lập thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiStatusItem | undefined`}),` — Trả về đối tượng dữ liệu trạng thái đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number | undefined`}),` — Trả về mã trạng thái HTTP (ví dụ: `,(0,c.jsx)(n.code,{children:`200`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusText(): string | undefined`}),` — Trả về văn bản trạng thái (ví dụ: `,(0,c.jsx)(n.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Trả về loại xác thực trạng thái cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): string | undefined`}),` — Trả về thông điệp lỗi đã ghi lại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(data: ApiStatusItem): this`}),` — Thiết lập nhiều trường trạng thái cùng một lúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Thiết lập mã và văn bản trạng thái HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setError(error?: string): this`}),` — Ghi lại một chuỗi thông điệp lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastResponse(response?: any): this`}),` — Ghi lại phản hồi máy chủ và trích xuất siêu dữ liệu liên quan.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Thiết lập loại trạng thái API tùy chỉnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastMessage(message?: string): this`}),` — Ghi lại một thông điệp một cách rõ ràng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`apistatusitem`,children:(0,c.jsx)(n.code,{children:`ApiStatusItem`})}),`
`,(0,c.jsx)(n.p,{children:`Một đại diện đầy đủ của trạng thái yêu cầu.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — Mã trạng thái HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusText?: string`}),` — Văn bản trạng thái HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`error?: string`}),` — Thông điệp lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastResponse?: any`}),` — Dữ liệu phản hồi thô.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastStatus?: ApiStatusType`}),` — Danh mục xác thực.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastMessage?: string`}),` — Thông điệp hiển thị đã trích xuất.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};