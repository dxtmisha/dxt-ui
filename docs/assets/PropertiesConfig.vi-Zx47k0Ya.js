import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesConfig - Bộ điều phối cấu hình toàn cầu"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesconfig",children:"Lớp PropertiesConfig"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesConfig"})," là một tiện ích tĩnh tập trung chịu trách nhiệm quản lý các tham số vận hành của hệ thống thiết kế. Nó xử lý việc khám phá và hợp nhất đệ quy các tệp cấu hình ",n.jsx(c.code,{children:"design-ui.json"}),", cung cấp một API nhất quán để truy cập các quy ước đặt tên, khóa tích hợp AI và các quy tắc định tuyến tài liệu trên toàn bộ thư viện."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Mở rộng đệ quy"})," — Hỗ trợ cơ chế ",n.jsx(c.code,{children:"extends"}),", cho phép các cấu hình kế thừa và ghi đè các cài đặt từ các thư mục cha."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động khám phá"})," — Tìm kiếm ngược lên cây thư mục để tìm điểm nhập ",n.jsx(c.code,{children:"design-ui.json"})," gần nhất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cài đặt tập trung"})," — Cung cấp quyền truy cập thống nhất vào các định danh dự án, tên thiết kế và các ký tự phân tách đường dẫn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp AI"})," — Quản lý thông tin xác thực và các tham số mô hình cho việc tạo tài liệu và mã nguồn bằng AI."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Định tuyến tài liệu"})," — Cấu hình các thư mục đích và đường dẫn Storybook cho hệ thống wiki tự động."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Là một lớp tĩnh, ",n.jsx(c.code,{children:"PropertiesConfig"})," tự động khởi tạo khi được import lần đầu tiên. Bạn không cần phải gọi hàm khởi tạo."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Truy cập các cài đặt toàn cầu
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"cấu-hình-chung",children:"Cấu hình chung"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getProjectName(): string"})," — Truy xuất định danh gốc của dự án."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getDesignName(): string"})," — Trả về định danh chính của hệ thống thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getDesignAlternativeName(): string[]"})," — Trả về các alias thay thế cho thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getSeparator(): string"})," — Trả về ký tự phân tách đường dẫn được sử dụng trong các token."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getWikiLanguage(): string"})," — Trả về mã ngôn ngữ đích cho tài liệu."]}),`
`]}),`
`,n.jsx(c.h3,{id:"ai--tài-liệu",children:"AI & Tài liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getAiType(): AiType"})," — Trả về nhà cung cấp AI đã cấu hình (ví dụ: 'gemini')."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getAiModel(): string"})," — Trả về tên mô hình AI cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getAiDocDirectory(): string[]"})," — Trả về các thư mục mục tiêu để tạo tài liệu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getAiDocStorybookPath(): string"})," — Trả về đích xuất cho các tệp MDX của Storybook."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-phân-giải-cấu-hình-the-configuration-resolution-flow",children:"Luồng phân giải cấu hình (The Configuration Resolution Flow)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesConfig"})," sử dụng một chiến lược mạnh mẽ để phân giải các cài đặt hệ thống:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá tệp"}),": Khi tải, nó cố gắng tìm ",n.jsx(c.code,{children:"design-ui.json"})," bằng cách duyệt ngược lên từ thư mục làm việc hiện tại (tối đa 32 cấp)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất đệ quy"}),": Nếu tệp được tìm thấy có chứa thuộc tính ",n.jsx(c.code,{children:"extends"}),":",`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"Nó tải đệ quy cấu hình cha được tham chiếu."}),`
`,n.jsx(c.li,{children:"Nó hợp nhất các cài đặt một cách thông minh, trong đó các thuộc tính cục bộ ghi đè các thuộc tính kế thừa."}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính sẵn sàng tĩnh"}),": Cấu hình hợp nhất cuối cùng được lưu trữ trong một trường tĩnh riêng tư, giúp tất cả các cài đặt có sẵn ngay lập tức thông qua các getter công khai."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
