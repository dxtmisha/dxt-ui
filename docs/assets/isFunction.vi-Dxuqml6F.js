import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(c){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/isFunction - Kiểm tra kiểu hàm"}),`
`,n.jsx(i.h1,{id:"isfunction",children:n.jsx(i.code,{children:"isFunction"})}),`
`,n.jsx(i.p,{children:"Trực tiếp định hình xem thông số truyền tải có phải là một chức năng khả thi chạy dạng hàm/function hay không (bao hàm luôn cả hàm mũi tên arrow function, hàm bất đồng bộ async function, và cả chức năng sinh generator function)."}),`
`,n.jsxs(i.p,{children:["Cuộc điều kiểm này tuân lệnh vận hành dưới phép kiểm tra chuyên biệt ",n.jsx(i.code,{children:"instanceof Function"}),", hỗ trợ cùng phương pháp hậu bị truyền thống ",n.jsx(i.code,{children:"typeof callback === 'function'"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"callback: T"})," — Biến cần được định chuẩn."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"boolean"})," — Hồi báo kết quả ",n.jsx(i.code,{children:"true"})," chỉ khi thông số truyền đúng thật là định dạng một hàm. Đóng luôn vai trò rào chắn kiểu bảo hộ TypeScript nhằm rẽ gọn biến xuống riêng diện mạo ",n.jsx(i.code,{children:"FunctionArgs<any, any>"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function d(c={}){const{wrapper:i}={...o(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(t,{...c})}):t(c)}export{d as default};
