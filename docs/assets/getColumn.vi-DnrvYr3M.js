import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/getColumn - Trích xuất một cột dữ liệu"}),`
`,n.jsx(t.h1,{id:"getcolumn",children:n.jsx(t.code,{children:"getColumn"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích lặp qua mảng các đối tượng và trả về một mảng mới chỉ bao gồm các giá trị từ một khóa (thuộc tính) cụ thể của mỗi đối tượng. Về cơ bản, điều này tương đương với cú pháp ",n.jsx(t.code,{children:"Array.prototype.map(item => item[key])"})," nhưng được định kiểu tĩnh chặt chẽ."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"array: ObjectOrArray<T>"})," — Một mảng (hoặc một đối tượng từ điển) chứa các phần tử kiểu ",n.jsx(t.code,{children:"T"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"column: K"})," — Khóa (tên thuộc tính) có các giá trị mà bạn muốn trích xuất."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"(T[K] | undefined)[]"})," — Một mảng chứa các giá trị của ",n.jsx(t.code,{children:"column"})," được yêu cầu. Nếu một phần tử không có thuộc tính này, giá trị tại vị trí đó sẽ là ",n.jsx(t.code,{children:"undefined"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function a(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{a as default};
