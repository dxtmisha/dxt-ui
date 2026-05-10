import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/setupClientStorage - Thiết lập các trình xử lý bộ nhớ client`}),`
`,(0,l.jsx)(n.h1,{id:`setupclientstorage`,children:(0,l.jsx)(n.code,{children:`setupClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích để thiết lập các trình xử lý yêu cầu cho bộ nhớ client (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`) của Figma. Nó kết nối các yêu cầu từ giao diện người dùng (GET/SET) với các hoạt động đọc và ghi thực tế ở phía plugin.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Tham số:`}),`
Không có.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupClientStorage } from '@dxtmisha/figma-code'

// Khởi tạo trong phần chính của plugin (thường là code.ts)
setupClientStorage()

// Bây giờ UI có thể sử dụng fetchClientStorage và sendClientStorage 
// để tương tác với clientStorage của Figma.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};