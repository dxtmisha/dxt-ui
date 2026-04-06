import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/CookieBlock - Quản lý Cấp Quyền Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cookieblock`,children:`Lớp CookieBlock`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp tiện ích static dùng để định nghĩa quy luật truy cập ("kill switch" hoặc cầu dao tổng) nhắm thẳng vào quá trình hệ thống có cho phép chỉnh/sửa nội dung DOM cookie trên website hay không. Bằng cách thiết lập chuẩn khoá chặn (boolean logic), các node class lớn hơn (ví dụ Class gốc `,(0,c.jsx)(n.code,{children:`Cookie`}),`) sẽ liên tục móc và lắng nghe lệnh này trước khi tiến hành bước in/thực thi ghi data vào `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chấp Nhận Quy Trình Định Mức Chung (Global Truth)`}),` — cổng tuỳ chỉnh/kiểm soát chung đối với quá trình lưu tạo/in cookie dọc toàn bộ mã lệnh ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn Cấu Hình Quyền Riêng Tư Đặc thù (Privacy Compliance)`}),` — một mẫu logic tuyệt vời dùng lập trình những phần banner xác nhận "Cookie Consent" (Xin quyền nạp Tracking). Người code chỉ việc nối logic nút bật class thành giá trị `,(0,c.jsx)(n.code,{children:`true`}),` đến chừng nào user chốt chấp nhận quy tắc lấy thông tin ở nút 'Đồng Ý'.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Class Truy Vấn Cải Biên (DataStorage Backed)`}),` — vận hành chuẩn dữ liệu `,(0,c.jsx)(n.code,{children:`DataStorage`}),` qua cấp độ trừu tượng để việc chặn ghi được tối ưu thông lượng trong background, gia tăng tính tin cậy.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả là lớp static nên bạn chạy lệnh trượt và trỏ trực tiếp bằng dấu chấm (`,(0,c.jsx)(n.code,{children:`.`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-quyền-truy-cập`,children:`Quản lý quyền truy cập`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`get()`}),` trả về 100% chuẩn cấu trúc kiểu nhị phân boolean.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu trình kiểm duyệt khóa chức năng tạo cookie.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`if (CookieBlock.get()) {
  console.log('Quá trình nạp DOM/ghi chép Cookie đang khoá do cài đặt phía user chưa cho quyền truy cập.')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Truy vấn tham số boolean qua `,(0,c.jsx)(n.code,{children:`set()`}),` để class hiểu website/app được hay không thể được viết biến cache cookie nữa.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` đồng nghĩa chặn toàn bộ biến muốn viết cookie ra ngoài trỏ lên web, `,(0,c.jsx)(n.code,{children:`false`}),` hệ thống lại bật tắt mượt mà bình thường.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Lệnh chặn khẩn cấp toàn bộ dữ liệu ghi DOM cookie
CookieBlock.set(true)

// Dỡ bỏ cảnh bảo / Cấp quyền DOM in cookie (Cấu hình chuẩn của object mới)
CookieBlock.set(false)
`})}),`
`,(0,c.jsxs)(n.h2,{id:`phương-phức-logic-khi-mắc-nối-với-lớp-cookie`,children:[`Phương Phức Logic Khi Mắc Nối Với Lớp `,(0,c.jsx)(n.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Nhân/Bộ cấu trúc tổng của class `,(0,c.jsx)(n.code,{children:`Cookie`}),` được code giám sát nghiêm ngặt mọi lệnh do luồng chặn phát đi. Lúc biến nhị phân `,(0,c.jsx)(n.code,{children:`CookieBlock.get()`}),` bị chốt ở mode `,(0,c.jsx)(n.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Ở nội bộ luồng mã, quá trình chạy vẫn ngầm hiểu là hệ thống gọi app bằng node lưu biến `,(0,c.jsx)(n.code,{children:`cookieInstance.set('value')`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tiến trình instance trực thuộc `,(0,c.jsx)(n.code,{children:`Cookie`}),` kích hoạt việc in giá trị cập nhật/ghi đè thay thế nằm vào hàng đợi của `,(0,c.jsx)(n.em,{children:`cơ sở memory ảo`}),` (internal memory).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tuyệt nhiên tại chính node instance của `,(0,c.jsx)(n.code,{children:`Cookie`}),` `,(0,c.jsx)(n.strong,{children:`hệ thống tự phát sinh quyền bác bỏ im lặng (silently refuse)`}),` đối với hàm ghi biến tĩnh `,(0,c.jsx)(n.code,{children:`document.cookie = ...`}),` tại nhánh DOM ảo lẫn DOM thật.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Luồng giao thức 3 buớc phía trên đáp ứng hoàn hảo hai tiêu chí tối thượng trong quy chuẩn kỹ thuật: Giúp DOM website không bị bóp băng thông khi chạy lỗi code lấy lệnh từ hệ memory chưa cấp dữ liệu (ngăn văng bug), cũng như giữ thiết lập tôn trọng chính sách truy vấn riêng tư bảo mật đĩa cứng phía Browser theo chuẩn Âu/Mỹ.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};