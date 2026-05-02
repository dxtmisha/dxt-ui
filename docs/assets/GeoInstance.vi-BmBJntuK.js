import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/GeoInstance - Đối Tượng Dữ Liệu Địa Lý`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geoinstance`,children:`Lớp GeoInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp dựa trên đối tượng (instance-based) để quản lý dữ liệu địa lý. Nó xử lý các mã ngôn ngữ (ISO 639-1), mã quốc gia (ISO 3166-1 alpha-2), múi giờ và địa phương hóa. Khác với lớp tĩnh `,(0,c.jsx)(n.code,{children:`Geo`}),`, `,(0,c.jsx)(n.code,{children:`GeoInstance`}),` cho phép tạo các đối tượng độc lập với trạng thái riêng, điều này đặc biệt hữu ích cho việc cô lập yêu cầu (request isolation) trong môi trường SSR hoặc các ứng dụng đa ngữ cảnh.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hướng đối tượng`}),` — cho phép tạo nhiều phiên bản (instances) with các cấu hình khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động phát hiện`}),` — xác định thông minh địa phương (locale) thông qua bộ nhớ lưu trữ hoặc các mặc định của môi trường khi khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp cơ sở dữ liệu truyền thông`}),` — cung cấp quyền truy cập vào cơ sở dữ liệu toàn diện về các quốc gia và ngôn ngữ từ thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/media`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thời gian linh hoạt`}),` — thiết lập và truy xuất độ lệch múi giờ ở cấp độ đối tượng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể tạo một đối tượng mới của lớp để quản lý một ngữ cảnh địa lý cụ thể.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geo = new GeoInstance()

// Lấy mã ngôn ngữ hiện tại
console.log(geo.getLanguage()) // ví dụ: 'vi'

// Thiết lập địa phương mới cho đối tượng này
geo.set('en-US')

// Lấy múi giờ đã định dạng
console.log(geo.getTimezoneFormat()) // ví dụ: '+07:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): GeoItemFull`}),` — Trả về đối tượng dữ liệu đầy đủ cho quốc gia và ngôn ngữ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): GeoItemFull`}),` — Trả về một bản sao của đối tượng cài đặt hiện tại, có tính đến ngôn ngữ động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCountry(): string`}),` — Trả về mã 2 chữ cái của quốc gia hiện tại (viết hoa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Trả về mã 2 chữ cái của ngôn ngữ hiện tại (viết thường).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStandard(): string`}),` — Trả về chuỗi địa phương kết hợp dựa trên cài đặt hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`'en-VN'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Trả về chuỗi địa phương thô hiện đang được thiết lập.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Trả về mã cho ngày đầu tiên của tuần của địa phương hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`'Mo'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezone(): number`}),` — Trả về độ lệch múi giờ tính bằng phút.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTimezoneFormat(): string`}),` — Trả về độ lệch múi giờ ở định dạng chuỗi (ví dụ: `,(0,c.jsx)(n.code,{children:`'+07:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lựa-chọn`,children:`Lựa chọn`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoItem[]`}),` — Trả về danh sách đầy đủ các quốc gia và ngôn ngữ có sẵn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(code: string): GeoItemFull`}),` — Một bí danh cho phương thức `,(0,c.jsx)(n.code,{children:`getByCode`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Tìm kiếm dữ liệu theo mã. `,(0,c.jsx)(n.strong,{children:`Ưu tiên: Ngôn ngữ trước`}),`, sau đó đến Quốc gia. Nếu cung cấp mã `,(0,c.jsx)(n.code,{children:`en-VN`}),`, nó sẽ trả về bản ghi cho tiếng Anh (`,(0,c.jsx)(n.code,{children:`en-US`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Tìm kiếm kết quả khớp chính xác theo mã địa phương đầy đủ (ví dụ: `,(0,c.jsx)(n.code,{children:`vi-VN`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Tìm kiếm dữ liệu cụ thể theo mã quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Tìm kiếm dữ liệu cụ thể theo mã ngôn ngữ.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string, save?: boolean): void`}),` — Thiết lập địa phương cho đối tượng hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTimezone(timezone: number): void`}),` — Thiết lập độ lệch múi giờ tùy chỉnh tính bằng phút.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phụ-trợ`,children:`Phụ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toStandard(item: GeoItem): string`}),` — Tạo chuỗi `,(0,c.jsx)(n.code,{children:`'ngôn ngữ-quốc gia'`}),` tiêu chuẩn từ đối tượng `,(0,c.jsx)(n.code,{children:`GeoItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`ngữ-cảnh-độc-lập`,children:`Ngữ cảnh độc lập`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geoVI = new GeoInstance()
geoVI.set('vi-VN')

const geoEN = new GeoInstance()
geoEN.set('en-US')

console.log(geoVI.getLanguage()) // 'vi'
console.log(geoEN.getLanguage()) // 'en'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};