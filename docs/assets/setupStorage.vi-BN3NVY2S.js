import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/setupStorage - Thiết lập các trình xử lý bộ nhớ chung`}),`
`,(0,l.jsx)(n.h1,{id:`setupstorage`,children:(0,l.jsx)(n.code,{children:`setupStorage`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để thiết lập các trình xử lý yêu cầu cho bộ nhớ chung của Figma. Nó kết nối các yêu cầu từ giao diện người dùng (GET/SET) với các hoạt động đọc và ghi thực tế trong plugin, hỗ trợ các định danh đối tượng tùy chọn (ví dụ: ID của node).`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Tham số:`}),`
Không có.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { setupStorage } from '@dxtmisha/figma-code'

// Khởi tạo trong phần chính của plugin (thường là code.ts)
setupStorage()

// Bây giờ UI có thể sử dụng fetchStorage và sendStorage 
// để tương tác với bộ nhớ chung của Figma.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};