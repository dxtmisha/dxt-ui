import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateApp - Tạo ứng dụng Vue`}),`
`,(0,c.jsx)(n.h1,{id:`uicreateapp`,children:(0,c.jsx)(n.code,{children:`uiCreateApp`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một thực thể ứng dụng Vue SSR từ một thành phần gốc và khởi tạo các plugin cốt lõi, bao gồm cả router. Nếu một router có sẵn không được truyền vào trong các tùy chọn, hàm có thể tự động tạo một router dựa trên các tuyến đường được cung cấp.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`appComponent: A`}),` — Thành phần gốc của ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: NitroAppOptions`}),` — Các tùy chọn cấu hình ứng dụng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Một đối tượng chứa thực thể `,(0,c.jsx)(n.code,{children:`app`}),`, `,(0,c.jsx)(n.code,{children:`router`}),`, và `,(0,c.jsx)(n.code,{children:`options`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`appRouter?: object`}),` — Cấu hình router:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`routes: RouteRecordRaw[]`}),` — danh sách các bản ghi tuyến đường.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: RouterOptions`}),` — các tùy chọn tạo router.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — cấu hình cho API client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — cấu hình cho dịch vụ dịch thuật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — hậu tố sẽ được thêm vào tất cả các tiêu đề trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — cấu hình cho dịch vụ quản lý icon.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — thực thể Vue Router (nếu đã được tạo).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — danh sách nguyên nhân lỗi cho trung tâm lỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'

const { app, router } = uiCreateApp(App, {
  appRouter: {
    routes: [
      { path: '/', component: () => import('./Home.vue') }
    ]
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};