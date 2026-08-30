import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Global - Dữ liệu Toàn cục`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-global`,children:`Lớp Global`}),`
`,(0,c.jsxs)(t.p,{children:[`Một lớp tiện ích tĩnh để lưu trữ và truy xuất dữ liệu toàn cục của ứng dụng. Dữ liệu được ghi `,(0,c.jsx)(t.strong,{children:`một lần duy nhất`}),` trong quá trình khởi tạo và sau đó chỉ có thể đọc. Được sử dụng để truyền cấu hình hoặc dữ liệu từ máy chủ sang phía client.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo một lần`}),` — Phương thức `,(0,c.jsx)(t.code,{children:`add`}),` chỉ hoạt động trong lần gọi đầu tiên; các lần gọi tiếp theo bị bỏ qua.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sao chép sâu`}),` — Dữ liệu được sao chép qua `,(0,c.jsx)(t.code,{children:`copyObjectLite`}),`, cô lập khỏi các thay đổi bên ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không quản lý trạng thái`}),` — Chỉ dành cho cấu hình tĩnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Truy cập tĩnh`}),` — tất cả các phương thức đều là tĩnh, loại bỏ nhu cầu khởi tạo (`,(0,c.jsx)(t.code,{children:`new Global()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(t.p,{children:`Vì lớp này là tĩnh, các phương thức của nó có thể được gọi trực tiếp.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

// Thiết lập một lần (ví dụ: khi ứng dụng tải)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Lấy giá trị theo khóa
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(data: Record<string, any>): void`}),` — Lưu dữ liệu toàn cục. Chỉ hoạt động `,(0,c.jsx)(t.strong,{children:`trong lần gọi đầu tiên`}),`. Các lần gọi sau bị bỏ qua hoàn toàn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<R>(name: string): R`}),` — Trả về giá trị theo khóa từ dữ liệu toàn cục đã lưu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,(0,c.jsx)(t.h3,{id:`khởi-tạo-khi-ứng-dụng-bắt-đầu`,children:`Khởi tạo khi ứng dụng bắt đầu`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// main.ts (chạy một lần trước khi mount ứng dụng)
Global.add(window.__SERVER_DATA__ ?? {})

// Ở bất kỳ đâu trong code
const serverId = Global.get('serverId')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};