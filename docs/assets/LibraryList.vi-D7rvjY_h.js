import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryList - Trình tạo danh sách thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-librarylist`,children:`Lớp LibraryList`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryList`}),` chịu trách nhiệm tạo tệp cấu hình cốt lõi cho hệ thống thiết kế. Tệp này hợp nhất siêu dữ liệu thư viện, các mẫu nhận dạng (regex) và danh sách đầy đủ các lần nhập thành phần cần thiết cho kiến trúc hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất siêu dữ liệu`}),` — Tập hợp tên gói và mã định danh thiết kế vào một điểm cấu hình duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo mẫu nhận dạng`}),` — Tự động xây dựng các biểu thức chính quy phức tạp để nhận dạng thành phần và biến phong cách.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ánh xạ nhập (Import Mapping)`}),` — Tạo danh sách có cấu trúc các lần nhập thành phần được sử dụng bởi các công cụ thiết kế và xây dựng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi tiêu chuẩn đặt tên`}),` — Tự động xử lý các tiền tố thiết kế và quy ước đặt tên kebab-case.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`LibraryList(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Kích hoạt quá trình tạo tệp tổng quan của hệ thống thiết kế (`,(0,c.jsx)(t.code,{children:`design.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo`,children:`Cấu trúc tệp được tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`make`}),` tạo ra một tệp `,(0,c.jsx)(t.code,{children:`design.ts`}),` cung cấp siêu dữ liệu thiết yếu cho việc tích hợp hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Các nội dung xuất bản chính:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`designName: string`}),` — Mã định danh thiết kế chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageName: string`}),` — Tên gói NPM mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsReg: RegExp`}),` — Mẫu toàn cục để nhận dạng các thành phần thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleVarsReg: RegExp`}),` — Mẫu để nhận dạng các biến CSS dành riêng cho thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`componentsList: PluginComponentImports`}),` — Danh mục các định nghĩa nhập thành phần riêng lẻ.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};