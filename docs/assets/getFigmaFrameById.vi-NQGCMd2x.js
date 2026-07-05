import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaFrameById - Lấy FigmaFrame bằng ID`}),`
`,(0,c.jsx)(n.h1,{id:`getfigmaframebyid`,children:(0,c.jsx)(n.code,{children:`getFigmaFrameById`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một đối tượng `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` theo mã định danh của nó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<FigmaFrame | undefined>`}),` — Một đối tượng `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy node.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getFigmaFrameById } from '@dxtmisha/figma-code'

async function analyzeFrame(frameId: string) {
  const frame = await getFigmaFrameById(frameId)

  if (frame) {
    const info = await frame.getMainItemsInfo()
    console.log('Các mục chính trong frame:', info)
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};