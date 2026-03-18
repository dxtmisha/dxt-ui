import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional/Functions/getRef - Trích xuất giá trị"}),`
`,n.jsx(t.h1,{id:"getref",children:n.jsx(t.code,{children:"getRef"})}),`
`,n.jsxs(t.p,{children:["Một hàm tiện ích trích xuất giá trị cơ bản từ một ",n.jsx(t.code,{children:"Ref"})," phản ứng hoặc trả về chính giá trị đó nếu nó không phải là phản ứng. Điều này hữu ích để đảm bảo bạn đang làm việc với dữ liệu thô bất kể trạng thái phản ứng của nó."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"item: RefOrNormal<T>"})," — Một biến phản ứng (",n.jsx(t.code,{children:"Ref"}),") hoặc một giá trị thông thường."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"T"})," — Giá trị đã được mở gói của ",n.jsx(t.code,{children:"Ref"})," hoặc chính giá trị đầu vào."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function g(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{g as default};
