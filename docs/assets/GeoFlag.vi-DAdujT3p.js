import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/GeoFlag - Cờ Quốc gia"}),`
`,n.jsx(c.h1,{id:"lớp-geoflag",children:"Lớp GeoFlag"}),`
`,n.jsxs(c.p,{children:["Một lớp dành cho việc làm việc với cờ quốc gia. Cung cấp giao diện thuận tiện để truy xuất biểu tượng cờ, tên quốc gia và ngôn ngữ đã được bản địa hóa dựa trên mã quốc gia hoặc ngôn ngữ. Sử dụng ",n.jsx(c.code,{children:"Geo"})," và ",n.jsx(c.code,{children:"GeoIntl"})," để phân giải các tên gọi đã được bản địa hóa."]}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Từ điển cờ"})," — Từ điển tĩnh (",n.jsx(c.code,{children:"flags"}),") tích hợp sẵn, ánh xạ mã quốc gia ISO 3166-1 alpha-2 tới tên biểu tượng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tên gọi đã bản địa hóa"})," — Trả về tên quốc gia và ngôn ngữ theo ngôn ngữ giao diện hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tên gọi dân tộc"})," — Phương thức ",n.jsx(c.code,{children:"getNational"})," trả về tên quốc gia theo ngôn ngữ của chính nước đó."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc linh hoạt"})," — Các phương thức danh sách hỗ trợ lọc theo mảng mã quốc gia."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Tạo một thực thể ",n.jsx(c.code,{children:"GeoFlag"})," mới với mã quốc gia hoặc ngôn ngữ tùy chọn."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code?: string"})," — Mã quốc gia hoặc ngôn ngữ (ví dụ: ",n.jsx(c.code,{children:"'VN'"}),", ",n.jsx(c.code,{children:"'vi-VN'"}),"). Mặc định sử dụng ngôn ngữ hiện tại từ ",n.jsx(c.code,{children:"Geo"}),"."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// Tạo với ngôn ngữ hiện tại
const flag = new GeoFlag()

// Tạo cho một quốc gia cụ thể
const vnFlag = new GeoFlag('vi-VN')
`})}),`
`,n.jsx(c.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(c.h3,{id:"truy-xuất-dữ-liệu",children:"Truy xuất dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(code?: string): GeoFlagItem | undefined"})," — Trả về đối tượng dữ liệu đầy đủ về một quốc gia: ngôn ngữ, mã quốc gia, tiêu chuẩn và tên biểu tượng cờ. Nếu không có mã, sử dụng mã từ constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFlag(code?: string): string | undefined"})," — Chỉ trả về tên biểu tượng cờ của quốc gia được chỉ định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getList(codes?: string[]): GeoFlagItem[]"})," — Trả về mảng các đối tượng dữ liệu cờ. Nếu ",n.jsx(c.code,{children:"codes"})," không được cung cấp, trả về tất cả các quốc gia từ từ điển."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getNational(codes?: string[]): GeoFlagNational[]"})," — Tương tự ",n.jsx(c.code,{children:"getList"}),", nhưng bổ sung tên quốc gia theo ngôn ngữ của chính nước đó."]}),`
`]}),`
`,n.jsx(c.h3,{id:"thay-đổi-dữ-liệu",children:"Thay đổi dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setCode(code: string): this"})," — Thay đổi mã quốc gia cho thực thể hiện tại."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.h3,{id:"hiển-thị-cờ-cho-quốc-gia-hiện-tại",children:"Hiển thị cờ cho quốc gia hiện tại"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const flag = new GeoFlag()
const item = flag.get()

console.log(item?.icon)    // 'f-vn'
console.log(item?.country) // 'Việt Nam'
`})}),`
`,n.jsx(c.h3,{id:"danh-sách-tất-cả-quốc-gia-với-cờ",children:"Danh sách tất cả quốc gia với cờ"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const flag = new GeoFlag('vi-VN')
const countries = flag.getList()

countries.forEach(item => {
  console.log(\`\${item.icon}: \${item.country}\`)
})
// 'f-us: Hoa Kỳ', 'f-fr: Pháp', ...
`})}),`
`,n.jsx(c.h3,{id:"danh-sách-với-tên-gọi-dân-tộc",children:"Danh sách với tên gọi dân tộc"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`// Trả về tên quốc gia bằng cả ngôn ngữ của bạn và ngôn ngữ của chính nước đó
const national = new GeoFlag('vi-VN').getNational(['US', 'JP', 'RU'])

national.forEach(item => {
  console.log(\`\${item.country} (\${item.nationalCountry})\`)
})
// Hoa Kỳ (United States), Nhật Bản (日本), Nga (Россия)
`})})]})}function r(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{r as default};
