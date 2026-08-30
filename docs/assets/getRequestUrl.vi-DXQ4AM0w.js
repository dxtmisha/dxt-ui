import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/getRequestUrl - Lấy đường dẫn yêu cầu`}),`
`,(0,c.jsx)(t.h1,{id:`getrequesturl`,children:(0,c.jsx)(t.code,{children:`getRequestUrl`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích giúp trích xuất đường dẫn (pathname) từ đối tượng `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Request`,rel:`nofollow`,children:`Request`}),`. Điều này cho phép bạn chỉ lấy đường dẫn tài nguyên, loại trừ giao thức, tên miền và các tham số truy vấn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — Đối tượng Request chuẩn Web API.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đường dẫn (ví dụ: `,(0,c.jsx)(t.code,{children:`/api/users`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestUrl } from '@dxtmisha/nitro-basic'

// Ví dụ với đối tượng Request
const request = new Request('https://dxtmisha.com/docs/api?query=1')
const urlPath = getRequestUrl(request)

// Kết quả: "/docs/api"
console.log(urlPath)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};