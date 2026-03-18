import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useCookieRef - Quản lý Cookie"}),`
`,n.jsx(e.h1,{id:"usecookieref",children:n.jsx(e.code,{children:"useCookieRef"})}),`
`,n.jsxs(e.p,{children:["Một composable để làm việc với Cookie trình duyệt. Nó cho phép tạo các biến phản ứng tự động đồng bộ hóa với Cookie. Ngoài ra, nó cũng hỗ trợ đồng bộ hóa giữa các tab trình duyệt thông qua ",n.jsx(e.code,{children:"BroadcastChannel"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Tên cookie."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — Giá trị mặc định. Có thể là một giá trị tĩnh hoặc một hàm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: CookieOptions"})," — Các tham số bổ sung để quản lý cookie (expires, path, domain, v.v.)."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Trả về (",n.jsx(e.code,{children:"Ref<T | string | undefined>"}),"):"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Một tham chiếu phản ứng đến giá trị trong cookie."}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Tạo tham chiếu đến cookie 'theme' với giá trị mặc định là 'light'
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Cập nhật giá trị (tự động lưu vào cookie)
theme.value = 'dark'

// Giá trị sẽ được đồng bộ hóa trên tất cả các tab trình duyệt trong thời gian thực
`})})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};
