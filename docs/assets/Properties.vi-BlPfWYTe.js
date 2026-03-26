import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/Properties - Bộ điều phối Token thiết kế`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-properties`,children:`Lớp Properties`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Properties`}),` là công cụ xử lý cốt lõi của cơ sở hạ tầng token trong hệ thống thiết kế. Nó đóng vai trò là bộ điều phối trung tâm để phối hợp việc tải, hợp nhất cấu trúc và biến đổi đệ quy các định nghĩa thuộc tính thô thành trạng thái cuối cùng đã được phân giải. Bằng cách trừu tượng hóa sự phức tạp của hàng chục quy tắc biến đổi chuyên biệt, nó cung cấp một "nguồn sự thật" ổn định cho tất cả các thành phần và công cụ xây dựng.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình xử lý đa giai đoạn`}),` — Thực thi các bộ biến đổi chuyên biệt để thay thế, sao chép, kéo và liên kết các token thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất cấu trúc`}),` — Phân giải và hợp nhất một cách thông minh các cài đặt, giá trị mặc định toàn cầu và các ghi đè (overrides) dành riêng cho thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý bộ nhớ đệm tăng dần`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` để lưu trữ kết quả đã xử lý, cải thiện đáng kể hiệu suất xây dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp SCSS`}),` — Biên dịch các token đã phân giải thành định dạng SCSS có cấu trúc để sử dụng trực tiếp trong các lớp tạo kiểu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Siêu dữ liệu tối ưu cho AI`}),` — Chuẩn bị các cấu trúc thuộc tính dễ dàng tiêu thụ bởi các công cụ tài liệu và trình tạo dựa trên AI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo bộ điều phối để bắt đầu xử lý ngay lập tức các token được định nghĩa trong cấu hình dự án.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Properties } from '@dxtmisha/scripts'

const engine = new Properties()
const tokens = engine.get() // Trả về PropertiesItems đã được xử lý đầy đủ
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-dữ-liệu`,children:`Truy cập dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertiesItems`}),` — Trả về container cốt lõi chứa tất cả các token thiết kế đã xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScss(): string`}),` — Trả về biểu diễn SCSS đã biên dịch của bộ token hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-xử-lý-token-the-token-processing-pipeline`,children:`Quy trình xử lý Token (The Token Processing Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi được khởi tạo, `,(0,c.jsx)(n.code,{children:`Properties`}),` điều phối một luồng biến đổi đa lớp toàn diện:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập nguồn`}),`: Nó đọc và hợp nhất dữ liệu thô từ `,(0,c.jsx)(n.code,{children:`PropertiesSettings`}),`, `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` và các tệp JSON bên ngoài.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa cơ bản`}),`: Kích hoạt các biến đổi nền tảng:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thay thế (Replacement)`}),`: Phân giải các mẫu alias.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải bảng màu (Palette Resolution)`}),`: Tiêm các giá trị bảng màu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sao chép & Tổng hợp thuộc tính con`}),`: Xử lý các bản sao thuộc tính phức tạp.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biến đổi nâng cao`}),`: Thực thi logic cấp cao cho:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải thành phần`}),`: Ánh xạ các thuộc tính vào các cấu trúc thành phần cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ Trạng thái & Lớp (State & Class Mapping)`}),`: Tạo siêu dữ liệu cho các trạng thái UI (hover, active) và các lớp BEM.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp Media & Animation`}),`: Phân giải các điểm dừng (breakpoints) phản hồi và các token chuyển động.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa & Làm sạch`}),`: Sắp xếp các thuộc tính, xử lý các bản trùng lặp và loại bỏ các nút trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ`}),`: Kết quả cuối cùng được lưu vào `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` bằng một mã hash duy nhất dựa trên cấu hình thiết kế hiện tại.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};