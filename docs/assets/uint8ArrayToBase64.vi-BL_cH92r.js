import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/uint8ArrayToBase64 - Chuyển đổi Uint8Array sang Base64`}),`
`,(0,c.jsx)(t.h1,{id:`uint8arraytobase64`,children:(0,c.jsx)(t.code,{children:`uint8ArrayToBase64`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi một mảng dữ liệu nhị phân `,(0,c.jsx)(t.code,{children:`Uint8Array`}),` thành một chuỗi được mã hóa Base64. Hỗ trợ cả môi trường trình duyệt (thông qua `,(0,c.jsx)(t.code,{children:`btoa`}),`) và môi trường Node.js (thông qua `,(0,c.jsx)(t.code,{children:`Buffer`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bytes: Uint8Array`}),` — Dữ liệu nhị phân.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi định dạng Base64.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};