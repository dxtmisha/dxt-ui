import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiErrorItem - Đối tượng lỗi`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apierroritem`,children:`Lớp ApiErrorItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` là một `,(0,c.jsx)(n.strong,{children:`vỏ bọc dữ liệu cho các phản hồi lỗi API`}),`. Nó đóng gói ngữ cảnh yêu cầu (phương thức, phản hồi) và các tiêu chí lỗi đã xác định từ bộ lưu trữ, cung cấp một giao diện thống nhất để trích xuất chi tiết lỗi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đóng gói dữ liệu`}),` — lưu trữ ngữ cảnh đầy đủ của một lỗi API, bao gồm cả đối tượng `,(0,c.jsx)(n.code,{children:`Response`}),` thô từ Fetch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất thống nhất`}),` — cung cấp khả năng truy cập nhất quán vào mã lỗi và thông báo bất kể chúng đến từ thân phản hồi hay các tiêu chí lưu trữ được xác định trước.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thông báo động`}),` — giải quyết các thông báo lỗi bằng cách sử dụng chuỗi tĩnh hoặc các hàm tạo thông báo động dựa trên phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-phương-thức-truy-cập-accessors`,children:`Các phương thức truy cập (Accessors)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMethod(): ApiMethodItem`}),` — Trả về phương thức HTTP được sử dụng cho yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): Response`}),` — Trả về đối tượng phản hồi Fetch thô.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): ApiErrorStorageItem`}),` — Trả về tiêu chí lỗi đã xác định từ bộ lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number`}),` — Trả về mã trạng thái HTTP.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`trích-xuất-dữ-liệu`,children:`Trích xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string | undefined`}),` — Lấy mã lỗi từ tiêu chí lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string | undefined`}),` — Giải quyết thông báo lỗi (kiểm tra tiêu chí lưu trữ hoặc quay lại mặc định của phản hồi).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiến-trúc`,children:`Kiến trúc`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiErrorItem`}),` thường được tạo bởi factory `,(0,c.jsx)(n.code,{children:`ApiError.getItem()`}),`. Nó phục vụ như là sản phẩm cuối cùng của giai đoạn phân tích lỗi, sẵn sàng để được sử dụng bởi các thành phần UI hoặc dịch vụ ghi log.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};