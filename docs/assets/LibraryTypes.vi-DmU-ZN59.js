import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(h){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/LibraryTypes - Trình tạo định nghĩa kiểu Vue"}),`
`,n.jsx(t.h1,{id:"lớp-librarytypes",children:"Lớp LibraryTypes"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"LibraryTypes"})," chịu trách nhiệm tạo các tệp Định nghĩa Kiểu (Type Definition) toàn cục cho các thành phần Vue. Điều này cho phép hỗ trợ IDE đầy đủ và kiểm tra kiểu dữ liệu cho các thành phần hệ thống thiết kế được sử dụng trên toàn hệ thống trong một ứng dụng Vue."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hỗ trợ thành phần toàn cục"})," — Tạo các khối ",n.jsx(t.code,{children:"declare module"})," cho ",n.jsx(t.code,{children:"@vue/runtime-core"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Ánh xạ kiểu tự động"})," — Tự động liên kết tên mã của thành phần với các kiểu tệp ",n.jsx(t.code,{children:".vue"})," tương ứng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Cải thiện trải nghiệm lập trình (DX)"})," — Cho phép IntelliSense và xác thực props cho các thành phần hệ thống thiết kế trong các mẫu (templates) Vue."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Phân giải đường dẫn động"})," — Phân giải chính xác các đường dẫn nguồn của thành phần dựa trên cấu hình hệ thống thiết kế."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(t.code,{children:"LibraryTypes(items)"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"items: LibraryItems"})," — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): void"})," — Kích hoạt quá trình tạo tệp định nghĩa kiểu toàn cục (",n.jsx(t.code,{children:"types.d.ts"}),")."]}),`
`]}),`
`,n.jsx(t.h2,{id:"cấu-trúc-tệp-được-tạo",children:"Cấu trúc tệp được tạo"}),`
`,n.jsxs(t.p,{children:["Phương thức ",n.jsx(t.code,{children:"make"})," tạo ra một tệp ",n.jsx(t.code,{children:"types"})," (thường là ",n.jsx(t.code,{children:"types.d.ts"}),") nhằm mở rộng sổ đăng ký thành phần toàn cục của Vue."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Đặc điểm của mã được tạo:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Module:"})," ",n.jsx(t.code,{children:"@vue/runtime-core"})]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Giao diện (Interface):"})," ",n.jsx(t.code,{children:"GlobalComponents"})]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Kết quả:"})," Một bản ánh xạ của tất cả các thành phần trong thư viện."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function x(h={}){const{wrapper:t}={...c(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(e,{...h})}):e(h)}export{x as default};
