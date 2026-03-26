import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesPath - Bộ phân giải Đường dẫn & Môi trường`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiespath`,children:`Lớp PropertiesPath`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` là một tiện ích cốt lõi chịu trách nhiệm chuyển đổi các định danh thiết kế trừu tượng thành các đường dẫn vật lý thực tế trên hệ thống tệp. Nó quản lý việc ánh xạ thư mục cho cả token thiết kế toàn cầu và các ghi đè thành phần cụ thể, đảm bảo việc khám phá đường dẫn đa nền tảng luôn nhất quán. Bằng cách cung cấp các phương thức duyệt kề (traversal) có lưu bộ nhớ đệm (cached) như `,(0,c.jsx)(n.code,{children:`to`}),` và `,(0,c.jsx)(n.code,{children:`toAll`}),`, nó điều phối chuỗi tải dữ liệu cho các dự án đa chủ đề, đóng vai trò là nguồn thông tin môi trường chính cho engine thuộc tính.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ Đa thiết kế`}),` — Tự động ánh xạ một mảng tên thiết kế tới các thư mục token và thành phần tương ứng của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá Gốc đa nền tảng`}),` — Cung cấp `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` để đảm bảo các đường dẫn là tuyệt đối và được phân giải chính xác trên các hệ điều hành khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa Nội bộ (Caching)`}),` — Tích hợp với `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` để giảm thiểu việc truy cập hệ thống tệp dư thừa trong các quy trình chuyển đổi token phức tạp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện Chế độ Constructor`}),` — Xác định và xử lý thiết kế đặc biệt `,(0,c.jsx)(n.code,{children:`_constructor`}),`, đóng vai trò là cơ sở chung cho tất cả các chủ đề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt dữ liệu linh hoạt`}),` — Cung cấp các lệnh gọi lại (callbacks) cấp cao để xử lý các tệp thiết kế mà không để lộ các chi tiết thô của hệ thống tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`PropertiesPath(designs)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`designs: string[]`}),` — một danh sách các tên thiết kế tương ứng với tên thư mục trong cấu trúc dự án.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Xác định các thiết kế cần quản lý
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Tạo thực thể bộ phân giải đường dẫn
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Phân giải đường dẫn cho một thiết kế cụ thể
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isConstructor(): boolean`}),` — kiểm tra xem môi trường hiện tại có bao gồm thiết kế constructor cơ sở hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — trả về danh sách tên thiết kế được đăng ký trong thực thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(name): PropertiesPathItem`}),` — truy xuất các đường dẫn cụ thể (toàn cầu và thành phần) cho một thiết kế nhất định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPaths(): PropertiesPathList`}),` — trả về bản đăng ký đầy đủ của các ánh xạ từ thiết kế đến đường dẫn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(name, design, callback): T`}),` — thực thi một lệnh gọi lại chuyển đổi có lưu bộ nhớ đệm cho một thiết kế cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toAll(name, callback): T`}),` — điều phối một quá trình chuyển đổi toàn cầu có lưu bộ nhớ đệm trên tất cả các thiết kế đã đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-khám-phá-môi-trường--lưu-bộ-nhớ-đệm`,children:`Luồng Khám phá Môi trường & Lưu bộ nhớ đệm`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesPath`}),` quản lý việc ánh xạ giữa logic cấp cao và lưu trữ vật lý:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp thư mục`}),`: Khi khởi tạo, lớp chuẩn hóa tên thiết kế thành kiểu kebab-case và sử dụng logic `,(0,c.jsx)(n.code,{children:`getDir`}),` nội bộ để tổng hợp các đường dẫn tuyệt đối đến `,(0,c.jsx)(n.code,{children:`UI_DIRS_TOKENS`}),` và `,(0,c.jsx)(n.code,{children:`UI_DIRS_COMPONENTS`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cô lập Thiết kế`}),`: Lớp phân biệt giữa các chủ đề tiêu chuẩn và `,(0,c.jsx)(n.code,{children:`_constructor`}),`. Nếu một thiết kế được đánh dấu là constructor, việc khám phá thư mục tiêu chuẩn sẽ bị bỏ qua để cho phép xử lý lớp cơ sở chuyên biệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi có lưu bộ nhớ đệm`}),`: Khi `,(0,c.jsx)(n.code,{children:`to()`}),` hoặc `,(0,c.jsx)(n.code,{children:`toAll()`}),` được gọi, lớp không chỉ trả về các đường dẫn — nó còn cố gắng lấy dữ liệu đã xử lý trước đó từ `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),`. Nếu xảy ra tình trạng không tìm thấy trong bộ nhớ đệm (cache miss), lệnh gọi lại được cung cấp sẽ được thực thi với các đường dẫn đã phân giải và kết quả mới sẽ được lưu trữ một cách minh bạch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp Hệ thống phân cấp Thống nhất`}),`: Thông qua `,(0,c.jsx)(n.code,{children:`toAll()`}),`, lớp cho phép mẫu "hợp nhất ngược" (merge-up), trong đó các token từ nhiều thiết kế (ví dụ: `,(0,c.jsx)(n.code,{children:`constructor`}),` + `,(0,c.jsx)(n.code,{children:`basic`}),` + `,(0,c.jsx)(n.code,{children:`local-theme`}),`) được tải theo chuỗi và kết hợp thành một cấu trúc phân cấp duy nhất bằng `,(0,c.jsx)(n.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};