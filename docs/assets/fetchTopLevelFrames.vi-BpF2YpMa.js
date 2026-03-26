import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma/Functions/fetchTopLevelFrames - Lấy danh sách frame cấp cao nhất`}),`
`,(0,c.jsx)(n.h1,{id:`fetchtoplevelframes`,children:(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích giúp lấy danh sách các frame cấp cao nhất từ plugin Figma. Nó hỗ trợ lưu bộ nhớ đệm (caching) và ngăn chặn các yêu cầu trùng lặp đồng thời.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Hàm sẽ được gọi sau khi nhận được danh sách frame.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { fetchTopLevelFrames } from '@dxtmisha/figma'

fetchTopLevelFrames((frames) => {
  console.log('Các frame cấp cao nhất:', frames)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};