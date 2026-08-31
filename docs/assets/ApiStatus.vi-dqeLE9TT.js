import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ApiStatus - Quản lý trạng thái API`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-apistatus`,children:`Lớp ApiStatus`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp chuyên dụng để theo dõi và quản lý trạng thái của một yêu cầu API. Nó lưu trữ an toàn trạng thái HTTP hiện tại, thông điệp lỗi và nội dung phản hồi đã được phân tích cú pháp, cho phép các ứng dụng phản ứng với những thay đổi trong thời gian thực bằng cách sử dụng các trừu tượng trạng thái.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiStatus`}),` là một `,(0,c.jsx)(t.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để theo dõi trạng thái yêu cầu. Trong hầu hết các trường hợp, bạn nên tương tác với trạng thái yêu cầu thông qua thuộc tính `,(0,c.jsx)(t.code,{children:`status`}),` của kết quả `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` hoặc luồng thực thi `,(0,c.jsx)(t.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái tập trung`}),` — lưu giữ mọi thứ liên quan đến kết quả của một cuộc gọi API: trạng thái HTTP, văn bản tùy chỉnh, dữ liệu phản hồi thô và các thông điệp được tạo ra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — các phương thức thiết lập (setters) trả về `,(0,c.jsx)(t.code,{children:`this`}),`, cho phép xâu chuỗi nhiều thay đổi trạng thái một cách thanh lịch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động trích xuất thông điệp`}),` — cố gắng phân tích và lấy các trường `,(0,c.jsx)(t.code,{children:`message`}),` có thể đọc được trực tiếp từ các phản hồi có cấu trúc của máy chủ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getResponse<T>(): T | undefined`}),` — Trả về dữ liệu thô từ yêu cầu thành công cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMessage(): string`}),` — Trả về thông điệp máy chủ được lấy từ phản hồi thành công hoặc thông điệp được thiết lập thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): ApiStatusItem | undefined`}),` — Trả về đối tượng dữ liệu trạng thái đầy đủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatus(): number | undefined`}),` — Trả về mã trạng thái HTTP (ví dụ: `,(0,c.jsx)(t.code,{children:`200`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusText(): string | undefined`}),` — Trả về văn bản trạng thái (ví dụ: `,(0,c.jsx)(t.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Trả về loại xác thực trạng thái cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getError(): string | undefined`}),` — Trả về thông điệp lỗi đã ghi lại.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(data: ApiStatusItem): this`}),` — Thiết lập nhiều trường trạng thái cùng một lúc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Thiết lập mã và văn bản trạng thái HTTP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setError(error?: string): this`}),` — Ghi lại một chuỗi thông điệp lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastResponse(response?: any): this`}),` — Ghi lại phản hồi máy chủ và trích xuất siêu dữ liệu liên quan.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Thiết lập loại trạng thái API tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLastMessage(message?: string): this`}),` — Ghi lại một thông điệp một cách rõ ràng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`apistatusitem`,children:(0,c.jsx)(t.code,{children:`ApiStatusItem`})}),`
`,(0,c.jsx)(t.p,{children:`Một đại diện đầy đủ của trạng thái yêu cầu.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: number`}),` — Mã trạng thái HTTP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`statusText?: string`}),` — Văn bản trạng thái HTTP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`error?: string`}),` — Thông điệp lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastResponse?: any`}),` — Dữ liệu phản hồi thô.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastStatus?: ApiStatusType`}),` — Danh mục xác thực.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lastMessage?: string`}),` — Thông điệp hiển thị đã trích xuất.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};