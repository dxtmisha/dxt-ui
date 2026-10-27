import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getElementImage - Lấy phần tử hình ảnh`}),`
`,(0,c.jsx)(t.h1,{id:`getelementimage`,children:(0,c.jsx)(t.code,{children:`getElementImage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Dùng để lấy nút `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),` một cách an toàn. Nếu truyền vào một chuỗi (URL / Base64 / Blob URL), hàm sẽ tạo thẻ `,(0,c.jsx)(t.code,{children:`<img>`}),` mới, tùy chọn gắn các hàm xử lý sự kiện `,(0,c.jsx)(t.code,{children:`onload`}),` và `,(0,c.jsx)(t.code,{children:`onerror`}),`, sau đó gán chuỗi đó cho thuộc tính `,(0,c.jsx)(t.code,{children:`src`}),`. Nếu giá trị truyền vào đã là một đối tượng `,(0,c.jsx)(t.code,{children:`HTMLImageElement`}),`, hàm sẽ trả về đối tượng đó ngay lập tức mà không thay đổi.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image?: HTMLImageElement | string`}),` — Phần tử hình ảnh hoặc nguồn chuỗi (URL / Base64 / Blob URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onload?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Hàm callback tùy chọn khi tải hình ảnh thành công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onerror?: GetElementImageCallback`}),` (`,(0,c.jsx)(t.code,{children:`(image: HTMLImageElement, event?: Event | string) => void`}),`) — Hàm callback tùy chọn khi xảy ra lỗi tải hình ảnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`HTMLImageElement | undefined`}),` — Một thẻ `,(0,c.jsx)(t.code,{children:`<img>`}),` đã sẵn sàng để sử dụng, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu môi trường không cho phép tạo (ví dụ: trong SSR) hoặc nếu không truyền tham số `,(0,c.jsx)(t.code,{children:`image`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementImage } from '@dxtmisha/functional-basic'

// 1. Tạo thẻ đơn giản từ đường dẫn URL
const img1 = getElementImage('/path/to/image.png')
console.log(img1 instanceof HTMLImageElement) // true
console.log(img1?.src) // 'http://.../path/to/image.png'

// 2. Tạo với hàm theo dõi sự kiện tải và lỗi
const imgWithEvents = getElementImage(
  '/path/to/avatar.jpg',
  (image) => console.log('Tải ảnh thành công:', image.naturalWidth),
  (image) => console.error('Lỗi khi tải ảnh:', image.src)
)

// 3. Truyền vào thẻ img có sẵn (trả về trực tiếp không thay đổi)
const existingImg = document.createElement('img')
const img2 = getElementImage(existingImg)
console.log(img2 === existingImg) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};