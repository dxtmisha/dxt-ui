import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/splice - Sao chép và hợp nhất các thuộc tính vào đối tượng"}),`
`,n.jsx(t.h1,{id:"splice",children:n.jsx(t.code,{children:"splice"})}),`
`,n.jsx(t.p,{children:"Sao chép và hợp nhất đệ quy các thuộc tính từ một đối tượng vào một đối tượng khác. Hỗ trợ chèn các thuộc tính mới bắt đầu từ một khóa hoặc chỉ số cụ thể."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"array: ObjectItem<I>"})," — Đối tượng hoặc mảng mục tiêu."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"replacement?: ObjectItem<I> | I"})," — Đối tượng nguồn chứa dữ liệu mới."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"indexStart?: string"})," — Khóa hoặc giá trị phần tử mà từ đó quá trình chèn sẽ bắt đầu."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ObjectItem<I>"})," — Một đối tượng hoặc mảng mới với các thay đổi đã được áp dụng."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Chèn đơn giản
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Chèn sau một khóa cụ thể
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function m(c={}){const{wrapper:t}={...s(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{m as default};
