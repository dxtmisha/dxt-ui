import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesPath - Bộ phân giải Đường dẫn & Môi trường"}),`
`,n.jsx(c.h1,{id:"lớp-propertiespath",children:"Lớp PropertiesPath"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesPath"})," là một tiện ích cốt lõi chịu trách nhiệm chuyển đổi các định danh thiết kế trừu tượng thành các đường dẫn vật lý thực tế trên hệ thống tệp. Nó quản lý việc ánh xạ thư mục cho cả token thiết kế toàn cầu và các ghi đè thành phần cụ thể, đảm bảo việc khám phá đường dẫn đa nền tảng luôn nhất quán. Bằng cách cung cấp các phương thức duyệt kề (traversal) có lưu bộ nhớ đệm (cached) như ",n.jsx(c.code,{children:"to"})," và ",n.jsx(c.code,{children:"toAll"}),", nó điều phối chuỗi tải dữ liệu cho các dự án đa chủ đề, đóng vai trò là nguồn thông tin môi trường chính cho engine thuộc tính."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ánh xạ Đa thiết kế"})," — Tự động ánh xạ một mảng tên thiết kế tới các thư mục token và thành phần tương ứng của chúng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá Gốc đa nền tảng"})," — Cung cấp ",n.jsx(c.code,{children:"PropertiesFile"})," để đảm bảo các đường dẫn là tuyệt đối và được phân giải chính xác trên các hệ điều hành khác nhau."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tối ưu hóa Nội bộ (Caching)"})," — Tích hợp với ",n.jsx(c.code,{children:"PropertiesCache"})," để giảm thiểu việc truy cập hệ thống tệp dư thừa trong các quy trình chuyển đổi token phức tạp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát hiện Chế độ Constructor"})," — Xác định và xử lý thiết kế đặc biệt ",n.jsx(c.code,{children:"_constructor"}),", đóng vai trò là cơ sở chung cho tất cả các chủ đề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Duyệt dữ liệu linh hoạt"})," — Cung cấp các lệnh gọi lại (callbacks) cấp cao để xử lý các tệp thiết kế mà không để lộ các chi tiết thô của hệ thống tệp."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PropertiesPath(designs)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"designs: string[]"})," — một danh sách các tên thiết kế tương ứng với tên thư mục trong cấu trúc dự án."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Xác định các thiết kế cần quản lý
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Tạo thực thể bộ phân giải đường dẫn
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Phân giải đường dẫn cho một thiết kế cụ thể
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isConstructor(): boolean"})," — kiểm tra xem môi trường hiện tại có bao gồm thiết kế constructor cơ sở hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getDesigns(): string[]"})," — trả về danh sách tên thiết kế được đăng ký trong thực thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getPath(name): PropertiesPathItem"})," — truy xuất các đường dẫn cụ thể (toàn cầu và thành phần) cho một thiết kế nhất định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getPaths(): PropertiesPathList"})," — trả về bản đăng ký đầy đủ của các ánh xạ từ thiết kế đến đường dẫn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"to(name, design, callback): T"})," — thực thi một lệnh gọi lại chuyển đổi có lưu bộ nhớ đệm cho một thiết kế cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"toAll(name, callback): T"})," — điều phối một quá trình chuyển đổi toàn cầu có lưu bộ nhớ đệm trên tất cả các thiết kế đã đăng ký."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-khám-phá-môi-trường--lưu-bộ-nhớ-đệm",children:"Luồng Khám phá Môi trường & Lưu bộ nhớ đệm"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesPath"})," quản lý việc ánh xạ giữa logic cấp cao và lưu trữ vật lý:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp thư mục"}),": Khi khởi tạo, lớp chuẩn hóa tên thiết kế thành kiểu kebab-case và sử dụng logic ",n.jsx(c.code,{children:"getDir"})," nội bộ để tổng hợp các đường dẫn tuyệt đối đến ",n.jsx(c.code,{children:"UI_DIRS_TOKENS"})," và ",n.jsx(c.code,{children:"UI_DIRS_COMPONENTS"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cô lập Thiết kế"}),": Lớp phân biệt giữa các chủ đề tiêu chuẩn và ",n.jsx(c.code,{children:"_constructor"}),". Nếu một thiết kế được đánh dấu là constructor, việc khám phá thư mục tiêu chuẩn sẽ bị bỏ qua để cho phép xử lý lớp cơ sở chuyên biệt."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi có lưu bộ nhớ đệm"}),": Khi ",n.jsx(c.code,{children:"to()"})," hoặc ",n.jsx(c.code,{children:"toAll()"})," được gọi, lớp không chỉ trả về các đường dẫn — nó còn cố gắng lấy dữ liệu đã xử lý trước đó từ ",n.jsx(c.code,{children:"PropertiesCache"}),". Nếu xảy ra tình trạng không tìm thấy trong bộ nhớ đệm (cache miss), lệnh gọi lại được cung cấp sẽ được thực thi với các đường dẫn đã phân giải và kết quả mới sẽ được lưu trữ một cách minh bạch."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp Hệ thống phân cấp Thống nhất"}),": Thông qua ",n.jsx(c.code,{children:"toAll()"}),', lớp cho phép mẫu "hợp nhất ngược" (merge-up), trong đó các token từ nhiều thiết kế (ví dụ: ',n.jsx(c.code,{children:"constructor"})," + ",n.jsx(c.code,{children:"basic"})," + ",n.jsx(c.code,{children:"local-theme"}),") được tải theo chuỗi và kết hợp thành một cấu trúc phân cấp duy nhất bằng ",n.jsx(c.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function p(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{p as default};
