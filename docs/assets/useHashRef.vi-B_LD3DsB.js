import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useHashRef - Quản lý Hash`}),`
`,(0,c.jsx)(n.h1,{id:`usehashref`,children:(0,c.jsx)(n.code,{children:`useHashRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một composable để làm việc với hash URL (phần sau dấu `,(0,c.jsx)(n.code,{children:`#`}),`). Nó cho phép tạo các biến phản ứng tự động đồng bộ hóa với một khóa cụ thể trong hash.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên khóa trong hash.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — Giá trị mặc định nếu khóa không tồn tại trong hash.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Trả về (`,(0,c.jsx)(n.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Một tham chiếu phản ứng đến giá trị trong hash.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useHashRef } from '@dxtmisha/functional'

// Tạo tham chiếu đến giá trị 'step' trong hash URL
const step = useHashRef('step', '1')

// Cập nhật giá trị (tự động cập nhật URL: #step=2)
step.value = '2'

// Nếu người dùng thay đổi hash thủ công hoặc qua lịch sử trình duyệt,
// step.value sẽ được cập nhật tự động.
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};