import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/capitalize - Viết hoa chữ cái đầu tiên của một chuỗi`}),`
`,(0,c.jsx)(n.h1,{id:`capitalize`,children:(0,c.jsx)(n.code,{children:`capitalize`})}),`
`,(0,c.jsx)(n.p,{children:`Viết hoa chữ cái đầu tiên của một chuỗi. Trả về cùng một chuỗi nếu nó trống. Hàm này mạnh mẽ và an toàn cho các đầu vào không phải chuỗi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi gốc cần viết hoa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocale: boolean`}),` (tùy chọn) — Nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, sử dụng địa phương (locale) toàn cục hiện tại (thông qua `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`) cho các quy tắc viết hoa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi với chữ cái đầu tiên được viết hoa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { capitalize, Geo } from '@dxtmisha/functional-basic'

console.log(capitalize('hello')) // 'Hello'
console.log(capitalize('123'))   // '123'

// Viết hoa theo ngữ cảnh địa phương (ví dụ: đối với tiếng Thổ Nhĩ Kỳ 'i' -> 'İ')
Geo.set('tr-TR')
console.log(capitalize('i', true)) // 'İ'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};