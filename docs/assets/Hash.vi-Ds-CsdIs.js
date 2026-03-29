import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Hash - Quản lý trạng thái URL Hash`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-hash`,children:`Lớp Hash`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp tĩnh để quản lý dữ liệu được lưu trữ trong URL hash (`,(0,c.jsx)(n.code,{children:`#`}),`). Tự động đồng bộ hóa trạng thái ứng dụng với URL — mỗi lần gọi `,(0,c.jsx)(n.code,{children:`set`}),` sẽ cập nhật chuỗi hash trên trình duyệt, và sự kiện `,(0,c.jsx)(n.code,{children:`hashchange`}),` sẽ làm mới trạng thái nội bộ.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ với URL`}),` — Dữ liệu được lưu ở định dạng dễ đọc trong chuỗi hash.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phản hồi qua Watcher`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`addWatch`}),` cho phép đăng ký theo dõi thay đổi của một biến cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động khởi tạo`}),` — Khi tải trang, dữ liệu được tự động đọc từ URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích kiểu thông minh`}),` — Giá trị được giải mã từ chuỗi: số, boolean và đối tượng được khôi phục về kiểu gốc.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này là tĩnh và khởi tạo tự động khi tải trang — đọc chuỗi hash URL hiện tại.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Trả về giá trị của biến hash. Nếu không có giá trị, nó được thiết lập qua `,(0,c.jsx)(n.code,{children:`defaultValue`}),` (có thể là hàm).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(name: string, callback: T | (() => T)): void`}),` — Thiết lập giá trị của biến và cập nhật URL hash. Nếu giá trị không thay đổi, không có cập nhật nào xảy ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): void`}),` — Đăng ký theo dõi thay đổi của một biến hash cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): void`}),` — Hủy đăng ký theo dõi thay đổi của một biến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reload(): void`}),` — Đọc URL hash hiện tại và đồng bộ hóa với trạng thái nội bộ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`đọc-và-ghi`,children:`Đọc và ghi`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// Đọc với giá trị mặc định
const page = Hash.get<number>('page', 1)

// Ghi (URL thay đổi thành #page=3)
Hash.set('page', 3)

// Ghi qua hàm
Hash.set('page', () => page + 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-theo-dõi-thay-đổi`,children:`Đăng ký theo dõi thay đổi`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Bộ lọc đã thay đổi thành:', newFilter)
})

// Hủy đăng ký (callback phải là tham chiếu đến cùng một hàm)
Hash.removeWatch('filter', callback)
`})}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-trạng-thái-trang`,children:`Quản lý trạng thái trang`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Khởi tạo bộ lọc với giá trị mặc định
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Thay đổi khi người dùng thực hiện hành động
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};