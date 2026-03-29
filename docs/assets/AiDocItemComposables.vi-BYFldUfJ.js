import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/AiDocItemComposables - Trình Tạo Tài liệu Composable bằng AI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aidocitemcomposables`,children:`Lớp AiDocItemComposables`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các Vue Composables bằng AI. Nó tự động hóa quy trình phân tích các hàm composition, thu thập ngữ cảnh và tạo tài liệu MDX chất lượng cao.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tập trung vào Composable`}),` — sử dụng các mẫu chuyên biệt (`,(0,c.jsx)(n.code,{children:`aiDocComposablePrompt.en.txt`}),`) được thiết kế riêng để viết tài liệu cho các hàm composition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bản demo Trực quan`}),` — tích hợp dữ liệu tham chiếu từ `,(0,c.jsx)(n.code,{children:`demoComposableEn.mdx`}),` để duy trì giao diện nhất quán cho tài liệu composable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa Hoàn toàn`}),` — xử lý các bước kỹ thuật như đọc mã, kiểm tra trạng thái bản dựng và ghi kết quả cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định tuyến Thông minh`}),` — tự động tính toán đường dẫn lưu trữ Wiki phù hợp và tiêu đề trang.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`AiDocItemComposables`}),` bằng cách cung cấp đường dẫn nguồn của dự án và siêu dữ liệu tệp đích.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — đường dẫn thư mục gốc của dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: GitFileItem`}),` — thông tin về tệp composable cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Kích hoạt việc tạo tài liệu
await composableDoc.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — thực hiện chu trình tài liệu đầy đủ: kiểm tra cập nhật, chuẩn bị ngữ cảnh AI và ghi kết quả.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`siêu-dữ-liệu-metadata`,children:`Siêu dữ liệu (Metadata)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — tạo tiêu đề chuẩn hóa cho tài liệu composable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathWiki(): string[]`}),` — tính toán đường dẫn Wiki dựa trên vị trí của tệp trong dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isBuildDisabled(): boolean`}),` — kiểm tra xem tệp nguồn có chứa `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),` để bỏ qua việc tạo hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho thông tin tệp được quản lý bởi Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — Đường dẫn tuyệt đối đặc thù của hệ điều hành.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — Dành riêng cho siêu dữ liệu bổ sung.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};