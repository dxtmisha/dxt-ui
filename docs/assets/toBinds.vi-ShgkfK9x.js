import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional/Functions/toBinds - Hợp nhất nhiều đối tượng thuộc tính"}),`
`,n.jsx(t.h1,{id:"tobinds",children:n.jsx(t.code,{children:"toBinds"})}),`
`,n.jsxs(t.p,{children:["Hợp nhất tuần tự nhiều đối tượng thuộc tính bằng cách sử dụng ",n.jsx(t.code,{children:"toBind"}),". Hàm này hữu ích để kết hợp nhiều lớp thuộc tính (ví dụ: mặc định, props của thành phần và các modifier dựa trên trạng thái) trong khi đảm bảo các thuộc tính ",n.jsx(t.code,{children:"class"})," và ",n.jsx(t.code,{children:"style"})," được kết hợp chính xác thay vì bị ghi đè."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"...values: (ItemList | undefined)[]"})," — Danh sách các đối tượng thuộc tính cần hợp nhất."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ConstrBind<R>"})," — Đối tượng thuộc tính đã hợp nhất cuối cùng."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toBinds } from '@dxtmisha/functional'

const defaults = { class: 'btn', id: 'gen-id' }
const props = { class: 'btn--primary', title: 'Nhấp vào tôi' }
const state = { class: 'is-loading', style: { opacity: 0.5 } }

const finalBind = toBinds(defaults, props, state)
/* 
Kết quả: { 
  id: 'gen-id', 
  title: 'Nhấp vào tôi',
  class: [['btn', 'btn--primary'], 'is-loading'], 
  style: { opacity: 0.5 } 
}
*/
`})})]})}function p(s={}){const{wrapper:t}={...c(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
