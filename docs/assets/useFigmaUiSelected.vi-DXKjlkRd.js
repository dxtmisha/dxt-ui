import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiSelected - Quản lý các frame được chọn trong UI`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(t.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable để quản lý và quan sát danh sách các định danh frame được người dùng chọn trong giao diện của plugin. Nó cung cấp các công cụ để kiểm tra trạng thái lựa chọn và chuyển đổi các lựa chọn.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: ComputedRef<string[]>`}),` — Một tham chiếu được tính toán đến danh sách các ID frame được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — Một cờ phản hồi cho biết liệu danh sách lựa chọn có đang được lấy hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — Một hàm hỗ trợ trả về một giá trị logic được tính toán cho biết liệu một frame cụ thể có được chọn hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — Một hàm để thêm hoặc xóa một frame khỏi danh sách lựa chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, isSelected, toggleSelected } = useFigmaUiSelected()

// Kiểm tra xem một frame có được chọn không
const active = isSelected('1:123')

// Chuyển đổi trạng thái lựa chọn
toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};