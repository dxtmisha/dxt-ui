import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/LibraryItems - Trình quản lý danh sách thành phần"}),`
`,n.jsx(h.h1,{id:"lớp-libraryitems",children:"Lớp LibraryItems"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"LibraryItems"})," chịu trách nhiệm quản lý danh sách các thành phần (components) trong hệ thống thiết kế. Nó cung cấp các tiện ích để lấy dữ liệu thành phần, đếm số lượng thành phần, xác định đường dẫn và ghi dữ liệu vào thư mục thư viện."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý thành phần"})," — Lấy và sắp xếp các thành phần theo nhóm thiết kế."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Xác định đường dẫn"})," — Xác định đường dẫn tuyệt đối chính xác cho các thành phần của hệ thống thiết kế."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tiện ích ghi tệp"})," — Cung cấp cách thức chuẩn hóa để ghi các tệp TypeScript và JSON vào thư viện, bao gồm cả tiêu đề được tạo tự động."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích hợp cấu hình thiết kế"})," — Tích hợp liền mạch với ",n.jsx(h.code,{children:"PropertiesConfig"})," và ",n.jsx(h.code,{children:"PropertiesFile"})," cho các cài đặt cụ thể của dự án."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khởi tạo lớp ",n.jsx(h.code,{children:"LibraryItems"})," mà không cần đối số."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"truy-xuất-dữ-liệu",children:"Truy xuất dữ liệu"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(): LibraryAll"})," — trả về danh sách đầy đủ các thành phần được sắp xếp theo nhóm thiết kế."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getComponentList(): LibraryData[]"})," — trả về một mảng phẳng của tất cả các thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getCount(): number"})," — trả về tổng số lượng thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getComponentsPath(): string[]"})," — trả về các thành phần đường dẫn cho thư mục thành phần."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"write",children:n.jsx(h.code,{children:"write"})}),`
`,n.jsx(h.p,{children:"Ghi dữ liệu được cung cấp vào một tệp trong thư mục thư viện. Tự động thêm tiêu đề cảnh báo tạo tự động cho các tệp TypeScript."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string"})," — tên tệp (không bao gồm phần mở rộng)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"data: string[]"})," — một mảng các chuỗi để ghi. Mỗi chuỗi sẽ được phân tách bởi một ký tự xuống dòng."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"extension: string = 'ts'"})," — phần mở rộng tệp. Mặc định là ",n.jsx(h.code,{children:"ts"}),". ",n.jsx(h.code,{children:"json"})," cũng được hỗ trợ."]}),`
`]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Ví dụ:"})}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function x(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{x as default};
