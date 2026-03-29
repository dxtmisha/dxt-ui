import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ApiResponse - Giả lập yêu cầu API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apiresponse`,children:`Lớp ApiResponse`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp trình quản lý hệ thống phản hồi API. Giúp cung cấp cơ sở để bạn thu phục và chặn dòng yêu cầu mạng để tự thiết kế ra các câu trả lời giả lập (mock responses). Rất đắc lực và hữu ích trong quy trình thiết kế giao diện front-end, thời điểm máy chủ backend chưa hoàn chỉnh, hoặc khi cần bổ sung dữ liệu giả lập cho công tác test phần mềm offline.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đón chặn yêu cầu (Request Interception)`}),` — đối chiếu và phát hiện các yêu cầu ra bên ngoài thông minh dựa trên đường dẫn đích tới, giao thức kết nối HTTP, cũng như những biến tải trọng dữ liệu đi kèm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giả lập dữ liệu động (Dynamic Capabilities)`}),` — không chỉ hiển thị các dòng phản hồi tĩnh đóng gói sẵn (static template), bản đối chiếu mock cũng hỗ trợ cung cấp trả lời tự động hàm chức năng nội tiếp đọc hiểu ngay tải trọng client gắn kèm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giả lập mạng trục trặc (Network Lag Simulation)`}),` — thiết kế cấu trúc hàm trễ mạng `,(0,c.jsx)(n.code,{children:`timeouts`}),` chạy ngẫu nhiên mô phỏng khoảng ngắt quãng tín hiệu vật lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm soát cho Nhà phát triển (Developer Mode)`}),` — in chuỗi thông tin cảnh báo ra bảng console xác minh yêu cầu nào đang bị chặn và đang lấy được các đoạn tín hiệu mẫu nào.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ApiResponse(requestDefault)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault: ApiDefault`}),` — một thực thể để xử lý các tham số yêu cầu mặc định.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiResponse, ApiDefault } from '@dxtmisha/functional'

// 1. Khởi tạo các phụ thuộc
const apiDefault = new ApiDefault()

// 2. Tạo thực thể giả lập
const apiResponse = new ApiResponse(apiDefault)

// 3. Thêm một phản hồi giả lập
apiResponse.add({
  path: 'user/get',
  method: 'get',
  response: { id: 1, name: 'Admin' }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(path: string = '', method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Kiểm tra đồng bộ để tìm kiếm nếu có một mã yêu cầu nằm trong bộ nhớ cache toàn cục khớp hay không và trả về mốc dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Trả về danh sách cấu trúc tất cả các mock giả lập đã thực thi đăng ký từ đầu hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Thêm vào (hoặc dán lên liên tục) các phản hồi mock-data vào mạng registry quản lý hệ điều hành giả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDevMode(devMode: boolean): this`}),` — Bật hoặc tắt thiết lập luồng chế độ dành cho Nhà phát triển (nhìn luồng dữ liệu console.warn báo tin).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>`}),` — Khối lệnh mấu chốt được cấu trúc để thực thi việc xác thưc liên kết mô phỏng một lệnh lấy mạng ảo, kèm hiệu ứng mô phỏng dòng kéo trễ.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};