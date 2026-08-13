import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initCookieStorage - Khởi tạo bộ lưu trữ Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`initcookiestorage`,children:(0,c.jsx)(t.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm để khởi tạo bộ lưu trữ cookie trong ứng dụng Vue. Nó trích xuất chuỗi `,(0,c.jsx)(t.code,{children:`Cookie`}),` từ yêu cầu HTTP và cung cấp nó thông qua cơ chế `,(0,c.jsx)(t.code,{children:`provide`}),` bằng khóa `,(0,c.jsx)(t.code,{children:`NITRO_APP_COOKIE`}),`. Điều này cho phép các thành phần và composables truy cập cookie trong quá trình render phía server.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — Đối tượng yêu cầu HTTP.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// Trong một handler server
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};