import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToVar - Bộ chuyển đổi giá trị biến CSS`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestovar`,children:`Lớp PropertiesToVar`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),` chuyển đổi các token thiết kế đại diện cho các biến thành các thuộc tính tùy chỉnh CSS tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`--var-name: values`}),`). Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp biến CSS`}),` — Chuyển đổi tên token biến thành thuộc tính tùy chỉnh có tiền tố hai dấu gạch ngang (`,(0,c.jsx)(n.code,{children:`--prefix-name`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bao bọc biểu thức toán học`}),` — Tự động bao bọc các biểu thức toán học tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`+`}),`, `,(0,c.jsx)(n.code,{children:`-`}),`, `,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`/`}),`) bên trong các khối `,(0,c.jsx)(n.code,{children:`calc(...)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mở rộng tham chiếu`}),` — Giải quyết các tham chiếu ngoặc nhọn thành định dạng CSS `,(0,c.jsx)(n.code,{children:`var(...)`}),` lồng nhau, hỗ trợ các giá trị dự phòng mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết cờ độ mờ (opacity)`}),` — Phát hiện một cách an toàn các biến màu chứa thuộc tính độ mờ, gắn thẻ chúng bằng siêu dữ liệu độ trong suốt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các định nghĩa biến đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`020-var`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToVar, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToVar(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-giải-quyết`,children:`Thao tác giải quyết`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để lấy các nút kiểu biến, tổng hợp tên biến, định dạng giá trị CSS của chúng và giải quyết độ trong suốt của màu sắc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(property: PropertyItemsItem): string`}),` — Xây dựng các khóa đặt tên thuộc tính CSS tiêu chuẩn (ví dụ: `,(0,c.jsx)(n.code,{children:`--sys-color-primary`}),`) được giới hạn bởi không gian tên cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toCalculator(value: string, full?: boolean): string`}),` — Bao bọc các biểu thức toán học trong các câu lệnh `,(0,c.jsx)(n.code,{children:`calc()`}),` nếu chưa được định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toLink(value: string): string`}),` — Chuẩn hóa các khóa chỉ mục liên kết thành các phân đoạn tên biến tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(value: string, defaultValue?: PropertyItem['_default']): string`}),` — Giải quyết đệ quy các tham chiếu ngoặc nhọn lồng nhau thành các giá trị CSS `,(0,c.jsx)(n.code,{children:`var(--name, fallback)`}),` tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNone(parents: PropertyItemsParent[]): boolean`}),` — Trả về true nếu bất kỳ phần tử cha nào có kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.none`}),`, đại diện cho thuộc tính ẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isColorWithOpacity(property: PropertyItemsItem): boolean`}),` — Duyệt qua các tham chiếu màu một cách an toàn để xác minh xem thuộc tính độ trong suốt có đang hoạt động hay không.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};