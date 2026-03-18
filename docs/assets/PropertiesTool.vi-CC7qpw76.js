import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesTool - Tiện ích thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-propertiestool",children:"Lớp PropertiesTool"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesTool"})," cung cấp một tập hợp các tiện ích tĩnh để xử lý việc đặt tên thành phần, phân giải đường dẫn và đọc các tệp cấu hình của hệ thống thiết kế. Nó đóng vai trò là một công cụ hỗ trợ cho các lớp khác, đảm bảo tính nhất quán trong quy ước đặt tên và cung cấp khả năng truy cập hiệu quả vào các tài nguyên tệp."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa Đặt tên"})," — tạo tên thành phần và tên lớp CSS nhất quán (camelCase)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Logic Constructor"})," — bao gồm chức năng để xác định và tải các thuộc tính trình xây dựng cơ sở."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Bộ nhớ đệm"})," — cung cấp khả năng đọc các tệp thuộc tính hiệu quả thông qua hệ thống bộ nhớ đệm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu hình Linh hoạt"})," — lấy các định danh thiết kế đang hoạt động trực tiếp từ cài đặt môi trường."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Lớp này chỉ cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua ",n.jsx(c.code,{children:"new"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Gọi trực tiếp các phương thức tĩnh
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"isconstructor",children:n.jsx(c.code,{children:"isConstructor"})}),`
`,n.jsx(c.p,{children:"Kiểm tra xem tên thiết kế được cung cấp có khớp với khóa trình xây dựng (constructor) của hệ thống hay không. Điều này rất cần thiết để tách biệt các thuộc tính meta cơ sở khỏi các thuộc tính cụ thể liên quan đến chủ đề."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"design: string"})," — tên thiết kế cần xác minh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu thiết kế là một trình xây dựng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Kết quả: true
`})}),`
`,n.jsx(c.h3,{id:"getdesigns",children:n.jsx(c.code,{children:"getDesigns"})}),`
`,n.jsx(c.p,{children:"Trả về danh sách các định danh thiết kế có sẵn trong môi trường hiện tại. Danh sách này bao gồm trình xây dựng hệ thống và thiết kế được chỉ định trong cấu hình chính của dự án."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string[]"})," — một mảng gồm tên các thiết kế."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const list = PropertiesTool.getDesigns();
// Kết quả: ['dxt.constructor', 'my-project-design']
`})}),`
`,n.jsx(c.h3,{id:"getcomponentname",children:n.jsx(c.code,{children:"getComponentName"})}),`
`,n.jsxs(c.p,{children:["Tạo một chuỗi tên thành phần đã được chuẩn hóa bằng cách kết hợp tên thiết kế và tên thành phần. Tên thành phần được tự động chuyển đổi sang ",n.jsx(c.code,{children:"camelCase"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"design: string"})," — tên thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"component: string"})," (tùy chọn) — tên thành phần."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," — tên được tạo ra (ví dụ: ",n.jsx(c.code,{children:"designName-componentName"}),")."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Kết quả: "basic-buttonPrimary"
`})}),`
`,n.jsx(c.h3,{id:"getclassname",children:n.jsx(c.code,{children:"getClassName"})}),`
`,n.jsxs(c.p,{children:["Tương tự như ",n.jsx(c.code,{children:"getComponentName"}),", nhưng trả về một chuỗi được định dạng dưới dạng bộ chọn lớp CSS (bắt đầu bằng dấu chấm)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"design: string"})," — tên thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"component: string"})," (tùy chọn) — tên thành phần."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," — một chuỗi lớp CSS."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Kết quả: ".basic-button"
`})}),`
`,n.jsx(c.h3,{id:"readfile",children:n.jsx(c.code,{children:"readFile"})}),`
`,n.jsxs(c.p,{children:["Đọc và trả về danh sách các thuộc tính (token) từ hệ thống tệp. Đối với trình xây dựng, nó trả về một bản sao của các thuộc tính cơ sở từ ",n.jsx(c.code,{children:"properties.json"}),"; đối với các trường hợp khác, nó đọc tệp thuộc tính thông qua bộ nhớ đệm hệ thống."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"design: string"})," — tên thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path: string[] | undefined"})," — đường dẫn thư mục chứa tệp."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyList | undefined"})," — một đối tượng thuộc tính hoặc ",n.jsx(c.code,{children:"undefined"})," nếu đường dẫn không được cung cấp."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"cơ-chế-phân-giải-tên-the-name-resolution-mechanism",children:"Cơ chế phân giải tên (The Name Resolution Mechanism)"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi kiểu chữ"}),": Tất cả tên thành phần đầu vào đều trải qua ",n.jsx(c.code,{children:"toCamelCase"})," trước khi được hợp nhất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thêm tiền tố"}),": Các phương thức công khai luôn thêm tên thiết kế vào đầu, giúp ngăn chặn xung đột kiểu khi sử dụng nhiều chủ đề cùng lúc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đọc tệp an toàn"}),": Khi đọc tệp thông qua ",n.jsx(c.code,{children:"readFile"})," cho trình xây dựng, việc sao chép sâu (",n.jsx(c.code,{children:"copyObject"}),") được sử dụng để ngăn chặn sự thay đổi vô ý đối với các cài đặt cơ sở toàn cục bởi các công cụ khác."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"tạo-một-lớp-css-cho-một-thành-phần-động",children:"Tạo một lớp CSS cho một thành phần động"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Kết quả: .basic-inputField
`})})]})}function g(t={}){const{wrapper:c}={...s(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{g as default};
