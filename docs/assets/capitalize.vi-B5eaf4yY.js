import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/capitalize - Viết hoa chữ cái đầu tiên của một chuỗi`}),`
`,(0,c.jsx)(t.h1,{id:`capitalize`,children:(0,c.jsx)(t.code,{children:`capitalize`})}),`
`,(0,c.jsx)(t.p,{children:`Viết hoa chữ cái đầu tiên của một chuỗi. Trả về cùng một chuỗi nếu nó trống. Hàm này mạnh mẽ và an toàn cho các đầu vào không phải chuỗi.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Chuỗi gốc cần viết hoa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isLocale: boolean`}),` (tùy chọn) — Nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, sử dụng địa phương (locale) toàn cục hiện tại (thông qua `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),`) cho các quy tắc viết hoa.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi với chữ cái đầu tiên được viết hoa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { capitalize, Geo } from '@dxtmisha/functional-basic'

console.log(capitalize('hello')) // 'Hello'
console.log(capitalize('123'))   // '123'

// Viết hoa theo ngữ cảnh địa phương (ví dụ: đối với tiếng Thổ Nhĩ Kỳ 'i' -> 'İ')
Geo.set('tr-TR')
console.log(capitalize('i', true)) // 'İ'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};