import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Functions/setRef - Cập nhật giá trị"}),`
`,n.jsx(t.h1,{id:"setref",children:n.jsx(t.code,{children:"setRef"})}),`
`,n.jsxs(t.p,{children:["Một hàm tiện ích cập nhật giá trị của một ",n.jsx(t.code,{children:"Ref"})," phản ứng. Nó bao gồm một kiểm tra tích hợp để đảm bảo rằng việc cập nhật chỉ xảy ra nếu giá trị mới khác với giá trị hiện tại, ngăn chặn các kích hoạt phản ứng không cần thiết."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"item: Ref<T>"})," — Phần tử ",n.jsx(t.code,{children:"Ref"})," phản ứng cần được cập nhật."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: T"})," — Giá trị mới để gán cho ",n.jsx(t.code,{children:"Ref"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"void"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Cập nhật giá trị thành 'loading'
setRef(status, 'loading')

// Cuộc gọi này sẽ bị bỏ qua vì giá trị đã là 'loading'
setRef(status, 'loading')
`})})]})}function a(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
