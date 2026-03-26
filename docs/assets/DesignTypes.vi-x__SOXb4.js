import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignTypes - Trình tạo kiểu AI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designtypes`,children:`Lớp DesignTypes`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` là một tiện ích chuyên dụng được thiết kế để thu hẹp khoảng cách giữa các định nghĩa kiểu (type definitions) phức tạp trong mã nguồn và các trợ lý lập trình AI. Nó tự động hóa việc trích xuất, làm sạch và nén các tệp khai báo TypeScript (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`), sử dụng AI để tạo ra phiên bản cực kỳ tối giản của hệ thống kiểu trong dự án, cung cấp ngữ cảnh tối đa với mức tiêu thụ token tối thiểu.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá tự động`}),` — Quét đệ quy các thư mục phân phối để tìm các tệp khai báo kiểu có liên quan.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc thông minh`}),` — Tự động loại trừ các props constructor nội bộ và các kiểu logic không thiết yếu trong khi vẫn giữ lại các API công khai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nén dựa trên AI`}),` — Sử dụng các gợi ý LLM để loại bỏ siêu dữ liệu không cần thiết (imports, chú thích tiếng Nga, dòng trống) и hợp nhất các định nghĩa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đầu ra thống nhất`}),` — Kết hợp nhiều tệp khai báo rời rạc thành một thư viện kiểu gắn kết duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa ngữ cảnh`}),` — Ưu tiên các interfaces, enums và type aliases quan trọng nhất đối với sự hiểu biết của AI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo trình tạo bằng cách chỉ định thư mục nguồn nơi đặt các tệp khai báo đã biên dịch.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — Đường dẫn đến thư mục đầu vào (mặc định là `,(0,c.jsx)(n.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Bắt đầu toàn bộ quy trình tạo: khám phá, kết hợp, xử lý AI và lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-tạo-kiểu-type-generation-pipeline`,children:`Quy trình tạo kiểu (Type Generation Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được thực thi, lớp sẽ điều phối một quy trình làm việc gồm nhiều giai đoạn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Lọc tệp (`,(0,c.jsx)(n.code,{children:`getListByFilter`}),`)`]}),`: Động cơ quét thư mục để tìm các tệp `,(0,c.jsx)(n.code,{children:`.d.ts`}),`, lọc ra các chi tiết triển khai nội bộ như `,(0,c.jsx)(n.code,{children:`props.d.ts`}),` hoặc `,(0,c.jsx)(n.code,{children:`types.d.ts`}),` bên trong các thư mục constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Xác thực nội dung (`,(0,c.jsx)(n.code,{children:`isContent`}),`)`]}),`: Nó xác minh rằng mỗi tệp thực sự chứa các định nghĩa kiểu có ý nghĩa (interfaces, types hoặc enums) trước khi xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Hợp nhất (`,(0,c.jsx)(n.code,{children:`toOneFile`}),`)`]}),`: Tất cả nội dung tệp được xác định sẽ được hợp nhất thành một chuỗi lớn duy nhất, được gắn thẻ với đường dẫn tệp gốc để cung cấp ngữ cảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Chuyển đổi AI (`,(0,c.jsx)(n.code,{children:`toAiEdit`}),`)`]}),`: Nội dung đã hợp nhất được gửi đến trợ lý AI với các hướng dẫn cụ thể để loại bỏ mã mẫu (boilerplate), xóa các chú thích không phải tiếng Anh và tối thiểu hóa cú pháp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Lưu trữ (`,(0,c.jsx)(n.code,{children:`save`}),`)`]}),`: Thư viện kiểu mật độ cao cuối cùng được lưu vào đường dẫn đầu ra đã định cấu hình (thường được chỉ định trong `,(0,c.jsx)(n.code,{children:`UI_FILE_AI_TYPES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`trường-hợp-sử-dụng-tiêm-ngữ-cảnh-ai`,children:`Trường hợp sử dụng: Tiêm ngữ cảnh AI`}),`
`,(0,c.jsx)(n.p,{children:`Mục tiêu chính của lớp này là tạo ra một "kiến thức nhân tạo" có thể được tiêm vào hệ thống prompt của các LLM đang làm việc trong dự án. Bằng cách cung cấp một cái nhìn tổng quan sạch sẽ, cô đọng về tất cả các kiểu và interface có sẵn, AI có thể viết mã an toàn về kiểu (type-safe) và hiểu kiến trúc thành phần với độ chính xác cao hơn đáng kể và chi phí thấp hơn.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};