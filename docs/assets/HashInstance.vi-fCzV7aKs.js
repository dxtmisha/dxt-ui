import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/HashInstance - Phiên bản URL Hash`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-hashinstance`,children:`Lớp HashInstance`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`HashInstance`}),` là lớp cốt lõi triển khai logic quản lý dữ liệu trong URL hash. Nó cung cấp khả năng lưu trữ trạng thái, các cơ chế để đăng ký theo dõi thay đổi và đồng bộ hóa với browser API.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn có thể sử dụng lớp này trực tiếp nếu cần quản lý hash riêng biệt, tách rời khỏi trạng thái `,(0,c.jsx)(t.code,{children:`Hash`}),` toàn cục.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái biệt lập`}),` — Lưu trữ bộ biến hash riêng của nó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — Hầu hết các phương thức trả về `,(0,c.jsx)(t.code,{children:`this`}),`, cho phép viết mã ngắn gọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa tự động`}),` — Khi khởi tạo, nó đọc dữ liệu từ URL và đăng ký sự kiện `,(0,c.jsx)(t.code,{children:`hashchange`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tương thích SSR`}),` — Hoạt động an toàn trong môi trường máy chủ bằng cách sử dụng các bản giả cho DOM API.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để tạo một phiên bản, hãy sử dụng hàm khởi tạo `,(0,c.jsx)(t.code,{children:`HashInstance()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { HashInstance } from '@dxtmisha/functional-basic'

const myHash = new HashInstance()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`đọc-và-ghi`,children:`Đọc và Ghi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Trả về giá trị của một biến. Nếu nó không tồn tại, thiết lập `,(0,c.jsx)(t.code,{children:`defaultValue`}),` và trả về nó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set<T>(name: string, callback: T | (() => T)): this`}),` — Cập nhật giá trị của biến và đồng bộ hóa URL.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`theo-dõi-watchers`,children:`Theo dõi (Watchers)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): this`}),` — Thêm bộ xử lý cho các thay đổi của biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): this`}),` — Xóa bộ xử lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reload(): this`}),` — Làm mới trạng thái nội bộ từ URL hash hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`sử-dụng-một-phiên-bản-biệt-lập`,children:`Sử dụng một phiên bản biệt lập`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const searchHash = new HashInstance()

// Đăng ký theo dõi
searchHash.addWatch('query', (q) => {
  console.log('Tìm kiếm:', q)
})

// Thiết lập giá trị (sẽ cập nhật URL)
searchHash.set('query', 'smartphones')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};