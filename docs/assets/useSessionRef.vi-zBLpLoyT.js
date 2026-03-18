import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useSessionRef - Quản lý lưu trữ phiên"}),`
`,n.jsx(e.h1,{id:"usesessionref",children:n.jsx(e.code,{children:"useSessionRef"})}),`
`,n.jsxs(e.p,{children:["Composable để quản lý dữ liệu phản ứng trong ",n.jsx(e.code,{children:"sessionStorage"}),". Sử dụng pattern singleton - các phần tử có cùng tên sẽ chia sẻ cùng một trạng thái phản ứng."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên của khóa trong ",n.jsx(e.code,{children:"sessionStorage"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — giá trị mặc định nếu không tìm thấy gì trong bộ nhớ."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Ref<T | undefined>"})," — một tham chiếu phản ứng đến giá trị trong bộ nhớ phiên."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Thay đổi giá trị sẽ tự động cập nhật sessionStorage
userSession.value.loggedIn = true
`})})]})}function g(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{g as default};
