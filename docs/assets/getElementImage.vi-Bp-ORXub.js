import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getElementImage - Lấy phần tử hình ảnh`}),`
`,(0,c.jsx)(n.h1,{id:`getelementimage`,children:(0,c.jsx)(n.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Dùng để lấy nút `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),` một cách an toàn. Nếu truyền vào một chuỗi (đường dẫn URL), hàm sẽ tự động tạo thẻ `,(0,c.jsx)(n.code,{children:`<img>`}),` và gán chuỗi đó cho thuộc tính `,(0,c.jsx)(n.code,{children:`src`}),`. Nếu giá trị truyền vào đã là một đối tượng `,(0,c.jsx)(n.code,{children:`HTMLImageElement`}),`, hàm chỉ cần trả về đối tượng đó giữ nguyên.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: HTMLImageElement | string`}),` — Phần tử hình ảnh hoặc một nguồn chuỗi (URL).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`HTMLImageElement | undefined`}),` — Một thẻ `,(0,c.jsx)(n.code,{children:`<img>`}),` đã sẵn sàng để sử dụng, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu môi trường không cho phép tạo (ví dụ: không có DOM).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// Truyền vào đường dẫn chuỗi (URL)
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// Truyền vào thẻ img có sẵn
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img1 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};