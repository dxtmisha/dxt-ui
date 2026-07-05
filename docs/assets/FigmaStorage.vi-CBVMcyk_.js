import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaStorage - Làm việc với bộ nhớ tài liệu`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmastorage`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp bọc cấp cao cho các API `,(0,c.jsx)(n.code,{children:`setPluginData`}),` và `,(0,c.jsx)(n.code,{children:`getPluginData`}),` của Figma. Nó cho phép lưu trữ dữ liệu có cấu trúc trực tiếp trong tài liệu Figma, theo cách toàn cục (`,(0,c.jsx)(n.code,{children:`figma.root`}),`) hoặc đính kèm với các node cụ thể. Dữ liệu này được chia sẻ giữa tất cả người dùng cộng tác trên tệp.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ theo node cụ thể`}),` — Dữ liệu có thể được liên kết với bất kỳ node Figma nào (Frame, Group, v.v.) hoặc gốc của tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập chung`}),` — Không giống như bộ nhớ client, dữ liệu plugin được lưu bên trong tệp `,(0,c.jsx)(n.code,{children:`.fig`}),` và được đồng bộ hóa giữa tất cả người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thực thể`}),` — Lớp sử dụng cơ chế lưu tạm nội bộ để đảm bảo rằng các lệnh gọi lặp lại cho cùng một khóa trên cùng một node sẽ trả về cùng một thực thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động tuần tự hóa`}),` — Xử lý việc chuyển đổi JSON cho các cấu trúc dữ liệu phức tạp một cách minh bạch.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Truy cập một thực thể bằng cách sử dụng các phương thức tĩnh. Bạn có thể cung cấp một node gốc hoặc một ID node.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// Lấy thực thể cho toàn bộ tài liệu
const globalStorage = FigmaStorage.getInstance<object>('app-settings')

// Lấy thực thể cho một node cụ thể bằng ID
const nodeStorage = await FigmaStorage.getInstanceById<string>('element-name', '1:123')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-dữ-liệu`,children:`Truy cập dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để quản lý dữ liệu được lưu trữ trong tài liệu.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T)): T | undefined`}),` — Truy xuất dữ liệu. Thiết lập giá trị mặc định nếu bộ nhớ đang trống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Cập nhật dữ liệu và trả về giá trị mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Xóa dữ liệu plugin cho khóa đã chỉ định trên node.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-thực-thể-tĩnh`,children:`Quản lý thực thể (Tĩnh)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để truy xuất các thực thể của lớp.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance<T>(name: string, item: UiFigmaNode): FigmaStorage<T>`}),` — Trả về một thực thể cho một node cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>`}),` — Lấy một thực thể một cách bất đồng bộ bằng ID node.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};