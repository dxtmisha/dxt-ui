import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesTool - Tiện ích thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestool`,children:`Lớp PropertiesTool`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesTool`}),` cung cấp một tập hợp các tiện ích tĩnh để xử lý việc đặt tên thành phần, phân giải đường dẫn và đọc các tệp cấu hình của hệ thống thiết kế. Nó đóng vai trò là một công cụ hỗ trợ cho các lớp khác, đảm bảo tính nhất quán trong quy ước đặt tên và cung cấp khả năng truy cập hiệu quả vào các tài nguyên tệp.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa Đặt tên`}),` — tạo tên thành phần và tên lớp CSS nhất quán (camelCase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic Constructor`}),` — bao gồm chức năng để xác định và tải các thuộc tính trình xây dựng cơ sở.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Bộ nhớ đệm`}),` — cung cấp khả năng đọc các tệp thuộc tính hiệu quả thông qua hệ thống bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Linh hoạt`}),` — lấy các định danh thiết kế đang hoạt động trực tiếp từ cài đặt môi trường.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này chỉ cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Gọi trực tiếp các phương thức tĩnh
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`isconstructor`,children:(0,c.jsx)(n.code,{children:`isConstructor`})}),`
`,(0,c.jsx)(n.p,{children:`Kiểm tra xem tên thiết kế được cung cấp có khớp với khóa trình xây dựng (constructor) của hệ thống hay không. Điều này rất cần thiết để tách biệt các thuộc tính meta cơ sở khỏi các thuộc tính cụ thể liên quan đến chủ đề.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — tên thiết kế cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu thiết kế là một trình xây dựng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Kết quả: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdesigns`,children:(0,c.jsx)(n.code,{children:`getDesigns`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về danh sách các định danh thiết kế có sẵn trong môi trường hiện tại. Danh sách này bao gồm trình xây dựng hệ thống và thiết kế được chỉ định trong cấu hình chính của dự án.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — một mảng gồm tên các thiết kế.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const list = PropertiesTool.getDesigns();
// Kết quả: ['dxt.constructor', 'my-project-design']
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcomponentname`,children:(0,c.jsx)(n.code,{children:`getComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một chuỗi tên thành phần đã được chuẩn hóa bằng cách kết hợp tên thiết kế và tên thành phần. Tên thành phần được tự động chuyển đổi sang `,(0,c.jsx)(n.code,{children:`camelCase`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — tên thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (tùy chọn) — tên thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — tên được tạo ra (ví dụ: `,(0,c.jsx)(n.code,{children:`designName-componentName`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Kết quả: "basic-buttonPrimary"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tương tự như `,(0,c.jsx)(n.code,{children:`getComponentName`}),`, nhưng trả về một chuỗi được định dạng dưới dạng bộ chọn lớp CSS (bắt đầu bằng dấu chấm).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — tên thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (tùy chọn) — tên thành phần.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — một chuỗi lớp CSS.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Kết quả: ".basic-button"
`})}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đọc và trả về danh sách các thuộc tính (token) từ hệ thống tệp. Đối với trình xây dựng, nó trả về một bản sao của các thuộc tính cơ sở từ `,(0,c.jsx)(n.code,{children:`properties.json`}),`; đối với các trường hợp khác, nó đọc tệp thuộc tính thông qua bộ nhớ đệm hệ thống.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — tên thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[] | undefined`}),` — đường dẫn thư mục chứa tệp.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList | undefined`}),` — một đối tượng thuộc tính hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu đường dẫn không được cung cấp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`cơ-chế-phân-giải-tên-the-name-resolution-mechanism`,children:`Cơ chế phân giải tên (The Name Resolution Mechanism)`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi kiểu chữ`}),`: Tất cả tên thành phần đầu vào đều trải qua `,(0,c.jsx)(n.code,{children:`toCamelCase`}),` trước khi được hợp nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thêm tiền tố`}),`: Các phương thức công khai luôn thêm tên thiết kế vào đầu, giúp ngăn chặn xung đột kiểu khi sử dụng nhiều chủ đề cùng lúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đọc tệp an toàn`}),`: Khi đọc tệp thông qua `,(0,c.jsx)(n.code,{children:`readFile`}),` cho trình xây dựng, việc sao chép sâu (`,(0,c.jsx)(n.code,{children:`copyObject`}),`) được sử dụng để ngăn chặn sự thay đổi vô ý đối với các cài đặt cơ sở toàn cục bởi các công cụ khác.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-một-lớp-css-cho-một-thành-phần-động`,children:`Tạo một lớp CSS cho một thành phần động`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Kết quả: .basic-inputField
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};