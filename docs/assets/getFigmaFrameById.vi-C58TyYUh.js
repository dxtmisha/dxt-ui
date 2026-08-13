import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/getFigmaFrameById - Lấy FigmaFrame bằng ID`}),`
`,(0,c.jsx)(t.h1,{id:`getfigmaframebyid`,children:(0,c.jsx)(t.code,{children:`getFigmaFrameById`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về một đối tượng `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` theo mã định danh của nó.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Mã định danh (ID) của node Figma.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<FigmaFrame | undefined>`}),` — Một đối tượng `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không tìm thấy node.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getFigmaFrameById } from '@dxtmisha/figma-code'

async function analyzeFrame(frameId: string) {
  const frame = await getFigmaFrameById(frameId)

  if (frame) {
    const info = await frame.getMainItemsInfo()
    console.log('Các mục chính trong frame:', info)
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};