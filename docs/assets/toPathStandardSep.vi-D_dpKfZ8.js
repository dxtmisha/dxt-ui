import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Functions/toPathStandardSep - Chuyển đổi dấu phân cách đường dẫn"}),`
`,n.jsx(t.h1,{id:"topathstandardsep",children:n.jsx(t.code,{children:"toPathStandardSep"})}),`
`,n.jsx(t.p,{children:"Hàm chuyển đổi các dấu gạch chéo xuôi trong một chuỗi đường dẫn thành dấu phân cách đường dẫn tiêu chuẩn của hệ điều hành hiện tại."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — chuỗi đường dẫn đầu vào."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — đường dẫn với các dấu phân cách tiêu chuẩn."]}),`
`,n.jsx(t.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(t.p,{children:["Hàm sử dụng biểu thức chính quy để tìm tất cả các dấu gạch chéo xuôi (",n.jsx(t.code,{children:"/"}),") trong chuỗi đầu vào và thay thế chúng bằng dấu phân cách dành riêng cho nền tảng (",n.jsx(t.code,{children:"path.sep"}),")."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// Trên Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// Trên Unix:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function a(c={}){const{wrapper:t}={...o(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
