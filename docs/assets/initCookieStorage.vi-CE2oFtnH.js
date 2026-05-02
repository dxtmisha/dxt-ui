import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/initCookieStorage - Khởi tạo bộ lưu trữ Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`initcookiestorage`,children:(0,c.jsx)(n.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm để khởi tạo bộ lưu trữ cookie trong ứng dụng Vue. Nó trích xuất chuỗi `,(0,c.jsx)(n.code,{children:`Cookie`}),` từ yêu cầu HTTP và cung cấp nó thông qua cơ chế `,(0,c.jsx)(n.code,{children:`provide`}),` bằng khóa `,(0,c.jsx)(n.code,{children:`NITRO_APP_COOKIE`}),`. Điều này cho phép các thành phần và composables truy cập cookie trong quá trình render phía server.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App<T>`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — Đối tượng yêu cầu HTTP.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// Trong một handler server
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};