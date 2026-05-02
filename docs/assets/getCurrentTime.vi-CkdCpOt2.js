import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getCurrentTime - Lấy thời gian hiện tại`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrenttime`,children:(0,c.jsx)(n.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về thời gian hiện tại tính bằng mili giây.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Cảnh báo (SSR):`}),` Việc sử dụng hàm này để render trong SSR gần như chắc chắn sẽ dẫn đến lỗi hydration mismatch vì dấu thời gian (timestamp) trên máy chủ sẽ khác với dấu thời gian trên máy khách.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này là một wrapper bao quanh `,(0,c.jsx)(n.code,{children:`Date.now()`}),` và cho phép bạn nhanh chóng lấy dấu thời gian (timestamp).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Thời gian hiện tại tính bằng mili giây (number).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Kết quả: 1710498600000 (ví dụ)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};