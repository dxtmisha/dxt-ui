import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/Geo - Dữ liệu Vùng Miền Toàn Cầu"}),`
`,n.jsx(i.h1,{id:"lớp-geo",children:"Lớp Geo"}),`
`,n.jsx(i.p,{children:"Một lớp tiện ích tĩnh (static class) để quản lý tập trung dữ liệu địa lý của ứng dụng. Nó xử lý các mã ngôn ngữ (ISO 639-1), mã quốc gia (ISO 3166-1 alpha-2), múi giờ và địa phương hóa. Lớp này tự động phát hiện các cài đặt môi trường và đảm bảo việc sử dụng nhất quán trong toàn bộ hệ thống."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tự động phát hiện"})," — xác định thông minh địa phương (locale) của người dùng thông qua ",n.jsx(i.code,{children:"navigator.language"})," hoặc các thuộc tính HTML nếu không được xác định rõ ràng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lưu trữ lâu dài"})," — sử dụng ",n.jsx(i.code,{children:"DataStorage"})," để lưu và khôi phục các tùy chọn ngôn ngữ và quốc gia do người dùng chọn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tích hợp cơ sở dữ liệu truyền thông"})," — cung cấp quyền truy cập vào cơ sở dữ liệu toàn diện về các quốc gia và ngôn ngữ từ thư viện ",n.jsx(i.code,{children:"@dxtmisha/media"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quản lý thời gian toàn cầu"})," — thiết lập và truy xuất tập trung các độ lệch múi giờ để xử lý ngày tháng chính xác."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Truy cập tĩnh"})," — tất cả các phương thức đều là tĩnh, loại bỏ nhu cầu khởi tạo (",n.jsx(i.code,{children:"new Geo()"}),")."]}),`
`]}),`
`,n.jsx(i.h2,{id:"cách-sử-dụng-cơ-bản",children:"Cách sử dụng cơ bản"}),`
`,n.jsx(i.p,{children:"Vì lớp này là tĩnh, các phương thức của nó có thể được gọi trực tiếp."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Lấy mã ngôn ngữ hiện tại
console.log(Geo.getLanguage()) // ví dụ: 'vi'

// Thiết lập một địa phương mới và lưu lại
Geo.set('en-US', true)

// Lấy múi giờ đã định dạng
console.log(Geo.getTimezoneFormat()) // ví dụ: '+07:00'
`})}),`
`,n.jsx(i.h2,{id:"phương-pháp",children:"Phương pháp"}),`
`,n.jsx(i.h3,{id:"thông-tin-chung",children:"Thông tin chung"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"get(): GeoItemFull"})," — Trả về đối tượng dữ liệu đầy đủ cho quốc gia và ngôn ngữ hiện tại."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getCountry(): string"})," — Trả về mã 2 chữ cái của quốc gia hiện tại (viết hoa)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getLanguage(): string"})," — Trả về mã 2 chữ cái của ngôn ngữ hiện tại (viết thường)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getStandard(): string"})," — Trả về chuỗi địa phương kết hợp (ví dụ: ",n.jsx(i.code,{children:"'vi-VN'"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getFirstDay(): string"})," — Trả về mã cho ngày đầu tiên của tuần của địa phương hiện tại (ví dụ: ",n.jsx(i.code,{children:"'Mo'"}),", ",n.jsx(i.code,{children:"'Su'"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getLocation(): string"})," — Trả về địa phương hiện đang được thiết lập dưới dạng chuỗi."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getItem(): GeoItemFull"})," — Trả về một bản sao của đối tượng cài đặt hiện tại, có tính đến ngôn ngữ."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTimezone(): number"})," — Trả về độ lệch múi giờ tính bằng phút."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTimezoneFormat(): string"})," — Trả về độ lệch múi giờ ở định dạng chuỗi (ví dụ: ",n.jsx(i.code,{children:"'+07:00'"}),")."]}),`
`]}),`
`,n.jsx(i.h3,{id:"danh-sách-và-tìm-kiếm",children:"Danh sách và Tìm kiếm"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getList(): GeoItem[]"})," — Trả về danh sách đầy đủ các quốc gia và ngôn ngữ có sẵn từ cơ sở dữ liệu truyền thông."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getByCode(code?: string): GeoItemFull"})," — Tìm kiếm dữ liệu theo mã ngôn ngữ hoặc quốc gia (có hỗ trợ dự phòng)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getByCodeFull(code: string): GeoItem | undefined"})," — Tìm kiếm kết quả khớp chính xác theo mã địa phương đầy đủ (ngôn ngữ-quốc gia)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getByCountry(country: string): GeoItem | undefined"})," — Tìm kiếm dữ liệu theo mã quốc gia hoặc tên thay thế."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getByLanguage(language: string): GeoItem | undefined"})," — Tìm kiếm dữ liệu theo mã ngôn ngữ."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"find(code: string): GeoItemFull"})," — Một bí danh cho phương thức ",n.jsx(i.code,{children:"getByCode"}),"."]}),`
`]}),`
`,n.jsx(i.h3,{id:"thao-tác-dữ-liệu-setters",children:"Thao tác dữ liệu (Setters)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"set(code: string, save?: boolean): void"})," — Thiết lập địa phương hiện tại trên toàn cầu. Nếu ",n.jsx(i.code,{children:"save"})," là ",n.jsx(i.code,{children:"true"}),", sẽ lưu lựa chọn vào ",n.jsx(i.code,{children:"localStorage"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setTimezone(timezone: number): void"})," — Thiết lập độ lệch múi giờ tùy chỉnh tính bằng phút."]}),`
`]}),`
`,n.jsx(i.h3,{id:"tiện-ích",children:"Tiện ích"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"toStandard(item: GeoItem): string"})," — Một phương thức tĩnh để tạo chuỗi ",n.jsx(i.code,{children:"'ngôn ngữ-quốc gia'"})," tiêu chuẩn từ đối tượng ",n.jsx(i.code,{children:"GeoItem"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.h3,{id:"thiết-lập-địa-phương-thủ-công-khi-khởi-chạy-ứng-dụng",children:"Thiết lập địa phương thủ công khi khởi chạy ứng dụng"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Geo } from '@dxtmisha/functional-basic'

// Giả sử chúng ta đã lấy được cài đặt của người dùng từ một API
const userLocale = 'ja-JP'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'JP'
`})}),`
`,n.jsx(i.h3,{id:"làm-việc-với-múi-giờ",children:"Làm việc với múi giờ"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`// Thiết lập độ lệch cho Tokyo (UTC+9)
Geo.setTimezone(-540) // độ lệch tính bằng phút (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,n.jsx(i.h3,{id:"truy-xuất-danh-sách-quốc-gia-cho-một-bộ-chọn-selector",children:"Truy xuất danh sách quốc gia cho một bộ chọn (Selector)"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:"const countries = Geo.getList().map(item => ({\n  value: item.country,\n  label: `${item.language.toUpperCase()} - ${item.country}`\n}))\n"})})]})}function a(c={}){const{wrapper:i}={...h(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(e,{...c})}):e(c)}export{a as default};
