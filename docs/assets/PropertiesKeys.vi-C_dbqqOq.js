import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesKeys - Bộ chuyển đổi ngữ nghĩa khóa"}),`
`,n.jsx(c.h1,{id:"lớp-propertieskeys",children:"Lớp PropertiesKeys"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesKeys"}),' là một tiện ích tĩnh chuyên biệt được thiết kế để phân tích và chuyển đổi ý nghĩa ngữ nghĩa của các khóa token thiết kế. Nó đóng vai trò là "công cụ ngữ pháp" cho các tên thuộc tính, phân biệt giữa các khóa dữ liệu chức năng và các khóa siêu dữ liệu kiến trúc. Bằng cách cung cấp các cơ chế chuẩn hóa, thêm tiền tố dựa trên loại và phát hiện ký hiệu đặc biệt, nó đảm bảo rằng các khóa token luôn nhất quán và có thể dự đoán được bất kể định dạng nguồn của chúng (JSON, SCSS hoặc trạng thái nội bộ).']}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhận dạng siêu dữ liệu"})," — Phát hiện các khóa hệ thống được bảo vệ như ",n.jsx(c.code,{children:"value"}),", ",n.jsx(c.code,{children:"type"})," và các thuộc tính nội bộ bắt đầu bằng dấu gạch dưới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa tiền tố"})," — Tự động loại bỏ các ký hiệu kiến trúc (như ",n.jsx(c.code,{children:"="})," hoặc ",n.jsx(c.code,{children:"|"}),") để trích xuất tên ngữ nghĩa thuần túy."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Điều phối kiểu chữ"})," — Tích hợp với ",n.jsx(c.code,{children:"toCamelCase"})," để duy trì các quy ước đặt tên nhất quán trong toàn bộ cây token."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đổi khóa nhận biết loại (Type-Aware Re-keying)"})," — Chuyển đổi linh hoạt các khóa dựa trên danh mục của chúng (ví dụ: thêm tiền tố ",n.jsx(c.code,{children:"media-"})," cho các token media hoặc ",n.jsx(c.code,{children:"container-"})," cho các truy vấn container)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khả năng tương thích SCSS"})," — Xử lý định dạng đặc biệt cho các khóa tương thích với SCSS, bao gồm cả các dấu và (",n.jsx(c.code,{children:"&"}),") ở đầu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Là một lớp tiện ích tĩnh, ",n.jsx(c.code,{children:"PropertiesKeys"})," không yêu cầu khởi tạo thực thể và sẵn sàng sử dụng ngay sau khi nhập."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Kiểm tra xem một khóa có phải là trường siêu dữ liệu không
const isReserved = PropertiesKeys.isSpecialKey('type')

// Phân giải một tên ngữ nghĩa sạch
const cleanName = PropertiesKeys.getName('=primary-color')
// Trả về: "primaryColor"
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isSpecialKey(key): boolean"})," — Kiểm tra xem khóa có phải là trường siêu dữ liệu hệ thống được bảo vệ hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isFull(name): boolean"})," — Xác định xem tên có phải là một định nghĩa tuyệt đối/đầy đủ hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getName(name, camelCase?): string"})," — Chuẩn hóa một khóa bằng cách loại bỏ các tiền tố và áp dụng camelCase tùy chọn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"reKey(key, type?): string"})," — Chuyển đổi một khóa dựa trên loại kiến trúc của nó (media, container, scss, v.v.)."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-chuyển-đổi-khóa-the-key-transformation-pipeline",children:"Quy trình chuyển đổi khóa (The Key Transformation Pipeline)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesKeys"})," quản lý logic chuyển đổi giữa các định dạng đầu vào thô và các token nội bộ chuẩn hóa:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Trích xuất ngữ nghĩa"}),": Khi ",n.jsx(c.code,{children:"getName()"})," được gọi, lớp sử dụng các regex của ",n.jsx(c.code,{children:"PropertiesTypes"})," để xác định và loại bỏ các ký hiệu điều khiển (như ",n.jsx(c.code,{children:"="})," biểu thị một giá trị bất biến)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thêm tiền tố theo ngữ cảnh"}),": Trong luồng ",n.jsx(c.code,{children:"reKey()"}),", lớp kiểm tra ",n.jsx(c.code,{children:"_type"})," của token. Nếu xác định được loại ",n.jsx(c.code,{children:"media"}),", nó sẽ đảm bảo khóa phản ánh vai trò này một cách thông minh (ví dụ: ",n.jsx(c.code,{children:"desktop"})," trở thành ",n.jsx(c.code,{children:"mediaDesktop"}),"), tránh các tiền tố dư thừa nếu chúng đã tồn tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bảo vệ trạng thái nội bộ"}),": Kiểm tra ",n.jsx(c.code,{children:"isSpecialKey()"})," là rất quan trọng đối với các công cụ duyệt cây; nó ngăn chặn việc xử lý các cơ chế nội bộ (các khóa bắt đầu bằng ",n.jsx(c.code,{children:"_"}),") như thể chúng là các token thiết kế thực sự do người dùng định nghĩa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thích ứng nền tảng"}),": Để tạo SCSS, lớp xử lý cụ thể việc thêm tiền tố ",n.jsx(c.code,{children:"&"}),", cho phép các token thiết kế có thể sử dụng trực tiếp trong các khai báo kiểu lồng nhau."]}),`
`]})]})}function g(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{g as default};
