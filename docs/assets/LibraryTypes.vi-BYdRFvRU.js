import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/LibraryTypes - Trình tạo định nghĩa kiểu Vue`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-librarytypes`,children:`Lớp LibraryTypes`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryTypes`}),` chịu trách nhiệm tạo các tệp Định nghĩa Kiểu (Type Definition) toàn cục cho các thành phần Vue. Điều này cho phép hỗ trợ IDE đầy đủ và kiểm tra kiểu dữ liệu cho các thành phần hệ thống thiết kế được sử dụng trên toàn hệ thống trong một ứng dụng Vue.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ thành phần toàn cục`}),` — Tạo các khối `,(0,c.jsx)(n.code,{children:`declare module`}),` cho `,(0,c.jsx)(n.code,{children:`@vue/runtime-core`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ kiểu tự động`}),` — Tự động liên kết tên mã của thành phần với các kiểu tệp `,(0,c.jsx)(n.code,{children:`.vue`}),` tương ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cải thiện trải nghiệm lập trình (DX)`}),` — Cho phép IntelliSense và xác thực props cho các thành phần hệ thống thiết kế trong các mẫu (templates) Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải đường dẫn động`}),` — Phân giải chính xác các đường dẫn nguồn của thành phần dựa trên cấu hình hệ thống thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`LibraryTypes(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo tệp định nghĩa kiểu toàn cục (`,(0,c.jsx)(n.code,{children:`types.d.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-tệp-được-tạo`,children:`Cấu trúc tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make`}),` tạo ra một tệp `,(0,c.jsx)(n.code,{children:`types`}),` (thường là `,(0,c.jsx)(n.code,{children:`types.d.ts`}),`) nhằm mở rộng sổ đăng ký thành phần toàn cục của Vue.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc điểm của mã được tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Module:`}),` `,(0,c.jsx)(n.code,{children:`@vue/runtime-core`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao diện (Interface):`}),` `,(0,c.jsx)(n.code,{children:`GlobalComponents`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả:`}),` Một bản ánh xạ của tất cả các thành phần trong thư viện.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};