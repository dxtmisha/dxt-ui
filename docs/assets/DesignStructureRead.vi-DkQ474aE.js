import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignStructureRead - Bộ phân giải phụ thuộc thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designstructureread`,children:`Lớp DesignStructureRead`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` là trình phân tích cú pháp chính để phân giải các phụ thuộc và trạng thái giữa các thuộc tính của thành phần. Nó chuyển đổi các token hệ thống thiết kế thô thành một danh sách các thuộc tính có cấu trúc, xác định mục nào sẽ được hiển thị dưới dạng props công khai và mục nào đại diện cho các trạng thái tương tác nội bộ hoặc các phụ thuộc lớp CSS được liên kết.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá trạng thái`}),` — Xác định các token thuộc tính được định nghĩa là trạng thái tương tác (ví dụ: `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:active`}),`) và xây dựng các chuỗi phụ thuộc của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải lớp liên kết`}),` — Phát hiện và phân giải các tham chiếu đến các lớp thành phần bên ngoài để duy trì phân cấp BEM.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biên soạn giá trị`}),` — Tập hợp tất cả các giá trị có thể có cho một thuộc tính, bao gồm cả các giá trị bắt nguồn từ các cấu trúc trạng thái lồng nhau, để tạo ra các union TypeScript chính xác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực Prop`}),` — Lọc và xác thực các token thuộc tính nào đủ điều kiện để xuất dưới dạng thuộc tính thành phần công khai dựa trên các quy tắc hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp giá trị độc lập`}),` — Tự động chèn các cờ boolean cho các thuộc tính thiếu các token giá trị rõ ràng nhưng yêu cầu theo dõi trạng thái.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo trình đọc thuộc tính, hãy cung cấp tên thành phần cơ sở. Lớp sẽ tự động phân giải siêu dữ liệu của thành phần thông qua trừu tượng cha của nó và kích hoạt quy trình phân tích cú pháp nhiều giai đoạn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — Mã định danh của thành phần cần phân tích (ví dụ: `,(0,c.jsx)(n.code,{children:`'input'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureList`}),` — Trả về danh sách tuyến tính đã được phân giải hoàn chỉnh của các thuộc tính thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStates(): DesignStructureStateList`}),` — Trả về danh sách phân cấp các trạng thái và các phụ thuộc thuộc tính liên quan của chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-phân-tích-cú-pháp-the-parsing-pipeline`,children:`Quy trình phân tích cú pháp (The Parsing Pipeline)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi được xây dựng, `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` thực hiện một chuỗi các chuyển đổi để xây dựng mô hình dữ liệu cuối cùng:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Ánh xạ trạng thái (`,(0,c.jsx)(n.code,{children:`makeState`}),`)`]}),`: Duyệt đệ quy cây thuộc tính để tách biệt các token được đánh dấu là `,(0,c.jsx)(n.code,{children:`state`}),` hoặc `,(0,c.jsx)(n.code,{children:`linkClass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi tạo cấu trúc chính (`,(0,c.jsx)(n.code,{children:`makeMain`}),`)`]}),`: Tạo mục nhập cơ sở cho mỗi prop được xác định, chuẩn hóa tên và siêu dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Trích xuất giá trị cơ sở (`,(0,c.jsx)(n.code,{children:`makeValue`}),`)`]}),`: Phân giải các giá trị trực tiếp được gán cho mỗi thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Mở rộng giá trị (`,(0,c.jsx)(n.code,{children:`makeValueAll`}),`)`]}),`: Tập hợp các giá trị từ tất cả các trạng thái tương tác có thể để đảm bảo API thuộc tính bao quát mọi trường hợp logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Duy nhất hóa giá trị (`,(0,c.jsx)(n.code,{children:`makeValueUnique`}),`)`]}),`: Chuẩn hóa các danh sách giá trị, loại bỏ các mục trùng lặp và đảm bảo các fallback boolean tồn tại khi cần thiết.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý-các-lớp-liên-kết-linked-classes`,children:`Xử lý các lớp liên kết (Linked Classes)`}),`
`,(0,c.jsxs)(n.p,{children:[`Logic đặc biệt được áp dụng khi một thuộc tính tham chiếu đến một lớp thành phần khác (`,(0,c.jsx)(n.code,{children:`linkClass`}),`). Bộ phân giải sẽ:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định tham chiếu`}),`: Tìm liên kết biến cụ thể trong siêu dữ liệu thiết kế toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi tên`}),`: Chuyển đổi tham chiếu thành tên lớp BEM tiêu chuẩn hóa (ví dụ: `,(0,c.jsx)(n.code,{children:`theme-button--primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải đệ quy`}),`: Kích hoạt một chu kỳ phân tích cú pháp phụ cho thành phần được liên kết để đảm bảo các thuộc tính và trạng thái của nó được tính đến trong cây phụ thuộc của thành phần chính.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};