import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ApiDefault - Dữ liệu API mặc định`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apidefault`,children:`Lớp ApiDefault`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để quản lý dữ liệu mặc định cho các yêu cầu API. Nó cho phép thiết lập các tham số cơ bản cần được bao gồm trong mọi yêu cầu, hỗ trợ cả đối tượng thông thường và `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mặc định hóa tập trung`}),` — định nghĩa các tham số chung (như token hoặc ngôn ngữ) một lần cho tất cả các cuộc gọi API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ nhiều định dạng`}),` — hoạt động mượt mà với cả đối tượng JavaScript thuần túy và `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gộp dữ liệu thông minh`}),` — gộp các giá trị mặc định với dữ liệu cụ thể của yêu cầu, ưu tiên dữ liệu yêu cầu thực tế nếu có sự trùng lặp khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra dễ dàng`}),` — các phương thức đơn giản để kiểm tra xem dữ liệu mặc định đã được thiết lập hay chưa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ApiDefault()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiDefault } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const apiDefault = new ApiDefault()

// 2. Thiết lập dữ liệu mặc định
apiDefault.set({ lang: 'vi', version: 'v1' })

// 3. Ví dụ sử dụng với một đối tượng yêu cầu
const requestData = { user_id: 5 }
const mergedRequest = apiDefault.request(requestData)
// Kết quả: { lang: 'vi', version: 'v1', user_id: 5 }

// 4. Ví dụ sử dụng với FormData
const fd = new FormData()
fd.append('photo', fileBlob)
apiDefault.request(fd)
// Kết quả: fd bây giờ chứa 'lang' và 'version' nếu chúng bị thiếu
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem dữ liệu mặc định đã được thiết lập chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue`}),` — Trả về dữ liệu mặc định hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request(request: ApiFetch['request']): ApiFetch['request']`}),` — Gộp dữ liệu mặc định đã lưu vào một đối tượng yêu cầu hoặc biến biểu mẫu `,(0,c.jsx)(n.code,{children:`FormData`}),` được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue)`}),` — Thiết lập dữ liệu mặc định cho các yêu cầu.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};