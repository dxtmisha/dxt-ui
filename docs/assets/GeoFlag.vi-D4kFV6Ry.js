import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/GeoFlag - Cờ Quốc gia`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geoflag`,children:`Lớp GeoFlag`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp dành cho việc làm việc với cờ quốc gia. Cung cấp giao diện thuận tiện để truy xuất biểu tượng cờ, tên quốc gia và ngôn ngữ đã được bản địa hóa dựa trên mã quốc gia hoặc ngôn ngữ. Sử dụng `,(0,c.jsx)(n.code,{children:`Geo`}),` và `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` để phân giải các tên gọi đã được bản địa hóa.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Từ điển cờ`}),` — Từ điển tĩnh (`,(0,c.jsx)(n.code,{children:`flags`}),`) tích hợp sẵn, ánh xạ mã quốc gia ISO 3166-1 alpha-2 tới tên biểu tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tên gọi đã bản địa hóa`}),` — Trả về tên quốc gia và ngôn ngữ theo ngôn ngữ giao diện hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tên gọi dân tộc`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`getNational`}),` trả về tên quốc gia theo ngôn ngữ của chính nước đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc linh hoạt`}),` — Các phương thức danh sách hỗ trợ lọc theo mảng mã quốc gia.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thực thể `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` mới với mã quốc gia hoặc ngôn ngữ tùy chọn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Mã quốc gia hoặc ngôn ngữ (ví dụ: `,(0,c.jsx)(n.code,{children:`'VN'`}),`, `,(0,c.jsx)(n.code,{children:`'vi-VN'`}),`). Mặc định sử dụng ngôn ngữ hiện tại từ `,(0,c.jsx)(n.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Tạo với ngôn ngữ hiện tại
const flag = new GeoFlag()

// Tạo cho một quốc gia cụ thể
const vnFlag = new GeoFlag('vi-VN')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Trả về đối tượng dữ liệu đầy đủ về một quốc gia: ngôn ngữ, mã quốc gia, tiêu chuẩn và tên biểu tượng cờ. Nếu không có mã, sử dụng mã từ constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Chỉ trả về tên biểu tượng cờ của quốc gia được chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Trả về mảng các đối tượng dữ liệu cờ. Nếu `,(0,c.jsx)(n.code,{children:`codes`}),` không được cung cấp, trả về tất cả các quốc gia từ từ điển.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Tương tự `,(0,c.jsx)(n.code,{children:`getList`}),`, nhưng bổ sung tên quốc gia theo ngôn ngữ của chính nước đó.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thay-đổi-dữ-liệu`,children:`Thay đổi dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Thay đổi mã quốc gia cho thực thể hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`hiển-thị-cờ-cho-quốc-gia-hiện-tại`,children:`Hiển thị cờ cho quốc gia hiện tại`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-vn'
console.log(item?.country) // 'Việt Nam'
`})}),`
`,(0,c.jsx)(n.h3,{id:`danh-sách-tất-cả-quốc-gia-với-cờ`,children:`Danh sách tất cả quốc gia với cờ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const flag = new GeoFlag('vi-VN')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-us: Hoa Kỳ', 'f-fr: Pháp', ...
`})}),`
`,(0,c.jsx)(n.h3,{id:`danh-sách-với-tên-gọi-dân-tộc`,children:`Danh sách với tên gọi dân tộc`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Trả về tên quốc gia bằng cả ngôn ngữ của bạn và ngôn ngữ của chính nước đó
const national = new GeoFlag('vi-VN').getNational(['US', 'JP', 'RU'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// Hoa Kỳ (United States), Nhật Bản (日本), Nga (Россия)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};