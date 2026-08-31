import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initApi - Khởi tạo API client`}),`
`,(0,c.jsx)(t.h1,{id:`initapi`,children:(0,c.jsx)(t.code,{children:`initApi`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm tiện ích giúp khởi tạo API client cho yêu cầu hiện tại trên server. Nó thiết lập origin cơ sở được trích xuất từ đối tượng yêu cầu để đảm bảo rằng các URL tuyệt đối được hình thành chính xác khi thực hiện các yêu cầu API trong quá trình render phía server (SSR).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — Đối tượng yêu cầu HTTP server đến.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initApi } from '@dxtmisha/nitro-basic'

export default defineEventHandler((event) => {
  const request = toWebRequest(event)
  initApi(request)
  
  // Bây giờ Api client đã được cấu hình với origin chính xác
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};