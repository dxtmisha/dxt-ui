import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Functions/toBind - Hợp nhất thuộc tính sâu"}),`
`,n.jsx(t.h1,{id:"tobind",children:n.jsx(t.code,{children:"toBind"})}),`
`,n.jsxs(t.p,{children:["Hợp nhất hai đối tượng thuộc tính trong khi xử lý thông minh các thuộc tính ",n.jsx(t.code,{children:"class"})," và ",n.jsx(t.code,{children:"style"}),". Nếu cả hai đối tượng đều chứa class hoặc style, chúng sẽ được kết hợp thành một mảng để tránh bị ghi đè. Các thuộc tính khác từ đối tượng thứ hai (",n.jsx(t.code,{children:"value"}),") sẽ ghi đè lên các thuộc tính trong đối tượng thứ nhất (",n.jsx(t.code,{children:"extra"}),")."]}),`
`,n.jsx(t.h3,{id:"cơ-chế-hoạt-động-cơ-chế-hợp-nhất",children:"Cơ chế hoạt động (Cơ chế hợp nhất)"}),`
`,n.jsx(t.p,{children:"Hàm nhận hai đối tượng và trả về một đối tượng mới bằng cách hợp nhất các thuộc tính của chúng theo các quy tắc sau:"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thuộc tính tiêu chuẩn:"})," Các thuộc tính từ đối tượng thứ hai (",n.jsx(t.code,{children:"value"}),") sẽ ghi đè các thuộc tính có cùng tên từ đối tượng thứ nhất (",n.jsx(t.code,{children:"extra"}),"). Đây là hành vi tiêu chuẩn của toán tử spread (",n.jsx(t.code,{children:"..."}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsxs(t.strong,{children:["Thuộc tính ",n.jsx(t.code,{children:"class"}),":"]})," Nếu thuộc tính ",n.jsx(t.code,{children:"class"})," chỉ có mặt trong ",n.jsx(t.strong,{children:"một"})," trong các đối tượng, nó sẽ được giữ nguyên. Tuy nhiên, nếu class được chỉ định ở ",n.jsx(t.strong,{children:"cả hai"})," đối tượng, hàm sẽ không ghi đè chúng; thay vào đó, nó kết hợp chúng thành một mảng ",n.jsx(t.code,{children:"[extra.class, value.class]"}),". Điều này giúp đảm bảo tất cả các class được truyền vào thành phần đều được giữ lại."]}),`
`,n.jsxs(t.li,{children:[n.jsxs(t.strong,{children:["Thuộc tính ",n.jsx(t.code,{children:"style"}),":"]})," Hoạt động tương tự như các class. Sự hiện diện của style trong cả hai đối tượng sẽ dẫn đến việc chúng được kết hợp thành một mảng ",n.jsx(t.code,{children:"[extra.style, value.style]"}),", điều này cần thiết để áp dụng style chính xác trong Vue."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"extra: ItemList"})," — Đối tượng thuộc tính cơ sở (ví dụ: thuộc tính mặc định hoặc nội bộ)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: ItemList"})," — Đối tượng thuộc tính cần hợp nhất vào cơ sở (ví dụ: thuộc tính do người dùng cung cấp)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ConstrBind<R>"})," — Đối tượng thuộc tính đã được hợp nhất."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toBind } from '@dxtmisha/functional'

const base = { class: 'btn', style: { color: 'red' }, id: 'my-btn' }
const mod = { class: 'btn--large', style: { margin: '10px' }, id: 'primary-btn' }

const result = toBind(base, mod)
/* 
Kết quả: { 
  id: 'primary-btn', 
  class: ['btn', 'btn--large'], 
  style: [{ color: 'red' }, { margin: '10px' }] 
}
*/
`})})]})}function a(c={}){const{wrapper:t}={...s(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
