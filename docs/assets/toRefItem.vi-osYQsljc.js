import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Functions/toRefItem - Chuẩn hóa Ref phản ứng"}),`
`,n.jsx(e.h1,{id:"torefitem",children:n.jsx(e.code,{children:"toRefItem"})}),`
`,n.jsxs(e.p,{children:["Một hàm tiện ích đảm bảo một giá trị là một ",n.jsx(e.code,{children:"Ref"})," phản ứng. Nếu đầu vào đã là một ",n.jsx(e.code,{children:"Ref"}),", nó sẽ được trả về nguyên trạng. Nếu đầu vào là một giá trị thông thường, nó sẽ được bao bọc trong một ",n.jsx(e.code,{children:"Ref"})," mới. Điều này hữu ích cho các hàm mong đợi một tham chiếu phản ứng làm đối số."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: RefOrNormal<T>"})," — Một biến phản ứng (",n.jsx(e.code,{children:"Ref"}),") hoặc một giá trị thông thường."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"Ref<T>"})," — Một ",n.jsx(e.code,{children:"Ref"})," phản ứng chứa giá trị."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Trả về ref gốc
const normalized2 = toRefItem(ordinaryValue) // Trả về ref(20) mới

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function a(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{a as default};
