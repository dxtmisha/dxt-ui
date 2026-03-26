import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ApiStatus - Quản lý trạng thái API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apistatus`,children:`Lớp ApiStatus`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp chuyên biệt dùng để theo dõi và quản lý các trạng thái của một yêu cầu API. Nó nắm giữ cục diện trạng thái HTTP hiện tại, thông báo báo lỗi, và hệ thống phân tích phản hồi data trả về, cho phép ứng dụng phản ứng kịp thời với những diễn biến theo thời gian thực chuẩn xác.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái tập trung`}),` — lưu giữ tất cả những yếu tố liên đới kết quả trả về của một API: mã luồng sự kiện HTTP, thông báo đặc quyền, giao thức đối tượng gốc...`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nối tuyến API (Chainable API)`}),` — bộ thiết lập trả về đối tượng luồng `,(0,c.jsx)(n.code,{children:`this`}),`, cho phép ghép nối và biến chuyển trạng thái nhiều cấp tiện lợi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải mã văn bản tự động`}),` — thuật toán thiết lập cố gắng tự thân đọc hàm và bóc tách thư mục mang tên `,(0,c.jsx)(n.code,{children:`message`}),` thông dụng dưới tầng mã trực tiếp trích lấy từ chuỗi dữ liệu chủ lưu server.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ApiStatus()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiStatus } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const apiStatus = new ApiStatus()

// 2. Thiết lập trạng thái phản hồi
apiStatus.setStatus(200, 'OK')

// 3. Thiết lập dữ liệu phản hồi và tự động trích xuất thông báo
apiStatus.setLastResponse({
  status: 'success',
  message: 'Dữ liệu đã được tải thành công',
  data: { id: 1 }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-phương-thức-lấy-giá-trị`,children:`Các phương thức lấy giá trị`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiStatusItem`}),` — Trả về mảng dữ liệu hiện thể trạng thái đầy đủ của đợt truy vấn cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): number | undefined`}),` — Trả về số hạng trạng thái HTTP (như `,(0,c.jsx)(n.code,{children:`200`}),`, `,(0,c.jsx)(n.code,{children:`404`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusText(): string | undefined`}),` — Trả về thông báo phân tích hiện trạng thái bằng mã lệnh chữ (ví dụ: `,(0,c.jsx)(n.code,{children:`"OK"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatusType(): ApiStatusType | undefined`}),` — Trả về loại giao thức đối tượng xác thực kiểm duyệt chuỗi mới nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getError(): string | undefined`}),` — Trả về dải cấu trúc lỗi đã được chủ ý ghi hình trước đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse<T>(): T | undefined`}),` — Xuất thông tin gói cơ sở tài liệu gốc từ lệnh truy xuất gọi API thành công mới đây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMessage(): string`}),` — Lôi trực xuất lấy thông báo hệ thống được server kéo thả trong gói thành công.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`các-phương-thức-thiết-lập-giá-trị`,children:`Các phương thức thiết lập giá trị`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(data: ApiStatusItem): this`}),` — Thiết lập cùng lúc hàng loạt thông số hiện trạng vào máy móc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setStatus(status?: number, statusText?: string): this`}),` — Nạp mã thông số báo HTTP và chuỗi mã số xác nhận tùy chọn vào guồng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setError(error?: string): this`}),` — Khóa ghi lại thông báo tình trạng bị sập hầm mạng khi lệnh fetch cự tuyệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastResponse(response?: any): this`}),` — Gắn lưu hoàn chỉnh nguyên vẹn một chuỗi kết xuất server và đồng bộ tự nhận dạng mảng `,(0,c.jsx)(n.code,{children:`.message`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastStatus(status?: ApiStatusType): this`}),` — Trực tiếp định danh loại trạng thái cho tác vụ kết thúc chót.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLastMessage(message?: string): this`}),` — Chủ định ép điền thông số hoặc đánh đè lên mã phản hồi `,(0,c.jsx)(n.code,{children:`message`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};