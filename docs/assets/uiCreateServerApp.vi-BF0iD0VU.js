import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateServerApp - Khởi tạo Server đầy đủ`}),`
`,(0,c.jsx)(t.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(t.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm bất đối xứng toàn diện để khởi tạo ứng dụng ở phía server. Nó cấu hình mọi thứ cần thiết cho SSR: header, bộ lưu trữ, API, định tuyến và thực hiện render HTML.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Các giai đoạn chính:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Khởi tạo header, bộ lưu trữ và cookie.`}),`
`,(0,c.jsx)(t.li,{children:`Cấu hình API client và các plugin chức năng.`}),`
`,(0,c.jsx)(t.li,{children:`Đồng bộ hóa router với URL hiện tại.`}),`
`,(0,c.jsx)(t.li,{children:`Render ứng dụng thành một chuỗi.`}),`
`,(0,c.jsx)(t.li,{children:`Thay thế dữ liệu (ngôn ngữ, meta, kịch bản, nội dung) vào template HTML.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Một đối tượng với nội dung trang đã được render, metadata và các header.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: ApiConfig`}),` — cấu hình cho API client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`translate?: TranslateConfig`}),` — cấu hình cho dịch vụ dịch thuật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`metaSuffix?: string`}),` — hậu tố sẽ được thêm vào tất cả các tiêu đề trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icons?: IconsConfig`}),` — cấu hình cho dịch vụ quản lý icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router?: Router`}),` — thực thể Vue Router.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — danh sách nguyên nhân lỗi cho trung tâm lỗi.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};