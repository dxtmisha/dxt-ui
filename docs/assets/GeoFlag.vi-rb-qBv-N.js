import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/GeoFlag - Cờ các quốc gia`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geoflag`,children:`Lớp GeoFlag`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để làm việc với cờ các quốc gia và thông tin địa lý. Nó cung cấp một giao diện thuận tiện để lấy các biểu tượng cờ, tên quốc gia và ngôn ngữ đã được bản địa hóa. Nó sử dụng các singleton `,(0,c.jsx)(n.code,{children:`Geo`}),` và `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` để giải quyết dữ liệu một cách chính xác dựa trên ngôn ngữ hiện tại.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Từ điển cờ`}),` — danh sách `,(0,c.jsx)(n.code,{children:`flags`}),` tĩnh tích hợp ánh xạ mã ISO 3166-1 alpha-2 với tên biểu tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dữ liệu được bản địa hóa`}),` — tự động dịch tên quốc gia và ngôn ngữ sang ngôn ngữ giao diện hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ quốc gia`}),` — khả năng lấy tên quốc gia bằng ngôn ngữ "gốc" của họ (ví dụ: "Nhật Bản" và "日本" đồng thời).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khả năng mở rộng`}),` — hỗ trợ lọc và lấy danh sách đầy đủ cho các bộ chọn quốc gia.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để tạo một thực thể, hãy sử dụng constructor `,(0,c.jsx)(n.code,{children:`GeoFlag(code)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — mã quốc gia hoặc ngôn ngữ (ví dụ: `,(0,c.jsx)(n.code,{children:`'VN'`}),`, `,(0,c.jsx)(n.code,{children:`'vi-VN'`}),`). Nếu không được chỉ định, ngôn ngữ hiện tại từ hệ thống `,(0,c.jsx)(n.code,{children:`Geo`}),` sẽ được sử dụng.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Với ngôn ngữ hiện tại
const flag = new GeoFlag()

// Cho một quốc gia cụ thể
const vnFlag = new GeoFlag('vi-VN')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`lấy-dữ-liệu`,children:`Lấy dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Trả về một đối tượng dữ liệu đầy đủ về một quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Trả về chỉ định danh biểu tượng cờ (ví dụ: `,(0,c.jsx)(n.code,{children:`'f-vn'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`danh-sách`,children:`Danh sách`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Trả về một mảng dữ liệu quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Trả về danh sách các quốc gia với tên quốc gia gốc.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Thay đổi ngôn ngữ cơ sở cho thực thể hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-danh-sách`,children:`Các phương thức danh sách`}),`
`,(0,c.jsx)(n.p,{children:`Sự khác biệt chính giữa các phương thức nằm ở ngôn ngữ mà tên quốc gia và ngôn ngữ được trả về:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getList`})}),` — trả về tên chỉ bằng ngôn ngữ được thiết lập trong thực thể lớp (ví dụ: tất cả bằng tiếng Việt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getNational`})}),` — trả về tên bằng ngôn ngữ giao diện của bạn + thêm tên gốc bằng ngôn ngữ của chính quốc gia đó (ví dụ: "Nhật Bản" và "日本").`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ví-dụ-về-sự-khác-biệt-trong-kết-quả`,children:`Ví dụ về sự khác biệt trong kết quả:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('vi-VN') // Ngôn ngữ tiếng Việt được thiết lập

// 1. getList chỉ trả về bản dịch
const list = geo.getList(['JP']) 
/* 
[{ country: 'Nhật Bản', ... }] 
*/

// 2. getNational trả về bản dịch + tên gốc
const national = geo.getNational(['JP']) 
/* 
[{ 
  country: 'Nhật Bản', 
  nationalCountry: '日本', 
  ... 
}] 
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:(0,c.jsx)(n.code,{children:`GeoFlagItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng thông tin cờ cơ bản.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country`}),`: string — Tên quốc gia đã được bản địa hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language`}),`: string — Tên ngôn ngữ đã được bản địa hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard`}),`: string — Tiêu chuẩn ngôn ngữ đầy đủ (ví dụ: `,(0,c.jsx)(n.code,{children:`vi-VN`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon`}),`: string — Tên biểu tượng cờ (tiền tố `,(0,c.jsx)(n.code,{children:`f-`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label`}),`: string — Nhãn hiển thị (mặc định khớp với `,(0,c.jsx)(n.code,{children:`country`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value`}),`: string — Mã quốc gia (ISO alpha-2).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:(0,c.jsx)(n.code,{children:`GeoFlagNational`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mở rộng `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),` với các trường bổ sung:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry`}),`: string — Tên quốc gia bằng ngôn ngữ gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage`}),`: string — Tên ngôn ngữ bằng ngôn ngữ gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description`}),`: string — Mô tả ngắn gọn (sao chép `,(0,c.jsx)(n.code,{children:`nationalCountry`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`danh-sách-các-quốc-gia-phổ-biến-với-tên-quốc-gia-gốc`,children:`Danh sách các quốc gia phổ biến với tên quốc gia gốc`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('vi-VN')
const list = geo.getNational(['VN', 'CN', 'JP'])

/* 
Kết quả:
[
  { 
    country: 'Việt Nam', 
    nationalCountry: 'Việt Nam', 
    icon: 'f-vn', 
    ... 
  },
  { 
    country: 'Trung Quốc', 
    nationalCountry: '中国', 
    icon: 'f-cn', 
    ... 
  },
  { 
    country: 'Nhật Bản', 
    nationalCountry: '日本', 
    icon: 'f-jp', 
    ... 
  }
]
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};