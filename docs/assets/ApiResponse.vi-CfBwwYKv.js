import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/ApiResponse - Giả lập yêu cầu API"}),`
`,n.jsx(i.h1,{id:"lớp-apiresponse",children:"Lớp ApiResponse"}),`
`,n.jsx(i.p,{children:"Một lớp trình quản lý hệ thống phản hồi API. Giúp cung cấp cơ sở để bạn thu phục và chặn dòng yêu cầu mạng để tự thiết kế ra các câu trả lời giả lập (mock responses). Rất đắc lực và hữu ích trong quy trình thiết kế giao diện front-end, thời điểm máy chủ backend chưa hoàn chỉnh, hoặc khi cần bổ sung dữ liệu giả lập cho công tác test phần mềm offline."}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đón chặn yêu cầu (Request Interception)"})," — đối chiếu và phát hiện các yêu cầu ra bên ngoài thông minh dựa trên đường dẫn đích tới, giao thức kết nối HTTP, cũng như những biến tải trọng dữ liệu đi kèm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Giả lập dữ liệu động (Dynamic Capabilities)"})," — không chỉ hiển thị các dòng phản hồi tĩnh đóng gói sẵn (static template), bản đối chiếu mock cũng hỗ trợ cung cấp trả lời tự động hàm chức năng nội tiếp đọc hiểu ngay tải trọng client gắn kèm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Giả lập mạng trục trặc (Network Lag Simulation)"})," — thiết kế cấu trúc hàm trễ mạng ",n.jsx(i.code,{children:"timeouts"})," chạy ngẫu nhiên mô phỏng khoảng ngắt quãng tín hiệu vật lý."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Kiểm soát cho Nhà phát triển (Developer Mode)"})," — in chuỗi thông tin cảnh báo ra bảng console xác minh yêu cầu nào đang bị chặn và đang lấy được các đoạn tín hiệu mẫu nào."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Yêu cầu cung cấp cấu trúc hệ đối tượng ",n.jsx(i.code,{children:"ApiDefault"})," được cắm sẵn nhằm đồng bộ hoá tham số."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

const apiDefault = new ApiDefault()
const apiResponse = new ApiResponse(apiDefault)
`})}),`
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined"})," — Kiểm tra đồng bộ để tìm kiếm nếu có một mã yêu cầu nằm trong bộ nhớ cache toàn cục khớp hay không và trả về mốc dữ liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getList(): (ApiResponseItem & Record<string, any>)[]"})," — Trả về danh sách cấu trúc tất cả các mock giả lập đã thực thi đăng ký từ đầu hệ thống."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"add(response: ApiResponseItem | ApiResponseItem[]): this"})," — Thêm vào (hoặc dán lên liên tục) các phản hồi mock-data vào mạng registry quản lý hệ điều hành giả."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setDevMode(devMode: boolean): this"})," — Bật hoặc tắt thiết lập luồng chế độ dành cho Nhà phát triển (nhìn luồng dữ liệu console.warn báo tin)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>"})," — Khối lệnh mấu chốt được cấu trúc để thực thi việc xác thưc liên kết mô phỏng một lệnh lấy mạng ảo, kèm hiệu ứng mô phỏng dòng kéo trễ."]}),`
`]})]})}function g(t={}){const{wrapper:i}={...h(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(c,{...t})}):c(t)}export{g as default};
