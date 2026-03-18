import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/LibraryList - Trình tạo danh sách thành phần"}),`
`,n.jsx(t.h1,{id:"lớp-librarylist",children:"Lớp LibraryList"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"LibraryList"})," chịu trách nhiệm tạo tệp cấu hình cốt lõi cho hệ thống thiết kế. Tệp này hợp nhất siêu dữ liệu thư viện, các mẫu nhận dạng (regex) và danh sách đầy đủ các lần nhập thành phần cần thiết cho kiến trúc hệ thống thiết kế."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hợp nhất siêu dữ liệu"})," — Tập hợp tên gói và mã định danh thiết kế vào một điểm cấu hình duy nhất."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tạo mẫu nhận dạng"})," — Tự động xây dựng các biểu thức chính quy phức tạp để nhận dạng thành phần và biến phong cách."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Ánh xạ nhập (Import Mapping)"})," — Tạo danh sách có cấu trúc các lần nhập thành phần được sử dụng bởi các công cụ thiết kế và xây dựng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thực thi tiêu chuẩn đặt tên"})," — Tự động xử lý các tiền tố thiết kế và quy ước đặt tên kebab-case."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(t.code,{children:"LibraryList(items)"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"items: LibraryItems"})," — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): this"})," — Kích hoạt quá trình tạo tệp tổng quan của hệ thống thiết kế (",n.jsx(t.code,{children:"design.ts"}),")."]}),`
`]}),`
`,n.jsx(t.h2,{id:"cấu-trúc-tệp-được-tạo",children:"Cấu trúc tệp được tạo"}),`
`,n.jsxs(t.p,{children:["Phương thức ",n.jsx(t.code,{children:"make"})," tạo ra một tệp ",n.jsx(t.code,{children:"design.ts"})," cung cấp siêu dữ liệu thiết yếu cho việc tích hợp hệ thống thiết kế."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Các nội dung xuất bản chính:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"designName: string"})," — Mã định danh thiết kế chính."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"packageName: string"})," — Tên gói NPM mục tiêu."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"componentsReg: RegExp"})," — Mẫu toàn cục để nhận dạng các thành phần thiết kế."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"styleVarsReg: RegExp"})," — Mẫu để nhận dạng các biến CSS dành riêng cho thiết kế."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"componentsList: PluginComponentImports"})," — Danh mục các định nghĩa nhập thành phần riêng lẻ."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

// count: 2
export const designName: string = 'dxt'
export const packageName: string = '@dxtmisha/ui'
export const componentsReg: RegExp = /((dxt)-?(button|input))/ig
export const styleVarsReg: RegExp = /(?<=var\\(--)(primary-color|font-size)/ig

export const componentsList: PluginComponentImports = [
  {
    name: 'DxtButton',
    reg: /^((dxt)-?(button))$/ig
  },
  {
    name: 'DxtInput',
    reg: /^((dxt)-?(input))$/ig
  }
]
`})})]})}function x(h={}){const{wrapper:t}={...c(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(i,{...h})}):i(h)}export{x as default};
