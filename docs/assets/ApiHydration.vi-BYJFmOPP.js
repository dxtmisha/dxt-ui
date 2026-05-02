import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiHydration - Giảm tải dữ liệu API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apihydration`,children:`Lớp ApiHydration`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp để thu thập dữ liệu API cho việc "hydrat hóa" (hydration) phía máy khách trong quá trình SSR (Server-Side Rendering). Nó cho phép máy chủ ghi lại các phản hồi API trong lần render đầu tiên và chuyển chúng đến máy khách, ngăn chặn các yêu cầu mạng dư thừa khi ứng dụng khởi tạo trong trình duyệt.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiHydration`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để quản lý dữ liệu SSR. Trong hầu hết các trường hợp, bạn nên tương tác với việc hydrat hóa thông qua đối tượng `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục bằng các phương thức như `,(0,c.jsx)(n.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa SSR`}),` — giảm số lượng yêu cầu sau khi tải trang bằng cách sử dụng lại dữ liệu từ phía máy chủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập dữ liệu`}),` — tự động thu thập các phản hồi API thành công được đánh dấu để sử dụng toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhúng HTML`}),` — tạo một thẻ `,(0,c.jsx)(n.code,{children:`<script>`}),` an toàn với dữ liệu đã được JSON-serial hóa để nhúng vào tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa máy khách`}),` — cho phép `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` tự động tải dữ liệu đã hydrat hóa ở phía máy khách.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`toclient`,children:(0,c.jsx)(n.code,{children:`toClient`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lưu phản hồi API để hydrat hóa phía máy khách. Phương thức này chỉ thực thi trên máy chủ và chỉ dành cho các yêu cầu đã đặt `,(0,c.jsx)(n.code,{children:`global`}),` là true.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — Cấu hình yêu cầu API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: T`}),` — Dữ liệu phản hồi sẽ được chuyển đến máy khách.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`tostring`,children:(0,c.jsx)(n.code,{children:`toString`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về chuỗi đại diện cho dữ liệu hydrat hóa đã thu thập, được bọc trong một thẻ `,(0,c.jsx)(n.code,{children:`<script>`}),` an toàn với ID duy nhất.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Thẻ script HTML đã được định dạng.`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initResponse(response: ApiResponse): void`}),` — Khởi tạo thực thể `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` với dữ liệu hydrat hóa nếu đang chạy trong môi trường DOM.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`apihydrationlist`,children:(0,c.jsx)(n.code,{children:`ApiHydrationList`})}),`
`,(0,c.jsx)(n.p,{children:`Danh sách các phản hồi API đã thu thập để hydrat hóa.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn endpoint API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem`}),` — Phương thức HTTP đã sử dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: any`}),` — Dữ liệu yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response: any`}),` — Dữ liệu phản hồi từ máy chủ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hướng-dẫn-cơ-chế-hydrat-hóa`,children:`Hướng dẫn: Cơ chế Hydrat hóa`}),`
`,(0,c.jsx)(n.p,{children:`Các quy tắc và điều kiện sau đây xác định cách hệ thống hydrat hóa thu thập và chuyển dữ liệu giữa máy chủ và trình duyệt:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cờ toàn cục`}),` — chỉ các yêu cầu có thuộc tính `,(0,c.jsx)(n.code,{children:`global`}),` được đặt thành `,(0,c.jsx)(n.code,{children:`true`}),` mới được ghi lại để hydrat hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý tự động`}),` — cờ `,(0,c.jsx)(n.code,{children:`global`}),` được tự động đặt thành `,(0,c.jsx)(n.code,{children:`true`}),` cho tất cả các yêu cầu `,(0,c.jsx)(n.code,{children:`GET`}),`. Các phương thức khác yêu cầu bật thủ công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi phía máy chủ`}),` — việc thu thập dữ liệu chỉ xảy ra ở phía máy chủ (nơi `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),` trả về false).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};