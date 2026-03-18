import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Functions/getOptions - Lấy tùy chọn yêu cầu"}),`
`,n.jsx(t.h1,{id:"getoptions",children:n.jsx(t.code,{children:"getOptions"})}),`
`,n.jsxs(t.p,{children:["Trả về các tùy chọn yêu cầu. Nếu tùy chọn được cung cấp là một chuỗi, nó trả về một đối tượng với trường ",n.jsx(t.code,{children:"method"})," bằng với chuỗi đó. Nếu một đối tượng được truyền vào, nó sẽ trả về chính đối tượng đó. Nếu không có tham số nào được truyền, nó trả về một đối tượng rỗng."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"options?: ApiOptions"})," — Tùy chọn yêu cầu hoặc một chuỗi xác định phương thức."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"RefOrNormal<ApiFetch>"})," — Tùy chọn cho yêu cầu ",n.jsx(t.code,{children:"ApiFetch"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function p(c={}){const{wrapper:t}={...o(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{p as default};
