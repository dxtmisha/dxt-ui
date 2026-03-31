import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesScss - Tạo SCSS`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesscss`,children:`Lớp PropertiesScss`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),` chịu trách nhiệm chuyển đổi các token và thuộc tính của hệ thống thiết kế thành cấu trúc SCSS có tổ chức. Mã nguồn kết quả được sử dụng để tích hợp các biến thiết kế vào bảng kiểu của thư viện, đảm bảo sự đồng bộ giữa các định nghĩa JSON và các biến Sass.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động tạo mã`}),` — tạo một cấu trúc SCSS hoàn chỉnh để tích hợp vào các bảng kiểu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Mixin`}),` — tạo các lệnh gọi đến các mixin đặc biệt (`,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),`, `,(0,c.jsx)(n.code,{children:`setDesignsRoot`}),`, v.v.) để cấu hình tự động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Media Query`}),` — chuyển đổi kích thước thiết bị thành một bảng (map) SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý Bảng màu (Palette)`}),` — tạo danh sách các màu sắc được sử dụng và các mức độ bão hòa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng Thông minh`}),` — xử lý chính xác các loại giá trị (màu sắc, kích thước, liên kết) để phù hợp với cú pháp SCSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo trình tạo SCSS, hãy truyền một thực thể `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` vào hàm khởi tạo.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — đối tượng quản lý cho tất cảnh các thành phần thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const manager = new PropertiesItems(tokenData)
const generator = new PropertiesScss(manager)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về một chuỗi SCSS đã được định dạng đầy đủ, sẵn sàng để ghi vào tệp. Chuỗi này bao gồm việc nhập các biến kiểu cốt lõi và các lệnh gọi mixin tuần tự để đăng ký các thiết kế, thuộc tính gốc, truy vấn phương tiện, các lớp và bảng màu.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — toàn bộ nội dung của tệp SCSS.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const scssContent = generator.get();
// Kết quả: "@use \\"@dxtmisha/styles\\" as variables; \\n @include variables.setDesignsDesigns(...)"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getproperties`,children:(0,c.jsx)(n.code,{children:`getProperties`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một cấu trúc bảng SCSS chuyên biệt cho tất cả các thuộc tính được định nghĩa trong hệ thống. Phương thức này tập trung vào các token (biến) chung nên có sẵn trong phạm vi CSS/SCSS toàn cục.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — một đoạn mã SCSS với lệnh gọi đến mixin `,(0,c.jsx)(n.code,{children:`setDesignsProperties`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const propertyMap = generator.getProperties();
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-tạo-scss`,children:`Quy trình tạo SCSS`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesScss`}),` thực hiện chuyển đổi dữ liệu qua nhiều giai đoạn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập Thiết kế`}),`: Xác định tất cả các thiết kế đang hoạt động và tạo danh sách cho mixin `,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích Danh mục`}),`: Phân phối các thuộc tính theo danh mục (root, class, theme) để tạo các khối tương ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải Bảng màu`}),`: Sử dụng `,(0,c.jsx)(n.code,{children:`PropertiesPalette`}),` để lấy danh sách các màu sắc và các bước bão hòa thực tế được sử dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích Giá trị`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`getValueItem`}),` kiểm tra từng giá trị so với các loại SCSS (chuỗi được đặt trong dấu ngoặc kép, mã HEX và kích thước có đơn vị được giữ nguyên không dùng ngoặc kép).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lắp ráp Cấu trúc`}),`: Tạo các bảng SCSS lồng nhau, tuân thủ thụt lề và dấu phân cách chính xác để đảm bảo mã Sass hợp lệ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`chu-kỳ-tạo-mã-đầy-đủ`,children:`Chu kỳ tạo mã đầy đủ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const items = new PropertiesItems(data)
const scss = new PropertiesScss(items)

// Lấy mã đã sẵn sàng để ghi vào variables.scss
const fileData = scss.get()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};