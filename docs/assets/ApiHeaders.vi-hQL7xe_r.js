import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ApiHeaders - Tiêu đề yêu cầu API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apiheaders`,children:`Lớp ApiHeaders`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để quản lý và gộp các tiêu đề (headers) yêu cầu HTTP. Nó xử lý các tiêu đề mặc định cho toàn bộ ứng dụng, tiêu đề tùy chỉnh cho các yêu cầu cụ thể và việc tự động gán `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu đề mặc định`}),` — thiết lập các tiêu đề chung một lần duy nhất, ví dụ như `,(0,c.jsx)(n.code,{children:`Authorization`}),` hoặc `,(0,c.jsx)(n.code,{children:`X-App-Version`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Content-Type Động`}),` — tự động quản lý tiêu đề `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gộp an toàn`}),` — gộp nhiều nguồn tiêu đề khác nhau mà không làm thay đổi các đối tượng gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực đầu vào`}),` — đảm bảo chỉ các đối tượng hợp lệ mới được xử lý dưới dạng tiêu đề.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ApiHeaders()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiHeaders } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const apiHeaders = new ApiHeaders()

// 2. Thiết lập các tiêu đề mặc định
apiHeaders.set({ 'X-App-Platform': 'web' })

// 3. Lấy các tiêu đề cho yêu cầu
const headers = apiHeaders.get({ 'Authorization': 'Bearer token123' })
// Kết quả: { 'X-App-Platform': 'web', 'Authorization': 'Bearer token123', 'Content-Type': 'application/json;charset=UTF-8' }
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined`}),` — Giao thoa tiêu đề mặc định với những tiêu đề tùy chỉnh được truyền vào và tiêm `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(headers: Record<string, string>): this`}),` — Thiết lập hoặc cập nhật mảng đối tượng tiêu đề mặc định.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};