import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isFunction - Kiểm tra kiểu hàm`}),`
`,(0,c.jsx)(t.h1,{id:`isfunction`,children:(0,c.jsx)(t.code,{children:`isFunction`})}),`
`,(0,c.jsx)(t.p,{children:`Trực tiếp định hình xem thông số truyền tải có phải là một chức năng khả thi chạy dạng hàm/function hay không (bao hàm luôn cả hàm mũi tên arrow function, hàm bất đồng bộ async function, và cả chức năng sinh generator function).`}),`
`,(0,c.jsxs)(t.p,{children:[`Cuộc điều kiểm này tuân lệnh vận hành dưới phép kiểm tra chuyên biệt `,(0,c.jsx)(t.code,{children:`instanceof Function`}),`, hỗ trợ cùng phương pháp hậu bị truyền thống `,(0,c.jsx)(t.code,{children:`typeof callback === 'function'`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: T`}),` — Biến cần được định chuẩn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Hồi báo kết quả `,(0,c.jsx)(t.code,{children:`true`}),` chỉ khi thông số truyền đúng thật là định dạng một hàm. Đóng luôn vai trò rào chắn kiểu bảo hộ TypeScript nhằm rẽ gọn biến xuống riêng diện mạo `,(0,c.jsx)(t.code,{children:`FunctionArgs<any, any>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};