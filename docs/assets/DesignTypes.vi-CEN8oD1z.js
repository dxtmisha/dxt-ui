import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignTypes - Trình tạo kiểu AI"}),`
`,n.jsx(c.h1,{id:"lớp-designtypes",children:"Lớp DesignTypes"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignTypes"})," là một tiện ích chuyên dụng được thiết kế để thu hẹp khoảng cách giữa các định nghĩa kiểu (type definitions) phức tạp trong mã nguồn và các trợ lý lập trình AI. Nó tự động hóa việc trích xuất, làm sạch và nén các tệp khai báo TypeScript (",n.jsx(c.code,{children:".d.ts"}),"), sử dụng AI để tạo ra phiên bản cực kỳ tối giản của hệ thống kiểu trong dự án, cung cấp ngữ cảnh tối đa với mức tiêu thụ token tối thiểu."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá tự động"})," — Quét đệ quy các thư mục phân phối để tìm các tệp khai báo kiểu có liên quan."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc thông minh"})," — Tự động loại trừ các props constructor nội bộ và các kiểu logic không thiết yếu trong khi vẫn giữ lại các API công khai."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nén dựa trên AI"})," — Sử dụng các gợi ý LLM để loại bỏ siêu dữ liệu không cần thiết (imports, chú thích tiếng Nga, dòng trống) и hợp nhất các định nghĩa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đầu ra thống nhất"})," — Kết hợp nhiều tệp khai báo rời rạc thành một thư viện kiểu gắn kết duy nhất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tối ưu hóa ngữ cảnh"})," — Ưu tiên các interfaces, enums và type aliases quan trọng nhất đối với sự hiểu biết của AI."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Khởi tạo trình tạo bằng cách chỉ định thư mục nguồn nơi đặt các tệp khai báo đã biên dịch."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"dir: string"})," — Đường dẫn đến thư mục đầu vào (mặc định là ",n.jsx(c.code,{children:"'dist'"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Bắt đầu toàn bộ quy trình tạo: khám phá, kết hợp, xử lý AI và lưu trữ."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-tạo-kiểu-type-generation-pipeline",children:"Quy trình tạo kiểu (Type Generation Pipeline)"}),`
`,n.jsxs(c.p,{children:["Khi ",n.jsx(c.code,{children:"make()"})," được thực thi, lớp sẽ điều phối một quy trình làm việc gồm nhiều giai đoạn:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Lọc tệp (",n.jsx(c.code,{children:"getListByFilter"}),")"]}),": Động cơ quét thư mục để tìm các tệp ",n.jsx(c.code,{children:".d.ts"}),", lọc ra các chi tiết triển khai nội bộ như ",n.jsx(c.code,{children:"props.d.ts"})," hoặc ",n.jsx(c.code,{children:"types.d.ts"})," bên trong các thư mục constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Xác thực nội dung (",n.jsx(c.code,{children:"isContent"}),")"]}),": Nó xác minh rằng mỗi tệp thực sự chứa các định nghĩa kiểu có ý nghĩa (interfaces, types hoặc enums) trước khi xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Hợp nhất (",n.jsx(c.code,{children:"toOneFile"}),")"]}),": Tất cả nội dung tệp được xác định sẽ được hợp nhất thành một chuỗi lớn duy nhất, được gắn thẻ với đường dẫn tệp gốc để cung cấp ngữ cảnh."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Chuyển đổi AI (",n.jsx(c.code,{children:"toAiEdit"}),")"]}),": Nội dung đã hợp nhất được gửi đến trợ lý AI với các hướng dẫn cụ thể để loại bỏ mã mẫu (boilerplate), xóa các chú thích không phải tiếng Anh và tối thiểu hóa cú pháp."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Lưu trữ (",n.jsx(c.code,{children:"save"}),")"]}),": Thư viện kiểu mật độ cao cuối cùng được lưu vào đường dẫn đầu ra đã định cấu hình (thường được chỉ định trong ",n.jsx(c.code,{children:"UI_FILE_AI_TYPES"}),")."]}),`
`]}),`
`,n.jsx(c.h3,{id:"trường-hợp-sử-dụng-tiêm-ngữ-cảnh-ai",children:"Trường hợp sử dụng: Tiêm ngữ cảnh AI"}),`
`,n.jsx(c.p,{children:'Mục tiêu chính của lớp này là tạo ra một "kiến thức nhân tạo" có thể được tiêm vào hệ thống prompt của các LLM đang làm việc trong dự án. Bằng cách cung cấp một cái nhìn tổng quan sạch sẽ, cô đọng về tất cả các kiểu và interface có sẵn, AI có thể viết mã an toàn về kiểu (type-safe) và hiểu kiến trúc thành phần với độ chính xác cao hơn đáng kể và chi phí thấp hơn.'})]})}function p(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{p as default};
