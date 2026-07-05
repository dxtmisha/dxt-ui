import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiSelected - Quản lý các frame được chọn trong UI`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(n.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(n.p,{children:`Một composable để quản lý và quan sát danh sách các định danh frame được người dùng chọn trong giao diện của plugin. Nó cung cấp các công cụ để kiểm tra trạng thái lựa chọn và chuyển đổi các lựa chọn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: ComputedRef<string[]>`}),` — Một tham chiếu được tính toán đến danh sách các ID frame được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — Một cờ phản hồi cho biết liệu danh sách lựa chọn có đang được lấy hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — Một hàm hỗ trợ trả về một giá trị logic được tính toán cho biết liệu một frame cụ thể có được chọn hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — Một hàm để thêm hoặc xóa một frame khỏi danh sách lựa chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, isSelected, toggleSelected } = useFigmaUiSelected()

// Kiểm tra xem một frame có được chọn không
const active = isSelected('1:123')

// Chuyển đổi trạng thái lựa chọn
toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};