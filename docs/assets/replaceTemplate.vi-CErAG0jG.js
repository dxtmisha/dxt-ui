import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/replaceTemplate - Thay thế giá trị vào chuỗi mẫu"}),`
`,n.jsx(t.h1,{id:"replacetemplate",children:n.jsx(t.code,{children:"replaceTemplate"})}),`
`,n.jsxs(t.p,{children:["Tìm kiếm các điểm đánh dấu có dạng ",n.jsx(t.code,{children:"[pattern]"})," trong chuỗi gốc và thay thế chúng bằng các giá trị tương ứng từ đối tượng được cung cấp. Nếu giá trị của điểm đánh dấu là một hàm, hàm đó sẽ tự động được gọi và kết quả của nó sẽ được chèn vào chuỗi."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: string"})," — Chuỗi mẫu chứa các điểm đánh dấu (ví dụ: ",n.jsx(t.code,{children:"[name]"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"replaces: Record<string, string | FunctionReturn<string>>"})," — Một đối tượng chứa dữ liệu thay thế, trong đó khóa là tên của điểm đánh dấu bên trong ngoặc vuông, và giá trị là một chuỗi hoặc một hàm trả về chuỗi."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Một chuỗi mới với các giá trị đã được thay thế."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Xin chào, [name]! Số dư của bạn: [balance].'
const data = {
  name: 'John',
  balance: () => '$100' // Hàm được thực thi trong quá trình thay thế
}

console.log(replaceTemplate(template, data)) 
// 'Xin chào, John! Số dư của bạn: $100.'
`})})]})}function d(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{d as default};
