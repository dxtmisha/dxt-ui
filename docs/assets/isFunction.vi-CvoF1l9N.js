import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/isFunction - Kiểm tra kiểu hàm`}),`
`,(0,c.jsx)(n.h1,{id:`isfunction`,children:(0,c.jsx)(n.code,{children:`isFunction`})}),`
`,(0,c.jsx)(n.p,{children:`Trực tiếp định hình xem thông số truyền tải có phải là một chức năng khả thi chạy dạng hàm/function hay không (bao hàm luôn cả hàm mũi tên arrow function, hàm bất đồng bộ async function, và cả chức năng sinh generator function).`}),`
`,(0,c.jsxs)(n.p,{children:[`Cuộc điều kiểm này tuân lệnh vận hành dưới phép kiểm tra chuyên biệt `,(0,c.jsx)(n.code,{children:`instanceof Function`}),`, hỗ trợ cùng phương pháp hậu bị truyền thống `,(0,c.jsx)(n.code,{children:`typeof callback === 'function'`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T`}),` — Biến cần được định chuẩn.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Hồi báo kết quả `,(0,c.jsx)(n.code,{children:`true`}),` chỉ khi thông số truyền đúng thật là định dạng một hàm. Đóng luôn vai trò rào chắn kiểu bảo hộ TypeScript nhằm rẽ gọn biến xuống riêng diện mạo `,(0,c.jsx)(n.code,{children:`FunctionArgs<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};