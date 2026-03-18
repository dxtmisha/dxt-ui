import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional/Composables/useBroadcastValueRef - Đồng bộ dữ liệu giữa các tab"}),`
`,n.jsx(t.h1,{id:"usebroadcastvalueref",children:n.jsx(t.code,{children:"useBroadcastValueRef"})}),`
`,n.jsxs(t.p,{children:["Composable để tạo một biến phản hồi (reactive) mà giá trị của nó được đồng bộ hóa trên tất cả các tab trình duyệt đang mở trong cùng một miền (domain). Nó sử dụng ",n.jsx(t.code,{children:"BroadcastChannel"})," thông qua lớp ",n.jsx(t.code,{children:"BroadcastMessage"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"name: string"})," — tên duy nhất cho giá trị. Tên này sẽ được sử dụng để tạo kênh giao tiếp."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — giá trị mặc định. Có thể là giá trị tĩnh hoặc một hàm."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Trả về:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"Ref<T | string | undefined>"})," — một tham chiếu phản hồi (Ref) cho giá trị. Khi giá trị thay đổi trong một tab, nó sẽ tự động cập nhật trong tất cả các tab khác."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tính năng chính:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Sử dụng mẫu ",n.jsx(t.strong,{children:"Singleton"}),": gọi nó với cùng một ",n.jsx(t.code,{children:"name"})," trong cùng một ứng dụng sẽ trả về cùng một phiên bản ",n.jsx(t.code,{children:"Ref"}),"."]}),`
`,n.jsxs(t.li,{children:["Tự động thêm tiền tố ",n.jsx(t.code,{children:"broadcast--"})," vào tên."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Tab 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Tab 2 (cùng domain)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value sẽ tự động trở thành 'online'
`})})]})}function u(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{u as default};
