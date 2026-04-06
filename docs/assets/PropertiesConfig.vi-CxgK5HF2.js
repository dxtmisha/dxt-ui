import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesConfig - Bộ điều phối cấu hình toàn cầu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesconfig`,children:`Lớp PropertiesConfig`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` là một tiện ích tĩnh tập trung chịu trách nhiệm quản lý các tham số vận hành của hệ thống thiết kế. Nó xử lý việc khám phá và hợp nhất đệ quy các tệp cấu hình `,(0,c.jsx)(n.code,{children:`design-ui.json`}),`, cung cấp một API nhất quán để truy cập các quy ước đặt tên, khóa tích hợp AI và các quy tắc định tuyến tài liệu trên toàn bộ thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mở rộng đệ quy`}),` — Hỗ trợ cơ chế `,(0,c.jsx)(n.code,{children:`extends`}),`, cho phép các cấu hình kế thừa và ghi đè các cài đặt từ các thư mục cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động khám phá`}),` — Tìm kiếm ngược lên cây thư mục để tìm điểm nhập `,(0,c.jsx)(n.code,{children:`design-ui.json`}),` gần nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cài đặt tập trung`}),` — Cung cấp quyền truy cập thống nhất vào các định danh dự án, tên thiết kế và các ký tự phân tách đường dẫn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp AI`}),` — Quản lý thông tin xác thực và các tham số mô hình cho việc tạo tài liệu và mã nguồn bằng AI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định tuyến tài liệu`}),` — Cấu hình các thư mục đích và đường dẫn Storybook cho hệ thống wiki tự động.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp tĩnh, `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` tự động khởi tạo khi được import lần đầu tiên. Bạn không cần phải gọi hàm khởi tạo.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Truy cập các cài đặt toàn cầu
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-chung`,children:`Cấu hình chung`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName(): string`}),` — Truy xuất định danh gốc của dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignName(): string`}),` — Trả về định danh chính của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignAlternativeName(): string[]`}),` — Trả về các alias thay thế cho thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSeparator(): string`}),` — Trả về ký tự phân tách đường dẫn được sử dụng trong các token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWikiLanguage(): string`}),` — Trả về mã ngôn ngữ đích cho tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ai--tài-liệu`,children:`AI & Tài liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiType(): AiType`}),` — Trả về nhà cung cấp AI đã cấu hình (ví dụ: 'gemini').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiModel(): string`}),` — Trả về tên mô hình AI cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocDirectory(): string[]`}),` — Trả về các thư mục mục tiêu để tạo tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocStorybookPath(): string`}),` — Trả về đích xuất cho các tệp MDX của Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-phân-giải-cấu-hình-the-configuration-resolution-flow`,children:`Luồng phân giải cấu hình (The Configuration Resolution Flow)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` sử dụng một chiến lược mạnh mẽ để phân giải các cài đặt hệ thống:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá tệp`}),`: Khi tải, nó cố gắng tìm `,(0,c.jsx)(n.code,{children:`design-ui.json`}),` bằng cách duyệt ngược lên từ thư mục làm việc hiện tại (tối đa 32 cấp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất đệ quy`}),`: Nếu tệp được tìm thấy có chứa thuộc tính `,(0,c.jsx)(n.code,{children:`extends`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Nó tải đệ quy cấu hình cha được tham chiếu.`}),`
`,(0,c.jsx)(n.li,{children:`Nó hợp nhất các cài đặt một cách thông minh, trong đó các thuộc tính cục bộ ghi đè các thuộc tính kế thừa.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính sẵn sàng tĩnh`}),`: Cấu hình hợp nhất cuối cùng được lưu trữ trong một trường tĩnh riêng tư, giúp tất cả các cài đặt có sẵn ngay lập tức thông qua các getter công khai.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};