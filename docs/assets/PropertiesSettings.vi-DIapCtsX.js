import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(h){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesSettings - Cài đặt thành phần"}),`
`,t.jsx(n.h1,{id:"lớp-propertiessettings",children:"Lớp PropertiesSettings"}),`
`,t.jsxs(n.p,{children:["Lớp ",t.jsx(n.code,{children:"PropertiesSettings"})," chịu trách nhiệm tự động tìm kiếm và tải các tệp cấu hình thành phần (settings) trên tất cả các thiết kế đang hoạt động. Nó quét các thư mục ",t.jsx(n.code,{children:"settings"})," chuyên biệt và hợp nhất các token tìm thấy vào một kho lưu trữ thống nhất, sau đó được sử dụng để tạo bảng kiểu và định kiểu."]}),`
`,t.jsx(n.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Quét tự động"})," — tự động phát hiện tất cả các thư mục thành phần trong đường dẫn ",t.jsx(n.code,{children:"components"})," và ",t.jsx(n.code,{children:"constructor"}),"."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Hỗ trợ đa thiết kế"})," — tải cài đặt cho từng thiết kế riêng biệt và kết hợp chúng theo ngữ cảnh."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Tích hợp Constructor"})," — bao gồm logic chuyên biệt để thu thập các thuộc tính trình xây dựng thành phần (",t.jsx(n.code,{children:"dxt.constructor"}),")."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Chuẩn hóa"})," — tự động chuyển đổi dữ liệu thô từ các tệp cài đặt thành định dạng thuộc tính tiêu chuẩn thông qua ",t.jsx(n.code,{children:"PropertiesStandard"}),"."]}),`
`]}),`
`,t.jsx(n.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,t.jsxs(n.p,{children:["Để khởi tạo bộ giải quyết cài đặt, hãy truyền một thực thể ",t.jsx(n.code,{children:"PropertiesPath"})," vào hàm khởi tạo."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Tham số:"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"path: PropertiesPath"})," — đối tượng làm việc với các đường dẫn của hệ thống thiết kế."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,t.jsx(n.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,t.jsx(n.h3,{id:"get",children:t.jsx(n.code,{children:"get"})}),`
`,t.jsx(n.p,{children:"Trả về một danh sách thống nhất của tất cả các thuộc tính cài đặt được tìm thấy trong hệ thống. Điều này bao gồm cả các cài đặt thành phần riêng lẻ cho từng thiết kế và các thuộc tính trình xây dựng thành phần chung."}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Trả về:"})," ",t.jsx(n.code,{children:"PropertyList"})," — một đối tượng chứa tất cả các cài đặt đã được tải và chuẩn hóa."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`const allSettings = settings.get();
// Kết quả: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,t.jsx(n.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,t.jsx(n.h3,{id:"quy-trình-thu-thập-cài-đặt",children:"Quy trình thu thập cài đặt"}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"PropertiesSettings"})," thực hiện tìm kiếm dữ liệu qua nhiều giai đoạn:"]}),`
`,t.jsxs(n.ol,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Xác định đường dẫn"}),": Lớp lấy các đường dẫn hiện tại đến các thư mục ",t.jsx(n.code,{children:"settings"})," cho từng thiết kế thông qua bộ quản lý đường dẫn."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Quét thư mục"}),": Đối với mỗi đường dẫn đã xác định, tất cả các thư mục con (tên thành phần) sẽ được quét."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Đọc tệp"}),": Trong mỗi thư mục thành phần, một tệp token (settings) sẽ được tìm kiếm và đọc thông qua ",t.jsx(n.code,{children:"PropertiesFile"}),"."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Bình thường hóa"}),": Dữ liệu lấy được được xử lý qua ",t.jsx(n.code,{children:"PropertiesStandard"})," để đưa về một định dạng thống nhất (",t.jsx(n.code,{children:"PropertyItem"}),"), bao gồm cả việc chuyển đổi tên sang kebab-case."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"Tạo Constructor"}),": Đồng thời, ",t.jsx(n.code,{children:"getConstructorProperties()"})," được gọi để tạo siêu dữ liệu cho trình xây dựng thành phần dựa trên danh sách các thư mục đã xác định."]}),`
`]}),`
`,t.jsx(n.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,t.jsx(n.h3,{id:"thu-thập-tất-cả-cài-đặt-hệ-thống",children:"Thu thập tất cả cài đặt hệ thống"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// Bây giờ config chứa tất cả các biến thành phần cho tất cả các chủ đề
`})})]})}function p(h={}){const{wrapper:n}={...i(),...h.components};return n?t.jsx(n,{...h,children:t.jsx(c,{...h})}):c(h)}export{p as default};
