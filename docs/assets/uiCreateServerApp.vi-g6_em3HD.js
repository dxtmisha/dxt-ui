import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateServerApp - Khởi tạo Server đầy đủ`}),`
`,(0,c.jsx)(n.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(n.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(n.p,{children:`Một hàm bất đối xứng toàn diện để khởi tạo ứng dụng ở phía server. Nó cấu hình mọi thứ cần thiết cho SSR: header, bộ lưu trữ, API, định tuyến và thực hiện render HTML.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Các giai đoạn chính:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Khởi tạo header, bộ lưu trữ và cookie.`}),`
`,(0,c.jsx)(n.li,{children:`Cấu hình API client và các plugin chức năng.`}),`
`,(0,c.jsx)(n.li,{children:`Đồng bộ hóa router với URL hiện tại.`}),`
`,(0,c.jsx)(n.li,{children:`Render ứng dụng thành một chuỗi.`}),`
`,(0,c.jsx)(n.li,{children:`Thay thế dữ liệu (ngôn ngữ, meta, kịch bản, nội dung) vào template HTML.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Một đối tượng với nội dung trang đã được render, metadata và các header.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — cấu hình cho API client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — cấu hình cho dịch vụ dịch thuật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — hậu tố sẽ được thêm vào tất cả các tiêu đề trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — cấu hình cho dịch vụ quản lý icon.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — thực thể Vue Router.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — danh sách nguyên nhân lỗi cho trung tâm lỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};