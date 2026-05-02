import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesSettings - Cài đặt thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiessettings`,children:`Lớp PropertiesSettings`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesSettings`}),` chịu trách nhiệm tự động tìm kiếm và tải các tệp cấu hình thành phần (settings) trên tất cả các thiết kế đang hoạt động. Nó quét các thư mục `,(0,c.jsx)(n.code,{children:`settings`}),` chuyên biệt và hợp nhất các token tìm thấy vào một kho lưu trữ thống nhất, sau đó được sử dụng để tạo bảng kiểu và định kiểu.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét tự động`}),` — tự động phát hiện tất cả các thư mục thành phần trong đường dẫn `,(0,c.jsx)(n.code,{children:`components`}),` và `,(0,c.jsx)(n.code,{children:`constructor`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ đa thiết kế`}),` — tải cài đặt cho từng thiết kế riêng biệt và kết hợp chúng theo ngữ cảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Constructor`}),` — bao gồm logic chuyên biệt để thu thập các thuộc tính trình xây dựng thành phần (`,(0,c.jsx)(n.code,{children:`dxt.constructor`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa`}),` — tự động chuyển đổi dữ liệu thô từ các tệp cài đặt thành định dạng thuộc tính tiêu chuẩn thông qua `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo bộ giải quyết cài đặt, hãy truyền một thực thể `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` vào hàm khởi tạo.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesPath`}),` — đối tượng làm việc với các đường dẫn của hệ thống thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về một danh sách thống nhất của tất cả các thuộc tính cài đặt được tìm thấy trong hệ thống. Điều này bao gồm cả các cài đặt thành phần riêng lẻ cho từng thiết kế và các thuộc tính trình xây dựng thành phần chung.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList`}),` — một đối tượng chứa tất cả các cài đặt đã được tải và chuẩn hóa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const allSettings = settings.get();
// Kết quả: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-thu-thập-cài-đặt`,children:`Quy trình thu thập cài đặt`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesSettings`}),` thực hiện tìm kiếm dữ liệu qua nhiều giai đoạn:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định đường dẫn`}),`: Lớp lấy các đường dẫn hiện tại đến các thư mục `,(0,c.jsx)(n.code,{children:`settings`}),` cho từng thiết kế thông qua bộ quản lý đường dẫn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét thư mục`}),`: Đối với mỗi đường dẫn đã xác định, tất cả các thư mục con (tên thành phần) sẽ được quét.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đọc tệp`}),`: Trong mỗi thư mục thành phần, một tệp token (settings) sẽ được tìm kiếm và đọc thông qua `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bình thường hóa`}),`: Dữ liệu lấy được được xử lý qua `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),` để đưa về một định dạng thống nhất (`,(0,c.jsx)(n.code,{children:`PropertyItem`}),`), bao gồm cả việc chuyển đổi tên sang kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Constructor`}),`: Đồng thời, `,(0,c.jsx)(n.code,{children:`getConstructorProperties()`}),` được gọi để tạo siêu dữ liệu cho trình xây dựng thành phần dựa trên danh sách các thư mục đã xác định.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`thu-thập-tất-cả-cài-đặt-hệ-thống`,children:`Thu thập tất cả cài đặt hệ thống`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// Bây giờ config chứa tất cả các biến thành phần cho tất cả các chủ đề
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};