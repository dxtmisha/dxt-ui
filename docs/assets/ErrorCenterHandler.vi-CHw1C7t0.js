import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenterHandler - Quản lý trình xử lý`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-errorcenterhandler`,children:`Lớp ErrorCenterHandler`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` là trình quản lý để quản lý các hàm callback (trình xử lý). Nó cho phép bạn liên kết logic với các nhóm lỗi cụ thể và thực thi nó khi có sự kiện tương ứng xảy ra.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký trình xử lý`}),` — thêm thuận tiện các hàm callback vào các nhóm cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trình xử lý toàn cục`}),` — hỗ trợ nhóm `,(0,c.jsx)(t.code,{children:`undefined`}),`, nhóm này bắt bất kỳ lỗi nào không có trình xử lý cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi tuần tự`}),` — kích hoạt tất cả các hàm đã đăng ký theo thứ tự chúng được thêm vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ghi log có thể cấu hình`}),` — xuất chi tiết lỗi ra console với hỗ trợ hàm lọc tùy chỉnh hoặc tắt hoàn toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để tạo một thực thể, sử dụng constructor `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler(handlers, isConsole)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers?: ErrorCenterHandlerList`}),` — danh sách trình xử lý ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isConsole?: ErrorCenterHandlerIsConsole`}),` — cờ hoặc hàm lọc cho console (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlers = new ErrorCenterHandler(
  [
    {
      group: 'api',
      handlers: [(cause) => console.log('Lỗi API:', cause.code)]
    }
  ],
  false // Tắt ghi log ra console
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Kích hoạt chuỗi trình xử lý và ghi log ra console nếu được bật.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xác-minh`,children:`Xác minh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Kiểm tra xem có trình xử lý cho một nhóm không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Trả về danh sách các hàm cho một nhóm.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Thêm một hàm vào một nhóm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký hàng loạt các trình xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Thiết lập cờ hoặc hàm lọc xuất console.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentergroup`,children:(0,c.jsx)(t.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tên nhóm (`,(0,c.jsx)(t.code,{children:`string`}),`) hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` để chặn toàn cục.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm callback: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsole`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsole`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tùy chọn cấu hình ghi log console: `,(0,c.jsx)(t.code,{children:`boolean | ((cause: ErrorCenterCauseItem) => boolean)`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsolecallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsoleCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm callback để kiểm tra xem có ghi log lỗi ra console hay không: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => boolean`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandleritem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerItem`})}),`
`,(0,c.jsx)(t.p,{children:`Liên kết giữa một nhóm và một mảng các hàm của nó.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — nhóm mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers: ErrorCenterHandlerCallback[]`}),` — danh sách các hàm.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`trình-quản-lý-cô-lập-với-bộ-lọc-console`,children:`Trình quản lý cô lập với bộ lọc console`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const uploadHandlers = new ErrorCenterHandler();

// Lọc xuất console: chỉ ghi log lỗi có nhóm 'upload'
uploadHandlers.setIsConsole((cause) => cause.group === 'upload');

uploadHandlers.add('upload', (cause) => {
  if (cause.code === 'retry') {
    restartUpload();
  }
});

uploadHandlers.on({ group: 'upload', code: 'retry' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};