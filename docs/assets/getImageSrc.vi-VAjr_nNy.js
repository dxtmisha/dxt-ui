import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getImageSrc - Lấy đường dẫn nguồn hình ảnh`}),`
`,(0,c.jsx)(t.h1,{id:`getimagesrc`,children:(0,c.jsx)(t.code,{children:`getImageSrc`})}),`
`,(0,c.jsxs)(t.p,{children:[`Dùng để lấy chuỗi nguồn (`,(0,c.jsx)(t.code,{children:`src`}),`) một cách an toàn từ đối tượng `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` hoặc chuỗi (URL / Data URL). Nếu truyền vào một chuỗi, hàm sẽ trả về chính chuỗi đó. Nếu truyền vào một phần tử `,(0,c.jsx)(t.code,{children:`<img>`}),`, hàm sẽ trả về giá trị thuộc tính `,(0,c.jsx)(t.code,{children:`src`}),`. Nếu không có giá trị, hàm trả về chuỗi rỗng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — Phần tử hình ảnh, nguồn chuỗi (URL) hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi nguồn hình ảnh hoặc chuỗi rỗng `,(0,c.jsx)(t.code,{children:`''`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getImageSrc } from '@dxtmisha/functional-basic'

// Truyền vào chuỗi URL
const src1 = getImageSrc('https://example.com/photo.png')
console.log(src1) // 'https://example.com/photo.png'

// Truyền vào phần tử img
const imgElement = document.querySelector('img')
const src2 = getImageSrc(imgElement)
console.log(src2) // 'https://example.com/...'

// Truyền vào undefined
console.log(getImageSrc(undefined)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};