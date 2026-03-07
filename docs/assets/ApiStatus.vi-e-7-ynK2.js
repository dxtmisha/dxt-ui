import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/ApiStatus - Quản lý trạng thái API"}),`
`,n.jsx(t.h1,{id:"lớp-apistatus",children:"Lớp ApiStatus"}),`
`,n.jsx(t.p,{children:"Một lớp chuyên biệt dùng để theo dõi và quản lý các trạng thái của một yêu cầu API. Nó nắm giữ cục diện trạng thái HTTP hiện tại, thông báo báo lỗi, và hệ thống phân tích phản hồi data trả về, cho phép ứng dụng phản ứng kịp thời với những diễn biến theo thời gian thực chuẩn xác."}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Trạng thái tập trung"})," — lưu giữ tất cả những yếu tố liên đới kết quả trả về của một API: mã luồng sự kiện HTTP, thông báo đặc quyền, giao thức đối tượng gốc..."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Nối tuyến API (Chainable API)"})," — bộ thiết lập trả về đối tượng luồng ",n.jsx(t.code,{children:"this"}),", cho phép ghép nối và biến chuyển trạng thái nhiều cấp tiện lợi."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Giải mã văn bản tự động"})," — thuật toán thiết lập cố gắng tự thân đọc hàm và bóc tách thư mục mang tên ",n.jsx(t.code,{children:"message"})," thông dụng dưới tầng mã trực tiếp trích lấy từ chuỗi dữ liệu chủ lưu server."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`import { ApiStatus } from '@dxtmisha/functional'

const apiStatus = new ApiStatus()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"các-phương-thức-lấy-giá-trị",children:"Các phương thức lấy giá trị"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get(): ApiStatusItem"})," — Trả về mảng dữ liệu hiện thể trạng thái đầy đủ của đợt truy vấn cuối cùng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getStatus(): number | undefined"})," — Trả về số hạng trạng thái HTTP (như ",n.jsx(t.code,{children:"200"}),", ",n.jsx(t.code,{children:"404"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getStatusText(): string | undefined"})," — Trả về thông báo phân tích hiện trạng thái bằng mã lệnh chữ (ví dụ: ",n.jsx(t.code,{children:'"OK"'}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getStatusType(): ApiStatusType | undefined"})," — Trả về loại giao thức đối tượng xác thực kiểm duyệt chuỗi mới nhất."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getError(): string | undefined"})," — Trả về dải cấu trúc lỗi đã được chủ ý ghi hình trước đó."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getResponse<T>(): T | undefined"})," — Xuất thông tin gói cơ sở tài liệu gốc từ lệnh truy xuất gọi API thành công mới đây."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getMessage(): string"})," — Lôi trực xuất lấy thông báo hệ thống được server kéo thả trong gói thành công."]}),`
`]}),`
`,n.jsx(t.h3,{id:"các-phương-thức-thiết-lập-giá-trị",children:"Các phương thức thiết lập giá trị"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"set(data: ApiStatusItem): this"})," — Thiết lập cùng lúc hàng loạt thông số hiện trạng vào máy móc."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setStatus(status?: number, statusText?: string): this"})," — Nạp mã thông số báo HTTP và chuỗi mã số xác nhận tùy chọn vào guồng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setError(error?: string): this"})," — Khóa ghi lại thông báo tình trạng bị sập hầm mạng khi lệnh fetch cự tuyệt."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setLastResponse(response?: any): this"})," — Gắn lưu hoàn chỉnh nguyên vẹn một chuỗi kết xuất server và đồng bộ tự nhận dạng mảng ",n.jsx(t.code,{children:".message"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setLastStatus(status?: ApiStatusType): this"})," — Trực tiếp định danh loại trạng thái cho tác vụ kết thúc chót."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setLastMessage(message?: string): this"})," — Chủ định ép điền thông số hoặc đánh đè lên mã phản hồi ",n.jsx(t.code,{children:"message"}),"."]}),`
`]})]})}function u(i={}){const{wrapper:t}={...c(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(h,{...i})}):h(i)}export{u as default};
