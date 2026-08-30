import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getCurrentTime - Lấy thời gian hiện tại`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrenttime`,children:(0,c.jsx)(t.code,{children:`getCurrentTime`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về thời gian hiện tại tính bằng mili giây.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cảnh báo (SSR):`}),` Việc sử dụng hàm này để render trong SSR gần như chắc chắn sẽ dẫn đến lỗi hydration mismatch vì dấu thời gian (timestamp) trên máy chủ sẽ khác với dấu thời gian trên máy khách.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này là một wrapper bao quanh `,(0,c.jsx)(t.code,{children:`Date.now()`}),` và cho phép bạn nhanh chóng lấy dấu thời gian (timestamp).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Thời gian hiện tại tính bằng mili giây (number).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentTime } from '@dxtmisha/functional-basic'

const time = getCurrentTime()
// Kết quả: 1710498600000 (ví dụ)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};