import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiDataReturn - Xử lý dữ liệu phản hồi API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apidatareturn`,children:`Lớp ApiDataReturn`}),`
`,(0,c.jsx)(n.p,{children:`Lớp dùng để xử lý và chuẩn bị dữ liệu nhận được từ yêu cầu API. Nó chuyển đổi dữ liệu phản hồi thô thành định dạng có cấu trúc, trích xuất metadata và ánh xạ nội dung theo cấu hình đã yêu cầu.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDataReturn`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp phụ trợ`}),`, được thiết kế để xử lý và định dạng dữ liệu phản hồi API. Trong hầu hết các trường hợp, khuyến khích tương tác với kết quả thông qua phản hồi được trả về bởi các phương thức của `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` hoặc đối tượng `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích tự động`}),` — phân tích thông minh các phản hồi JSON hoặc trả về văn bản thô dựa trên tiêu đề Content-Type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa dữ liệu`}),` — đảm bảo rằng đối tượng trả về tuân theo một cấu trúc nhất quán, ngay cả khi phản hồi của máy chủ thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất Metadata`}),` — tự động trích xuất các trường chung như `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`code`}),` và `,(0,c.jsx)(n.code,{children:`message`}),` từ gốc của phản hồi và hợp nhất chúng vào đối tượng dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình linh hoạt`}),` — hỗ trợ logic xử lý tùy chỉnh thông qua `,(0,c.jsx)(n.code,{children:`queryReturn`}),` và kiểm soát việc giải nén trường `,(0,c.jsx)(n.code,{children:`data`}),` bằng `,(0,c.jsx)(n.code,{children:`toData`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async init(): Promise<this>`}),` — Khởi tạo lớp bằng cách đọc và phân tích dữ liệu từ đối tượng phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiData<T>`}),` — Trả về dữ liệu đã được xử lý và định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAndStatus(status: ApiStatus): ApiData<T>`}),` — Trả về dữ liệu đã xử lý được chèn thêm `,(0,c.jsx)(n.code,{children:`statusObject`}),` từ đối tượng status được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): ApiData<T> | undefined`}),` — Trả về dữ liệu thô, chưa định dạng như lúc ban đầu được đọc từ phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`logic-nội-bộ-protected`,children:`Logic nội bộ (Protected)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readData<T>(): Promise<ApiData<T>>`}),` — Phương thức cấp thấp đọc thân phản hồi và phân tích nó dưới dạng JSON hoặc văn bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initData(): ApiData<T>`}),` — Định dạng dữ liệu thô theo cấu hình, xử lý việc giải nén các thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initItem(data: Record<string, any>): ApiData<T>`}),` — Hợp nhất các trường metadata từ gốc phản hồi vào đối tượng dữ liệu chính.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};