import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/toNumber - Chuyển đổi giá trị sang kiểu số`}),`
`,(0,l.jsx)(n.h1,{id:`tonumber`,children:(0,l.jsx)(n.code,{children:`toNumber`})}),`
`,(0,l.jsx)(n.p,{children:`Chuyển đổi một chuỗi hoặc một số thành một số thực (float) hữu hạn. Hàm được thiết kế để xử lý nhiều kiểu định dạng khác nhau, bao gồm các ký tự phân cách phần nghìn và các dấu thập phân khác nhau.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value?: NumberOrString`}),` — Giá trị đầu vào cần chuyển đổi.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`number`}),` — Số thực sau khi phân tách hoặc `,(0,l.jsx)(n.code,{children:`0`}),` nếu chuyển đổi thất bại hoặc giá trị là vô hạn.`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toNumber } from '@dxtmisha/functional-basic'

// 1. Xử lý các loại dấu phân cách
toNumber('1 250,50')       // 1250.5
toNumber('1,000,000.99')   // 1000000.99
toNumber('1.250,50')       // 1250.5

// 2. Loại bỏ các ký tự không phải số
toNumber('abc-12.5')       // -12.5
toNumber('$1,234.56')      // 1234.56

// 3. Số và các giá trị đặc biệt
toNumber(123.45)           // 123.45
toNumber(-0)               // 0 (đã chuẩn hóa)
toNumber(Infinity)         // 0
toNumber(undefined)        // 0
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};