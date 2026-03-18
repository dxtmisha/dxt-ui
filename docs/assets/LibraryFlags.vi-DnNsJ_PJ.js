import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/scripts/Classes/LibraryFlags - Trình tạo kết nối cờ (Flags)"}),`
`,n.jsx(c.h1,{id:"lớp-libraryflags",children:"Lớp LibraryFlags"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"LibraryFlags"})," chịu trách nhiệm tạo các tệp để kết nối cờ quốc gia với hệ thống thiết kế. Nó tạo ra một điểm nhập TypeScript để đăng ký cờ dưới dạng biểu tượng và một tệp JSON chứa danh sách tất cả các mã định danh cờ có sẵn."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo kết nối cờ"})," — Tạo tệp khởi tạo TypeScript đăng ký các cờ dưới dạng biểu tượng toàn cục."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo danh sách mã định danh"})," — Tạo tệp JSON cho siêu dữ liệu và lựa chọn cờ tự động."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tiêu chuẩn hóa đặt tên"})," — Tự động định dạng mã định danh cờ theo quy ước ",n.jsx(c.code,{children:"flag-[code]"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý tự động"})," — Quét và xử lý tất cả các cờ có sẵn từ thư viện phương tiện."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"LibraryFlags(items)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"items: LibraryItems"})," — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Kích hoạt quá trình tạo các tệp kết nối cờ (TS và JSON)."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cấu-trúc-các-tệp-được-tạo",children:"Cấu trúc các tệp được tạo"}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"make"})," tạo ra hai tệp chính để tích hợp cờ vào thư viện:"]}),`
`,n.jsxs(c.h3,{id:"1-kết-nối-cờ-flagsts",children:["1. Kết nối cờ (",n.jsx(c.code,{children:"flags.ts"}),")"]}),`
`,n.jsxs(c.p,{children:["Đăng ký cờ dưới dạng biểu tượng toàn cục bằng trình quản lý ",n.jsx(c.code,{children:"Icons"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-vn', flags.vn)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,n.jsxs(c.h3,{id:"2-mã-định-danh-cờ-flagsjson",children:["2. Mã định danh cờ (",n.jsx(c.code,{children:"flags.json"}),")"]}),`
`,n.jsx(c.p,{children:"Một mảng chuỗi đơn giản chứa tất cả các khóa cờ được tạo."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-json",children:`["flag-vn", "flag-us"]
`})})]})}function g(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(s,{...i})}):s(i)}export{g as default};
