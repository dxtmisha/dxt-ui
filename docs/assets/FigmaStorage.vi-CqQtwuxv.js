import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-code/Classes/FigmaStorage - Quản lý Lưu trữ`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmastorage`,children:`Lớp FigmaStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để quản lý `,(0,c.jsx)(n.code,{children:`PluginData`}),` trong Figma một cách mạnh mẽ. Nó cung cấp một API cấp cao để lưu trữ, truy xuất và kiểm soát thời hạn của dữ liệu trên các node Figma (mặc định là node gốc của tài liệu), hỗ trợ bộ nhớ đệm (caching) và các giá trị mặc định.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính kiên trì (Persistence)`}),` — Bao bọc `,(0,c.jsx)(n.code,{children:`getPluginData`}),` và `,(0,c.jsx)(n.code,{children:`setPluginData`}),` để lưu trữ dữ liệu liền mạch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm (In-Memory Caching)`}),` — Lưu trữ các giá trị trong thực thể để truy cập nhanh trong ngữ cảnh thực thi hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic hết hạn`}),` — Hỗ trợ lưu trữ dựa trên thời gian để vô hiệu hóa dữ liệu lỗi thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị chức năng`}),` — Hỗ trợ truyền các hàm dưới dạng giá trị hoặc giá trị mặc định để tạo dữ liệu động.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo đối tượng bằng cách gọi hàm dựng `,(0,c.jsx)(n.code,{children:`FigmaStorage(name, item, cache)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`tham-số-generics`,children:`Tham số Generics`}),`
`,(0,c.jsx)(n.p,{children:`Lớp hỗ trợ một tham số generic để quản lý dữ liệu có định kiểu:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Kiểu dữ liệu của giá trị được lưu trữ và truy xuất.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên khóa duy nhất cho mục lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PluginDataMixin = figma.root`}),` — Node Figma nơi dữ liệu sẽ được lưu trữ. Mặc định là `,(0,c.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache: number`}),` — (Tùy chọn) Thời gian sống (TTL) tính bằng giây cho dữ liệu được lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// 1. Khởi tạo với kiểu dữ liệu ngầm định
const settings = new FigmaStorage('plugin-settings')

// 2. Sử dụng generics để định kiểu nghiêm ngặt
interface MyData { theme: string; version: number }
const typedSettings = new FigmaStorage<MyData>('app-data')

// 3. Khởi tạo với bộ nhớ đệm 1 giờ
const cacheSettings = new FigmaStorage('cache', figma.root, 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất dữ liệu từ bộ lưu trữ với hỗ trợ các giá trị mặc định và xác thực bộ nhớ đệm.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue: T | (() => T)`}),` — (Tùy chọn) Giá trị được trả về (và bộ lưu trữ) nếu bộ lưu trữ trống hoặc hết hạn.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const val = settings.get('default_val')
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Cập nhật dữ liệu trong cả bộ nhớ đệm trong bộ nhớ và `,(0,c.jsx)(n.code,{children:`PluginData`}),` của node Figma.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | (() => T)`}),` — (Tùy chọn) Giá trị mới hoặc một hàm trả về giá trị mới.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Xóa dữ liệu khỏi cả bộ nhớ đệm trong bộ nhớ và `,(0,c.jsx)(n.code,{children:`PluginData`}),` của node Figma.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.remove()
`})}),`
`,(0,c.jsx)(n.h3,{id:`getname`,children:(0,c.jsx)(n.code,{children:`getName`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về tên khóa được sử dụng cho thực thể lưu trữ này.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`console.log(settings.getName())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};