import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenterHandler - Quản lý trình xử lý`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-errorcenterhandler`,children:`Lớp ErrorCenterHandler`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenterHandler`}),` là trình quản lý để quản lý các hàm callback (trình xử lý). Nó cho phép bạn liên kết logic với các nhóm lỗi cụ thể và thực thi nó khi có sự kiện tương ứng xảy ra.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký trình xử lý`}),` — thêm thuận tiện các hàm callback vào các nhóm cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trình xử lý toàn cục`}),` — hỗ trợ nhóm `,(0,c.jsx)(n.code,{children:`undefined`}),`, nhóm này bắt bất kỳ lỗi nào không có trình xử lý cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi tuần tự`}),` — kích hoạt tất cả các hàm đã đăng ký theo thứ tự chúng được thêm vào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi log tích hợp`}),` — tự động xuất chi tiết lỗi ra console.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để tạo một thực thể, sử dụng constructor `,(0,c.jsx)(n.code,{children:`ErrorCenterHandler(handlers)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`handlers?: ErrorCenterHandlerList`}),` — danh sách trình xử lý ban đầu.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlers = new ErrorCenterHandler([
  {
    group: 'api',
    handlers: [(cause) => console.log('Lỗi API:', cause.code)]
  }
]);
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Kích hoạt chuỗi trình xử lý. Luôn xuất lỗi ra console qua `,(0,c.jsx)(n.code,{children:`console.error`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xác-minh`,children:`Xác minh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Kiểm tra xem có trình xử lý cho một nhóm không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Trả về danh sách các hàm cho một nhóm.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Thêm một hàm vào một nhóm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký hàng loạt các trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tên nhóm (`,(0,c.jsx)(n.code,{children:`string`}),`) hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` để chặn toàn cục.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm callback: `,(0,c.jsx)(n.code,{children:`(cause: ErrorCenterCauseItem) => void`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcenterhandleritem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerItem`})}),`
`,(0,c.jsx)(n.p,{children:`Liên kết giữa một nhóm và một mảng các hàm của nó.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — nhóm mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`handlers: ErrorCenterHandlerCallback[]`}),` — danh sách các hàm.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`trình-quản-lý-cô-lập-cho-một-mô-đun`,children:`Trình quản lý cô lập cho một mô-đun`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const uploadHandlers = new ErrorCenterHandler();

uploadHandlers.add('upload', (cause) => {
  if (cause.code === 'retry') {
    restartUpload();
  }
});

uploadHandlers.on({ group: 'upload', code: 'retry' });
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};