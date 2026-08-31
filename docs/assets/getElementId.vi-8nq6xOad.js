import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getElementId - Lấy hoặc gán ID phần tử`}),`
`,(0,c.jsx)(t.h1,{id:`getelementid`,children:(0,c.jsx)(t.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về `,(0,c.jsx)(t.code,{children:`id`}),` của một phần tử DOM được chỉ định. Nếu phần tử tồn tại nhưng không có thuộc tính `,(0,c.jsx)(t.code,{children:`id`}),`, hàm sẽ tự động tạo một mã định danh duy nhất, gán nó cho phần tử và trả về mã đó.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Ngoài ra, hàm cho phép đính kèm một bộ chọn CSS vào chuỗi trả về, để bạn có thể sử dụng ngay kết quả dưới dạng một bộ chọn kết hợp (ví dụ: `,(0,c.jsx)(t.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — Phần tử DOM hoặc chuỗi chọn để lấy ID.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector?: string`}),` — Chuỗi tùy chọn sẽ được gắn vào giá trị ID trả về (chẳng hạn như các lớp giả hoặc bộ chọn phần tử con).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi ID của phần tử, hoặc một chuỗi ID mới được tạo ra nếu không tìm thấy phần tử.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h2,{id:`initgetelementid`,children:(0,c.jsx)(t.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(t.p,{children:`Khởi tạo hàm để sử dụng trong môi trường SSR. Điều này là cần thiết để đảm bảo tính đồng bộ của các ID được tạo ra giữa máy chủ và máy khách.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi sử dụng `,(0,c.jsx)(t.strong,{children:`Vue 3.5+`}),`, khuyến nghị sử dụng hàm `,(0,c.jsx)(t.code,{children:`useId()`}),` có sẵn.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Khởi tạo (ví dụ: trong một plugin hoặc thành phần gốc)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};