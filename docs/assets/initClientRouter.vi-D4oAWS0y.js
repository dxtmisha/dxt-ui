import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/initClientRouter - Đợi Router sẵn sàng`}),`
`,(0,c.jsx)(n.h1,{id:`initclientrouter`,children:(0,c.jsx)(n.code,{children:`initClientRouter`})}),`
`,(0,c.jsx)(n.p,{children:`Một hàm bất đối xứng giúp đợi việc khởi tạo và sự sẵn sàng hoàn toàn của Vue router. Điều này đảm bảo rằng tất cả các thành phần bất đối xứng và các hook điều hướng ban đầu được giải quyết trước khi ứng dụng tiếp tục thực thi (ví dụ: trước khi hydrat hóa trên client hoặc render trên server).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router: Router | undefined`}),` — Thực thể Vue Router.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initClientRouter } from '@dxtmisha/nitro-basic'
import { createRouter } from './router'

const router = createRouter()
await initClientRouter(router)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};