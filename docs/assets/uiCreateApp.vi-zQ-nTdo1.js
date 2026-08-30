import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateApp - Tạo ứng dụng Vue`}),`
`,(0,c.jsx)(t.h1,{id:`uicreateapp`,children:(0,c.jsx)(t.code,{children:`uiCreateApp`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo một thực thể ứng dụng Vue SSR từ một thành phần gốc và khởi tạo các plugin cốt lõi, bao gồm cả router. Nếu một router có sẵn không được truyền vào trong các tùy chọn, hàm có thể tự động tạo một router dựa trên các tuyến đường được cung cấp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`appComponent: A`}),` — Thành phần gốc của ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: NitroAppOptions`}),` — Các tùy chọn cấu hình ứng dụng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Một đối tượng chứa thực thể `,(0,c.jsx)(t.code,{children:`app`}),`, `,(0,c.jsx)(t.code,{children:`router`}),`, và `,(0,c.jsx)(t.code,{children:`options`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`appRouter?: object`}),` — Cấu hình router:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`routes: RouteRecordRaw[]`}),` — danh sách các bản ghi tuyến đường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: RouterOptions`}),` — các tùy chọn tạo router.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base?: string`}),` — đường dẫn cơ sở cho router.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: ApiConfig`}),` — cấu hình cho API client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`translate?: TranslateConfig`}),` — cấu hình cho dịch vụ dịch thuật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`metaSuffix?: string`}),` — hậu tố sẽ được thêm vào tất cả các tiêu đề trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icons?: IconsConfig`}),` — cấu hình cho dịch vụ quản lý icon.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router?: Router`}),` — thực thể Vue Router (nếu đã được tạo).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — danh sách nguyên nhân lỗi cho trung tâm lỗi.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'

const { app, router } = uiCreateApp(App, {
  appRouter: {
    routes: [
      { path: '/', component: () => import('./Home.vue') }
    ]
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};