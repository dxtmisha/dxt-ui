import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/replaceComponentName - Thay thế tên thành phần trong văn bản"}),`
`,n.jsx(e.h1,{id:"replacecomponentname",children:n.jsx(e.code,{children:"replaceComponentName"})}),`
`,n.jsxs(e.p,{children:["Thay thế các thẻ HTML của một thành phần (component) cụ thể trong chuỗi văn bản bằng các thẻ mới. Hàm tìm kiếm các thẻ mở (",n.jsx(e.code,{children:"<name"}),") và thẻ đóng (",n.jsx(e.code,{children:"</name"}),") không phân biệt chữ hoa chữ thường và thay thế chúng bằng ",n.jsx(e.code,{children:"componentName"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"text: string | undefined"})," — Văn bản gốc."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Tên thành phần cần thay thế."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"componentName: string"})," — Tên thành phần mới."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string | undefined"})," — Văn bản đã thay đổi với các thẻ mới hoặc ",n.jsx(e.code,{children:"undefined"})," nếu không có văn bản gốc được cung cấp."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Nhấp vào tôi</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Nhấp vào tôi</AppButton>'
`})})]})}function l(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{l as default};
