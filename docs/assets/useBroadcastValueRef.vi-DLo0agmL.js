import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useBroadcastValueRef - Đồng bộ dữ liệu giữa các tab`}),`
`,(0,c.jsx)(n.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(n.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable để tạo một biến phản hồi (reactive) mà giá trị của nó được đồng bộ hóa trên tất cả các tab trình duyệt đang mở trong cùng một miền (domain). Nó sử dụng `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` thông qua lớp `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên duy nhất cho giá trị. Tên này sẽ được sử dụng để tạo kênh giao tiếp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — giá trị mặc định. Có thể là giá trị tĩnh hoặc một hàm.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Ref<T | string | undefined>`}),` — một tham chiếu phản hồi (Ref) cho giá trị. Khi giá trị thay đổi trong một tab, nó sẽ tự động cập nhật trong tất cả các tab khác.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng chính:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Sử dụng mẫu `,(0,c.jsx)(n.strong,{children:`Singleton`}),`: gọi nó với cùng một `,(0,c.jsx)(n.code,{children:`name`}),` trong cùng một ứng dụng sẽ trả về cùng một phiên bản `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tự động thêm tiền tố `,(0,c.jsx)(n.code,{children:`broadcast--`}),` vào tên.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (cùng domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value sẽ tự động trở thành 'online'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};