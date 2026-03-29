import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/LibraryPlugin - Trình tạo plugin Vite`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryplugin`,children:`Lớp LibraryPlugin`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryPlugin`}),` chịu trách nhiệm tạo điểm nhập (entry point) cho plugin Vite của thư viện hệ thống thiết kế. Plugin này tạo điều kiện thuận lợi cho việc tích hợp tự động các thành phần, các biến phong cách và cấu hình thiết kế vào quá trình xây dựng (build) của Vite.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo điểm nhập plugin`}),` — Tạo tệp khởi tạo plugin Vite tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp hệ thống thiết kế`}),` — Kết nối các thành phần và biến được định nghĩa trong cấu hình thiết kế với công cụ xây dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt tên tự động`}),` — Tự động tạo tên plugin và các mã định danh dựa trên mã của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuỗi lệnh và linh hoạt`}),` — Hỗ trợ chuỗi lệnh (chaining) để cấu hình thư viện một cách hợp lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`LibraryPlugin(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): this`}),` — Kích hoạt quá trình tạo tệp plugin (`,(0,c.jsx)(n.code,{children:`plugin.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-tệp-được-tạo`,children:`Cấu trúc tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make`}),` tạo ra một tệp `,(0,c.jsx)(n.code,{children:`plugin.ts`}),` xuất bản một hàm plugin Vite chuyên dụng. Hàm này tạo điều kiện thuận lợi cho việc kết nối giữa thư viện đã biên dịch và công cụ xây dựng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc điểm của hàm được tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tên:`}),` `,(0,c.jsx)(n.code,{children:`ui[Design]VitePlugin`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`uiDxtVitePlugin`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham số:`}),` `,(0,c.jsx)(n.code,{children:`options: PluginOptions`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả:`}),` Trả về một thực thể `,(0,c.jsx)(n.code,{children:`VitePlugin`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`/**
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};