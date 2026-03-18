import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/isApiSuccess - Kiểm tra phản hồi API thành công"}),`
`,n.jsx(c.h1,{id:"isapisuccess",children:n.jsx(c.code,{children:"isApiSuccess"})}),`
`,n.jsx(c.p,{children:"Kiểm tra xem phản hồi API có thành công hay không."}),`
`,n.jsx(c.p,{children:"Việc kiểm tra được thực hiện theo các quy tắc sau:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"Nếu dữ liệu là một mảng, nó được coi là thành công."}),`
`,n.jsxs(c.li,{children:["Nếu dữ liệu là một đối tượng, sự thành công được xác định bởi các trường ",n.jsx(c.code,{children:"status === 'success'"})," hoặc ",n.jsx(c.code,{children:"success === true"}),"."]}),`
`,n.jsxs(c.li,{children:["Nếu trường ",n.jsx(c.code,{children:"statusObject"})," có mặt, sự thành công được xác định bởi mã trạng thái HTTP (bắt đầu bằng 2)."]}),`
`,n.jsx(c.li,{children:"Nếu không có trường nào có mặt, sự thành công được xác định bởi trạng thái API toàn cục."}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"data: ApiData<T>"})," — dữ liệu phản hồi API."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu phản hồi thành công, ngược lại là ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function x(s={}){const{wrapper:c}={...e(),...s.components};return c?n.jsx(c,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
