import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/CookieBlock - Quản lý Cấp Quyền Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-cookieblock`,children:`Lớp CookieBlock`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp tiện ích static dùng để định nghĩa quy luật truy cập ("kill switch" hoặc cầu dao tổng) nhắm thẳng vào quá trình hệ thống có cho phép chỉnh/sửa nội dung DOM cookie trên website hay không. Bằng cách thiết lập chuẩn khoá chặn (boolean logic), các node class lớn hơn (ví dụ Class gốc `,(0,c.jsx)(t.code,{children:`Cookie`}),`) sẽ liên tục móc và lắng nghe lệnh này trước khi tiến hành bước in/thực thi ghi data vào `,(0,c.jsx)(t.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Bao gồm tích hợp chặt chẽ với `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` để cách ly trạng thái giữa các yêu cầu trong SSR.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chấp Nhận Quy Trình Định Mức Chung (Global Truth)`}),` — cổng tuỳ chỉnh/kiểm soát chung đối với quá trình lưu tạo/in cookie dọc toàn bộ mã lệnh ứng dụng`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn Cấu Hình Quyền Riêng Tư Đặc thù (Privacy Compliance)`}),` — một mẫu logic tuyệt vời dùng lập trình những phần banner xác nhận "Cookie Consent" (Xin quyền nạp Tracking). Người code chỉ việc nối logic nút bật class thành giá trị `,(0,c.jsx)(t.code,{children:`true`}),` đến chừng nào user chốt chấp nhận quy tắc lấy thông tin ở nút 'Đồng Ý'`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR-совместимость`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` để duy trì trạng thái chặn đáng tin cậy trong bối cảnh yêu cầu cách ly`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức-tĩnh`,children:`Phương thức tĩnh`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Bật hoặc tắt khả năng ghi cookie. Khi đặt thành `,(0,c.jsx)(t.code,{children:`true`}),`, tất cả hoạt động ghi sẽ chỉ lưu dữ liệu trong bộ nhớ, không chạm đến `,(0,c.jsx)(t.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` để chặn ghi cookie, `,(0,c.jsx)(t.code,{children:`false`}),` để cho phép`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): boolean`}),` — Trả về trạng thái chặn hiện tại. `,(0,c.jsx)(t.code,{children:`true`}),` nếu ghi cookie bị chặn`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`sử-dụng-cơ-bản`,children:`Sử dụng cơ bản`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Lệnh chặn khẩn cấp toàn bộ dữ liệu ghi DOM cookie
CookieBlock.set(true)

if (CookieBlock.get()) {
  console.log('Quá trình nạp DOM/ghi chép Cookie đang khoá do cài đặt phía user chưa cho quyền truy cập.')
}

// Dỡ bỏ cảnh bảo / Cấp quyền DOM in cookie (Cấu hình chuẩn của object mới)
CookieBlock.set(false)
`})}),`
`,(0,c.jsx)(t.h3,{id:`triển-khai-banner-đồng-ý`,children:`Triển khai banner đồng ý`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock, Cookie } from '@dxtmisha/functional'

// Chặn cookie khi tải ứng dụng
CookieBlock.set(true)

// Sau khi người dùng đồng ý
function onCookieConsentAccepted() {
  CookieBlock.set(false)
  
  // Bây giờ có thể đặt cookie
  const theme = new Cookie('theme')
  theme.set('dark')
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`phương-thức-logic-khi-mắc-nối-với-lớp-cookie`,children:[`Phương thức logic khi mắc nối với lớp `,(0,c.jsx)(t.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Nhân/Bộ cấu trúc tổng của class `,(0,c.jsx)(t.code,{children:`Cookie`}),` được code giám sát nghiêm ngặt mọi lệnh do luồng chặn phát đi. Lúc biến nhị phân `,(0,c.jsx)(t.code,{children:`CookieBlock.get()`}),` bị chốt ở mode `,(0,c.jsx)(t.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ở nội bộ luồng mã, quá trình chạy vẫn ngầm hiểu là hệ thống gọi app bằng node lưu biến `,(0,c.jsx)(t.code,{children:`cookieInstance.set('value')`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Tiến trình instance trực thuộc `,(0,c.jsx)(t.code,{children:`Cookie`}),` kích hoạt việc in giá trị cập nhật/ghi đè thay thế nằm vào hàng đợi của `,(0,c.jsx)(t.em,{children:`cơ sở memory ảo`}),` (internal memory)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tuyệt nhiên tại chính node instance của `,(0,c.jsx)(t.code,{children:`Cookie`}),` `,(0,c.jsx)(t.strong,{children:`hệ thống tự phát sinh quyền bác bỏ im lặng (silently refuse)`}),` đối với hàm ghi biến tĩnh `,(0,c.jsx)(t.code,{children:`document.cookie = ...`}),` tại nhánh DOM ảo lẫn DOM thật`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Luồng giao thức 3 buớc phía trên đáp ứng hoàn hảo hai tiêu chí tối thượng trong quy chuẩn kỹ thuật: Giúp DOM website không bị bóp băng thông khi chạy lỗi code lấy lệnh từ hệ memory chưa cấp dữ liệu (ngăn văng bug), cũng như giữ thiết lập tôn trọng chính sách truy vấn riêng tư bảo mật đĩa cứng phía Browser theo chuẩn Âu/Mỹ.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};