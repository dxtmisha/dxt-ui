import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesItems - Bộ điều phối cây thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesitems`,children:`Lớp PropertiesItems`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` đóng vai trò là bộ điều phối trung tâm để điều hướng và tìm kiếm qua các cây thuộc tính thiết kế phức tạp. Nó cung cấp một lớp trừu tượng cấp cao giúp ẩn đi các chi tiết phức tạp của việc duyệt cây, giải mã chỉ mục và lọc theo thiết kế cụ thể. Cho dù bạn cần tìm một token cụ thể theo đường dẫn dấu chấm, thực hiện tìm kiếm toàn cục theo danh mục hay thực thi các thao tác đệ quy sâu, `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` đóng vai trò là công cụ chính để khám phá thuộc tính.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tập trung vào Thiết kế (Design Focusing)`}),` — Cho phép lọc toàn bộ phạm vi tương tác thuộc tính vào một chủ đề thiết kế hoặc cụm thành phần duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải Siêu dữ liệu Sâu`}),` — Chuyển đổi các chuỗi chỉ mục đơn giản (ví dụ: `,(0,c.jsx)(n.code,{children:`theme.colors.primary`}),`) thành các đối tượng thông tin toàn diện với ngữ cảnh cha đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Công cụ Duyệt thống nhất`}),` — Cung cấp các cơ chế `,(0,c.jsx)(n.code,{children:`each`}),` và `,(0,c.jsx)(n.code,{children:`find`}),` nhất quán cho cả việc khám phá phân cấp token theo kiểu nông và đệ quy sâu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi Ngữ nghĩa Đường dẫn`}),` — Tự động xử lý chuẩn hóa đường dẫn, chuyển đổi kebab-to-camelCase và hỗ trợ các biểu tượng liên kết đặc biệt như `,(0,c.jsx)(n.code,{children:`?`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc theo Danh mục & Biến`}),` — Bao gồm các phương pháp tìm kiếm được tối ưu hóa để trích xuất các tập hợp con token dựa trên danh mục chức năng hoặc loại biến của chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`PropertiesItems(properties)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — danh sách đầy đủ các thuộc tính (cây token) cần quản lý.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo manager với cây token
const manager = new PropertiesItems(allTokenData)

// 2. (Tùy chọn) Tập trung môi trường vào một thiết kế cụ thể
manager.setFocusDesign('my-theme')

// 3. Truy xuất cấu trúc đã lọc
const currentTokens = manager.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertyList`}),` — trả về cấu trúc thuộc tính hiện tại (hỗ trợ lọc focus).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — trả về danh sách các tên thiết kế có sẵn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(index): PropertyItem`}),` — truy xuất một bản ghi thuộc tính cụ thể theo chỉ mục của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(index): PropertyItemsItem`}),` — phân giải siêu dữ liệu đầy đủ và phân cấp cha cho một chỉ mục nhất định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeys(index): string[]`}),` — giải mã một chuỗi đường dẫn thành các phân đoạn khóa đã chuẩn hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name, item): string`}),` — trả về tên hiển thị của một thuộc tính, có tính đến việc đổi tên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`each(callback, property?): T[]`}),` — thực hiện duyệt đệ quy sâu của cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(callback): PropertyItemsItem[]`}),` — tìm kiếm các bản ghi khớp với các điều kiện tùy chỉnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findCategory(category): PropertyItemsItem[]`}),` — trích xuất các token thuộc về các danh mục chức năng cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setFocusDesign(design): this`}),` — giới hạn phạm vi hoạt động ở một thiết kế cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-khám-phá-siêu-dữ-liệu--duyệt-cây`,children:`Luồng Khám phá Siêu dữ liệu & Duyệt cây`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesItems`}),` điều phối một số luồng logic phức tạp:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải mã chỉ mục`}),`: Khi một chỉ mục như `,(0,c.jsx)(n.code,{children:`theme.button-main.color`}),` được yêu cầu, nó chuẩn hóa các phân đoạn thành camelCase và phân giải chúng dựa trên các đối tượng `,(0,c.jsx)(n.code,{children:`value`}),` lồng nhau của cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Ngữ cảnh Đường dẫn`}),`: Trong quá trình duyệt cây (`,(0,c.jsx)(n.code,{children:`each`}),`), lớp duy trì một ngăn xếp `,(0,c.jsx)(n.code,{children:`parents`}),`, cho phép mọi nút được khám phá biết chính xác vị trí của nó trong hệ thống phân cấp (quan trọng để tạo các biến CSS hoặc đường dẫn tài liệu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cô lập Thiết kế`}),`: Bằng cách gọi `,(0,c.jsx)(n.code,{children:`setFocusDesign()`}),`, người dùng có thể chuyển đổi "chế độ xem" của toàn bộ cây. Các cuộc gọi tiếp theo đến `,(0,c.jsx)(n.code,{children:`get()`}),` hoặc `,(0,c.jsx)(n.code,{children:`each()`}),` sẽ tự động bỏ qua các thiết kế KHÔNG phải là thiết kế đang tập trung hoặc `,(0,c.jsx)(n.code,{children:`_constructor`}),` chung.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa liên kết`}),`: Các phương thức như `,(0,c.jsx)(n.code,{children:`getLink()`}),` xử lý việc chuyển đổi các ký hiệu đường dẫn cũ (như `,(0,c.jsx)(n.code,{children:`??`}),` và `,(0,c.jsx)(n.code,{children:`?`}),`) thành các chỉ mục thuộc tính tuyệt đối, đủ điều kiện bằng cách thêm ngữ cảnh thiết kế và thành phần hiện tại vào trước.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};