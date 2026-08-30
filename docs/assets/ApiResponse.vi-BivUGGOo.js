import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ApiResponse - Giả lập phản hồi API`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-apiresponse`,children:`Lớp ApiResponse`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp quản lý để chặn, lưu trữ và giả lập các phản hồi API. Nó cho phép bạn chặn các yêu cầu API đi và trả về dữ liệu mẫu (mock data) đã được định nghĩa trước thay vì kích hoạt lưu lượng mạng thực tế.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiResponse`}),` là một `,(0,c.jsx)(t.strong,{children:`lớp bổ trợ`}),` (auxiliary class), được thiết kế để giả lập và tạo mock API. Trong hầu hết các trường hợp, bạn nên đăng ký các phản hồi mock thông qua tham số `,(0,c.jsx)(t.code,{children:`response`}),` trong cấu hình `,(0,c.jsx)(t.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chặn yêu cầu`}),` — khớp các yêu cầu đi một cách thông minh dựa trên đường dẫn mục tiêu, phương thức HTTP và đối tượng dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khả năng linh hoạt`}),` — hỗ trợ cả các đối tượng tĩnh được định nghĩa trước hoặc thực thi các logic callback động có khả năng diễn giải ngữ cảnh yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô phỏng độ trễ mạng`}),` — hệ thống tích hợp được thiết kế riêng để mô phỏng các kịch bản độ trễ thực tế (bộ hẹn giờ bù ngẫu nhiên).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chế độ nhà phát triển`}),` — in các thông tin gỡ lỗi hữu ích trong console trình duyệt cho biết dữ liệu nào đã khớp trực tiếp với một điểm mock cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm dựng `,(0,c.jsx)(t.code,{children:`ApiResponse(requestDefault)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`requestDefault: ApiDefault`}),` — lớp yêu cầu mặc định được sử dụng để cấu hình và lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiResponse } from '@dxtmisha/functional-basic'

const apiResponse = new ApiResponse(myApiDefault)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h4,{id:`emulator`,children:(0,c.jsx)(t.code,{children:`emulator`})}),`
`,(0,c.jsx)(t.p,{children:`Vòng lặp công cụ chính để xác thực các cấu hình yêu cầu và thực thi các phản hồi mock có độ trễ tương ứng. Phương thức này chỉ chạy trong môi trường DOM.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Các thuộc tính của yêu cầu cần giả lập.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T | undefined>`}),` — Dữ liệu phản hồi đã giả lập.`]}),`
`,(0,c.jsx)(t.h4,{id:`emulatorasync`,children:(0,c.jsx)(t.code,{children:`emulatorAsync`})}),`
`,(0,c.jsx)(t.p,{children:`Phiên bản đồng bộ của trình giả lập. Nó trả về phản hồi mock ngay lập tức mà không có bất kỳ độ trễ hoặc trạng thái tải nào. Phương thức này chỉ chạy trong môi trường DOM.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Các thuộc tính của yêu cầu cần giả lập.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Dữ liệu phản hồi đã giả lập.`]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(path: string, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Kiểm tra đồng bộ một yêu cầu mock đã lưu khớp với các tham số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Trả về danh sách tất cả các cấu hình giả lập đã đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Thêm các đối tượng phản hồi mock vào bộ đăng ký cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDevMode(devMode: boolean): this`}),` — Bật/tắt chế độ nhật ký gỡ lỗi phát triển.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`apiresponseitem`,children:(0,c.jsx)(t.code,{children:`ApiResponseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Một đối tượng định nghĩa cấu hình phản hồi mock.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string | RegExp`}),` — Đường dẫn hoặc mẫu URL khớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethod`}),` — Phương thức HTTP (GET, POST, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: any | ((request?: any) => any)`}),` — Dữ liệu mock hoặc hàm trả về dữ liệu đó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request?: ApiFetch['request'] | '*any'`}),` — Dữ liệu yêu cầu tùy chọn để khớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lag?: boolean`}),` — Có mô phỏng độ trễ mạng hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disable?: any`}),` — Điều kiện để vô hiệu hóa mock (boolean hoặc hàm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isForGlobal?: boolean`}),` — Đánh dấu là mock toàn cục (ẩn khỏi getList).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hướng-dẫn-giả-lập-api`,children:`Hướng dẫn: Giả lập API`}),`
`,(0,c.jsx)(t.p,{children:`Các quy tắc và điều kiện sau đây xác định cách hệ thống giả lập chặn và tạo mock cho các yêu cầu mạng:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký Mock`}),` — các phản hồi được thêm qua `,(0,c.jsx)(t.code,{children:`add()`}),` sẽ được ưu tiên và kiểm tra trước khi bất kỳ cuộc gọi mạng thực tế nào được khởi tạo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu chí khớp`}),` — một mock chỉ được kích hoạt nếu đường dẫn (chuỗi hoặc RegExp), phương thức HTTP và nội dung yêu cầu đều khớp với cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ký tự đại diện cho Body`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`*any`}),` làm giá trị yêu cầu cho phép mock khớp với bất kỳ payload nào, bỏ qua việc so sánh đối tượng chuyên sâu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dữ liệu động`}),` — thuộc tính `,(0,c.jsx)(t.code,{children:`response`}),` có thể là một hàm, cho phép bạn tạo dữ liệu mock động dựa trên các tham số yêu cầu đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô phỏng độ trễ`}),` — thiết lập `,(0,c.jsx)(t.code,{children:`lag: true`}),` sẽ thêm một khoảng trễ ngẫu nhiên (0-2000ms) và kích hoạt trạng thái tải chung (lớp `,(0,c.jsx)(t.code,{children:`d-response-loading`}),` trên body).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính duy trì của khớp`}),` — theo mặc định, một cấu hình giả lập chỉ khớp một lần trừ khi `,(0,c.jsx)(t.code,{children:`devMode`}),` được bật, điều này ngăn chặn việc kích hoạt mock trùng lặp cho cùng một trạng thái.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};