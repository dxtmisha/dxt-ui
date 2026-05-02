import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/blobToBase64 - Chuyển đổi Blob thành Base64`}),`
`,(0,l.jsx)(n.h1,{id:`blobtobase64`,children:(0,l.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(n.p,{children:[`Chuyển đổi bất đồng bộ các đối tượng `,(0,l.jsx)(n.code,{children:`Blob`}),` hoặc `,(0,l.jsx)(n.code,{children:`File`}),` thành chuỗi định dạng Base64 (Data URL).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`blob: Blob`}),` — Đối tượng `,(0,l.jsx)(n.code,{children:`Blob`}),` (hoặc `,(0,l.jsx)(n.code,{children:`File`}),`) cần chuyển đổi.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`clean: boolean = false`}),` — Nếu `,(0,l.jsx)(n.code,{children:`true`}),`, loại bỏ tiền tố Data URL (ví dụ: `,(0,l.jsx)(n.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Môi trường thực thi:`}),`
Tiện ích tự động xác định phương pháp chuyển đổi khả dụng:`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Trình duyệt`}),`: Sử dụng `,(0,l.jsx)(n.code,{children:`FileReader`}),` để đọc nội dung.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Máy chủ (SSR)`}),`: Sử dụng `,(0,l.jsx)(n.code,{children:`Buffer`}),` và phương thức bất đồng bộ `,(0,l.jsx)(n.code,{children:`blob.arrayBuffer()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<string | undefined>`}),` — Chuỗi Base64 hoặc `,(0,l.jsx)(n.code,{children:`undefined`}),` nếu không thể chuyển đổi.`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { blobToBase64 } from '@dxtmisha/functional-basic'

// 1. Mặc định (trả về Data URL)
const dataUrl = await blobToBase64(file)
// 'data:image/png;base64,iVBORw0KGgo...'

// 2. Base64 thô (không có tiền tố)
const rawBase64 = await blobToBase64(file, true)
// 'iVBORw0KGgo...'

// 3. Xử lý trường hợp API không khả dụng
const result = await blobToBase64(blob)
if (result) {
// làm việc với chuỗi
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};