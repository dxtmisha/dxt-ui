import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getElementId - Lấy hoặc gán ID phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`getelementid`,children:(0,c.jsx)(n.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về `,(0,c.jsx)(n.code,{children:`id`}),` của một phần tử DOM được chỉ định. Nếu phần tử tồn tại nhưng không có thuộc tính `,(0,c.jsx)(n.code,{children:`id`}),`, hàm sẽ tự động tạo một mã định danh duy nhất, gán nó cho phần tử và trả về mã đó.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ngoài ra, hàm cho phép đính kèm một bộ chọn CSS vào chuỗi trả về, để bạn có thể sử dụng ngay kết quả dưới dạng một bộ chọn kết hợp (ví dụ: `,(0,c.jsx)(n.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — Phần tử DOM hoặc chuỗi chọn để lấy ID.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector?: string`}),` — Chuỗi tùy chọn sẽ được gắn vào giá trị ID trả về (chẳng hạn như các lớp giả hoặc bộ chọn phần tử con).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi ID của phần tử, hoặc một chuỗi ID mới được tạo ra nếu không tìm thấy phần tử.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

// Phần tử không có ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // Ví dụ: 'id-100000'
console.log(div.id) // 'id-100000' (được gán tự động)

// Sử dụng bộ chọn bổ sung
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-100000 > span.active'
`})}),`
`,(0,c.jsx)(n.h2,{id:`initgetelementid`,children:(0,c.jsx)(n.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo hàm để sử dụng trong môi trường SSR. Điều này là cần thiết để đảm bảo tính đồng bộ của các ID được tạo ra giữa máy chủ và máy khách.`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi sử dụng `,(0,c.jsx)(n.strong,{children:`Vue 3.5+`}),`, khuyến nghị sử dụng hàm `,(0,c.jsx)(n.code,{children:`useId()`}),` có sẵn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Khởi tạo (ví dụ: trong một plugin hoặc thành phần gốc)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};