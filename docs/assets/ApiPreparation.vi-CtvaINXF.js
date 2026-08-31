import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ApiPreparation - Chuẩn bị yêu cầu API`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-apipreparation`,children:`Lớp ApiPreparation`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp chuyên dụng được thiết kế để xử lý các tác vụ và hiệu ứng phụ ngay trước và sau khi thực thi một yêu cầu API. Nó phục vụ việc chặn các yêu cầu trên toàn cục thông qua các hook theo dõi, cho phép thao tác trạng thái hoặc kích hoạt logic toàn cục như làm mới token hoặc ghi log.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiPreparation`}),` là một `,(0,c.jsx)(t.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để quản lý vòng đời yêu cầu. Trong hầu hết các trường hợp, bạn nên tương tác với các hook thông qua các phương thức `,(0,c.jsx)(t.code,{children:`setPreparation`}),` và `,(0,c.jsx)(t.code,{children:`setEnd`}),` của thực thể `,(0,c.jsx)(t.code,{children:`Api`}),` chính.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi tuần tự`}),` — đảm bảo rằng các hook chuẩn bị được giải quyết từng cái một, ngăn chặn xung đột trong các hoạt động đồng thời (ví dụ: làm mới token bị trùng lặp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chặn luồng toàn cục`}),` — cung cấp một điểm vào và ra duy nhất cho tất cả lưu lượng mạng được khởi tạo bởi trình quản lý cha của nó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát lại yêu cầu`}),` — các hook sau yêu cầu có thể báo hiệu hệ thống tự động thử lại một yêu cầu sau khi trạng thái thay đổi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi callback chuẩn bị đã đăng ký. Nếu một quá trình chuẩn bị khác đang diễn ra, nó sẽ đợi cho đến khi hoàn thành.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: boolean`}),` — Hook có được bật cho yêu cầu hiện tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Cấu hình cho yêu cầu sắp tới.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.h4,{id:`makeend`,children:(0,c.jsx)(t.code,{children:`makeEnd`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi callback phân tích đã đăng ký sau khi một yêu cầu hoàn thành.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: boolean`}),` — Hook có được bật cho yêu cầu hiện tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query: Response`}),` — Đối tượng phản hồi Fetch API gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Cấu hình đã được sử dụng cho yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiPreparationEnd>`}),` — Một đối tượng điều khiển các bước tiếp theo (ví dụ: reset, tiêm dữ liệu).`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Đăng ký một hàm sẽ chạy trước mọi yêu cầu được bật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Đăng ký một hàm sẽ chạy sau mọi phản hồi được bật.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`apipreparationend`,children:(0,c.jsx)(t.code,{children:`ApiPreparationEnd`})}),`
`,(0,c.jsx)(t.p,{children:`Kết quả thực thi của hook phân tích.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset?: boolean`}),` — Nếu true, yêu cầu sẽ bị hủy và khởi động lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: any`}),` — Dữ liệu tùy chỉnh để truyền đi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hướng-dẫn-cơ-chế-của-hook`,children:`Hướng dẫn: Cơ chế của Hook`}),`
`,(0,c.jsx)(t.p,{children:`Các quy tắc và điều kiện sau đây xác định cách hệ thống chuẩn bị đồng bộ hóa và quản lý các hook vòng đời:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa`}),` — hệ thống sử dụng cơ chế thăm dò (khoảng thời gian 160ms) để đảm bảo rằng chỉ có một hook `,(0,c.jsx)(t.code,{children:`setPreparation`}),` thực thi tại một thời điểm. Nếu nhiều yêu cầu bắt đầu đồng thời, các cuộc gọi tiếp theo sẽ đợi tối đa 32 lần thăm dò (~5 giây) để cuộc gọi đầu tiên hoàn thành.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêm ngữ cảnh`}),` — đối tượng `,(0,c.jsx)(t.code,{children:`apiFetch`}),` được truyền vào các hook theo dạng tham chiếu. Việc sửa đổi các thuộc tính của nó (như tiêu đề hoặc thân yêu cầu) bên trong `,(0,c.jsx)(t.code,{children:`setPreparation`}),` sẽ ảnh hưởng trực tiếp đến lệnh gọi mạng vật lý ngay sau đó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều khiển luồng (Reset)`}),` — hook `,(0,c.jsx)(t.code,{children:`setEnd`}),` có thể trả về `,(0,c.jsx)(t.code,{children:`{ reset: true }`}),`. Khi cờ này được phát hiện, `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` sẽ hủy chuỗi yêu cầu hiện tại và khởi động lại nó ngay lập tức từ giai đoạn chuẩn bị. Điều này chủ yếu được sử dụng để làm mới token tự động và thầm lặng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phạm vi thực thi`}),` — các hook chỉ chạy nếu chúng được bật rõ ràng trong cấu hình yêu cầu. Theo mặc định, `,(0,c.jsx)(t.code,{children:`globalPreparation`}),` và `,(0,c.jsx)(t.code,{children:`globalEnd`}),` được đặt thành true trong `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};