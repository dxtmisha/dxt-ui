import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesItems - Bộ điều phối cây thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesitems",children:"Lớp PropertiesItems"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesItems"})," đóng vai trò là bộ điều phối trung tâm để điều hướng và tìm kiếm qua các cây thuộc tính thiết kế phức tạp. Nó cung cấp một lớp trừu tượng cấp cao giúp ẩn đi các chi tiết phức tạp của việc duyệt cây, giải mã chỉ mục và lọc theo thiết kế cụ thể. Cho dù bạn cần tìm một token cụ thể theo đường dẫn dấu chấm, thực hiện tìm kiếm toàn cục theo danh mục hay thực thi các thao tác đệ quy sâu, ",n.jsx(c.code,{children:"PropertiesItems"})," đóng vai trò là công cụ chính để khám phá thuộc tính."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tập trung vào Thiết kế (Design Focusing)"})," — Cho phép lọc toàn bộ phạm vi tương tác thuộc tính vào một chủ đề thiết kế hoặc cụm thành phần duy nhất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải Siêu dữ liệu Sâu"})," — Chuyển đổi các chuỗi chỉ mục đơn giản (ví dụ: ",n.jsx(c.code,{children:"theme.colors.primary"}),") thành các đối tượng thông tin toàn diện với ngữ cảnh cha đầy đủ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Công cụ Duyệt thống nhất"})," — Cung cấp các cơ chế ",n.jsx(c.code,{children:"each"})," và ",n.jsx(c.code,{children:"find"})," nhất quán cho cả việc khám phá phân cấp token theo kiểu nông và đệ quy sâu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi Ngữ nghĩa Đường dẫn"})," — Tự động xử lý chuẩn hóa đường dẫn, chuyển đổi kebab-to-camelCase và hỗ trợ các biểu tượng liên kết đặc biệt như ",n.jsx(c.code,{children:"?"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc theo Danh mục & Biến"})," — Bao gồm các phương pháp tìm kiếm được tối ưu hóa để trích xuất các tập hợp con token dựa trên danh mục chức năng hoặc loại biến của chúng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PropertiesItems(properties)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties: PropertyList"})," — danh sách đầy đủ các thuộc tính (cây token) cần quản lý."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo manager với cây token
const manager = new PropertiesItems(allTokenData)

// 2. (Tùy chọn) Tập trung môi trường vào một thiết kế cụ thể
manager.setFocusDesign('my-theme')

// 3. Truy xuất cấu trúc đã lọc
const currentTokens = manager.get()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): PropertyList"})," — trả về cấu trúc thuộc tính hiện tại (hỗ trợ lọc focus)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getDesigns(): string[]"})," — trả về danh sách các tên thiết kế có sẵn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getItem(index): PropertyItem"})," — truy xuất một bản ghi thuộc tính cụ thể theo chỉ mục của nó."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getInfo(index): PropertyItemsItem"})," — phân giải siêu dữ liệu đầy đủ và phân cấp cha cho một chỉ mục nhất định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getKeys(index): string[]"})," — giải mã một chuỗi đường dẫn thành các phân đoạn khóa đã chuẩn hóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getName(name, item): string"})," — trả về tên hiển thị của một thuộc tính, có tính đến việc đổi tên."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"each(callback, property?): T[]"})," — thực hiện duyệt đệ quy sâu của cây."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"find(callback): PropertyItemsItem[]"})," — tìm kiếm các bản ghi khớp với các điều kiện tùy chỉnh."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"findCategory(category): PropertyItemsItem[]"})," — trích xuất các token thuộc về các danh mục chức năng cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setFocusDesign(design): this"})," — giới hạn phạm vi hoạt động ở một thiết kế cụ thể."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-khám-phá-siêu-dữ-liệu--duyệt-cây",children:"Luồng Khám phá Siêu dữ liệu & Duyệt cây"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesItems"})," điều phối một số luồng logic phức tạp:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Giải mã chỉ mục"}),": Khi một chỉ mục như ",n.jsx(c.code,{children:"theme.button-main.color"})," được yêu cầu, nó chuẩn hóa các phân đoạn thành camelCase và phân giải chúng dựa trên các đối tượng ",n.jsx(c.code,{children:"value"})," lồng nhau của cây."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý Ngữ cảnh Đường dẫn"}),": Trong quá trình duyệt cây (",n.jsx(c.code,{children:"each"}),"), lớp duy trì một ngăn xếp ",n.jsx(c.code,{children:"parents"}),", cho phép mọi nút được khám phá biết chính xác vị trí của nó trong hệ thống phân cấp (quan trọng để tạo các biến CSS hoặc đường dẫn tài liệu)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cô lập Thiết kế"}),": Bằng cách gọi ",n.jsx(c.code,{children:"setFocusDesign()"}),', người dùng có thể chuyển đổi "chế độ xem" của toàn bộ cây. Các cuộc gọi tiếp theo đến ',n.jsx(c.code,{children:"get()"})," hoặc ",n.jsx(c.code,{children:"each()"})," sẽ tự động bỏ qua các thiết kế KHÔNG phải là thiết kế đang tập trung hoặc ",n.jsx(c.code,{children:"_constructor"})," chung."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa liên kết"}),": Các phương thức như ",n.jsx(c.code,{children:"getLink()"})," xử lý việc chuyển đổi các ký hiệu đường dẫn cũ (như ",n.jsx(c.code,{children:"??"})," và ",n.jsx(c.code,{children:"?"}),") thành các chỉ mục thuộc tính tuyệt đối, đủ điều kiện bằng cách thêm ngữ cảnh thiết kế và thành phần hiện tại vào trước."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
