import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesConfig - Bộ điều phối cấu hình toàn cầu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiesconfig`,children:`Lớp PropertiesConfig`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` là một tiện ích tĩnh tập trung chịu trách nhiệm quản lý các tham số vận hành của hệ thống thiết kế. Nó xử lý việc khám phá và hợp nhất đệ quy các tệp cấu hình `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`, cung cấp một API nhất quán để truy cập các quy ước đặt tên, khóa tích hợp AI và các quy tắc định tuyến tài liệu trên toàn bộ thư viện.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mở rộng đệ quy`}),` — Hỗ trợ cơ chế `,(0,c.jsx)(t.code,{children:`extends`}),`, cho phép các cấu hình kế thừa và ghi đè các cài đặt từ các thư mục cha.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động khám phá`}),` — Tìm kiếm ngược lên cây thư mục để tìm điểm nhập `,(0,c.jsx)(t.code,{children:`design-ui.json`}),` gần nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cài đặt tập trung`}),` — Cung cấp quyền truy cập thống nhất vào các định danh dự án, tên thiết kế và các ký tự phân tách đường dẫn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp AI`}),` — Quản lý thông tin xác thực và các tham số mô hình cho việc tạo tài liệu và mã nguồn bằng AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định tuyến tài liệu`}),` — Cấu hình các thư mục đích và đường dẫn Storybook cho hệ thống wiki tự động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Là một lớp tĩnh, `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` tự động khởi tạo khi được import lần đầu tiên. Bạn không cần phải gọi hàm khởi tạo.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Truy cập các cài đặt toàn cầu
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-chung`,children:`Cấu hình chung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getProjectName(): string`}),` — lấy mã định danh dự án gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignName(): string`}),` — trả về định danh hệ thống thiết kế chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignAlternativeName(): string[]`}),` — trả về danh sách bí danh thay thế của thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPackagePrefix(): string | undefined`}),` — trả về tiền tố gói npm trong không gian làm việc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparator(): string`}),` — trả về ký tự phân tách đường dẫn token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorBasicName(): string`}),` — trả về tên cơ bản của bộ phân tách token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorLimit(): number`}),` — trả về giới hạn độ sâu phân tách token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWikiLanguage(): string`}),` — trả về mã ngôn ngữ tài liệu mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDistDir(): string`}),` — trả về đường dẫn thư mục xuất bản (dist).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFigmaToken(): string`}),` — trả về mã truy cập Figma API.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-biên-dịch-kiểu--ai`,children:`Cấu hình biên dịch kiểu & AI`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesTemporaryDirectory(): string`}),` — trả về đường dẫn thư mục tạm cho biên dịch khai báo kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesPaths(): string[] | undefined`}),` — trả về danh sách đường dẫn quét kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesMatch(): string | string[] | undefined`}),` — trả về các mẫu khớp tệp để quét kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesExclude(): string | string[] | undefined`}),` — trả về các mẫu loại trừ tệp khi quét kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesWithoutVue(): boolean | undefined`}),` — trả về cờ vô hiệu hóa biên dịch Vue cho kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTypesWithoutVue(): boolean`}),` — kiểm tra xem xử lý tệp Vue có bị tắt khi tạo kiểu hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiResourcesDir(): string`}),` — trả về đường dẫn thư mục tài nguyên và prompt AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — trả về nhà cung cấp AI đã cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — trả về tên mô hình AI cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiKey(): string`}),` — trả về khóa API cho dịch vụ AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiConfig(): Record<string, any>`}),` — trả về đối tượng cấu hình client AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — trả về giới hạn số lượng tệp định nghĩa kiểu xử lý đồng thời qua AI.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ai--tài-liệu`,children:`AI & Tài liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — Trả về nhà cung cấp AI đã cấu hình (ví dụ: 'gemini').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — Trả về tên mô hình AI cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — Trả về số lượng tệp định nghĩa kiểu tối đa được AI xử lý đồng thời.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`luồng-phân-giải-cấu-hình-the-configuration-resolution-flow`,children:`Luồng phân giải cấu hình (The Configuration Resolution Flow)`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` sử dụng một chiến lược mạnh mẽ để phân giải các cài đặt hệ thống:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khám phá tệp`}),`: Khi tải, nó cố gắng tìm `,(0,c.jsx)(t.code,{children:`design-ui.json`}),` bằng cách duyệt ngược lên từ thư mục làm việc hiện tại (tối đa 32 cấp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất đệ quy`}),`: Nếu tệp được tìm thấy có chứa thuộc tính `,(0,c.jsx)(t.code,{children:`extends`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Nó tải đệ quy cấu hình cha được tham chiếu.`}),`
`,(0,c.jsx)(t.li,{children:`Nó hợp nhất các cài đặt một cách thông minh, trong đó các thuộc tính cục bộ ghi đè các thuộc tính kế thừa.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính sẵn sàng tĩnh`}),`: Cấu hình hợp nhất cuối cùng được lưu trữ trong một trường tĩnh riêng tư, giúp tất cả các cài đặt có sẵn ngay lập tức thông qua các getter công khai.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};