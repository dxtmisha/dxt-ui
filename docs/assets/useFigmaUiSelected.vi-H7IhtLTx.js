import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiSelected - Các frame được chọn`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(n.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để quản lý và theo dõi danh sách các frame được chọn trong Figma UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Giá trị trả về:`}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: ComputedRef<string[]>`}),` — Một danh sách reactivity chứa các ID của frame được chọn. Tự động cập nhật khi lựa chọn thay đổi trong Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — Một biến reactivity cho biết dữ liệu lựa chọn có đang được lấy từ plugin Figma hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — Một hàm trả về giá trị boolean reactivity cho biết một ID frame cụ thể có đang được chọn hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — Một hàm để cập nhật trạng thái chọn của một frame trong Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, loading, isSelected, toggleSelected } = useFigmaUiSelected()

// Kiểm tra xem một frame cụ thể có được chọn không
const frameId = '123:456'
const isFrameSelected = isSelected(frameId)

// Chuyển đổi trạng thái chọn
const handleToggle = () => {
  toggleSelected(frameId, !isFrameSelected.value)
}

// Theo dõi các ID hiện đang được chọn
console.log('Các ID hiện đang được chọn:', selected.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};