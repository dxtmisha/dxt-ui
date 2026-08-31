import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useQueryRef - Quản lý Query parameters`}),`
`,(0,c.jsx)(t.h1,{id:`usequeryref`,children:(0,c.jsx)(t.code,{children:`useQueryRef`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable để làm việc với các tham số truy vấn URL (GET parameters). Nó cho phép tạo các biến phản ứng tự động đồng bộ hóa với một khóa cụ thể trong chuỗi truy vấn.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên khóa trong query string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — Giá trị mặc định nếu khóa không tồn tại trong query string.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Trả về (`,(0,c.jsx)(t.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Một tham chiếu phản ứng đến giá trị trong các tham số truy vấn.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useQueryRef } from '@dxtmisha/functional'

// Tạo tham chiếu đến giá trị 'step' trong query parameters của URL
const step = useQueryRef('step', '1')

// Cập nhật giá trị (tự động cập nhật URL: ?step=2)
step.value = '2'

// Nếu người dùng thay đổi query parameter thủ công hoặc qua lịch sử trình duyệt,
// step.value sẽ được cập nhật tự động.
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};