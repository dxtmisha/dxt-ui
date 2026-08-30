import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryTypes - Trình tạo định nghĩa kiểu Vue`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-librarytypes`,children:`Lớp LibraryTypes`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryTypes`}),` chịu trách nhiệm tạo các tệp Định nghĩa Kiểu (Type Definition) toàn cục cho các thành phần Vue. Điều này cho phép hỗ trợ IDE đầy đủ và kiểm tra kiểu dữ liệu cho các thành phần hệ thống thiết kế được sử dụng trên toàn hệ thống trong một ứng dụng Vue.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ thành phần toàn cục`}),` — Tạo các khối `,(0,c.jsx)(t.code,{children:`declare module`}),` cho `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ánh xạ kiểu tự động`}),` — Tự động liên kết tên mã của thành phần với các kiểu tệp `,(0,c.jsx)(t.code,{children:`.vue`}),` tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cải thiện trải nghiệm lập trình (DX)`}),` — Cho phép IntelliSense và xác thực props cho các thành phần hệ thống thiết kế trong các mẫu (templates) Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải đường dẫn động`}),` — Phân giải chính xác các đường dẫn nguồn của thành phần dựa trên cấu hình hệ thống thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`LibraryTypes(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo tệp định nghĩa kiểu toàn cục (`,(0,c.jsx)(t.code,{children:`types.d.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo`,children:`Cấu trúc tệp được tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`make`}),` tạo ra một tệp `,(0,c.jsx)(t.code,{children:`types`}),` (thường là `,(0,c.jsx)(t.code,{children:`types.d.ts`}),`) nhằm mở rộng sổ đăng ký thành phần toàn cục của Vue.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc điểm của mã được tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Module:`}),` `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện (Interface):`}),` `,(0,c.jsx)(t.code,{children:`GlobalComponents`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả:`}),` Một bản ánh xạ của tất cả các thành phần trong thư viện.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};