import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenterInstance - Thực thể lỗi`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-errorcenterinstance`,children:`Lớp ErrorCenterInstance`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),` là động cơ chính của hệ thống lỗi. Nó kết hợp một sổ đăng ký nguyên nhân và một trình quản lý xử lý. Bạn có thể tạo các thực thể độc lập của lớp này cho các phần khác nhau của ứng dụng để cô lập logic xử lý lỗi của chúng.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kho lưu trữ cô lập`}),` — duy trì một danh sách cục bộ các nguyên nhân lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất thông minh`}),` — tự động bổ sung dữ liệu lỗi dựa trên hệ thống ưu tiên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ủy quyền xử lý`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` để kích hoạt các hàm callback.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`API nối chuỗi`}),` — hỗ trợ nối chuỗi cuộc gọi để cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để tạo một thực thể, sử dụng constructor `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance(causes, handler)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`causes?: ErrorCenterCauseList`}),` — danh sách nguyên nhân lỗi ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handler?: ErrorCenterHandler`}),` — thực thể trình xử lý (nếu không được chỉ định, một thực thể mới sẽ được tạo).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance([
  { group: 'api', code: '404', label: 'Không tìm thấy' }
])
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Bắt đầu quá trình xử lý. Hợp nhất dữ liệu từ sổ đăng ký với dữ liệu đầu vào và chuyển nó cho trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xác-minh`,children:`Xác minh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(code: string, group?: string): boolean`}),` — Tìm kiếm trong sổ đăng ký cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Truy xuất dữ liệu từ sổ đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Thêm một lỗi vào sổ đăng ký cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Thêm lỗi hàng loạt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Đăng ký một phản ứng cho nhóm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký hàng loạt các phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Thiết lập cờ hoặc hàm lọc xuất console.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Đối tượng mô tả một lỗi cụ thể.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — nhóm lỗi (ví dụ: 'api').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — mã lỗi duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`priority?: number`}),` — mức độ ưu tiên (mặc định `,(0,c.jsx)(t.code,{children:`500`}),`). Được sử dụng trong quá trình hợp nhất dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label?: string`}),` — tiêu đề lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message?: string`}),` — mô tả lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`details?: any`}),` — dữ liệu bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — hàm xử lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`khởi-tạo-với-một-từ-điển`,children:`Khởi tạo với một từ điển`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const myEC = new ErrorCenterInstance([
  { group: 'db', code: 'connection_lost', label: 'DB không khả dụng' }
]);

myEC.addHandler('db', (cause) => alert(cause.label));
myEC.on({ group: 'db', code: 'connection_lost' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};