import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryPlugin - Trình tạo plugin Vite`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryplugin`,children:`Lớp LibraryPlugin`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryPlugin`}),` chịu trách nhiệm tạo điểm nhập (entry point) cho plugin Vite của thư viện hệ thống thiết kế. Plugin này tạo điều kiện thuận lợi cho việc tích hợp tự động các thành phần, các biến phong cách và cấu hình thiết kế vào quá trình xây dựng (build) của Vite.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo điểm nhập plugin`}),` — Tạo tệp khởi tạo plugin Vite tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp hệ thống thiết kế`}),` — Kết nối các thành phần và biến được định nghĩa trong cấu hình thiết kế với công cụ xây dựng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đặt tên tự động`}),` — Tự động tạo tên plugin và các mã định danh dựa trên mã của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuỗi lệnh và linh hoạt`}),` — Hỗ trợ chuỗi lệnh (chaining) để cấu hình thư viện một cách hợp lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`LibraryPlugin(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Kích hoạt quá trình tạo tệp plugin (`,(0,c.jsx)(t.code,{children:`plugin.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo`,children:`Cấu trúc tệp được tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`make`}),` tạo ra một tệp `,(0,c.jsx)(t.code,{children:`plugin.ts`}),` xuất bản một hàm plugin Vite chuyên dụng. Hàm này tạo điều kiện thuận lợi cho việc kết nối giữa thư viện đã biên dịch và công cụ xây dựng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc điểm của hàm được tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tên:`}),` `,(0,c.jsx)(t.code,{children:`ui[Design]VitePlugin`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`uiDxtVitePlugin`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tham số:`}),` `,(0,c.jsx)(t.code,{children:`options: PluginOptions`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả:`}),` Trả về một thực thể `,(0,c.jsx)(t.code,{children:`VitePlugin`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};