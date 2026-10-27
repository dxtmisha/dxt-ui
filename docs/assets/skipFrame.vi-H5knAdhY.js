import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/skipFrame - Bỏ qua khung hình hoạt ảnh`}),`
`,(0,c.jsx)(t.h1,{id:`skipframe`,children:(0,c.jsx)(t.code,{children:`skipFrame`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích bất đồng bộ giúp bỏ qua số lượng khung hình hoạt ảnh đã chỉ định (`,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`) hoặc thực thi hàm callback trong khung hình đó.`]}),`
`,(0,c.jsx)(t.p,{children:`Tiện ích này hữu ích cho việc chờ DOM cập nhật và trình duyệt vẽ lại (repaint) trước khi thực hiện thao tác tiếp theo (ví dụ: đo kích thước phần tử hoặc xử lý hiển thị), cũng như thực thi mã tại một khung hình cụ thể.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Hành vi trong SSR:`}),`
Trong các môi trường không có DOM (chẳng hạn như SSR), `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` sẽ không được sử dụng. Hàm sẽ giải quyết ngay lập tức mà không cần gọi `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` để ngăn chặn chặn luồng trên máy chủ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: () => T | Promise<T>`}),` — Hàm callback tùy chọn để thực thi tại khung hình hoạt ảnh đích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`count?: number = 1`}),` — Số lượng khung hình hoạt ảnh cần bỏ qua (mặc định là `,(0,c.jsx)(t.code,{children:`1`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T | void>`}),` — Một promise giải quyết tại khung hình hoạt ảnh với kết quả của callback (hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không cung cấp callback).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { skipFrame } from '@dxtmisha/functional-basic'

// Chờ khung hình hoạt ảnh tiếp theo (mặc định 1 khung hình)
await skipFrame()

// Bỏ qua nhiều khung hình (ví dụ: 2 khung hình)
await skipFrame(undefined, 2)

// Thực thi callback sau khi bỏ qua khung hình
const result = await skipFrame(() => {
  return document.getElementById('box')?.getBoundingClientRect()
}, 2)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};