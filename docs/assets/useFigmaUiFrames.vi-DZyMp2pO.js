import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiFrames - Quan sát các frame cấp cao nhất`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(t.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable để truy xuất và quan sát danh sách các frame và section cấp cao nhất từ trang Figma hiện tại. Nó sử dụng cơ chế cache toàn cục để đảm bảo tính nhất quán của dữ liệu giữa nhiều thực thể component khác nhau.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — Một tham chiếu được tính toán đến danh sách các frame cấp cao nhất (tên, ID và ảnh chụp màn hình).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — Một cờ phản hồi cho biết liệu danh sách frame có đang được lấy hay không.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// 'frames' chứa một danh sách các đối tượng frame với bản xem trước hình ảnh
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};