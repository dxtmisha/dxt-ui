import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Geo - Dữ liệu Vùng Miền Toàn Cầu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-geo`,children:`Lớp Geo`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp tiện ích tĩnh (static class) để quản lý tập trung dữ liệu địa lý của ứng dụng. Nó xử lý các mã ngôn ngữ (ISO 639-1), mã quốc gia (ISO 3166-1 alpha-2), múi giờ và địa phương hóa. Lớp này tự động phát hiện các cài đặt môi trường và đảm bảo việc sử dụng nhất quán trong toàn bộ hệ thống.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động phát hiện`}),` — xác định thông minh địa phương (locale) thông qua bộ nhớ hoặc mặc định của môi trường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ lâu dài`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`DataStorage`}),` để lưu và khôi phục các tùy chọn của người dùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp cơ sở dữ liệu truyền thông`}),` — cung cấp quyền truy cập vào cơ sở dữ liệu quốc gia và ngôn ngữ từ thư viện `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý thời gian toàn cầu`}),` — thiết lập và truy xuất tập trung các độ lệch múi giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Truy cập tĩnh`}),` — cung cấp giao diện toàn cầu thuận tiện mà không cần khởi tạo thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(t.p,{children:`Vì lớp này là tĩnh, các phương thức của nó có thể được gọi trực tiếp.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Lấy mã ngôn ngữ hiện tại
console.log(Geo.getLanguage()) // ví dụ: 'vi'

// Thiết lập một địa phương mới và lưu lại
Geo.set('en-US', true)

// Lấy múi giờ đã định dạng
console.log(Geo.getTimezoneFormat()) // ví dụ: '+07:00'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-pháp`,children:`Phương pháp`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin-chung`,children:`Thông tin chung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): GeoItemFull`}),` — Trả về đối tượng dữ liệu đầy đủ cho quốc gia và ngôn ngữ hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCountry(): string`}),` — Trả về mã 2 chữ cái của quốc gia hiện tại (viết hoa).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): string`}),` — Trả về mã 2 chữ cái của ngôn ngữ hiện tại (viết thường).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStandard(): string`}),` — Trả về chuỗi địa phương kết hợp (ví dụ: `,(0,c.jsx)(t.code,{children:`'vi-VN'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): string`}),` — Trả về mã cho ngày đầu tiên của tuần của địa phương hiện tại (ví dụ: `,(0,c.jsx)(t.code,{children:`'Mo'`}),`, `,(0,c.jsx)(t.code,{children:`'Su'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): string`}),` — Trả về địa phương hiện đang được thiết lập dưới dạng chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): GeoItemFull`}),` — Trả về một bản sao của đối tượng cài đặt hiện tại, có tính đến ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimezone(): number`}),` — Trả về độ lệch múi giờ tính bằng phút.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimezoneFormat(): string`}),` — Trả về độ lệch múi giờ ở định dạng chuỗi (ví dụ: `,(0,c.jsx)(t.code,{children:`'+07:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`danh-sách-và-tìm-kiếm`,children:`Danh sách và Tìm kiếm`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): GeoItem[]`}),` — Trả về danh sách đầy đủ các quốc gia và ngôn ngữ có sẵn từ cơ sở dữ liệu truyền thông.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Tìm kiếm dữ liệu theo mã ngôn ngữ hoặc quốc gia (có hỗ trợ dự phòng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Tìm kiếm kết quả khớp chính xác theo mã địa phương đầy đủ (ngôn ngữ-quốc gia).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Tìm kiếm dữ liệu theo mã quốc gia hoặc tên thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Tìm kiếm dữ liệu theo mã ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`find(code: string): GeoItemFull`}),` — Một bí danh cho phương thức `,(0,c.jsx)(t.code,{children:`getByCode`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-dữ-liệu-setters`,children:`Thao tác dữ liệu (Setters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(code: string, save?: boolean): void`}),` — Thiết lập địa phương hiện tại trên toàn cầu. Nếu `,(0,c.jsx)(t.code,{children:`save`}),` là `,(0,c.jsx)(t.code,{children:`true`}),`, sẽ lưu lựa chọn vào `,(0,c.jsx)(t.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTimezone(timezone: number): void`}),` — Thiết lập độ lệch múi giờ tùy chỉnh tính bằng phút.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tiện-ích`,children:`Tiện ích`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toStandard(item: GeoItem): string`}),` — Một phương thức tĩnh để tạo chuỗi `,(0,c.jsx)(t.code,{children:`'ngôn ngữ-quốc gia'`}),` tiêu chuẩn từ đối tượng `,(0,c.jsx)(t.code,{children:`GeoItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`thiết-lập-địa-phương-thủ-công-khi-khởi-chạy-ứng-dụng`,children:`Thiết lập địa phương thủ công khi khởi chạy ứng dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Giả sử chúng ta đã lấy được cài đặt của người dùng từ một API
const userLocale = 'ja-JP'

Geo.set(userLocale)
console.log(Geo.getCountry()) // 'JP'
`})}),`
`,(0,c.jsx)(t.h3,{id:`làm-việc-với-múi-giờ`,children:`Làm việc với múi giờ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Thiết lập độ lệch cho Tokyo (UTC+9)
Geo.setTimezone(-540) // độ lệch tính bằng phút (9 * 60)

console.log(Geo.getTimezoneFormat()) // '+09:00'
`})}),`
`,(0,c.jsx)(t.h3,{id:`truy-xuất-danh-sách-quốc-gia-cho-một-bộ-chọn-selector`,children:`Truy xuất danh sách quốc gia cho một bộ chọn (Selector)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const countries = Geo.getList().map(item => ({
  value: item.country,
  label: \`\${item.language.toUpperCase()} - \${item.country}\`
}))
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};