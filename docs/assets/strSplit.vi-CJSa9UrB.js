import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/strSplit - Chia chuỗi hỗ trợ giới hạn (phong cách PHP)"}),`
`,n.jsx(i.h1,{id:"strsplit",children:n.jsx(i.code,{children:"strSplit"})}),`
`,n.jsxs(i.p,{children:["Chia một chuỗi thành một mảng các chuỗi con bằng cách sử dụng dấu phân cách được chỉ định. Khác với ",n.jsx(i.code,{children:"String.prototype.split"})," tiêu chuẩn, khi chỉ định giới hạn (limit), phần còn lại của chuỗi sẽ được giữ lại trong phần tử cuối cùng của mảng (tương tự như hàm ",n.jsx(i.code,{children:"explode"})," trong PHP)."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"value: number | string"})," — Giá trị gốc."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"separator: string"})," — Dấu phân cách."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"limit?: number"})," — Số lượng phần tử tối đa. Nếu có nhiều phần tử hơn giới hạn, phần tử cuối cùng sẽ chứa toàn bộ phần còn lại của chuỗi."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"string[]"})," — Một mảng các chuỗi con."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { strSplit } from '@dxtmisha/functional-basic'

// Không có giới hạn
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// Với giới hạn 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// Với giá trị là số
strSplit(123.456, '.') // ['123', '456']
`})})]})}function a(c={}){const{wrapper:i}={...h(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(t,{...c})}):t(c)}export{a as default};
