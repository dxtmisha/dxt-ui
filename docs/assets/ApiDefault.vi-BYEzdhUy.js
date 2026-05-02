import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiDefault - Dữ liệu API mặc định`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apidefault`,children:`Lớp ApiDefault`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để quản lý dữ liệu mặc định cho các yêu cầu API. Nó cho phép thiết lập các tham số cơ bản cần được bao gồm trong mọi yêu cầu, hỗ trợ cả đối tượng thông thường và `,(0,c.jsx)(n.code,{children:`FormData`}),`. Điều này hữu ích để định nghĩa tập trung các trường chung như token, ID ứng dụng hoặc cài đặt ngôn ngữ.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDefault`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để quản lý các giá trị mặc định của yêu cầu. Trong hầu hết các trường hợp, bạn nên định nghĩa chúng thông qua tham số `,(0,c.jsx)(n.code,{children:`requestDefault`}),` trong cấu hình `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mặc định hóa tập trung`}),` — Định nghĩa các tham số chung một lần cho tất cả các cuộc gọi API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ nhiều định dạng`}),` — Hoạt động mượt mà với cả đối tượng JavaScript thuần túy và `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gộp dữ liệu thông minh`}),` — Gộp các giá trị mặc định với dữ liệu cụ thể của yêu cầu, ưu tiên dữ liệu yêu cầu thực tế nếu có sự trùng lặp khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Hỗ trợ giao diện linh hoạt (chaining) để thiết lập các tham số.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Gộp dữ liệu mặc định đã lưu vào một đối tượng yêu cầu hoặc thực thể `,(0,c.jsx)(n.code,{children:`FormData`}),` được cung cấp. Nếu đầu vào là một đối tượng thuần túy, nó sẽ trả về một đối tượng mới đã được gộp. Nếu đầu vào là `,(0,c.jsx)(n.code,{children:`FormData`}),`, nó sẽ thêm trực tiếp các khóa còn thiếu vào thực thể đó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch['request']`}),` — Dữ liệu yêu cầu gốc (Đối tượng, FormData hoặc Chuỗi).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ApiFetch['request']`}),` — Dữ liệu yêu cầu đã được chuyển đổi.`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem dữ liệu mặc định đã được thiết lập chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue | undefined`}),` — Trả về đối tượng dữ liệu mặc định hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue): this`}),` — Thiết lập dữ liệu mặc định cho tất cả các yêu cầu trong tương lai.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`apidefaultvalue`,children:(0,c.jsx)(n.code,{children:`ApiDefaultValue`})}),`
`,(0,c.jsx)(n.p,{children:`Một đối tượng thuần túy đại diện cho các tham số mặc định.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: any`}),` — Các cặp khóa-giá trị được sử dụng làm mặc định.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};