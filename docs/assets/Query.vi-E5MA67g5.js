import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Query - Quản lý trạng thái URL Query`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-query`,children:`Lớp Query`}),`
`,(0,c.jsxs)(t.p,{children:[`Một lớp facade tĩnh để quản lý dữ liệu được lưu trữ trong URL query parameters (GET parameters). Nó ủy quyền thực thi cho lớp `,(0,c.jsx)(t.code,{children:`QueryInstance`}),`, cung cấp khả năng truy cập tập trung và cách ly trạng thái (ví dụ: cho SSR).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nó tự động đồng bộ hóa trạng thái ứng dụng với URL — mỗi lần gọi `,(0,c.jsx)(t.code,{children:`set`}),` sẽ cập nhật chuỗi truy vấn (query string) trên trình duyệt, và sự kiện `,(0,c.jsx)(t.code,{children:`popstate`}),` sẽ làm mới trạng thái nội bộ.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ với URL`}),` — Dữ liệu được lưu ở định dạng query parameters tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phản hồi qua Watcher`}),` — Phương thức `,(0,c.jsx)(t.code,{children:`addWatch`}),` cho phép đăng ký theo dõi thay đổi của một biến cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động khởi tạo`}),` — Khi tải trang, dữ liệu được tự động đọc từ các tham số tìm kiếm URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích kiểu thông minh`}),` — Giá trị được giải mã từ chuỗi: số, boolean và đối tượng được khôi phục về kiểu gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cách ly SSR`}),` — `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` đảm bảo mỗi yêu cầu trên máy chủ có một phiên bản dữ liệu riêng, tích hợp với `,(0,c.jsx)(t.code,{children:`UrlItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Lớp này là tĩnh và khởi tạo tự động khi truy cập lần đầu.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// URL: https://myapp.com/?page=2&filter=active

import { Query } from '@dxtmisha/functional-basic'

const page = Query.get('page')    // 2 (number)
const filter = Query.get('filter') // 'active' (string)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`phiên-bản`,children:`Phiên bản`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getItem(): QueryInstance`}),` — Trả về phiên bản `,(0,c.jsx)(t.code,{children:`QueryInstance`}),` hiện tại (được cách ly cho yêu cầu hiện tại).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`đọc-và-ghi`,children:`Đọc và Ghi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Trả về giá trị của biến query.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static set<T>(name: string, callback: T | (() => T)): void`}),` — Thiết lập giá trị của biến và cập nhật URL query parameters.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`theo-dõi-watchers`,children:`Theo dõi (Watchers)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addWatch<T>(name: string, callback: (value: T) => void): void`}),` — Đăng ký theo dõi thay đổi của một biến query cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static removeWatch<T>(name: string, callback: (value: T) => void): void`}),` — Hủy đăng ký theo dõi thay đổi của một biến.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static reload(): void`}),` — Ép buộc đồng bộ hóa trạng thái với URL query parameters hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`đọc-và-ghi-1`,children:`Đọc và ghi`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Query } from '@dxtmisha/functional-basic'

// Đọc với giá trị mặc định
const page = Query.get<number>('page', 1)

// Ghi (URL thay đổi thành ?page=3)
Query.set('page', 3)

// Ghi qua hàm
Query.set('page', () => page + 1)
`})}),`
`,(0,c.jsx)(t.h3,{id:`đăng-ký-theo-dõi-thay-đổi`,children:`Đăng ký theo dõi thay đổi`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Query.addWatch<string>('filter', (newFilter) => {
  console.log('Bộ lọc đã thay đổi thành:', newFilter)
})

// Hủy đăng ký (callback phải là tham chiếu đến cùng một hàm)
Query.removeWatch('filter', callback)
`})}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-trạng-thái-trang`,children:`Quản lý trạng thái trang`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Khởi tạo bộ lọc với giá trị mặc định
const filter = Query.get('filter', 'all')
const sort = Query.get('sort', 'date')

// Thay đổi khi người dùng thực hiện hành động
Query.set('filter', 'active')
// URL: ?filter=active&sort=date
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};