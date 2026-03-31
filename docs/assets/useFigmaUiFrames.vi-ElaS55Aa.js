import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiFrames - Danh sách các frame cấp cao nhất`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(n.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để quản lý và theo dõi danh sách các frame cấp cao nhất trong Figma UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Giá trị trả về:`}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — Một danh sách reactivity chứa các frame cấp cao nhất. Tự động cập nhật khi nhận được dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — Một biến reactivity cho biết các frame có đang được lấy từ plugin Figma hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// Sử dụng loading để hiển thị chỉ báo tiến trình
if (loading.value) {
  console.log('Đang lấy danh sách frame...')
}

// Sử dụng frames để hiển thị danh sách
console.log('Danh sách frame:', frames.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};