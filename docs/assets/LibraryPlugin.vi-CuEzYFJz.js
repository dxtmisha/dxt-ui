import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/LibraryPlugin - Trình tạo plugin Vite"}),`
`,n.jsx(i.h1,{id:"lớp-libraryplugin",children:"Lớp LibraryPlugin"}),`
`,n.jsxs(i.p,{children:["Lớp ",n.jsx(i.code,{children:"LibraryPlugin"})," chịu trách nhiệm tạo điểm nhập (entry point) cho plugin Vite của thư viện hệ thống thiết kế. Plugin này tạo điều kiện thuận lợi cho việc tích hợp tự động các thành phần, các biến phong cách và cấu hình thiết kế vào quá trình xây dựng (build) của Vite."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo điểm nhập plugin"})," — Tạo tệp khởi tạo plugin Vite tiêu chuẩn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tích hợp hệ thống thiết kế"})," — Kết nối các thành phần và biến được định nghĩa trong cấu hình thiết kế với công cụ xây dựng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đặt tên tự động"})," — Tự động tạo tên plugin và các mã định danh dựa trên mã của hệ thống thiết kế."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Chuỗi lệnh và linh hoạt"})," — Hỗ trợ chuỗi lệnh (chaining) để cấu hình thư viện một cách hợp lý."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(i.code,{children:"LibraryPlugin(items)"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"items: LibraryItems"})," — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): this"})," — Kích hoạt quá trình tạo tệp plugin (",n.jsx(i.code,{children:"plugin.ts"}),")."]}),`
`]}),`
`,n.jsx(i.h2,{id:"cấu-trúc-tệp-được-tạo",children:"Cấu trúc tệp được tạo"}),`
`,n.jsxs(i.p,{children:["Phương thức ",n.jsx(i.code,{children:"make"})," tạo ra một tệp ",n.jsx(i.code,{children:"plugin.ts"})," xuất bản một hàm plugin Vite chuyên dụng. Hàm này tạo điều kiện thuận lợi cho việc kết nối giữa thư viện đã biên dịch và công cụ xây dựng."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Đặc điểm của hàm được tạo:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tên:"})," ",n.jsx(i.code,{children:"ui[Design]VitePlugin"})," (ví dụ: ",n.jsx(i.code,{children:"uiDxtVitePlugin"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tham số:"})," ",n.jsx(i.code,{children:"options: PluginOptions"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Kết quả:"})," Trả về một thực thể ",n.jsx(i.code,{children:"VitePlugin"}),"."]}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`/**
 * Khởi tạo plugin Vite cho hệ thống thiết kế.
 * @param options các tùy chọn plugin
 */
export function uiDxtVitePlugin(
  options: PluginOptions = {}
): VitePlugin {
  return new Plugin(
    designName,
    packageName,
    componentsReg,
    styleVarsReg,
    componentsList,
    'vite-plugin-dxt-ui',
    options
  ).init()
}
`})})]})}function u(t={}){const{wrapper:i}={...c(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(h,{...t})}):h(t)}export{u as default};
