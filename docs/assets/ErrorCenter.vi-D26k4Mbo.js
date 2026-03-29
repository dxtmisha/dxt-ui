import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenter - Quản lý lỗi`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenter`,children:`ErrorCenter`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp tĩnh (static wrapper) cho `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` cung cấp quản lý tập trung cho việc lưu trữ, truy xuất và xử lý lỗi dựa trên sự kiện. Nó đóng vai trò như một bộ lưu trữ toàn cầu cho các nguyên nhân gây lỗi và cung cấp cơ chế để đăng ký cũng như kích hoạt các trình xử lý tùy chỉnh cho các nhóm lỗi khác nhau.`]}),`
`,(0,c.jsx)(n.p,{children:`Lớp này tuân theo mô hình "Static Bridge", chuyển giao tất cả các hoạt động cho một thực thể duy nhất (singleton instance) trong khi vẫn duy trì một API sạch sẽ, có thể truy cập toàn cầu.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập tĩnh`}),` — Truy cập toàn cầu vào quản lý lỗi mà không cần khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ lưu trữ tập trung`}),` — Lưu trữ các nguyên nhân lỗi được tiêu chuẩn hóa để phản hồi UI nhất quán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý theo nhóm`}),` — Cho phép đăng ký nhiều hàm gọi lại cho các danh mục lỗi cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Các phương thức thêm nguyên nhân và trình xử lý hỗ trợ thiết kế giao diện linh hoạt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị mặc định`}),` — Đi kèm với các nguyên nhân lỗi mạng tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`timeout`}),`, `,(0,c.jsx)(n.code,{children:`offline`}),`, `,(0,c.jsx)(n.code,{children:`notFound`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-kiểm-tra`,children:`Các phương thức kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Kiểm tra xem một nguyên nhân lỗi có tồn tại trong bộ lưu trữ hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Truy xuất đối tượng nguyên nhân lỗi đầy đủ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`truy-xuất-thực-thể`,children:`Truy xuất thực thể`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Trả về thực thể nền tảng được sử dụng bởi lớp tĩnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Thêm một nguyên nhân lỗi duy nhất vào bộ lưu trữ toàn cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Thêm nhiều nguyên nhân lỗi vào bộ lưu trữ cùng một lúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Đăng ký một hàm gọi lại cho một nhóm lỗi cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Đăng ký một loạt các trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-hành-động`,children:`Các phương thức hành động`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kích hoạt xử lý lỗi cho nguyên nhân được chỉ định. Nó tìm kiếm dữ liệu đã đăng ký trước đó cho mã lỗi (nếu có), hợp nhất với nguyên nhân đầu vào (`,(0,c.jsx)(n.code,{children:`cause`}),`), thực thi tất cả các trình xử lý đã đăng ký cho nhóm đó và ghi lỗi vào bảng điều khiển (console).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — Nguyên nhân lỗi cần kích hoạt. Chỉ cần cung cấp mã và nhóm nếu nguyên nhân đó đã được đăng ký trước đó qua `,(0,c.jsx)(n.code,{children:`add()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng chính được sử dụng để xác định nguyên nhân gây lỗi.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — danh mục/nhóm mà lỗi thuộc về.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — mã định danh duy nhất cho lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — tên lỗi dễ đọc cho người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — mô tả chi tiết về lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — đối tượng tùy chọn cho các dữ liệu bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Định nghĩa kiểu đơn giản để phân loại lỗi: `,(0,c.jsx)(n.code,{children:`string | undefined`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-nguyên-nhân-lỗi-mặc-định`,children:`Các nguyên nhân lỗi mặc định`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` được điền sẵn tự động với các nguyên nhân mạng tiêu chuẩn sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unknown`}),` — `,(0,c.jsx)(n.strong,{children:`Lỗi không xác định`}),`: Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout`}),` — `,(0,c.jsx)(n.strong,{children:`Yêu cầu hết hạn`}),`: Yêu cầu mất quá nhiều thời gian. Vui lòng kiểm tra kết nối.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`offline`}),` — `,(0,c.jsx)(n.strong,{children:`Không có kết nối`}),`: Bạn đang ngoại tuyến. Vui lòng kiểm tra mạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notFound`}),` — `,(0,c.jsx)(n.strong,{children:`Không tìm thấy`}),`: Tài nguyên được yêu cầu không thể tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`server`}),` — `,(0,c.jsx)(n.strong,{children:`Lỗi máy chủ`}),`: Đã xảy ra lỗi nội bộ máy chủ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Cấu hình trình xử lý toàn cục
ErrorCenter.addHandler('api', (cause) => {
  notification.error({
    title: cause.label,
    message: cause.message
  })
})

// 2. Đăng ký các nguyên nhân lỗi cụ thể
ErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Phiên làm việc hết hạn',
  message: 'Vui lòng đăng nhập lại.'
})

// 3. Kích hoạt lỗi qua mã và nhóm
ErrorCenter.on({ group: 'auth', code: 'token_expired' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};