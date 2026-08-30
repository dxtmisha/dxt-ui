import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchFrameSelection - Lấy vùng chọn hiện tại`}),`
`,(0,c.jsx)(t.h1,{id:`fetchframeselection`,children:(0,c.jsx)(t.code,{children:`fetchFrameSelection`})}),`
`,(0,c.jsx)(t.p,{children:`Một tiện ích để truy xuất và quan sát danh sách các phần tử hiện đang được người dùng chọn trong Figma. Nó cung cấp thông tin chi tiết về vùng chọn hiện tại, bao gồm tên, ID và ảnh chụp màn hình.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (value: UiFigmaFramesList) => void`}),` — Một hàm được gọi bất cứ khi nào vùng chọn được cập nhật.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { fetchFrameSelection } from '@dxtmisha/figma'

fetchFrameSelection((frames) => {
  console.log('Vùng chọn hiện tại đã được cập nhật:', frames)
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(t.p,{children:`Đại diện cho một phần tử frame được đơn giản hóa cho UI.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Uint8Array | string`}),` — Hình ảnh của frame (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(t.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một danh sách các đối tượng `,(0,c.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};