import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/LibraryExport - Trình tạo xuất bản (Export)"}),`
`,n.jsx(t.h1,{id:"lớp-libraryexport",children:"Lớp LibraryExport"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"LibraryExport"})," chịu trách nhiệm tổng hợp và tạo ra một tệp xuất bản (export) thống nhất cho thư viện. Nó quét các thư mục được chỉ định để tìm các tệp TypeScript và Vue, tạo ra một điểm nhập duy nhất giúp đơn giản hóa việc nhập thư viện."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tạo xuất bản thống nhất"})," — tạo ra một điểm nhập toàn diện cho tất cả các thành phần và tiện ích có thể xuất bản."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Nhận dạng tệp thông minh"})," — tự động xử lý xuất bản cho các tệp ",n.jsx(t.code,{children:".ts"})," (sử dụng ",n.jsx(t.code,{children:"export *"}),") và các tệp ",n.jsx(t.code,{children:".vue"})," (sử dụng ",n.jsx(t.code,{children:"import"})," sau đó là ",n.jsx(t.code,{children:"export const"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tích hợp phong cách (Style)"})," — tự động bao gồm các kiểu CSS hoặc SCSS toàn cục nếu chúng tồn tại."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bộ lọc"})," — loại trừ các tệp kiểm thử (",n.jsx(t.code,{children:".test."}),") và các tệp được đánh dấu bằng cờ ",n.jsx(t.code,{children:"UI_FLAG_NOT_EXPORT"}),"."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Khởi tạo và chạy trình tạo xuất bản bằng phương thức ",n.jsx(t.code,{children:"make"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"tạo-dữ-liệu",children:"Tạo dữ liệu"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): void"})," — điểm nhập chính kích hoạt quá trình khám phá và tạo tệp."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ-về-đầu-ra-được-tạo",children:"Ví dụ về đầu ra được tạo"}),`
`,n.jsx(t.p,{children:"Tệp được tạo tổng hợp các lệnh nhập và xuất bản như sau:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function l(c={}){const{wrapper:t}={...r(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{l as default};
