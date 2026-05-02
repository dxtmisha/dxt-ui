import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiHeaders - Tiêu đề yêu cầu API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apiheaders`,children:`Lớp ApiHeaders`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để quản lý và gộp các tiêu đề (headers) yêu cầu HTTP. Nó xử lý các tiêu đề mặc định cho toàn bộ ứng dụng, tiêu đề tùy chỉnh cho các yêu cầu cụ thể và việc tự động gán `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiHeaders`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để quản lý các tiêu đề HTTP. Trong hầu hết các trường hợp, bạn nên định nghĩa các tiêu đề toàn cục thông qua tham số `,(0,c.jsx)(n.code,{children:`headers`}),` trong cấu hình `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu đề mặc định`}),` — Thiết lập các tiêu đề chung một lần duy nhất, ví dụ như `,(0,c.jsx)(n.code,{children:`Authorization`}),` hoặc `,(0,c.jsx)(n.code,{children:`X-App-Version`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Content-Type động`}),` — Tự động quản lý tiêu đề `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gộp an toàn`}),` — Gộp nhiều nguồn tiêu đề khác nhau mà không làm thay đổi các đối tượng gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực`}),` — Đảm bảo chỉ các đối tượng hợp lệ mới được xử lý dưới dạng tiêu đề.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Giao thoa tiêu đề mặc định với những tiêu đề tùy chỉnh và tiêm `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. Nếu tham số `,(0,c.jsx)(n.code,{children:`value`}),` là `,(0,c.jsx)(n.code,{children:`null`}),`, các tiêu đề sẽ bị tắt.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Record<string, string> | null`}),` — Các tiêu đề tùy chỉnh để gộp với mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | undefined | null`}),` — Giá trị `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Record<string, string> | undefined`}),` — Đối tượng tiêu đề đã được gộp.`]}),`
`,(0,c.jsx)(n.h4,{id:`getbyrequest`,children:(0,c.jsx)(n.code,{children:`getByRequest`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phiên bản chuyên biệt của `,(0,c.jsx)(n.code,{children:`get`}),` để điều chỉnh tiêu đề dựa trên loại yêu cầu. Cụ thể, nó đảm bảo `,(0,c.jsx)(n.code,{children:`Content-Type`}),` không được thiết lập thủ công cho `,(0,c.jsx)(n.code,{children:`FormData`}),` để cho phép tạo boundary chính xác.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch['request']`}),` — Dữ liệu yêu cầu (Đối tượng, FormData hoặc Chuỗi).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Record<string, string> | null`}),` — Các tiêu đề tùy chỉnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — `,(0,c.jsx)(n.code,{children:`Content-Type`}),` mong muốn.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Record<string, string> | undefined`}),` — Đối tượng tiêu đề đã được xử lý.`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(headers: Record<string, string>): this`}),` — Thiết lập hoặc cập nhật đối tượng tiêu đề mặc định.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`apiheadersvalue`,children:(0,c.jsx)(n.code,{children:`ApiHeadersValue`})}),`
`,(0,c.jsx)(n.p,{children:`Một đối tượng thuần túy đại diện cho các tiêu đề HTTP.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: string`}),` — Các cặp khóa-giá trị trong đó khóa là tên tiêu đề và giá trị là nội dung tiêu đề.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};