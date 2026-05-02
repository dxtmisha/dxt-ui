import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/applyTemplate - Áp dụng mẫu vào văn bản`}),`
`,(0,l.jsx)(n.h1,{id:`applytemplate`,children:(0,l.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,l.jsx)(n.p,{children:`Tiện ích để thay thế các thẻ đánh dấu trong văn bản bằng các giá trị từ một đối tượng hoặc mảng.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text: string`}),` — Văn bản gốc có mẫu.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`replacement: Record<string, string | number | boolean> | string[]`}),` — Đối tượng hoặc mảng có các giá trị.`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Định dạng thay thế (replacement)`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Mảng`}),`: Được sử dụng cho các thẻ vị trí như `,(0,l.jsx)(n.code,{children:`%d`}),`, `,(0,l.jsx)(n.code,{children:`%e`}),`, `,(0,l.jsx)(n.code,{children:`%f`}),`, v.v. (theo thứ tự bảng chữ cái).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Đối tượng`}),`: Được sử dụng cho các thẻ có tên trong ngoặc `,(0,l.jsx)(n.code,{children:`[key]`}),` hoặc `,(0,l.jsx)(n.code,{children:`{key}`}),`, cũng như các thẻ cặp `,(0,l.jsx)(n.code,{children:`[tag]nội dung[/tag]`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — Văn bản với các giá trị đã được thay thế.`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { applyTemplate } from '@dxtmisha/functional-basic'

// 1. Điểm đánh dấu vị trí (mảng)
applyTemplate('Xin chào, %d %e!', ['John', 'Doe']) // 'Xin chào, John Doe!'

// 2. Điểm đánh dấu có tên (đối tượng)
applyTemplate('Giá: [price] {currency}', { price: 100, currency: 'USD' }) // 'Giá: 100 USD'

// 3. Xử lý 0 và false
applyTemplate('Giá trị: [val]', { val: 0 })      // // 'Giá trị: 0'
applyTemplate('Trạng thái: [val]', { val: false }) // 'Trạng thái: false'

// 4. Bỏ qua các khóa bị thiếu
applyTemplate('Thiếu: [none]', {})              // 'Thiếu: [none]'

// 5. Các thẻ cặp với thay thế nội dung
const tags = { link: '<a href="https://google.com">[content]</a>' }
applyTemplate('Nhấp vào [link]đây[/link]', tags) // 'Nhấp vào <a href="https://google.com">đây</a>'

// 6. Macro danh sách (vượt quá giới hạn)
applyTemplate('Macros: %d, %e, %f', ['A', 'B'])  // 'Macros: A, B, '
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};