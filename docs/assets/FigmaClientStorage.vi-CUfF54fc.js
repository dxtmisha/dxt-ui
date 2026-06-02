import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaClientStorage - Làm việc với bộ nhớ client`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmaclientstorage`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaClientStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp bọc cấp cao cho API `,(0,c.jsx)(n.code,{children:`clientStorage`}),` của Figma. Nó cung cấp một giao diện thuận tiện để lưu trữ dữ liệu bền vững trên máy tính của người dùng, hỗ trợ lưu trữ tạm thời (caching), các giá trị mặc định và quản lý dữ liệu tự động.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập Singleton`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`getInstance()`}),` để đảm bảo quyền truy cập nhất quán vào cùng một khóa bộ nhớ từ các phần khác nhau của plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị mặc định`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`get()`}),` có thể nhận một giá trị mặc định hoặc một hàm bất đồng bộ để khởi tạo bộ nhớ nếu nó đang trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Cache`}),` — Tích hợp với `,(0,c.jsx)(n.code,{children:`FigmaStorageData`}),` để quản lý độ tươi mới của dữ liệu và giảm thiểu các lệnh gọi API dư thừa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Truy cập một thực thể bằng cách sử dụng phương thức tĩnh `,(0,c.jsx)(n.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaClientStorage } from '@dxtmisha/figma-code'

// Lấy thực thể cho 'user-settings'
const storage = FigmaClientStorage.getInstance<object>('user-settings')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-dữ-liệu`,children:`Truy cập dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất dữ liệu từ bộ nhớ. Nếu bộ nhớ trống và một giá trị mặc định được cung cấp, nó sẽ thiết lập và trả về giá trị đó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T | Promise<T>)`}),` — (Tùy chọn) Một giá trị hoặc hàm để khởi tạo bộ nhớ nếu không tìm thấy dữ liệu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — Giá trị được lưu trữ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const theme = await storage.get('light')
`})}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Cập nhật dữ liệu trong bộ nhớ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T | Promise<T>)`}),` — Giá trị mới hoặc một hàm trả về giá trị đó.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — Giá trị mới vừa được thiết lập.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.set('dark')
`})}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa dữ liệu liên kết với khóa bộ nhớ.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<this>`}),` — Thực thể hiện tại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.remove()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};