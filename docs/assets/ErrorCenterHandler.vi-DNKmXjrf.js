import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenterHandler - Quản lý trình xử lý`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterhandler`,children:`ErrorCenterHandler`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích cốt lõi để quản lý và kích hoạt các trình xử lý lỗi dựa trên các nhóm đã được định nghĩa. Nó cho phép các chiến lược phản hồi lỗi linh hoạt, chẳng hạn như hiển thị thông báo toàn cục cho các lỗi API trong khi thực hiện ghi nhật ký âm thầm cho các tác vụ nền.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký trình xử lý`}),` — Dễ dàng thêm nhiều hàm gọi lại cho các nhóm lỗi cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc theo nhóm`}),` — Nhắm mục tiêu các danh mục lỗi cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`api`}),`, `,(0,c.jsx)(n.code,{children:`auth`}),`, `,(0,c.jsx)(n.code,{children:`validation`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dự phòng toàn cục`}),` — Hỗ trợ trình xử lý cho nhóm `,(0,c.jsx)(n.code,{children:`undefined`}),` để bắt bất kỳ lỗi nào không có trình xử lý cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi tuần tự`}),` — Kích hoạt tất cả các hàm gọi lại theo thứ tự chúng được thêm vào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp ghi nhật ký`}),` — Tự động xuất chi tiết lỗi ra console trình duyệt.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-kiểm-tra`,children:`Các phương thức kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Kiểm tra xem có trình xử lý nào được đăng ký cho một nhóm không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Truy xuất ánh xạ trình xử lý cho một nhóm.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Thêm một hàm gọi lại cho một nhóm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký một loạt các trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-hành-động`,children:`Các phương thức hành động`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kích hoạt tất cả các trình xử lý đã đăng ký cho nhóm của nguyên nhân lỗi được cung cấp. Nếu không tìm thấy trình xử lý cụ thể nào, nó sẽ quay về các trình xử lý được đăng ký cho nhóm `,(0,c.jsx)(n.code,{children:`undefined`}),` (nếu có). Luôn xuất chi tiết lỗi ra bảng điều khiển nội bộ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Chi tiết lỗi để chuyển cho các trình xử lý.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm cho các callback xử lý lỗi.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — Nhận đối tượng nguyên nhân lỗi đã được hợp nhất.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlerManager = new ErrorCenterHandler()

// 1. Đăng ký trình xử lý cho nhóm cụ thể
handlerManager.add('api', (cause) => {
  console.log('[API Handler]', cause.message)
})

// 2. Đăng ký trình xử lý dự phòng toàn cục
handlerManager.add(undefined, (cause) => {
  console.error('[Global Fallback]', cause.code)
})

// 3. Kích hoạt một lỗi
handlerManager.on({
  group: 'api',
  code: '500',
  message: 'Lỗi máy chủ nội bộ'
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};