import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional/Composables/useStorageRef - Quản lý lưu trữ cục bộ"}),`
`,n.jsx(e.h1,{id:"usestorageref",children:n.jsx(e.code,{children:"useStorageRef"})}),`
`,n.jsxs(e.p,{children:["Composable để quản lý dữ liệu phản ứng trong ",n.jsx(e.code,{children:"localStorage"})," với tính năng tự động đồng bộ hóa giữa các tab/cửa sổ khác nhau. Sử dụng pattern singleton."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên của khóa trong ",n.jsx(e.code,{children:"localStorage"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — giá trị mặc định nếu không tìm thấy gì trong bộ nhớ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cache?: number"})," — thời gian lưu bộ nhớ cache tính bằng giây."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Ref<T | undefined>"})," — một tham chiếu phản ứng đến giá trị trong bộ nhớ cục bộ."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useStorageRef } from '@dxtmisha/functional'

const settings = useStorageRef('app-settings', { theme: 'dark' })

// Cập nhật tại đây sẽ đồng bộ với localStorage và các tab khác đang mở
settings.value.theme = 'light'
`})})]})}function g(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default};
