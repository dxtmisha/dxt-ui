import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/resizeImageByMax - Thay đổi kích thước hình ảnh theo cạnh tối đa`}),`
`,(0,c.jsx)(n.h1,{id:`resizeimagebymax`,children:(0,c.jsx)(n.code,{children:`resizeImageByMax`})}),`
`,(0,c.jsx)(n.p,{children:`Thay đổi kích thước hình ảnh theo tỷ lệ để vừa với giới hạn kích thước tối đa được chỉ định (theo chiều rộng, chiều cao hoặc tự động theo cạnh lớn nhất). Trả về Chuỗi Data URL được mã hóa Base64 của hình ảnh đã thu nhỏ.`}),`
`,(0,c.jsx)(n.p,{children:`Hàm này hữu ích để nén hình ảnh trực tiếp (on the fly) trước khi tải lên máy chủ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — Phần tử hình ảnh hoặc đường dẫn URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxSize: number`}),` — Kích thước pixel tối đa cho phép (đối với chiều rộng hoặc chiều cao).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ResizeImageByMaxType`}),` — Chiến lược mở rộng/thu nhỏ: `,(0,c.jsx)(n.code,{children:`'auto'`}),`, `,(0,c.jsx)(n.code,{children:`'width'`}),`, hoặc `,(0,c.jsx)(n.code,{children:`'height'`}),`. Mặc định là `,(0,c.jsx)(n.code,{children:`'auto'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeData?: string`}),` — Loại MIME tùy chọn cho chuỗi Data URL trả về (ví dụ, `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`). Mặc định là `,(0,c.jsx)(n.code,{children:`'image/png'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Một chuỗi Data URL chứa hình ảnh đã thay đổi kích thước hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu hình ảnh không thể được xử lý hoặc kích thước của nó đã nhỏ hơn/bằng `,(0,c.jsx)(n.code,{children:`maxSize`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { resizeImageByMax } from '@dxtmisha/functional-basic'

const imgElement = document.querySelector('img')
const resizedDataUrl = resizeImageByMax(imgElement, 800)

console.log(resizedDataUrl) 
// 'data:image/png;base64,iVBORw0KGgo...'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};