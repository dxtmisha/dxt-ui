import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(t){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useHashRef - Quản lý Hash"}),`
`,n.jsx(s.h1,{id:"usehashref",children:n.jsx(s.code,{children:"useHashRef"})}),`
`,n.jsxs(s.p,{children:["Một composable để làm việc với hash URL (phần sau dấu ",n.jsx(s.code,{children:"#"}),"). Nó cho phép tạo các biến phản ứng tự động đồng bộ hóa với một khóa cụ thể trong hash."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Tham số:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"name: string"})," — Tên khóa trong hash."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"defaultValue?: T | (() => T)"})," — Giá trị mặc định nếu khóa không tồn tại trong hash."]}),`
`]}),`
`,n.jsx(s.p,{children:n.jsxs(s.strong,{children:["Trả về (",n.jsx(s.code,{children:"Ref<T>"}),"):"]})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Một tham chiếu phản ứng đến giá trị trong hash."}),`
`]}),`
`,n.jsx(s.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { useHashRef } from '@dxtmisha/functional'

// Tạo tham chiếu đến giá trị 'step' trong hash URL
const step = useHashRef('step', '1')

// Cập nhật giá trị (tự động cập nhật URL: #step=2)
step.value = '2'

// Nếu người dùng thay đổi hash thủ công hoặc qua lịch sử trình duyệt,
// step.value sẽ được cập nhật tự động.
`})})]})}function p(t={}){const{wrapper:s}={...h(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(e,{...t})}):e(t)}export{p as default};
