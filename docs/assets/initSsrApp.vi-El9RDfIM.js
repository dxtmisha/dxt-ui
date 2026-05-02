import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/initSsrApp - Render ứng dụng SSR`}),`
`,(0,c.jsx)(n.h1,{id:`initssrapp`,children:(0,c.jsx)(n.code,{children:`initSsrApp`})}),`
`,(0,c.jsx)(n.p,{children:`Một hàm bất đối xứng giúp render ứng dụng Vue thành một chuỗi HTML và trích xuất thêm dữ liệu ngữ cảnh (ví dụ: teleports). Đây là bước cốt lõi trong việc tạo phản hồi từ server.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App<T>`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`context: SSRContext`}),` (mặc định `,(0,c.jsx)(n.code,{children:`{}`}),`) — Ngữ cảnh render server.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<{ appHtml, teleportsHtml, context }>`}),` — Một đối tượng chứa HTML của ứng dụng, HTML của teleports và ngữ cảnh đã được cập nhật.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initSsrApp } from '@dxtmisha/nitro-basic'

const { appHtml, teleportsHtml } = await initSsrApp(app)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};