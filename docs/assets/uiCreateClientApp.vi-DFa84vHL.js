import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/uiCreateClientApp - Khởi động ứng dụng Client`}),`
`,(0,c.jsx)(t.h1,{id:`uicreateclientapp`,children:(0,c.jsx)(t.code,{children:`uiCreateClientApp`})}),`
`,(0,c.jsx)(t.p,{children:`Hoàn tất việc khởi tạo và mount ứng dụng Vue vào DOM ở phía client. Nó kết nối các plugin chức năng, đợi router sẵn sàng để ngăn chặn sự không khớp khi hydrat hóa, và thực hiện các hành động bổ sung trước khi mount.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rootContainer: string | T`}),` (mặc định `,(0,c.jsx)(t.code,{children:`'#app'`}),`) — Selector hoặc thành phần để mount.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router: Router`}),` — Thực thể Vue Router.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: NitroAppOptions`}),` — Các tùy chọn cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (app: App<T>) => Promise<void> | void`}),` — Hành động bổ sung trước khi mount.`]}),`
`]}),`
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
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateClientApp } from '@dxtmisha/nitro-basic'

await uiCreateClientApp(app, '#app', router, options)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};