import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateSsrRouter - Tạo SSR Router`}),`
`,(0,c.jsx)(t.h1,{id:`uicreatessrrouter`,children:(0,c.jsx)(t.code,{children:`uiCreateSsrRouter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thực thể Vue router với loại lịch sử phù hợp cho môi trường thực thi hiện tại. Trên server, nó sử dụng `,(0,c.jsx)(t.code,{children:`createMemoryHistory`}),`, và trong trình duyệt, nó sử dụng `,(0,c.jsx)(t.code,{children:`createWebHistory`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`routes: RouteRecordRaw[]`}),` — Danh sách các tuyến đường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: NitroAppRouterOptions`}),` — Các tùy chọn router bổ sung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base?: string`}),` — Đường dẫn cơ sở cho router.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateSsrRouter } from '@dxtmisha/nitro-basic'

const router = uiCreateSsrRouter(routes, {}, '/base-path/')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};