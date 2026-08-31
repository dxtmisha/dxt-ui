import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initSsrApp - Render ứng dụng SSR`}),`
`,(0,c.jsx)(t.h1,{id:`initssrapp`,children:(0,c.jsx)(t.code,{children:`initSsrApp`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm bất đối xứng giúp render ứng dụng Vue thành một chuỗi HTML và trích xuất thêm dữ liệu ngữ cảnh (ví dụ: teleports). Đây là bước cốt lõi trong việc tạo phản hồi từ server.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`context: SSRContext`}),` (mặc định `,(0,c.jsx)(t.code,{children:`{}`}),`) — Ngữ cảnh render server.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<{ appHtml, teleportsHtml, context }>`}),` — Một đối tượng chứa HTML của ứng dụng, HTML của teleports và ngữ cảnh đã được cập nhật.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initSsrApp } from '@dxtmisha/nitro-basic'

const { appHtml, teleportsHtml } = await initSsrApp(app)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};