import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/blobToBase64 - Chuyển đổi Blob thành Base64`}),`
`,(0,l.jsx)(t.h1,{id:`blobtobase64`,children:(0,l.jsx)(t.code,{children:`blobToBase64`})}),`
`,(0,l.jsxs)(t.p,{children:[`Chuyển đổi bất đồng bộ các đối tượng `,(0,l.jsx)(t.code,{children:`Blob`}),` hoặc `,(0,l.jsx)(t.code,{children:`File`}),` thành chuỗi định dạng Base64 (Data URL).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`blob: Blob`}),` — Đối tượng `,(0,l.jsx)(t.code,{children:`Blob`}),` (hoặc `,(0,l.jsx)(t.code,{children:`File`}),`) cần chuyển đổi.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`clean: boolean = false`}),` — Nếu `,(0,l.jsx)(t.code,{children:`true`}),`, loại bỏ tiền tố Data URL (ví dụ: `,(0,l.jsx)(t.code,{children:`data:image/png;base64,`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Môi trường thực thi:`}),`
Tiện ích tự động xác định phương pháp chuyển đổi khả dụng:`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Trình duyệt`}),`: Sử dụng `,(0,l.jsx)(t.code,{children:`FileReader`}),` để đọc nội dung.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Máy chủ (SSR)`}),`: Sử dụng `,(0,l.jsx)(t.code,{children:`Buffer`}),` và phương thức bất đồng bộ `,(0,l.jsx)(t.code,{children:`blob.arrayBuffer()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<string | undefined>`}),` — Chuỗi Base64 hoặc `,(0,l.jsx)(t.code,{children:`undefined`}),` nếu không thể chuyển đổi.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};