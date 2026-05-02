import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesKeys - Bộ chuyển đổi ngữ nghĩa khóa`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertieskeys`,children:`Lớp PropertiesKeys`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` là một tiện ích tĩnh chuyên biệt được thiết kế để phân tích và chuyển đổi ý nghĩa ngữ nghĩa của các khóa token thiết kế. Nó đóng vai trò là "công cụ ngữ pháp" cho các tên thuộc tính, phân biệt giữa các khóa dữ liệu chức năng và các khóa siêu dữ liệu kiến trúc. Bằng cách cung cấp các cơ chế chuẩn hóa, thêm tiền tố dựa trên loại và phát hiện ký hiệu đặc biệt, nó đảm bảo rằng các khóa token luôn nhất quán và có thể dự đoán được bất kể định dạng nguồn của chúng (JSON, SCSS hoặc trạng thái nội bộ).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận dạng siêu dữ liệu`}),` — Phát hiện các khóa hệ thống được bảo vệ như `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),` và các thuộc tính nội bộ bắt đầu bằng dấu gạch dưới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa tiền tố`}),` — Tự động loại bỏ các ký hiệu kiến trúc (như `,(0,c.jsx)(n.code,{children:`=`}),` hoặc `,(0,c.jsx)(n.code,{children:`|`}),`) để trích xuất tên ngữ nghĩa thuần túy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều phối kiểu chữ`}),` — Tích hợp với `,(0,c.jsx)(n.code,{children:`toCamelCase`}),` để duy trì các quy ước đặt tên nhất quán trong toàn bộ cây token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đổi khóa nhận biết loại (Type-Aware Re-keying)`}),` — Chuyển đổi linh hoạt các khóa dựa trên danh mục của chúng (ví dụ: thêm tiền tố `,(0,c.jsx)(n.code,{children:`media-`}),` cho các token media hoặc `,(0,c.jsx)(n.code,{children:`container-`}),` cho các truy vấn container).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khả năng tương thích SCSS`}),` — Xử lý định dạng đặc biệt cho các khóa tương thích với SCSS, bao gồm cả các dấu và (`,(0,c.jsx)(n.code,{children:`&`}),`) ở đầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp tiện ích tĩnh, `,(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` không yêu cầu khởi tạo thực thể và sẵn sàng sử dụng ngay sau khi nhập.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Kiểm tra xem một khóa có phải là trường siêu dữ liệu không
const isReserved = PropertiesKeys.isSpecialKey('type')

// Phân giải một tên ngữ nghĩa sạch
const cleanName = PropertiesKeys.getName('=primary-color')
// Trả về: "primaryColor"
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSpecialKey(key): boolean`}),` — Kiểm tra xem khóa có phải là trường siêu dữ liệu hệ thống được bảo vệ hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFull(name): boolean`}),` — Xác định xem tên có phải là một định nghĩa tuyệt đối/đầy đủ hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name, camelCase?): string`}),` — Chuẩn hóa một khóa bằng cách loại bỏ các tiền tố và áp dụng camelCase tùy chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reKey(key, type?): string`}),` — Chuyển đổi một khóa dựa trên loại kiến trúc của nó (media, container, scss, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-chuyển-đổi-khóa-the-key-transformation-pipeline`,children:`Quy trình chuyển đổi khóa (The Key Transformation Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesKeys`}),` quản lý logic chuyển đổi giữa các định dạng đầu vào thô và các token nội bộ chuẩn hóa:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất ngữ nghĩa`}),`: Khi `,(0,c.jsx)(n.code,{children:`getName()`}),` được gọi, lớp sử dụng các regex của `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),` để xác định và loại bỏ các ký hiệu điều khiển (như `,(0,c.jsx)(n.code,{children:`=`}),` biểu thị một giá trị bất biến).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thêm tiền tố theo ngữ cảnh`}),`: Trong luồng `,(0,c.jsx)(n.code,{children:`reKey()`}),`, lớp kiểm tra `,(0,c.jsx)(n.code,{children:`_type`}),` của token. Nếu xác định được loại `,(0,c.jsx)(n.code,{children:`media`}),`, nó sẽ đảm bảo khóa phản ánh vai trò này một cách thông minh (ví dụ: `,(0,c.jsx)(n.code,{children:`desktop`}),` trở thành `,(0,c.jsx)(n.code,{children:`mediaDesktop`}),`), tránh các tiền tố dư thừa nếu chúng đã tồn tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo vệ trạng thái nội bộ`}),`: Kiểm tra `,(0,c.jsx)(n.code,{children:`isSpecialKey()`}),` là rất quan trọng đối với các công cụ duyệt cây; nó ngăn chặn việc xử lý các cơ chế nội bộ (các khóa bắt đầu bằng `,(0,c.jsx)(n.code,{children:`_`}),`) như thể chúng là các token thiết kế thực sự do người dùng định nghĩa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thích ứng nền tảng`}),`: Để tạo SCSS, lớp xử lý cụ thể việc thêm tiền tố `,(0,c.jsx)(n.code,{children:`&`}),`, cho phép các token thiết kế có thể sử dụng trực tiếp trong các khai báo kiểu lồng nhau.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};