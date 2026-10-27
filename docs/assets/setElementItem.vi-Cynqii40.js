import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/setElementItem - Thay đổi giá trị phần tử theo khóa`}),`
`,(0,c.jsx)(t.h1,{id:`setelementitem`,children:(0,c.jsx)(t.code,{children:`setElementItem`})}),`
`,(0,c.jsx)(t.p,{children:`Thay đổi giá trị thuộc tính hoặc thuộc tính DOM của phần tử được tìm thấy theo bộ chọn hoặc được truyền trực tiếp. Nếu thuộc tính mục tiêu là một đối tượng (và không phải là mảng), hàm sẽ thực hiện gộp với dữ liệu mới.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm cung cấp khả năng bảo vệ mạnh mẽ chống lại `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` thông qua `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),` (bỏ qua `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), hỗ trợ biến tùy chỉnh CSS (`,(0,c.jsx)(t.code,{children:`--*`}),`) và các thuộc tính kebab-case trong đối tượng kiểu dáng, loại bỏ kiểu dáng hoặc thuộc tính khi truyền `,(0,c.jsx)(t.code,{children:`null`}),` / `,(0,c.jsx)(t.code,{children:`undefined`}),`, đồng thời tuần tự hóa các thuộc tính boolean `,(0,c.jsx)(t.code,{children:`aria-*`}),` thành chuỗi `,(0,c.jsx)(t.code,{children:`"true"`}),` / `,(0,c.jsx)(t.code,{children:`"false"`}),` (trong khi đặt `,(0,c.jsx)(t.code,{children:`""`}),` hoặc xóa thuộc tính đối với các thuộc tính boolean tiêu chuẩn).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: ElementOrString<E>`}),` — Phần tử, đối tượng `,(0,c.jsx)(t.code,{children:`window`}),` hoặc bộ chọn CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: K | string`}),` — Khóa thuộc tính, tên thuộc tính HTML hoặc khóa kiểu dáng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: V | Record<string, V> | unknown`}),` — Giá trị mới, hàm trả về giá trị, hoặc đối tượng để gộp.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Phần tử đích (đã được chỉnh sửa, hoặc giữ nguyên nếu truyền khóa gây ô nhiễm prototype), hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không tìm thấy phần tử.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Thay đổi nội dung văn bản
setElementItem('#my-div', 'textContent', 'Văn bản mới')

// Gộp kiểu dáng bao gồm kebab-case và biến CSS
setElementItem(document.body, 'style', {
  backgroundColor: 'red',
  'font-size': '16px',
  '--brand-color': '#0055ff'
})

// Xóa kiểu dáng hoặc biến CSS bằng null / undefined
setElementItem(document.body, 'style', {
  backgroundColor: null,
  '--brand-color': undefined
})

// Đặt thuộc tính (nếu thuộc tính không tồn tại trên phần tử)
setElementItem('input', 'placeholder', 'Nhập dữ liệu...')

// Đặt thuộc tính ARIA ('true' / 'false')
setElementItem('button', 'aria-expanded', true)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};