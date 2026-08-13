import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useBroadcastValueRef - Đồng bộ dữ liệu giữa các tab`}),`
`,(0,c.jsx)(t.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(t.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable để tạo một biến phản hồi (reactive) mà giá trị của nó được đồng bộ hóa trên tất cả các tab trình duyệt đang mở trong cùng một miền (domain). Nó sử dụng `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` thông qua lớp `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên duy nhất cho giá trị. Tên này sẽ được sử dụng để tạo kênh giao tiếp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — giá trị mặc định. Có thể là giá trị tĩnh hoặc một hàm.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),` — một tham chiếu phản hồi (Ref) cho giá trị. Khi giá trị thay đổi trong một tab, nó sẽ tự động cập nhật trong tất cả các tab khác.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tính năng chính:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Sử dụng mẫu `,(0,c.jsx)(t.strong,{children:`Singleton`}),`: gọi nó với cùng một `,(0,c.jsx)(t.code,{children:`name`}),` trong cùng một ứng dụng sẽ trả về cùng một phiên bản `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tự động thêm tiền tố `,(0,c.jsx)(t.code,{children:`broadcast--`}),` vào tên.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (cùng domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value sẽ tự động trở thành 'online'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};