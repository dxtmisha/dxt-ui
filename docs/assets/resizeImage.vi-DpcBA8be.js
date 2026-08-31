import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/resizeImage - Thay đổi kích thước hình ảnh bất đồng bộ`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimage`,children:(0,c.jsx)(t.code,{children:`resizeImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tải và thay đổi kích thước hình ảnh một cách bất đồng bộ nếu chiều rộng hoặc chiều cao vượt quá `,(0,c.jsx)(t.code,{children:`maxSize`}),` được chỉ định. Trả về một Promise chứa chuỗi Data URL của hình ảnh đã thu nhỏ, hoặc nguồn ban đầu nếu không cần thu nhỏ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — Phần tử hình ảnh hoặc nguồn chuỗi (URL, Data URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — Kích thước tối đa cho phép tính bằng pixel (mặc định là `,(0,c.jsx)(t.code,{children:`1280`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Loại MIME tùy chọn cho Data URL kết quả (ví dụ: `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Một promise trả về chuỗi Data URL đã thay đổi kích thước hoặc nguồn ban đầu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImage } from '@dxtmisha/functional-basic'

// Thu nhỏ hình ảnh từ Data URL hoặc URL
const resizedDataUrl = await resizeImage('data:image/png;base64,...', 1280)
console.log(resizedDataUrl)

// Sử dụng với phần tử <img>
const img = document.querySelector('img')
const result = await resizeImage(img, 800, 'image/jpeg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};