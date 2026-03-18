import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Classes/Hash - Quản lý trạng thái URL Hash"}),`
`,n.jsx(i.h1,{id:"lớp-hash",children:"Lớp Hash"}),`
`,n.jsxs(i.p,{children:["Một lớp tĩnh để quản lý dữ liệu được lưu trữ trong URL hash (",n.jsx(i.code,{children:"#"}),"). Tự động đồng bộ hóa trạng thái ứng dụng với URL — mỗi lần gọi ",n.jsx(i.code,{children:"set"})," sẽ cập nhật chuỗi hash trên trình duyệt, và sự kiện ",n.jsx(i.code,{children:"hashchange"})," sẽ làm mới trạng thái nội bộ."]}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đồng bộ với URL"})," — Dữ liệu được lưu ở định dạng dễ đọc trong chuỗi hash."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Phản hồi qua Watcher"})," — Phương thức ",n.jsx(i.code,{children:"addWatch"})," cho phép đăng ký theo dõi thay đổi của một biến cụ thể."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tự động khởi tạo"})," — Khi tải trang, dữ liệu được tự động đọc từ URL."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Phân tích kiểu thông minh"})," — Giá trị được giải mã từ chuỗi: số, boolean và đối tượng được khôi phục về kiểu gốc."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(i.p,{children:"Lớp này là tĩnh và khởi tạo tự động khi tải trang — đọc chuỗi hash URL hiện tại."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"get<T>(name: string, defaultValue?: T | (() => T)): T"})," — Trả về giá trị của biến hash. Nếu không có giá trị, nó được thiết lập qua ",n.jsx(i.code,{children:"defaultValue"})," (có thể là hàm)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"set<T>(name: string, callback: T | (() => T)): void"})," — Thiết lập giá trị của biến và cập nhật URL hash. Nếu giá trị không thay đổi, không có cập nhật nào xảy ra."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addWatch<T>(name: string, callback: (value: T) => void): void"})," — Đăng ký theo dõi thay đổi của một biến hash cụ thể."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"removeWatch<T>(name: string, callback: (value: T) => void): void"})," — Hủy đăng ký theo dõi thay đổi của một biến."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"reload(): void"})," — Đọc URL hash hiện tại và đồng bộ hóa với trạng thái nội bộ."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.h3,{id:"đọc-và-ghi",children:"Đọc và ghi"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional-basic'

// Đọc với giá trị mặc định
const page = Hash.get<number>('page', 1)

// Ghi (URL thay đổi thành #page=3)
Hash.set('page', 3)

// Ghi qua hàm
Hash.set('page', () => page + 1)
`})}),`
`,n.jsx(i.h3,{id:"đăng-ký-theo-dõi-thay-đổi",children:"Đăng ký theo dõi thay đổi"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Bộ lọc đã thay đổi thành:', newFilter)
})

// Hủy đăng ký (callback phải là tham chiếu đến cùng một hàm)
Hash.removeWatch('filter', callback)
`})}),`
`,n.jsx(i.h3,{id:"quản-lý-trạng-thái-trang",children:"Quản lý trạng thái trang"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`// Khởi tạo bộ lọc với giá trị mặc định
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Thay đổi khi người dùng thực hiện hành động
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function o(h={}){const{wrapper:i}={...e(),...h.components};return i?n.jsx(i,{...h,children:n.jsx(t,{...h})}):t(h)}export{o as default};
