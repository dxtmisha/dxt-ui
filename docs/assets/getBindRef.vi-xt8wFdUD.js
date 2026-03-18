import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Functions/getBindRef - Tạo liên kết (phản ứng)"}),`
`,n.jsx(t.h1,{id:"getbindref",children:n.jsx(t.code,{children:"getBindRef"})}),`
`,n.jsxs(t.p,{children:["Phiên bản phản ứng của hàm ",n.jsx(t.a,{href:"../getBind/getBind.vi.mdx",children:n.jsx(t.code,{children:"getBind"})})," để tạo các thuộc tính cho một thành phần phụ dựa trên các giá trị phản ứng hoặc bình thường. Nó giúp tạo ra các liên kết nhất quán khi truyền prop từ thành phần cha sang thành phần con, đặc biệt là khi sử dụng ",n.jsx(t.code,{children:"Ref"})," của Vue."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: RefOrNormal<T | R> | undefined"})," — Giá trị đầu vào. Có thể là một ref phản ứng hoặc một đối tượng bình thường chứa nhiều thuộc tính."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"nameExtra: RefOrNormal<ItemList> | string = {}"})," — Các tham số bổ sung hoặc tên thuộc tính sẽ được hợp nhất vào đối tượng liên kết cuối cùng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"name: string = 'value'"})," — Tên thuộc tính sẽ sử dụng cho giá trị chính (mặc định là ",n.jsx(t.code,{children:"'value'"}),")."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ComputedRef<R>"})," — Một computed ref phản ứng chứa đối tượng các thuộc tính đã được hợp nhất, sẵn sàng để liên kết (ví dụ: thông qua ",n.jsx(t.code,{children:"v-bind"}),")."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Xin chào')
const extraProps = { placeholder: 'Nhập tại đây...' }

// Tạo một liên kết computed: { value: 'Xin chào', placeholder: 'Nhập tại đây...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function p(e={}){const{wrapper:t}={...h(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{p as default};
