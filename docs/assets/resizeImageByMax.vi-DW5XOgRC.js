import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/resizeImageByMax - Thay đổi kích thước hình ảnh theo cạnh tối đa`}),`
`,(0,c.jsx)(t.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(t.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(t.p,{children:`Thay đổi kích thước hình ảnh theo tỷ lệ để vừa với giới hạn kích thước tối đa được chỉ định (theo chiều rộng, chiều cao hoặc tự động theo cạnh lớn nhất). Trả về Chuỗi Data URL được mã hóa Base64 của hình ảnh đã thu nhỏ.`}),`
`,(0,c.jsx)(t.p,{children:`Hàm này hữu ích để nén hình ảnh trực tiếp (on the fly) trước khi tải lên máy chủ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: HTMLImageElement | string`}),` — Phần tử hình ảnh hoặc đường dẫn URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxSize: number`}),` — Kích thước pixel tối đa cho phép (đối với chiều rộng hoặc chiều cao).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ResizeImageByMaxType`}),` — Chiến lược mở rộng/thu nhỏ: `,(0,c.jsx)(t.code,{children:`'auto'`}),`, `,(0,c.jsx)(t.code,{children:`'width'`}),`, hoặc `,(0,c.jsx)(t.code,{children:`'height'`}),`. Mặc định là `,(0,c.jsx)(t.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: string`}),` — Loại MIME tùy chọn cho chuỗi Data URL trả về (ví dụ, `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`). Mặc định là `,(0,c.jsx)(t.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Một chuỗi Data URL chứa hình ảnh đã thay đổi kích thước hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu hình ảnh không thể được xử lý hoặc kích thước của nó đã nhỏ hơn/bằng `,(0,c.jsx)(t.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};