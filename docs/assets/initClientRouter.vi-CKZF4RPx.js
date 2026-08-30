import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initClientRouter - Đợi Router sẵn sàng`}),`
`,(0,c.jsx)(t.h1,{id:`initclientrouter`,children:(0,c.jsx)(t.code,{children:`initClientRouter`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm bất đối xứng giúp đợi việc khởi tạo và sự sẵn sàng hoàn toàn của Vue router. Điều này đảm bảo rằng tất cả các thành phần bất đối xứng và các hook điều hướng ban đầu được giải quyết trước khi ứng dụng tiếp tục thực thi (ví dụ: trước khi hydrat hóa trên client hoặc render trên server).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router: Router | undefined`}),` — Thực thể Vue Router.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initClientRouter } from '@dxtmisha/nitro-basic'
import { createRouter } from './router'

const router = createRouter()
await initClientRouter(router)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};