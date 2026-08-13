import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma-code/Functions/setupClientStorage - Thiết lập các trình xử lý bộ nhớ client`}),`
`,(0,l.jsx)(t.h1,{id:`setupclientstorage`,children:(0,l.jsx)(t.code,{children:`setupClientStorage`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích để thiết lập các trình xử lý yêu cầu cho bộ nhớ client (`,(0,l.jsx)(t.code,{children:`clientStorage`}),`) của Figma. Nó kết nối các yêu cầu từ giao diện người dùng (GET/SET) với các hoạt động đọc và ghi thực tế ở phía plugin.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Tham số:`}),`
Không có.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { setupClientStorage } from '@dxtmisha/figma-code'

// Khởi tạo trong phần chính của plugin (thường là code.ts)
setupClientStorage()

// Bây giờ UI có thể sử dụng fetchClientStorage và sendClientStorage 
// để tương tác với clientStorage của Figma.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};